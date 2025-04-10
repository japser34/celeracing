import Image from "next/image";
import Link from "next/link";

type Vehicle = {
  title: string;
  description: string;
  image: string;
};

function slugify(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function VehicleCard({ title, description, image }: Vehicle) {
  const slug = slugify(title);
  return (
    <Link href={`/vehicles/${slug}`} className="card vehicle">
      <div className="h-50 relative w-75">
        <Image
          className="card-image vehicle"
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
