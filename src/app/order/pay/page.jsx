"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import OrderSummarySidebar from "../components/OrderSummarySidebar";
import { ORDER_STORAGE_KEY } from "../components/orderTiers";

function PayPage() {
  const router = useRouter();
  const [order, setOrder] = useState(null);

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

    if (!parsed.fullName || !parsed.email || !parsed.propertyAddress) {
      router.replace("/order/property");
      return;
    }

    setOrder(parsed);
  }, [router]);

  if (!order) return null;

  return (
    <section className="bg-primary/2 py-14 md:py-20 min-h-[85vh]">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary">Step 3 of 3</p>
            <h1 className="text-3xl md:text-4xl text-dark mt-2">Stripe Payment</h1>
            <p className="text-gray-600 mt-2">
              Complete your secure payment to start your KeyChecks order.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-primary/10 p-6 md:p-8 shadow-sm space-y-6">
            <div className="rounded-xl border border-primary/15 p-4 bg-background">
              <div className="flex items-center gap-2 text-dark mb-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <p className="font-semibold">Stripe Checkout</p>
              </div>
              <p className="text-sm text-gray-600">
                This page is ready for Stripe integration. Connect your Stripe
                session API to process live payments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Cardholder name</label>
                <input
                  type="text"
                  defaultValue={order.fullName}
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Billing email</label>
                <input
                  type="email"
                  defaultValue={order.email}
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-dark mb-2">Card details</label>
                <div className="w-full rounded-xl border border-primary/15 px-4 py-3 text-gray-500">
                  •••• •••• •••• ••••
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-white rounded-xl py-3 px-4 font-semibold hover:opacity-90 inline-flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Pay {order.tierPrice} with Stripe
            </button>

            <p className="text-xs text-gray-500 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <OrderSummarySidebar order={order} />
        </div>
      </div>
    </section>
  );
}

export default PayPage;
