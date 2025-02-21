"use client";

import type React from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Automation",
    description:
      "Leverage cutting-edge artificial intelligence to automate your workflows",
    image:
      "https://sjc.microlink.io/u-l5h-JBSfODwSpt8f6rDEW2AJbHnedrcBr-JftU4zIBm6v70lkLWfBjZMBXuz7EI3y0KUWVZWWhn-B8XlJfbw.jpeg",
    color: "bg-purple-500",
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful analytics dashboard",
    image: "/placeholder.svg",
    color: "bg-blue-500",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security to protect your sensitive data",
    image: "/placeholder.svg",
    color: "bg-green-500",
  },
];

export function FeaturesCarousel() {
  const [activeCard, setActiveCard] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = event.clientX - rect.left - width / 2;
    const mouseYFromCenter = event.clientY - rect.top - height / 2;
    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-sm perspective-1000"
              style={{
                rotateX: index === activeCard ? rotateX : 0,
                rotateY: index === activeCard ? rotateY : 0,
              }}
              onMouseMove={index === activeCard ? handleMouseMove : undefined}
              onMouseLeave={index === activeCard ? handleMouseLeave : undefined}
            >
              <motion.div
                className={`relative h-96 w-full rounded-xl p-8 ${feature.color}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: index === activeCard ? 1 : 0.9,
                  opacity: index === activeCard ? 1 : 0.3,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90">{feature.description}</p>
                  <div className="absolute bottom-0 right-0 w-48 h-48">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="rounded-lg opacity-80 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeCard ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
