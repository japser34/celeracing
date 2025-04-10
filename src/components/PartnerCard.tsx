import Image from "next/image";
import Link from "next/link";
//import "../app/global.css";
//import styles from "../styles/Home.module.css";

export default function PartnerCard({
  name,
  logo,
  website,
  //slogan,
  //description,
}: {
  name: string;
  logo: string;
  website: string;
  //slogan: string;
  //description: string;
}) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="card partner"
    >
      <Image
        src={`/sponsors/${logo}`}
        alt={name}
        width={200}
        height={100}
        className="card-image partner"
      />
    </Link>
  );
}
