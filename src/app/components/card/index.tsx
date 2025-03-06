import React from "react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  borderColor: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon,
  borderColor,
}) => {
  return (
    <div
      className={`border-t-4 ${borderColor} bg-white shadow-lg shadow-b rounded-lg p-6 w-full md:w-[300px]`}
    >
      <h3 className="font-semibold text-lg mb-2 text-black text-left">{title}</h3>
      <p className="text-gray-500 text-left text-lg lg:text-sm">{description}</p>
      <div className="mt-4 flex justify-end">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
    </div>
  );
};

export default ToolCard;
