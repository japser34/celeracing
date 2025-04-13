import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      {/* Fixed background image */}
      <div className="start-background">
        <Image
          src="/not-found.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <section className="start-text">
        <h1>
          <div style={{ fontSize: "clamp(3rem, 20vh, 30rem)" }}>:(</div>
          <div>We are not able to find that page,</div>
          <div>or we lost it.</div>
        </h1>
      </section>
    </div>
  );
}
