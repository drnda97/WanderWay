"use client";
import React, { useLayoutEffect } from "react";
import styles from "@/app/admin/dashboard/dashboard.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/app/plugins/Auth";

const DashboardPage = () => {
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      redirect("/admin/login");
    }
  }, []);
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
