"use client";
import styles from "./page.module.css";
import React from "react";
import logo from "./assets/images/homepage/logo.png";
import { Field, Formik } from "formik";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background__slider}></div>
      <div className={styles.main__content__wrapper}>
        <img src={logo.src} alt="Logo" className={styles.logo} />
        <h1 className={styles.page__title}>Hike&Mate</h1>
        <div className={styles.text__wrapper}>
          <h2 className={styles.page__subtitle}>
            Pripremite se za avanturu: prijavite se za našu novu aplikaciju i
            dobijte sve informacije za planinarenje!
          </h2>
          <p className={styles.page__desc}>
            Oduševljeni smo što možemo da objavimo da je naša nova aplikacija za
            planinarenje skoro spremna da krene na staze! Dizajnirano imajući na
            umu istraživače poput vas, ova aplikacija će biti vaš vrhunski
            pratilac za otkrivanje novih staza, praćenje vaših planinarenja i
            povezivanje sa kolegama entuzijastima prirode.
          </p>
        </div>
        <div className={styles.form}>
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
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
                <label className={styles.checkbox}>
                  <Field
                    type="checkbox"
                    name="agree"
                    className={`${styles.input__checkbox} ${errors.email ? styles.input__error : ""}`}
                  />
                  Saglasan/na sam da primam obavestenja putem email adrese
                </label>
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
}
