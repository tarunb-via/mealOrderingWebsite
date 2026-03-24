import clsx from 'clsx';
import { Clock3, Star, Truck } from 'lucide-react';

export default function RestaurantCard({ restaurant, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(restaurant.id)}
      className={clsx(
        'min-h-[44px] w-full rounded-[1.75rem] p-0 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-card',
        selected ? 'ring-4 ring-berry-100' : ''
      )}
    >
      <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-card">
        <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.image})` }} />
        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{restaurant.name}</h3>
              <p className="mt-1 text-base text-slate-600">{restaurant.cuisine}</p>
            </div>
            <span className="rounded-full bg-cream-100 px-3 py-1 text-sm font-semibold text-cocoa-700">
              {restaurant.distance}
            </span>
          </div>
          <p className="text-base leading-relaxed text-slate-600">{restaurant.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-2 text-sage-700">
              <Star className="h-4 w-4 fill-current" />
              {restaurant.rating}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-3 py-2 text-cocoa-700">
              <Clock3 className="h-4 w-4" />
              {restaurant.deliveryTime}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-berry-50 px-3 py-2 text-berry-700">
              <Truck className="h-4 w-4" />
              {restaurant.deliveryFee}
            </span>
          </div>
        </div>
      </article>
    </button>
  );
}
