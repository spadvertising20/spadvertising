import React, { useEffect, useRef, useState } from "react";

export default function Test() {
  const inputRef = useRef(null);

  const focus = () => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  };

  return (
    <div>
      
      <input type="text" ref={inputRef} />
      <button onClick={focus}>click</button>
    </div>
  );
}
