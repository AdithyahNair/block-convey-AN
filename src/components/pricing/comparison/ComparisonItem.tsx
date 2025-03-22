import React from "react";
import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import type { ComparisonItem as ItemType } from "../types";

interface ComparisonItemProps {
  item: ItemType;
}

export const ComparisonItem: React.FC<ComparisonItemProps> = ({ item }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="border-b border-gray-100 last:border-0 bg-white"
    >
      <td className="py-4 px-6 text-gray-600">{item.name}</td>
      <td className="py-4 px-6 text-center">
        {item.silver ? (
          <span className="text-gray-600">{item.silver}</span>
        ) : (
          <Minus className="h-5 w-5 text-gray-400 mx-auto" />
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {item.gold ? (
          <span className="text-gray-600">{item.gold}</span>
        ) : (
          <Minus className="h-5 w-5 text-gray-400 mx-auto" />
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {item.platinum ? (
          <span className="text-gray-600">{item.platinum}</span>
        ) : (
          <Minus className="h-5 w-5 text-gray-400 mx-auto" />
        )}
      </td>
    </motion.tr>
  );
};
