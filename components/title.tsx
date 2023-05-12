"use client";
import React from "react";

const PageTitle = (props: any) => {
  return (
    <>
      <div className="text-md font-bold text-gray-500 text-center dark:text-white mb-3">
        {props.mainTitle}
      </div>
    </>
  );
};
export default PageTitle;
