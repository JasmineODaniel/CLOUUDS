 import styles from "./beneathhero.module.css"; 

const logos = [
  "/logos 06.svg",
  "/logos 05.svg",
  "/logos 04.svg",
  "/logos 03.svg",
  "/logos 02.svg", 
  "/logos 01.svg",
];

export function BeneathHero() {
  return (
    <section className={styles.wrap}>
      <div className={styles.logos}>
        {logos.map((src, i) => (
  <img
    key={src}
    src={src}
    alt={`Logo ${i + 1}`}
    className={`${styles.logo} ${styles[`logo${i + 1}`]}`}
  />
))}

      </div>

      <div className={styles.title}>
        <img src="/Clouuds. (1).png" alt="Clouuds" className={styles.titleImage} />
      </div>

      <p className={styles.tagline}>
        Every feature exists for a reason. No distractions, no fluff—just  the<br />
        tools you need to keep projects moving forward.
      </p>
    </section>
  );
}
