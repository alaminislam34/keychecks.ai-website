import React from "react";

function PageTitle({ title, subTitle }) {
  return (
    <div className="mb-16 space-y-6 text-center">
      <h1
        className={`text-dark text-3xl md:text-4xl lg:text-5xl font-semibold`}
      >
        {title}
      </h1>
      <p className="text-gray text-lg md:text-xl font-normal">{subTitle}</p>
    </div>
  );
}

export default PageTitle;
