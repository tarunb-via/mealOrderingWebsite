import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Soup, UtensilsCrossed } from 'lucide-react';
import Header from './components/Header';
import MenuItemCard from './components/MenuItemCard';
import OrderSummary from './components/OrderSummary';
import RestaurantCard from './components/RestaurantCard';

const restaurants = [
  {
    id: 'sunny-kitchen',
    name: 'Sunny Kitchen',
    cuisine: 'Homestyle comfort food',
    distance: '1.2 mi',
    rating: '4.8',
    deliveryTime: '25-35 min',
    deliveryFee: '$3.99 delivery',
    description: 'Tender roasted chicken, fresh vegetables, and warm soups that feel like home.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    menu: [
      { id: 'sk-1', name: 'Roast Chicken Plate', description: 'Herb-roasted chicken with mashed potatoes and green beans.', price: 14.5, badge: 'Best seller' },
      { id: 'sk-2', name: 'Turkey & Rice Soup', description: 'A soothing bowl with carrots, celery, and fluffy rice.', price: 9.25, badge: 'Warm favorite' },
      { id: 'sk-3', name: 'Apple Crumble', description: 'Soft baked apples with cinnamon oat topping.', price: 6.5 },
    ],
  },
  {
    id: 'garden-bowl',
    name: 'Garden Bowl Cafe',
    cuisine: 'Fresh salads & grain bowls',
    distance: '2.0 mi',
    rating: '4.7',
    deliveryTime: '20-30 min',
    deliveryFee: '$2.99 delivery',
    description: 'Colorful bowls, crisp salads, and light meals with bright flavors.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    menu: [
      { id: 'gb-1', name: 'Lemon Chicken Bowl', description: 'Brown rice, grilled chicken, cucumbers, and lemon dressing.', price: 13.75, badge: 'Fresh pick' },
      { id: 'gb-2', name: 'Mediterranean Salad', description: 'Romaine, feta, olives, tomatoes, and chickpeas.', price: 11.5 },
      { id: 'gb-3', name: 'Berry Yogurt Parfait', description: 'Greek yogurt layered with berries and granola.', price: 5.95 },
    ],
  },
  {
    id: 'pasta-parlor',
    name: 'Pasta Parlor',
    cuisine: 'Italian classics',
    distance: '2.8 mi',
    rating: '4.9',
    deliveryTime: '30-40 min',
    deliveryFee: '$4.49 delivery',
    description: 'Classic pasta dishes, garlic bread, and desserts for a cozy evening in.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    menu: [
      { id: 'pp-1', name: 'Baked Lasagna', description: 'Layers of pasta, ricotta, beef ragu, and mozzarella.', price: 15.95, badge: 'Family favorite' },
      { id: 'pp-2', name: 'Chicken Alfredo', description: 'Fettuccine in creamy parmesan sauce with grilled chicken.', price: 16.5 },
      { id: 'pp-3', name: 'Mini Tiramisu', description: 'Coffee-soaked cake with mascarpone cream.', price: 6.75 },
    ],
  },
];

export default function App() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedRestaurantId);
  const deliveryFee = Number.parseFloat(selectedRestaurant.deliveryFee.replace(/[^\d.]/g, ''));

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const total = subtotal + (cart.length ? deliveryFee : 0);

  const handleSelectRestaurant = (restaurantId) => {
    setSelectedRestaurantId(restaurantId);
    setCart([]);
    setOrderPlaced(false);
  };

  const handleAddToCart = (item) => {
    setOrderPlaced(false);
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, nextQuantity) => {
    setCart((current) =>
      current
        .map((entry) => (entry.id === itemId ? { ...entry, quantity: nextQuantity } : entry))
        .filter((entry) => entry.quantity > 0)
    );
  };

  const handlePlaceOrder = () => {
    if (!cart.length) return;
    setOrderPlaced(true);
  };

  return (
    <main className="min-h-screen bg-cream-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        <Header />

        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-sage-100 p-3 text-sage-700">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nearby restaurants</h2>
                  <p className="text-base text-slate-600">Choose the place that sounds best tonight.</p>
                </div>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.35 }}
                  >
                    <RestaurantCard
                      restaurant={restaurant}
                      selected={restaurant.id === selectedRestaurantId}
                      onSelect={handleSelectRestaurant}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-[2rem] bg-white p-5 shadow-card md:p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-berry-50 p-3 text-berry-700">
                    <Soup className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">{selectedRestaurant.name} menu</h2>
                    <p className="text-base text-slate-600">Comforting picks chosen for easy ordering.</p>
                  </div>
                </div>
                <div className="rounded-full bg-cream-100 px-4 py-2 text-sm font-semibold text-cocoa-700">
                  {selectedRestaurant.deliveryTime}
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {selectedRestaurant.menu.map((item) => (
                  <MenuItemCard key={item.id} item={item} onAdd={handleAddToCart} />
                ))}
              </div>
            </motion.section>

            {orderPlaced ? (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[2rem] bg-sage-700 p-5 text-white shadow-card"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6" />
                  <div>
                    <h2 className="text-xl font-semibold">Order sent!</h2>
                    <p className="mt-2 text-base leading-relaxed text-white/85">
                      Your order from {selectedRestaurant.name} is on the way. Estimated arrival: {selectedRestaurant.deliveryTime}.
                    </p>
                  </div>
                </div>
              </motion.section>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <OrderSummary
              cart={cart}
              subtotal={subtotal}
              deliveryFee={cart.length ? deliveryFee : 0}
              total={total}
              onUpdateQuantity={handleUpdateQuantity}
              onPlaceOrder={handlePlaceOrder}
            />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
