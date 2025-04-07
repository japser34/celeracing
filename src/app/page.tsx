import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type Vehicle = {
  title: string;
  description: string;
  image: string;
};

const vehicles: Vehicle[] = [
  {
    title: "Orka",
    description: "This is the first car we made, in ...",
    image: "/vehicles/orka.png",
  },
  {
    title: "Road Thunder",
    description: "This car was made after the Orka in ...",
    image: "/vehicles/road-thunder.png",
  },
  {
    title: "New Car",
    description:
      "We hope we will finish this car before the Shell Eco-marathon in 2025.",
    image: "/vehicles/new-car.png",
  },
];

// Utility function to convert title to slug
function slugify(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function VehicleCard({ title, description, image }: Vehicle) {
  const slug = slugify(title);
  return (
    <Link href={`/vehicles/${slug}`} className={styles.vehicleCard}>
      <div className={styles.vehicleImage}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

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

      {/* Home section */}
      <section className={styles.home}>
        <h1>xeleracing</h1>
      </section>

      {/* Intro Section */}
      <section className={styles.introdark}>
        <h2>Welcome to Celeracing</h2>
        <p>Welcome to the official website of Celeracing.</p>
        <h3>Who are we?</h3>
        <p>
          We are a dutch secondary school team that makes a 1 person racing car
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

      {/* Vehicles Section */}
      <section className={`${styles.introlight} text-center`}>
        <h2>Our Vehicles</h2>
        <div className={styles.vehicleContainer}>
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </section>
    </>
  );
}
