"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { isAuthenticated } from "@/app/plugins/Auth";
import { redirect } from "next/navigation";

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
    images: [],
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      redirect("/admin/login");
    }
  }, []);

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

  const saveData = async (formData) => {
    const response = await Repository.post(`${apiUrl}/mountain`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const updateData = async (formData) => {
    const response = await axios.put("/api/mountains/:id", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
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
                <TableCell>First Image</TableCell>
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
                  <TableCell>
                    {row.route
                      ? row.route?.name
                      : "No routes currently attached"}
                  </TableCell>
                  <TableCell>
                    {row.images.length ? (
                      <img
                        src={row.images[0]}
                        alt="Mountain"
                        className={styles.table__image}
                      />
                    ) : (
                      "No images currently attached"
                    )}
                  </TableCell>
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
                if (!values.images || values.images.length === 0) {
                  errors.images = "At least one image is required.";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("description", values.description);
                formData.append("route", values.route);

                // Add images to the FormData
                for (let i = 0; i < values.images.length; i++) {
                  formData.append("images", values.images[i]);
                }

                try {
                  if (!edit) {
                    await saveData(formData); // Pass formData to the API function
                  } else {
                    await updateData(formData);
                  }
                  resetForm();
                  handleClose();
                } catch (error) {
                  console.error("Error submitting form:", error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className={styles.form__wrapper}>
                  <input
                    className={`${styles.input} ${errors.name ? styles.input__error : ""}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <input
                    className={`${styles.input} ${errors.description ? styles.input__error : ""}`}
                    type="text"
                    name="description"
                    placeholder="Description"
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
                      label="Route"
                      onChange={(e) =>
                        setRouteFromSelect(setFieldValue, e.target.value)
                      }
                    >
                      {routes.map((route, index) => (
                        <MenuItem value={route._id} key={index}>
                          {route.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <input
                      type="file"
                      name="images"
                      multiple
                      accept="image/*"
                      onChange={(e) => setFieldValue("images", e.target.files)}
                    />
                    {errors.images && (
                      <Typography color="error">{errors.images}</Typography>
                    )}
                  </FormControl>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="green__button"
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
