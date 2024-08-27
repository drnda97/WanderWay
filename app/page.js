"use client";
import styles from "./page.module.css";
import "./assets/css/parallax.css";
import React, { useEffect } from "react";
import logo from "./assets/images/homepage/logo.png";
import img_1 from "./assets/images/img/background.png";
import img_2 from "./assets/images/img/fog_7.png";
import img_3 from "./assets/images/img/mountain_10.png";
import img_5 from "./assets/images/img/mountain_8.png";
import img_6 from "./assets/images/img/mountain_8.png";
import img_7 from "./assets/images/img/fog_5.png";
import img_8 from "./assets/images/img/mountain_7.png";
import img_9 from "./assets/images/img/mountain_6.png";
import img_10 from "./assets/images/img/fog_4.png";
import img_11 from "./assets/images/img/mountain_5.png";
import img_13 from "./assets/images/img/mountain_4.png";
import img_14 from "./assets/images/img/mountain_3.png";
import img_16 from "./assets/images/img/mountain_2.png";
import img_17 from "./assets/images/img/mountain_1.png";
import img_18 from "./assets/images/img/sun_rays.png";
import img_19 from "./assets/images/img/black_shadow.png";
import img_20 from "./assets/images/img/fog_1.png";
import { Field, Formik } from "formik";

export default function Home() {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0,
      yValue = 0;

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      parallax_el.forEach((value) => {
        let speedx = value.dataset.speedx;
        let speedy = value.dataset.speedt;
        // let isInLeft =
        //   parseFloat(getComputedStyle(value).left) < window.innerWidth / 2
        //     ? 1
        //     : -1;
        // let zValue =
        //   e.clientX - parseFloat(getComputedStyle(value).left) * isInLeft * 0.1;
        value.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px)`;
      });
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className="overlay"></div>
      <header className={styles.header}>
        <img src={logo.src} alt="Logo" className={styles.logo} />
      </header>
      <div className={styles.main}>
        <img
          src={img_1.src}
          alt="Background Image"
          data-speedx="0.3"
          data-speedt="0.38"
          className={"parallax bg-img"}
        />
        <img
          src={img_2.src}
          alt="Background Image"
          data-speedx="0.21"
          data-speedt="0.24"
          className={"parallax fog-7"}
        />
        <img
          src={img_3.src}
          alt="Background Image"
          data-speedx="0.14"
          data-speedt="0.34"
          className={"parallax mountain-10"}
        />
        <img
          src={img_5.src}
          alt="Background Image"
          data-speedx="0.07"
          data-speedt="0.5"
          className={"parallax mountain-9"}
        />
        <img
          src={img_6.src}
          alt="Background Image"
          data-speedx="0.33"
          data-speedt="0.2"
          className={"parallax mountain-8"}
        />
        <img
          src={img_7.src}
          alt="Background Image"
          data-speedx="0.11"
          data-speedt="0.22"
          className={"parallax fog-5"}
        />
        <img
          src={img_8.src}
          alt="Background Image"
          data-speedx="0.06"
          data-speedt="0.1"
          className={"parallax mountain-7"}
        />
        <div className={"text"} data-speedx="0.1" data-speedt="0.2">
          <h2>
            Pripremite se za avanturu: prijavite se za našu novu aplikaciju i
            dobijte sve informacije za planinarenje!
          </h2>
          <h1>Wander Way</h1>
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
                  <label className={styles.checkbox}>
                    <Field
                      type="checkbox"
                      name="agree"
                      className={`${styles.input__checkbox} ${errors.agree ? styles.input__error : ""}`}
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
        <img
          src={img_9.src}
          alt="Background Image"
          data-speedx="0.03"
          data-speedt="0.1"
          className={"parallax mountain-6"}
        />
        <img
          src={img_10.src}
          alt="Background Image"
          data-speedx="0.11"
          data-speedt="0.02"
          className={"parallax fog-4"}
        />
        <img
          src={img_11.src}
          alt="Background Image"
          data-speedx="0.2"
          data-speedt="0.12"
          className={"parallax mountain-5"}
        />
        <img
          src={img_13.src}
          alt="Background Image"
          data-speedx="0.03"
          data-speedt="0.11"
          className={"parallax mountain-4"}
        />
        <img
          src={img_14.src}
          alt="Background Image"
          data-speedx="0.12"
          data-speedt="0.2"
          className={"parallax mountain-3"}
        />
        <img
          src={img_16.src}
          alt="Background Image"
          data-speedx="0.14"
          data-speedt="0.11"
          className={"parallax mountain-2"}
        />
        <img
          src={img_17.src}
          alt="Background Image"
          data-speedx="0.15"
          data-speedt="0.13"
          className={"parallax mountain-1"}
        />
        <img src={img_18.src} alt="Background Image" className={"sun-rays"} />
        <img
          src={img_19.src}
          alt="Background Image"
          className={"black-shadow"}
        />
        <img
          src={img_20.src}
          alt="Background Image"
          data-speedx="0.12"
          data-speedt="0.2"
          className={"parallax fog-1"}
        />
      </div>
    </main>
  );
}
