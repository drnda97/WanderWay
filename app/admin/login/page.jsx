"use client";
import styles from "@/app/admin/login/login.module.css";
import React, { useState } from "react";
import logo from "@/app/assets/images/homepage/logo.png";
import { Formik } from "formik";
import Repository, { apiUrl } from "@/app/repository/Repository";
import Alert from "@mui/material/Alert";
import Cookies from "universal-cookie";

const Page = () => {
  const cookies = new Cookies();

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const sendData = async (setSubmitting, values, resetForm) => {
    const params = {
      email: values.email,
      password: values.password,
    };

    await Repository.post(`${apiUrl}/user/login`, params)
      .then((res) => {
        resetForm();
        cookies.set("token", res.data.body.token);
        window.location = "/admin/dashboard";
        setSubmitting(false);
      })
      .catch((err) => {
        setError(true);
        setMessage(err.response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setSubmitting(false);
      });
  };

  return (
    <main className={styles.main}>
      {message ? (
        <Alert severity={error ? "error" : "success"}>{message}</Alert>
      ) : null}
      <div className={styles.background__slider}></div>
      <div className={styles.main__content__wrapper}>
        <img src={logo.src} alt="Logo" className={styles.logo} />
        <h1 className={styles.page__title}>Hike&Mate</h1>
        <div className={styles.form}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendData(setSubmitting, values, resetForm);
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
                  className={`${styles.input} ${errors.email ? styles.input__error : ""}`}
                  type="email"
                  name="email"
                  placeholder={"Email"}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <input
                  className={`${styles.input} ${errors.password ? styles.input__error : ""}`}
                  type="text"
                  name="password"
                  placeholder={"Password"}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.green__button}
                >
                  Prijavi se
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};
export default Page;
