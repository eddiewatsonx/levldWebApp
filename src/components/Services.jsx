import { useState } from "react";

const serviceDetails = {
  "web-dev": {
    title: "Web Development",
    details: [
      "Custom Website Design",
      "E-commerce Development",
      "Website Maintenance & Support",
      "SEO Optimization",
      "Performance & Speed Optimization"
    ]
  },
  "it-support": {
    title: "IT Support",
    details: [
      "Remote & On-Site Tech Support",
      "Hardware & Software Troubleshooting",
      "Network & Server Maintenance",
      "Cybersecurity & Threat Protection",
      "Cloud Services & Backup Solutions"
    ]
  },
  "managed-services": {
    title: "Managed Services",
    details: [
      "24/7 IT Monitoring",
      "Help Desk Support",
      "Data Protection & Disaster Recovery",
      "Compliance & Security Audits",
      "Infrastructure & Network Management"
    ]
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="container-fluid d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: "#1E1E1E", minHeight: "80vh", width: "100vw" }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#A855F7" }}>Our Services</h2>

        <div className="row text-center g-4">
          {/* Web Development */}
          <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="p-5 border rounded w-100 d-flex flex-column align-items-center justify-content-between bg-dark text-white service-card">
              <span className="fs-1">🌐</span>
              <h3 className="mt-3">Web Development</h3>
              <p>Custom websites, e-commerce solutions, and SEO services.</p>
              <button
                className="btn btn-sm mt-auto"
                style={{ backgroundColor: "#A855F7", color: "white" }}
                onClick={() => setSelectedService(serviceDetails["web-dev"])}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* IT Support */}
          <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="p-5 border rounded w-100 d-flex flex-column align-items-center justify-content-between bg-dark text-white service-card">
              <span className="fs-1">🖥️</span>
              <h3 className="mt-3">IT Support</h3>
              <p>Hardware & software troubleshooting, network maintenance.</p>
              <button
                className="btn btn-sm mt-auto"
                style={{ backgroundColor: "#A855F7", color: "white" }}
                onClick={() => setSelectedService(serviceDetails["it-support"])}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Managed Services */}
          <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="p-5 border rounded w-100 d-flex flex-column align-items-center justify-content-between bg-dark text-white service-card">
              <span className="fs-1">🔧</span>
              <h3 className="mt-3">Managed Services</h3>
              <p>24/7 IT monitoring, security, and compliance audits.</p>
              <button
                className="btn btn-sm mt-auto"
                style={{ backgroundColor: "#A855F7", color: "white" }}
                onClick={() => setSelectedService(serviceDetails["managed-services"])}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#A855F7" }}>{selectedService.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedService(null)}></button>
              </div>
              <div className="modal-body" style={{ color: "#333" }}>
                <ul>
                  {selectedService.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedService(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
