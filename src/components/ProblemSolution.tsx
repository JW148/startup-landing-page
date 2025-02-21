"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const problems = [
  "Inefficient processes costing businesses millions",
  "Lack of real-time data leading to poor decisions",
  "Increasing customer churn due to subpar experiences",
];

const solutions = [
  "AI-powered automation reducing operational costs by 50%",
  "Real-time analytics dashboard for informed decision-making",
  "Personalized customer journeys increasing retention by 40%",
];

export function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="problem-solution"
      className="py-16 bg-gradient-to-b from-background to-muted"
    >
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          The Problem & Our Solution
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
              <AlertTriangle className="mr-2" />
              The Problem
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  className={`flex items-start p-4 rounded-md transition-colors ${
                    index === activeIndex ? "bg-primary/20" : ""
                  }`}
                  onHoverStart={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AlertTriangle className="mr-2 mt-1 flex-shrink-0 text-primary" />
                  <span>{problem}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
              <CheckCircle className="mr-2" />
              Our Solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  className={`flex items-start p-4 rounded-md transition-colors ${
                    index === activeIndex ? "bg-primary/20" : ""
                  }`}
                  onHoverStart={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0 text-primary" />
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#product"
              className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors flex items-center"
            >
              See How It Works
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
