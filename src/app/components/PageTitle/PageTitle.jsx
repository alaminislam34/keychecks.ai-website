import React from "react";

function PageTitle({ title, subTitle }) {
  return (
    <div className="pb-8 space-y-4 text-center">
      <h1
        className={`text-dark text-3xl md:text-4xl lg:text-5xl font-semibold`}
      >
        {title}
      </h1>
      <p className="text-gray text-lg md:text-xl">{subTitle}</p>
    </div>
  );
}

export default PageTitle;
