"use client";
import React from "react";
import styles from "@/app/admin/users/users.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import { Table } from "@mantine/core";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const DistrictPage = () => {
  const tableData = {
    caption: "Some elements from periodic table",
    head: ["Element position", "Atomic mass", "Symbol", "Element name"],
    body: [
      [6, 12.011, "C", "Carbon"],
      [7, 14.007, "N", "Nitrogen"],
      [39, 88.906, "Y", "Yttrium"],
      [56, 137.33, "Ba", "Barium"],
      [58, 140.12, "Ce", "Cerium"],
    ],
  };
  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        {/*<Table data={tableData} />;*/}
      </main>
    </>
  );
};
export default DistrictPage;
