import React from "react";

export default function ServiceSection({ title, description, services, image, reverse }) {
  return (
    <section
      className="service-section d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: "600px", // Increased height to cover any unwanted gaps
        padding: "100px 0", // Adjusted padding for better spacing
        backgroundColor: "#1E1E1E", // Match the site’s background
      }}
    >
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        {/* Image Section */}
        <div className={`col-md-6 ${reverse ? "order-md-2" : "order-md-1"}`} style={{ textAlign: "center" }}>
          <img
            src={image}
            alt={title}
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
        
        {/* Content Section */}
        <div className={`col-md-6 ${reverse ? "order-md-1" : "order-md-2"}`}>
          <h2 className="fw-bold text-primary">{title}</h2>
          <p className="mb-4">{description}</p>
          
          {/* Services List */}
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>✅ {service}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                {services.slice(4).map((service, index) => (
                  <li key={index}>✅ {service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
