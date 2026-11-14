import type { ReactNode } from "react";
import { useContext } from "react";
import { Redirect } from "wouter";
import { ProfileContext } from "../contexts/ProfileContext";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const DashboardPage = ({ children }: { children: ReactNode }) => {
  const { data } = useContext(ProfileContext);

  // Si no hay perfil, fuera del dashboard
  if (!data.email) {
    return <Redirect to="~/" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardPage;
