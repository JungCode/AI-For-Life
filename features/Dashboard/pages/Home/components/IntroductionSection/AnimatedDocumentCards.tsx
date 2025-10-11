"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const documents = [
  {
    id: 1,
    title: "Quality Policy",
    content: [
      "Our organization maintains a structured quality system to ensure consistent excellence across all operations.",
      "We emphasize proactive identification and resolution of issues to foster continuous improvement.",
    ],
  },
  {
    id: 2,
    title: "Security Policy",
    content: [
      "All data assets are protected through multilayered information security protocols and encryption methods.",
      "Access control policies define strict authentication and authorization procedures for every system user.",
    ],
  },
  {
    id: 3,
    title: "Privacy Policy",
    content: [
      "We are committed to protecting personal information through transparent and responsible data handling practices.",
      "All data collection and retention activities comply with GDPR and applicable privacy regulations.",
    ],
  },
  {
    id: 4,
    title: "Risk Management",
    content: [
      "A comprehensive framework identifies, assesses, and prioritizes potential risks across all departments.",
      "We employ both preventive and corrective strategies to minimize operational and strategic disruptions.",
    ],
  },
  {
    id: 5,
    title: "Training Policy",
    content: [
      "All employees receive structured learning programs tailored to their job roles and responsibilities.",
      "Continuous training ensures competency growth and compliance with the company’s quality objectives.",
    ],
  },
];

const AnimatedDocumentCards = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % documents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = documents[index];
  const next = documents[(index + 1) % documents.length];

  return (
    <div className="relative w-xl h-[350px] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {/* Card focus */}
        <motion.div
          key={current.id}
          initial={{ y: 100, opacity: 0.6, scale: 0.9 }}
          animate={{ y: -50, opacity: 1, scale: 1.05 }}
          exit={{ y: -170, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full flex justify-center"
        >
          <Card className="w-[95%] h-[170px] p-7 shadow-md bg-card">
            {/* animate nội dung */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-2xl mb-2 text-chart-1">
                {current.title}
              </h3>
              {current.content.map((line, i) => (
                <div key={i} className="text-sm text-muted-foreground">
                  - {line}
                </div>
              ))}
            </motion.div>
          </Card>
        </motion.div>

        {/* Card dưới (skeleton) */}
        <motion.div
          key={`next-${next.id}`}
          initial={{ y: 300, opacity: 0.5, scale: 0.9 }}
          animate={{ y: 140, opacity: 0.6, scale: 0.95 }}
          exit={{ y: -100, opacity: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full flex justify-center"
        >
          <Card className="w-[90%] h-[150px] bg-muted p-4">
            <div className="space-y-2">
              <div className="h-5 mb-3 bg-muted-foreground/30 rounded w-1/2" />
              <div className="h-3 bg-muted-foreground/20 rounded w-full" />
              <div className="h-3 bg-muted-foreground/20 rounded w-full" />
              <div className="h-3 bg-muted-foreground/20 rounded w-full" />
              <div className="h-3 bg-muted-foreground/20 rounded w-full" />
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { AnimatedDocumentCards };
