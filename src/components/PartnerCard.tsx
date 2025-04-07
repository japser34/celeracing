import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function PartnerCard({
  name,
  logo,
  website,
}: {
  name: string;
  logo: string;
  website: string;
}) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.partnerCard}
    >
      <Image
        src={logo}
        alt={name}
        width={200}
        height={100}
        className={styles.partnerLogo}
      />
    </a>
  );
}
