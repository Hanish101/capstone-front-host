import React from "react";

export default function CompanyCardElement({ companyData, onClick}) {
  const date = new Date(companyData.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const truncateString = (str) => {
        if (str.length <= 100) {
            return str;
        }
        return str.slice(0, 100) + '...';
    };
  return (
    <div className="w-96 h-72 border border-lightgray bg-white rounded-lg shadow-md overflow-hidden" onClick={onClick}>
      <div className="border-b border-lightgray px-4 py-2 text-sm font-bold">{formattedDate}</div>
      <div className="flex items-center px-4 py-2">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
          <img src={companyData.logoUrl} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-black">{companyData.company_name}</div>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Location:</span> {companyData.location}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Industry:</span> {companyData.industry}
          </div>
        </div>
      </div>
      <div className="p-4 text-gray-700">{truncateString(companyData.description)}</div>
    </div>
  );
};