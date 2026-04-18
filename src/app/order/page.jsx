"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import OrderSummarySidebar from "./components/OrderSummarySidebar";
import { ORDER_STORAGE_KEY, orderTiers } from "./components/orderTiers";

function OrderPage() {
  const router = useRouter();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(ORDER_STORAGE_KEY);
    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []);

  const selectTier = (tier) => {
    const next = {
      ...order,
      tierId: tier.id,
      tierName: tier.name,
      tierPrice: tier.price,
      tierCadence: tier.cadence,
    };

    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(next));
    setOrder(next);
    router.push("/order/property");
  };

  return (
    <section className="bg-primary/2 py-14 md:py-20 min-h-[85vh]">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary">Step 1 of 3</p>
            <h1 className="text-3xl md:text-4xl text-dark mt-2">Select Your Tier</h1>
            <p className="text-gray-600 mt-2">
              Choose the pricing option that best fits your property search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {orderTiers.map((tier) => {
              const active = order?.tierId === tier.id;
              return (
                <article
                  key={tier.id}
                  className={`rounded-2xl bg-white p-6 border transition-all shadow-sm ${
                    active ? "border-primary ring-2 ring-primary/15" : "border-primary/10"
                  } ${tier.id === "smartcheck-title" ? "md:scale-[1.02]" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-xl text-dark">{tier.name}</h2>
                      <p className="text-sm text-gray-500">{tier.cadence}</p>
                    </div>
                    {tier.id === "smartcheck-title" ? (
                      <span className="text-xs font-semibold py-1 px-3 rounded-full bg-primary text-white">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <p className="text-3xl font-bold text-primary mb-3">{tier.price}</p>
                  <p className="text-sm text-gray-600 mb-5">{tier.description}</p>

                  <button
                    onClick={() => selectTier(tier)}
                    className={`w-full rounded-xl py-3 px-4 font-semibold inline-flex items-center justify-center gap-2 ${
                      active
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {active ? (
                      <>
                        <Check className="w-4 h-4" /> Selected
                      </>
                    ) : (
                      <>
                        Choose Tier <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4">
          <OrderSummarySidebar order={order} />
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
