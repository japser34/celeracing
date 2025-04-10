"use client";
import Image from "next/image";
import { useState } from "react";

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
  const [imageSrc, setImageSrc] = useState(`/team/${slugify(name)}.png`);

  const handleError = () => {
    setImageSrc("/team/empty.png"); // Fallback image
  };
  return (
    <div className="card team">
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className="card-image team"
        onError={handleError} // Handle error event
      />
      <h3>{name}</h3>
      <p>{team}</p>
    </div>
  );
}
