import React from "react";
import { ComparisonCategory } from "./comparison/ComparisonCategory";
import { styles } from "./comparison/styles";
import { comparisonData } from "./data/comparisonData";

export const PlanComparison: React.FC = () => {
  return (
    <div
      id="compare"
      className="py-24 bg-gradient-to-b from-brand-light/10 to-brand-lightest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best suits your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="overflow-hidden border border-brand-light/30 rounded-2xl shadow-md min-w-[768px] lg:min-w-full">
            <table className={`${styles.table} w-full table-fixed`}>
              <colgroup>
                <col className="w-[40%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
              </colgroup>
              <thead>
                <tr className={styles.header.row}>
                  <th
                    className={`${styles.header.cell.base} ${styles.header.cell.feature} border-r border-brand-light/20`}
                  >
                    Features
                  </th>
                  <th
                    className={`${styles.header.cell.base} ${styles.header.cell.plan} ${styles.header.cell.silver} border-r border-brand-light/20`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">Silver</span>
                    </div>
                  </th>
                  <th
                    className={`${styles.header.cell.base} ${styles.header.cell.plan} ${styles.header.cell.gold} border-r border-brand-light/20`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">Gold</span>
                    </div>
                  </th>
                  <th
                    className={`${styles.header.cell.base} ${styles.header.cell.plan} ${styles.header.cell.platinum}`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">Platinum</span>
                    </div>
                  </th>
                </tr>
              </thead>
              {comparisonData.map((category) => (
                <ComparisonCategory
                  key={category.category}
                  category={category}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
