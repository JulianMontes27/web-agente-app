"use client";

import CreateAgentModal from "@/modals/create-agent-modal";
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
  return (
    <section>
      <CreateAgentModal />
    </section>
  );
};

export default ZustandModalProvider;
