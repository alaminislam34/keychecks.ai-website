import { CheckCircle2, ShieldCheck } from "lucide-react";

function OrderSummarySidebar({ order }) {
  return (
    <aside className="space-y-5">
      <div className="bg-primary text-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        {order?.tierName ? (
          <div className="space-y-3">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm text-white/80">Selected Tier</p>
              <p className="text-base font-semibold">{order.tierName}</p>
              <p className="text-2xl font-bold mt-2">{order.tierPrice}</p>
            </div>

            {order.propertyAddress ? (
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm text-white/80">Property</p>
                <p className="text-sm font-medium">{order.propertyAddress}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <p className="text-sm text-white/80">No tier selected yet.</p>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-primary/10 shadow-sm">
        <h4 className="text-base font-semibold text-dark mb-3">Included</h4>
        <ul className="space-y-2 text-sm text-dark">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" /> Same-day delivery
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" /> Secure checkout
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" /> Expert-reviewed report
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default OrderSummarySidebar;
