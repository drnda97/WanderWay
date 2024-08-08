import React from "react";
import styles from "@/app/admin/district/district.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";

const DistrictPage = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <h1>District</h1>
      </main>
    </>
  );
};
export default DistrictPage;