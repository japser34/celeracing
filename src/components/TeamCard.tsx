import Image from "next/image";
import styles from "../styles/Home.module.css";

function slugify(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function TeamCard({
  name,
  team,
}: {
  name: string;
  team: string;
}) {
  return (
    <div className={styles.teamCard}>
      <Image
        src={`/team/${slugify(name)}.png`}
        alt={name}
        width={150}
        height={150}
        className={styles.teamImage}
      />
      <h3>{name}</h3>
      <p>{team}</p>
    </div>
  );
}
