import React from "react";
import styles from "@/app/admin/appointments/appointments.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";

const AppointmentsPage = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <h1>Appointments</h1>
      </main>
    </>
  );
};
export default AppointmentsPage;
