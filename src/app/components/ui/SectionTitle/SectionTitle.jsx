import React from "react";

function SectionTitle({ title, color }) {
  return (
    <div>
      <h1 className={`${color} text-3xl md:text-4xl font-bold py-6`}>
        {title}
      </h1>
    </div>
  );
}

export default SectionTitle;
