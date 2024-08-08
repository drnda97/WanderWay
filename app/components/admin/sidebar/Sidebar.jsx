import React from "react";
import styles from "@/app/components/admin/sidebar/sidebar.module.css";
import logo from "@/app/assets/images/homepage/logo.png";
import Link from "next/link";
import {
  AdminAppointmentsIcon,
  AdminLogoutIcon,
  AdminUsersIcon,
} from "@/app/plugins/icons";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar__wrapper}>
      <Link href={"/admin/dashboard"}>
        <img src={logo.src} alt="Logo Image" className={styles.logo} />
      </Link>
      <div className={styles.icons__wrapper}>
        <Link href={"/admin/users"} className={styles.icon}>
          <AdminUsersIcon />
        </Link>
        <Link href={"/admin/appointments"} className={styles.icon}>
          <AdminAppointmentsIcon />
        </Link>
        <Link href={"/admin/district"} className={styles.icon}>
          <AdminAppointmentsIcon />
        </Link>
        <Link href={"/admin/mountains"} className={styles.icon}>
          <AdminUsersIcon />
        </Link>
        <Link href={"/admin/routes"} className={styles.icon}>
          <AdminUsersIcon />
        </Link>
      </div>
      <div className={styles.logout}>
        <AdminLogoutIcon />
      </div>
    </aside>
  );
};
export default Sidebar;
