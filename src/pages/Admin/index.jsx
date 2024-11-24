export const metadata = {
  title: "Admin Dashboard | IndigoSafe",
  description: "Security admin dashboard for IndigoSafe",
};

import React from "react";
import DashboardContent from "./Dashboard/dashboardContents";

const Index = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <DashboardContent />
    </div>
  );
};

export default Index;
