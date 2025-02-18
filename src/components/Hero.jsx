import FloatingShapes from './FloatingShapes';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero d-flex align-items-center justify-content-center text-center text-white position-relative"
      style={{
        background: "linear-gradient(135deg, #1E1E1E, #2D2D2D)",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating 3D Shapes */}
      <FloatingShapes />

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