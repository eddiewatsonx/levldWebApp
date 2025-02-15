export default function Hero() {
  return (
    <section
      id="hero"
      className="hero d-flex align-items-center justify-content-center text-center text-white position-relative"
      style={{
        backgroundImage: "url('/hero-rubiks-image.png')",
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // Prevents any potential scroll issues
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the 0.6 for more/less darkness
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="fw-bold display-4">Elevate Your Digital Presence</h1>
        <p className="lead">
          Providing cutting-edge Web Development, IT Solutions, and Managed Services.
        </p>
        <a href="#services" className="btn btn-lg mt-3" style={{ backgroundColor: "#A855F7", color: "white", border: "none" }}>
          Get Started
        </a>
      </div>
    </section>
  );
}