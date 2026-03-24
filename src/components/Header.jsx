import { Heart, MapPin, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-berry-600 via-berry-500 to-cocoa-500 px-5 py-8 text-white shadow-card md:px-8 md:py-10">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-12 left-6 h-28 w-28 rounded-full bg-cream-100/20" />
      <div className="relative space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
          <Heart className="h-4 w-4 fill-current" />
          Made for Mom's easy dinners
        </div>
        <div className="space-y-3">
          <h1 className="max-w-lg text-3xl font-extrabold tracking-tight md:text-5xl">
            Mom's Meal Table
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Pick a nearby favorite, choose a comforting meal, and place an order in just a few taps.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/90 md:flex-row md:flex-wrap">
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            <MapPin className="h-4 w-4" />
            Delivery around Maple Grove
          </div>
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            <Phone className="h-4 w-4" />
            Need help? Call family support
          </div>
        </div>
      </div>
    </header>
  );
}
