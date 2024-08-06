import styles from "./page.module.css";
import React from "react";
import logo from "./assets/images/homepage/logo.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background__slider}></div>
      <div className={styles.main__content__wrapper}>
        <img src={logo.src} alt="Logo" />
        <h1 className={styles.page__title}>WanderWay</h1>
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
      </div>
    </main>
  );
}
