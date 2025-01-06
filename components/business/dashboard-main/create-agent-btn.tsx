"use client";

import { Button } from "@/components/ui/button";
import useModalStore from "@/hooks/use-modal-store";
import { User } from "next-auth";
import React from "react";

interface CreateAgentButtonProps {
  user: User;
}

const CreateAgentButton: React.FC<CreateAgentButtonProps> = ({ user }) => {
  const { onOpen } = useModalStore();
  return (
    <Button onClick={() => onOpen("create-agent", { user })}>
      Create AI Agent
    </Button>
  );
};

export default CreateAgentButton;
