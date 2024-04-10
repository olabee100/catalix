import React from 'react';

const QuotationCard = ({ title, quotation, isGreenFlag = true }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-5">
      <div className="flex items-center justify-end">
        {isGreenFlag ? (
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        ) : (
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        )}
      </div>

      <span className="text-lg font-bold">{title} </span>

      <div className="space-y-1 mt-2">
        {quotation?.map((q, id) => (
          <div className="flex items-center justify-between" key={id}>
            <span className="text-md">{q.name}</span>
            <span className="font-bold text-md">
              {q.value} {q.isPercentage && "%"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { QuotationCard};
