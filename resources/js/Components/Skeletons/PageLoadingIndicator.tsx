import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export default function PageLoadingIndicator() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const removeStart = router.on("start", () => setLoading(true));
    const removeFinish = router.on("finish", () => setLoading(false));

    return () => {
      removeStart();
      removeFinish();
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Shimmer Progress Bar */}
      <div className="h-1 w-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-rose-500 animate-pulse w-full origin-left transform duration-300" />
      </div>
    </div>
  );
}
