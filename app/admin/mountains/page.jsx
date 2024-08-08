import React from "react";
import styles from "@/app/admin/mountains/mountains.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";

const MountainsPage = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <h1>MOUNTAINS</h1>
      </main>
    </>
  );
};
export default MountainsPage;
