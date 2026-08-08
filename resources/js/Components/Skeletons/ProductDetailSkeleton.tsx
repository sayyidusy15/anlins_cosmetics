export default function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="h-4 w-32 bg-slate-200 rounded mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-2xl border border-slate-100">
        <div className="w-full aspect-square bg-slate-200 rounded-xl" />

        <div className="space-y-6">
          <div className="h-4 w-20 bg-slate-200 rounded-full" />
          <div className="h-8 w-3/4 bg-slate-200 rounded" />
          <div className="h-7 w-32 bg-slate-200 rounded" />

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="h-4 w-24 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
          </div>

          <div className="pt-6 space-y-4">
            <div className="h-14 w-full bg-slate-200 rounded-xl" />
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-slate-200 rounded-xl" />
              <div className="h-12 flex-1 bg-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
