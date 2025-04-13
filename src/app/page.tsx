import Image from "next/image";
import Link from "next/link";
import VehicleCard from "../components/VehicleCard";
import TeamCard from "../components/TeamCard";
import PartnerCard from "../components/PartnerCard";
import { vehicles } from "../data/vehicles";
import { team } from "../data/team";
import { partners } from "../data/partners";

export default function Home() {
  return (
    <div>
      {/* Fixed background image */}
      <div className="start-background">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <section className="start-text">
        <h1>Celeracing</h1>
      </section>

      <section className="section dark">
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

      <section className="section light">
        <h2>Onze Voertuigen</h2>
        <div className="card-container">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </section>

      <section className="section dark">
        <h2>Ons Team</h2>
        <div className="card-container">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      <section className="section light">
        <h2>Onze Sponsors</h2>
        <div className="card-container">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>
    </div>
  );
}
