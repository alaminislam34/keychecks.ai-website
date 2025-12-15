import React from "react";

function SectionTitle({ title, color }) {
  return (
    <div>
      <h1
        className={`${color} text-2xl sm:text-3xl md:text-4xl font-semibold py-6`}
      >
        {title}
      </h1>
    </div>
  );
}

export default SectionTitle;
