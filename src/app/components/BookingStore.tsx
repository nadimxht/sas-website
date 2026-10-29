"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, CreditCard } from "lucide-react";

// --- PRODUCT DATA ---
const PRODUCTS = [
  { id: "sas-01", name: "Official Gold Hoodie", price: 120, category: "Apparel", tag: "Limited", image: "/store/bag.jpeg" },
  { id: "sas-02", name: "Workshop Pass", price: 85, category: "Experience", tag: "Masterclass", image: "/store/bag.jpeg" },
  { id: "sas-03", name: "SAS Signature Tote", price: 45, category: "Accessories", tag: "Eco", image: "/store/bag.jpeg" },
  { id: "sas-04", name: "Vocal Training Kit", price: 150, category: "Training", tag: "New", image: "/store/bag.jpeg" },
];

export default function BookingStore() {
  const [cart, setCart] = useState<{id: string, qty: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) return prev.map(item => item.id === id ? {...item, qty: item.qty + 1} : item);
      return [...prev, { id, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartTotal = cart.reduce((acc, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return acc + (product?.price || 0) * item.qty;
  }, 0);

  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl italic text-white"
          >
            The SAS <span className="text-sas-gold font-normal not-italic">Boutique</span>
          </motion.h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">Exclusive Theatre Essentials</p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:border-sas-gold/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] w-full rounded-2xl mb-6 overflow-hidden border border-white/5 relative bg-black/40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-sas-burgundy text-sas-gold text-[9px] font-mono rounded-full uppercase tracking-tighter">
                  {product.tag}
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-[9px] text-sas-gold uppercase tracking-widest">{product.category}</p>
                <h3 className="font-serif text-xl text-white italic">{product.name}</h3>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-light text-white">{product.price} TND</span>
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="p-3 bg-sas-gold text-black rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BACKSTAGE CHECKOUT PANEL --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[600]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#121212] border-l border-white/10 z-[700] p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="font-serif text-3xl italic text-white">Your <span className="text-sas-gold">Playbill</span></h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform text-white/40 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-grow overflow-y-auto space-y-6">
                {cart.length === 0 ? (
                  <p className="text-white/20 font-mono text-center pt-20">Your bag is empty.</p>
                ) : (
                  cart.map((item) => {
                    const p = PRODUCTS.find(prod => prod.id === item.id);
                    return (
                      <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-sas-gold">
                          <ShoppingBag size={20} />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-white font-serif italic text-lg leading-tight">{p?.name}</h4>
                          <p className="text-sas-gold text-sm">{p?.price} TND</p>
                        </div>
                        <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/10">
                           <button className="text-white/40 hover:text-sas-gold"><Minus size={14}/></button>
                           <span className="text-white text-sm font-mono">{item.qty}</span>
                           <button className="text-white/40 hover:text-sas-gold"><Plus size={14}/></button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Checkout Footer */}
              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-xs uppercase text-white/40 tracking-widest">Grand Total</span>
                  <span className="text-4xl font-light text-white tracking-tighter">{cartTotal} TND</span>
                </div>
                <button className="w-full py-5 bg-sas-burgundy hover:bg-sas-burgundy/80 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(99,18,39,0.3)] transition-all group">
                   <CreditCard size={20} className="group-hover:rotate-12 transition-transform"/>
                   Confirm Purchase
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}