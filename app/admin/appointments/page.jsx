"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "@/app/admin/appointments/appointments.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { isAuthenticated } from "@/app/plugins/Auth";
import { redirect } from "next/navigation";
import Repository, { apiUrl } from "@/app/repository/Repository";

const AppointmentsPage = () => {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      redirect("/admin/login");
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Repository.get(`${apiUrl}/appointments`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        <div className={styles.title__wrapper}>
          <h1>Appointments</h1>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};
export default AppointmentsPage;
