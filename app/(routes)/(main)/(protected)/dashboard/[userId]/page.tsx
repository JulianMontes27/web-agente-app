import React from "react";
import CreateAgentButton from "@/components/business/dashboard-main/create-agent-btn";

interface DashboardMainPageProps {
  params: {
    userId: string;
  };
}

const DashboardMainPage: React.FC<DashboardMainPageProps> = ({ params }) => {
  /* Fetch User data using params */

  return (
    <div className="p-3">
      <CreateAgentButton />
    </div>
  );
};

export default DashboardMainPage;
