export const styles = {
  table:
    "w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden",
  header: {
    row: "border-b border-brand-light/20 bg-white/95 sticky top-0 z-10",
    cell: {
      base: "py-6 px-4 overflow-hidden text-ellipsis align-bottom",
      feature: "text-left text-gray-700 font-medium",
      plan: "text-center",
      silver: "text-slate-700 border-b-2 border-slate-400",
      gold: "text-amber-700 border-b-2 border-amber-400",
      platinum: "text-indigo-700 border-b-2 border-indigo-400",
    },
  },
  category: {
    row: "border-b border-brand-light/10 transition-colors duration-150",
    cell: "py-4 px-4",
    content: "flex items-center justify-between",
    title: "font-semibold text-gray-800",
    icon: "h-5 w-5 text-gray-400 transition-transform duration-200 ease-in-out",
  },
  item: {
    cell: {
      base: "py-4 px-4 overflow-hidden text-ellipsis",
      feature: "text-gray-600",
      value: "text-center",
      silver: "text-slate-600 bg-slate-50",
      gold: "text-amber-600 bg-amber-50",
      platinum: "text-indigo-600 bg-indigo-50",
    },
    check: {
      silver: "text-slate-500",
      gold: "text-amber-500",
      platinum: "text-indigo-500",
    },
  },
};
