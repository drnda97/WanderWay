"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/admin/district/district.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Formik } from "formik";
import Repository, { apiUrl } from "@/app/repository/Repository";
import Alert from "@mui/material/Alert";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DistrictPage = () => {
  const [data, setData] = useState([]);
  const [district, setDistrict] = useState({ name: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
    setDistrict({
      name: "",
    });
  };

  const getData = async () => {
    await Repository.get(`${apiUrl}/district`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveData = async (values, setSubmitting, resetForm) => {
    const params = {
      name: values.name,
    };
    await Repository.post(`${apiUrl}/district`, params)
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleClose();
        getData();
        showMessage(res.data.message, false);
      })
      .catch((err) => {
        setSubmitting(false);
        showMessage(err.response.data.message, true);
      });
  };

  const updateData = async (values, setSubmitting, resetForm) => {
    const params = {
      id: district._id,
      name: values.name,
    };
    await Repository.put(`${apiUrl}/district`, params)
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleClose();
        getData();
        showMessage(res.data.message, false);
      })
      .catch((err) => {
        setSubmitting(false);
        showMessage(err.response.data.message, true);
      });
  };

  const deleteData = async (id) => {
    await Repository.delete(`${apiUrl}/district/${id}`)
      .then((res) => {
        showMessage(res.data.message, false);
        getData();
      })
      .catch((err) => {
        showMessage(err.response.data.message, true);
      });
  };

  const showUpdateModal = (district) => {
    setDistrict(district);
    setEdit(true);
    handleOpen();
  };

  const showMessage = (message, error) => {
    setError(error);
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        {message ? (
          <Alert severity={error ? "error" : "success"}>{message}</Alert>
        ) : null}
        <div className={styles.title__wrapper}>
          <h1>District</h1>
          <button className={"green__button"} onClick={handleOpen}>
            Create New
          </button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">#</TableCell>
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
                  <TableCell align="right">
                    <span
                      className={styles.icon}
                      onClick={() => deleteData(row._id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </span>
                    <span
                      className={styles.icon}
                      onClick={() => showUpdateModal(row)}
                    >
                      <EditOutlinedIcon />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {edit ? "Edit" : "Create"} District
          </Typography>
          <div className={styles.form}>
            <Formik
              initialValues={district}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name is Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                if (!edit) {
                  return saveData(values, setSubmitting, resetForm);
                }
                updateData(values, setSubmitting, resetForm);
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form__wrapper}>
                  <input
                    className={`${styles.input} ${errors.name ? styles.input__error : ""}`}
                    type="text"
                    name="name"
                    placeholder={"Name"}
                    onChange={handleChange}
                    value={values.name}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={"green__button"}
                  >
                    Save
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default DistrictPage;
