import { Plus } from 'lucide-react';

export default function MenuItemCard({ item, onAdd }) {
  return (
    <article className="rounded-[1.5rem] bg-white p-5 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
            {item.badge ? (
              <span className="rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
                {item.badge}
              </span>
            ) : null}
          </div>
          <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
          <p className="text-lg font-semibold text-cocoa-700">${item.price.toFixed(2)}</p>
        </div>
        <button
          type="button"
          onClick={() => onAdd(item)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-berry-500 text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          aria-label={`Add ${item.name}`}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
}
