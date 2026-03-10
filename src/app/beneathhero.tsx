import styles from "./beneathhero.module.css";

const logos = [
  "/logos 01.svg", 
  "/logos 02.svg",
  "/logos 03.svg",
  "/logos 04.svg",
  "/logos 05.svg",
  "/logos 06.svg",
];

export function BeneathHero() {
  return (
    <section className={styles.beneathHero}>
      {logos.map((src, i) => (
        <img key={src} src={src} alt={`Logo ${i + 1}`} className={styles.logo} />
      ))}
    </section>
  );
}
