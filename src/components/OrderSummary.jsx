import { Minus, Plus, ShoppingBag } from 'lucide-react';

export default function OrderSummary({ cart, subtotal, deliveryFee, total, onUpdateQuantity, onPlaceOrder }) {
  return (
    <aside className="rounded-[2rem] bg-slate-900 p-5 text-white shadow-card md:sticky md:top-6">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-white/10 p-3">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Order summary</h2>
          <p className="text-sm text-white/70">Simple, clear, and ready to send.</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white/5 p-4 text-base text-white/75">
            Choose a meal to start your order.
          </div>
        ) : (
          cart.map((entry) => (
            <div key={entry.id} className="rounded-2xl bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{entry.name}</h3>
                  <p className="mt-1 text-sm text-white/70">${entry.price.toFixed(2)} each</p>
                </div>
                <p className="font-semibold">${(entry.price * entry.quantity).toFixed(2)}</p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(entry.id, entry.quantity - 1)}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label={`Decrease ${entry.name}`}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-base font-semibold">{entry.quantity}</span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(entry.id, entry.quantity + 1)}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label={`Increase ${entry.name}`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-base">
        <div className="flex items-center justify-between text-white/75">
          <span>Meals</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-white/75">
          <span>Delivery</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onPlaceOrder}
        disabled={cart.length === 0}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-cream-100 px-6 py-3 text-base font-semibold text-cocoa-700 transition-all duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Place order for Mom
      </button>
    </aside>
  );
}
