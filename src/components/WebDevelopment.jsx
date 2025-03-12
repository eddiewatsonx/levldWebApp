export function WebDevelopment() {
    return (
      <section className="container py-5 text-center">
        <h2 className="fw-bold text-primary">Web Development</h2>
        <p className="lead">Building cutting-edge, scalable, and responsive websites.</p>
        <div className="d-flex flex-column align-items-center">
          <img src="/web-dev.jpeg" alt="Web Development" className="img-fluid rounded shadow mb-4" style={{ maxWidth: "600px" }} />
          <div className="card p-4 border-0 shadow-lg" style={{ maxWidth: "800px", backgroundColor: "#1E1E1E", color: "white", borderRadius: "15px" }}>
            <ul className="list-unstyled text-start">
              <li>💻 Custom Web Apps</li>
              <li>🛒 E-Commerce Solutions</li>
              <li>🎨 UI/UX Design</li>
              <li>🚀 SEO Optimization</li>
              <li>🔧 Ongoing Support</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }