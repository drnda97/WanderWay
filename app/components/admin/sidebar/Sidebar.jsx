import React from "react";
import styles from "@/app/components/admin/sidebar/sidebar.module.css";
import logo from "@/app/assets/images/homepage/logo.png";
import Link from "next/link";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar__wrapper}>
      <Link href={"/admin/dashboard"}>
        <img src={logo.src} alt="Logo Image" className={styles.logo} />
      </Link>
      <div className={styles.icons__wrapper}>
        <Link href={"/admin/users"} className={styles.icon}>
          <GroupOutlinedIcon />
        </Link>
        <Link href={"/admin/appointments"} className={styles.icon}>
          <BookOnlineOutlinedIcon />
        </Link>
        <Link href={"/admin/district"} className={styles.icon}>
          <MapOutlinedIcon />
        </Link>
        <Link href={"/admin/mountains"} className={styles.icon}>
          <LandscapeOutlinedIcon />
        </Link>
        <Link href={"/admin/routes"} className={styles.icon}>
          <RouteOutlinedIcon />
        </Link>
        <Link href={"/admin/newsletter"} className={styles.icon}>
          <EmailOutlinedIcon />
        </Link>
      </div>
      <div className={styles.logout}>
        <LogoutOutlinedIcon />
      </div>
    </aside>
  );
};
export default Sidebar;
