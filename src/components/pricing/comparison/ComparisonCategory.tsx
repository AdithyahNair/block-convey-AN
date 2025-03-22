import React from "react";
import { ChevronDown } from "lucide-react";
import { ComparisonItem } from "./ComparisonItem";
import { styles } from "./styles";
import type { ComparisonCategory as CategoryType } from "../types";

interface ComparisonCategoryProps {
  category: CategoryType;
}

export const ComparisonCategory: React.FC<ComparisonCategoryProps> = ({
  category,
}) => {
  // Start expanded by default
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <tbody className="border-b border-brand-light/20 last:border-0">
      <tr
        className={`${styles.category.row} bg-gray-50 hover:bg-gray-100 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td colSpan={4} className={`${styles.category.cell} py-4`}>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">
              {category.category}
            </span>
            <ChevronDown
              className={`${styles.category.icon} ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </td>
      </tr>
      {isExpanded &&
        category.items.map((item) => (
          <ComparisonItem key={item.name} item={item} />
        ))}
    </tbody>
  );
};
