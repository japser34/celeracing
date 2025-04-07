import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import VehicleCard from "../components/VehicleCard";
import TeamCard from "../components/TeamCard";
import PartnerCard from "../components/PartnerCard";
import { vehicles, team, partners } from "../data/content";

export default function Home() {
  return (
    <div>
      {/* Fixed background image */}
      <div className={styles.background}>
        <Image
          src="/background.png"
          alt="Background"
          fill
          className={styles.bgImage}
        />
      </div>

      <section className={styles.home}>
        <h1>Xelereesing</h1>
      </section>

      <section className={styles.introdark}>
        <h2>Welkom bij Celeracing</h2>
        <p>Welkom bij de website van Celeracing.</p>
        <h3>Wie zijn we?</h3>
        <p>
          We zijn een Nederlandse middelbare school team dat een 1-persoons race
          wagen maakt voor de{" "}
          <Link
            href="https://www.shellecomarathon.com/"
            className="hover:underline"
          >
            Shell Eco-marathon
          </Link>
          . Het team bestaat uit studenten van{" "}
          <Link href="https://www.celeanum.nl/" className="hover:underline">
            Gymnasium Celeanum
          </Link>
          .
        </p>
      </section>

      <section className={styles.introlight}>
        <h2>Onze Voertuigen</h2>
        <div className={styles.vehicleContainer}>
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </section>

      <section className={styles.introdark}>
        <h2>Ons Team</h2>
        <div className={styles.teamContainer}>
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      <section className={styles.introlight}>
        <h2>Onze Sponsors</h2>
        <div className={styles.partnerContainer}>
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>
    </div>
  );
}
