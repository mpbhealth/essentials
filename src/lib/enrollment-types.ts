export interface EnrollmentParams {
  firstName?: string;
  lastName?: string;
  dob?: string;
  tier?: string;
  smoker?: 'yes' | 'no';
  spouse?: 'yes' | 'no';
  children?: string;
}

export interface EmbedCheckResult {
  embeddable: boolean;
  checked: boolean;
  xFrameOptions?: string | null;
  reason?: string;
}

export interface CheckoutUrlResponse {
  checkoutUrl: string;
  params: Record<string, string>;
}

export const MPB_BRAND_COLORS = {
  blue: '#0a4e8e',
  green: '#a4cc43',
  darkBlue: '#083d6f',
  lightBlue: '#e8f4ff',
  lightGreen: '#f0f8e0',
};

export const ENROLLMENT_STEPS = [
  { id: 1, name: 'Member', description: 'Your information' },
  { id: 2, name: 'Household', description: 'Family details' },
  { id: 3, name: 'Checkout', description: 'Review & pay' },
];
