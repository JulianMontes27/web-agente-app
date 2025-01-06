import React from "react";

interface DashboardMainPageProps {
  params: {
    userId: string;
  };
}

const DashboardMainPage: React.FC<DashboardMainPageProps> = ({ params }) => {
  /* Fetch User data using params */
  
  return <div>DashboardMainPage</div>;
};

export default DashboardMainPage;
