"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "./data";
import Link from "next/link";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple,{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Transparent
          </span>{" "}
          Pricing
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`relative group rounded-2xl ${plan.highlighted
              ? "bg-gradient-to-b from-purple-600 to-pink-600"
              : "bg-white/5"
              } p-px`}
          >
            <div
              className={`rounded-2xl p-6 h-full ${plan.highlighted ? "bg-black/90" : "bg-transparent"
                }`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-3xl font-bold">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing">
                  <Button
                    className={`w-full ${plan.highlighted
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}