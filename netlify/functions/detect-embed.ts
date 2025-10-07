import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const vendorUrl = process.env.VENDOR_CHECKOUT_BASE || 'https://www.1enrollment.com/order/checkout.cfm';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300);

    try {
      const response = await fetch(vendorUrl, {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const xFrameOptions = response.headers.get('x-frame-options');
      const csp = response.headers.get('content-security-policy');

      const embeddable = !xFrameOptions &&
                        (!csp || !csp.toLowerCase().includes('frame-ancestors'));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          embeddable,
          checked: true,
          xFrameOptions: xFrameOptions || null,
        }),
      };
    } catch (fetchError) {
      clearTimeout(timeoutId);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          embeddable: false,
          checked: false,
          reason: 'timeout_or_error',
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        embeddable: false,
        checked: false,
        reason: 'server_error',
      }),
    };
  }
};
