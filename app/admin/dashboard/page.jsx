import React from "react";
import styles from "@/app/admin/dashboard/dashboard.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <h1>Dashboard</h1>
      </main>
    </>
  );
};
export default DashboardPage;
