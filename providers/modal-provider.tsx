"use client";

import { useState, useEffect } from "react";

const ZustandModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    //we are still on the server
    return null;
  }
  return <section></section>;
};

export default ZustandModalProvider;
