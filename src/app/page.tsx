import Image from "next/image";
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
        <h1>xeleracing</h1>
      </section>

      <section className={styles.introdark}>
        <h2>Welcome to Celeracing</h2>
        <p>Welcome to the official website of Celeracing.</p>
        <h3>Who are we?</h3>
        <p>
          We are a Dutch secondary school team that makes a 1-person racing car
          for the{" "}
          <Link
            href="https://www.shellecomarathon.com/"
            className="hover:underline"
          >
            Shell Eco-marathon
          </Link>
          . Most of the team is made up of students from{" "}
          <Link href="https://www.celeanum.nl/" className="hover:underline">
            Gymnasium Celeanum
          </Link>
          .
        </p>
      </section>

      <section className={styles.introlight} text-center>
        <h2>Our Vehicles</h2>
        <div className={styles.vehicleContainer}>
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </section>

      <section className={styles.introdark}>
        <h2>Our Team</h2>
        <div className={styles.teamContainer}>
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      <section className={styles.introlight}>
        <h2>Our Sponsors</h2>
        <div className={styles.partnerContainer}>
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>
    </div>
  );
}
