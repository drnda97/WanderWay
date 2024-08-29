"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/app/admin/routes/routes.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Alert from "@mui/material/Alert";
import Repository, { apiUrl } from "@/app/repository/Repository";

const NewsletterPage = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Repository.get(`${apiUrl}/newsletter`, {
      Authorization:
        "Bearer rG8K0GSXXluVwabOVxdGASw0snTB0yhGiet4AOzSchvKuQPW4RcCM8Uvfn7XIHY8",
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteUsersNewsletter = async (id) => {
    await Repository.delete(`${apiUrl}/newsletter/${id}`, {
      apiKey:
        "rG8K0GSXXluVwabOVxdGASw0snTB0yhGiet4AOzSchvKuQPW4RcCM8Uvfn7XIHY8",
    })
      .then((res) => {
        setError(false);
        setMessage(res.data.message);
        getData();
        setTimeout(() => {
          setMessage("");
        }, 5000);
      })
      .catch((err) => {
        setError(true);
        setMessage(err.response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      });
  };

  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        {message ? (
          <Alert severity={error ? "error" : "success"}>{message}</Alert>
        ) : null}
        <div className={styles.title__wrapper}>
          <h1>Newsletter</h1>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User email</TableCell>
                <TableCell align="center">#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.email}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="center">
                    <span
                      className={styles.icon}
                      onClick={() => deleteUsersNewsletter(row._id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};
export default NewsletterPage;
