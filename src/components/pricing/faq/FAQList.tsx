import React from "react";
import { FAQItem } from "./FAQItem";
import { FAQ } from "../types";

interface FAQListProps {
  items: FAQ[];
}

export const FAQList: React.FC<FAQListProps> = ({ items }) => {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl bg-white p-8">
      {items.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
