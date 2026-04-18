"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminReportDashboard from "./components/AdminReportDashboard";

function Dashboard() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // useEffect(() => {
  //   const isAuthenticated =
  //     localStorage.getItem("keychecks-authenticated") === "true";

  //   if (!isAuthenticated) {
  //     router.replace("/auth");
  //     return;
  //   }

  //   setIsCheckingAuth(false);
  // }, [router]);

  // if (isCheckingAuth) {
  //   return null;
  // }

  return (
    <div>
      <AdminReportDashboard />
    </div>
  );
}

export default Dashboard;
