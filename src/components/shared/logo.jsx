import React from "react";

const Logo = ({className}) => {
  return (
    <div className="w-fit h-fit ">
      <p className={`tracking-widest text-3xl font-bold cursor-pointer ${className}`}>
        WRE<span className=" text-primary">TTO</span>
      </p>
    </div>
  );
};

export default Logo;
