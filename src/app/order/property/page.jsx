"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import OrderSummarySidebar from "../components/OrderSummarySidebar";
import { ORDER_STORAGE_KEY } from "../components/orderTiers";

function PropertyPage() {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    propertyAddress: "",
    notes: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(ORDER_STORAGE_KEY);
    if (!saved) {
      router.replace("/order");
      return;
    }

    const parsed = JSON.parse(saved);
    if (!parsed.tierId) {
      router.replace("/order");
      return;
    }

    setOrder(parsed);
    setForm({
      fullName: parsed.fullName || "",
      email: parsed.email || "",
      propertyAddress: parsed.propertyAddress || "",
      notes: parsed.notes || "",
    });
  }, [router]);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const next = {
      ...order,
      ...form,
    };

    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(next));
    router.push("/order/pay");
  };

  if (!order) return null;

  return (
    <section className="bg-primary/2 py-14 md:py-20 min-h-[85vh]">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary">Step 2 of 3</p>
            <h1 className="text-3xl md:text-4xl text-dark mt-2">Property Details</h1>
            <p className="text-gray-600 mt-2">
              Add your details so we can prepare your report accurately.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl border border-primary/10 p-6 md:p-8 space-y-5 shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium text-dark mb-2">Full name</label>
              <input
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">Property address</label>
              <input
                name="propertyAddress"
                type="text"
                value={form.propertyAddress}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="42 Maple Avenue, Richmond, TW9 4BH"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">Notes</label>
              <textarea
                name="notes"
                rows={4}
                value={form.notes}
                onChange={onChange}
                className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Anything specific you want us to focus on?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-xl py-3 px-4 font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90"
            >
              Continue to Payment <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="lg:col-span-4">
          <OrderSummarySidebar order={{ ...order, ...form }} />
        </div>
      </div>
    </section>
  );
}

export default PropertyPage;
