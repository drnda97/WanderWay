"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/admin/mountains/mountains.module.css";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Modal from "@mui/material/Modal";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
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

const MountainsPage = () => {
  const [data, setData] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [mountain, setMountain] = useState({
    name: "",
    description: "",
    route: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData();
    getRoutes();
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
    setMountain({
      name: "",
      description: "",
      route: "",
    });
  };

  const getData = async () => {
    await Repository.get(`${apiUrl}/mountain`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getRoutes = async () => {
    await Repository.get(`${apiUrl}/route`)
      .then((res) => {
        setRoutes(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveData = async (values, setSubmitting, resetForm) => {
    const params = {
      name: values.name,
      description: values.description,
      route: values.route,
    };
    await Repository.post(`${apiUrl}/mountain`, params)
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleClose();
        showMessage(res.data.message, false);
        getData();
      })
      .catch((err) => {
        setSubmitting(false);
        showMessage(err.response.data.message, true);
      });
  };

  const updateData = async (values, setSubmitting, resetForm) => {
    const params = {
      id: mountain._id,
      name: values.name,
      description: values.description,
      route: values.route,
    };
    await Repository.put(`${apiUrl}/mountain`, params)
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleClose();
        showMessage(res.data.message, false);
        getData();
      })
      .catch((err) => {
        setSubmitting(false);
        showMessage(err.response.data.message, true);
      });
  };

  const deleteData = async (id) => {
    await Repository.delete(`${apiUrl}/mountain/${id}`)
      .then((res) => {
        showMessage(res.data.message, false);
        getData();
      })
      .catch((err) => {
        showMessage(err.response.data.message, true);
      });
  };

  const showUpdateModal = (mountain) => {
    setMountain(mountain);
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

  const setRouteFromSelect = (setFieldValue, route) => {
    setFieldValue("route", route);
  };

  return (
    <>
      <Sidebar />
      <main className={styles.page__wrapper}>
        {message ? (
          <Alert severity={error ? "error" : "success"}>{message}</Alert>
        ) : null}
        <div className={styles.title__wrapper}>
          <h1>Mountains</h1>
          <button className={"green__button"} onClick={handleOpen}>
            Create New
          </button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Route Name</TableCell>
                <TableCell align={"right"}>#</TableCell>
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
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.route.name}</TableCell>
                  <TableCell align={"right"}>
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
            {edit ? "Edit" : "Create"} Mountain
          </Typography>
          <div className={styles.form}>
            <Formik
              initialValues={mountain}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name is Required";
                }
                if (!values.description) {
                  errors.description = "Description is Required";
                }
                if (!values.route) {
                  errors.route = "Route is Required";
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
                setFieldValue,
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
                  <input
                    className={`${styles.input} ${errors.description ? styles.input__error : ""}`}
                    type="text"
                    name="description"
                    placeholder={"Description"}
                    onChange={handleChange}
                    value={values.description}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Route</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="custom-select"
                      value={values.route}
                      className={`${styles.input} ${errors.route ? styles.input__error : ""}`}
                      label="Age"
                      onChange={(e) =>
                        setRouteFromSelect(setFieldValue, e.target.value)
                      }
                    >
                      {routes.map((route, index) => (
                        <MenuItem value={route} key={index}>
                          {route.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
export default MountainsPage;
