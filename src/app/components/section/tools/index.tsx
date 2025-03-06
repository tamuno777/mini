import React from "react";
import ToolCard from "../../card";

export default function ToolsSection() {
  return (
    <section className="text-center py-16 px-4 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-[200] text-gray-500">
        Reliable, efficient delivery
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
        Powered by Technology
      </h3>
      <p className="text-gray-600 max-w-lg mx-auto mt-4">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>

      <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-10 p-4 justify-center items-center place-items-center">
        <div>
          {" "}
          <ToolCard
            title={"Supervisor"}
            description={"Monitors activity to identify project roadblocks"}
            icon={"/images/icon-supervisor.svg"}
            borderColor={"border-t-teal-400"}
          />
        </div>
        <div className="gap-6 flex flex-col">
          {" "}
          <ToolCard
            title={"Team Builder"}
            description={
              "Scans our talent network to create the optimal team for your project"
            }
            icon={"/images/icon-team-builder.svg"}
            borderColor={"border-t-red-400"}
          />
          <ToolCard
            title={"Karma"}
            description={"Regularly evaluates our talent to ensure quality"}
            icon={"/images/icon-karma.svg"}
            borderColor={"border-t-orange-400"}
          />
        </div>
        <div>
          {" "}
          <ToolCard
            title={"Calculator"}
            description={
              "Uses data from past projects to provide better delivery estimates"
            }
            icon={"/images/icon-calculator.svg"}
            borderColor={"border-t-blue-400"}
          />
        </div>
      </div>
    </section>
  );
}
