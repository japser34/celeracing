import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* Fixed background image */}
      <div className={styles.background}>
        <Image
          src="/background.png"
          alt="Background"
          fill
          className={styles.bgImage}
        />
      </div>

      {/* Intro Section: full screen with centered text */}
      <section className={styles.intro}>
        <h1>Celeracing</h1>
      </section>

      {/* Additional Content: appears when scrolling */}
      <section className={styles.content}>
        <h2>Placeholder Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan tortor. Donec ullamcorper, urna in cursus placerat, orci
          lorem maximus risus, non facilisis lacus odio in massa.
        </p>
        <p>
          More placeholder text here. Add any info you want to display once the
          user scrolls down.
        </p>
      </section>
    </>
  );
}
