"use client";

import { Button } from "@/components/ui/button";
import useModalStore from "@/hooks/use-modal-store";

interface CreateAgentButtonProps {}

const CreateAgentButton = () => {
  const { onOpen } = useModalStore();
  return (
    <Button onClick={() => onOpen("create-agent")}>CreateAgentButton</Button>
  );
};

export default CreateAgentButton;
