interface EATBlockProps {
  author?: string;
  reviewer?: string;
  reviewerCredentials?: string;
  lastReviewed?: string;
  published?: string;
}

export function EATBlock({ author, reviewer, reviewerCredentials, lastReviewed, published }: EATBlockProps) {
  return (
    <aside className="border border-slate-200 rounded-lg p-6 bg-slate-50 mt-12" aria-label="Content information">
      <h3 className="text-lg font-semibold mb-4 text-slate-900">Content Information</h3>
      <div className="space-y-3 text-sm text-slate-700">
        {author && (
          <div>
            <span className="font-medium">Written by:</span> {author}
          </div>
        )}
        {reviewer && (
          <div>
            <span className="font-medium">Medically reviewed by:</span> {reviewer}
            {reviewerCredentials && <span className="text-slate-600">, {reviewerCredentials}</span>}
          </div>
        )}
        {lastReviewed && (
          <div>
            <span className="font-medium">Last reviewed:</span> {lastReviewed}
          </div>
        )}
        {published && (
          <div>
            <span className="font-medium">Published:</span> {published}
          </div>
        )}
      </div>
    </aside>
  );
}
