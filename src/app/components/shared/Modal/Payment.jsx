"use client";

import React from "react";
import { X, CreditCard, Lock, ShieldCheck } from "lucide-react";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

function PaymentModal({ isOpen, onClose, selectedTier }) {
  if (!isOpen || !selectedTier) return null;
//   const [nam]

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    Swal.fire({
      icon: "success",
      title: "Payment Successful!",
      confirmButtonText: "Great!",
      width: "400px",
    }).then(() => {
      onClose();
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-dark">Complete Purchase</h2>
            <p className="text-gray-500">
              Secure checkout for your property report.
            </p>
          </div>

          <div className="flex items-center justify-between p-5 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Selected Plan
              </p>
              <h3 className="text-xl font-bold text-dark">
                {selectedTier.name}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary">
                {selectedTier.price}
              </p>
              <p className="text-xs text-gray-500">{selectedTier.subtitle}</p>
            </div>
          </div>

          {/* Fake Payment Form (UI Only) */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark ml-1">
                Card Details
              </label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark ml-1">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark ml-1">
                  CVC
                </label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <button className="w-full mt-4 bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:opacity-95 transform active:scale-[0.98] transition-all">
              Pay {selectedTier.price} Now
            </button>
          </form>

          {/* Footer Security Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-medium">
              Secured by Stripe | SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
