export default function ProductCardSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-100 p-4 animate-pulse space-y-4"
          >
            <div className="w-full aspect-square bg-slate-200 rounded-lg" />
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="h-3 w-16 bg-slate-200 rounded" />
                <div className="h-3 w-12 bg-slate-200 rounded" />
              </div>
              <div className="h-4 w-3/4 bg-slate-200 rounded" />
              <div className="h-4 w-1/2 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
    </div>
  );
}
