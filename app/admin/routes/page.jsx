import React from "react";
import styles from "@/app/admin/routes/routes.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";

const RoutesPage = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <h1>ROUTES</h1>
      </main>
    </>
  );
};
export default RoutesPage;
