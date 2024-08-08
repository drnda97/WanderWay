"use client";
import styles from "@/app/admin/login/login.module.css";
import React from "react";
import logo from "@/app/assets/images/homepage/logo.png";
import { Formik } from "formik";

const Page = () => {
  return (
    <main className={styles.main}>
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className={styles.form__wrapper}>
                <input
                  className={`${styles.input} ${errors.email ? styles.input__error : ""}`}
                  type="email"
                  name="email"
                  placeholder={"Unesi svoj mail"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <input
                  className={`${styles.input} ${errors.password ? styles.input__error : ""}`}
                  type="password"
                  name="password"
                  placeholder={"Password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
