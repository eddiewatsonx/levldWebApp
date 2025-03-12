import React from 'react';

export default function LevldServices() {
  const services = [
    {
      title: "Managed IT Services",
      description:
        "Proactive monitoring, maintenance, and support to ensure your IT infrastructure is always running at peak performance. Our dedicated team is available 24/7 to keep your systems secure and efficient."
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive cybersecurity solutions to protect your data and networks against evolving threats. We implement cutting-edge technologies and best practices to defend your business."
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless cloud integration and management that enables you to leverage cloud computing for scalability and cost efficiency. Enjoy smooth transitions and robust performance."
    },
    {
      title: "IT Consulting",
      description:
        "Expert advice and strategic planning to help you navigate the complex technology landscape. Our consulting services ensure your IT strategy aligns with your business goals."
    }
  ];

  return (
    <div className="container my-5">

      {/* About Section */}
      {/* About Section */}
      <section className="mb-5 text-center text-white p-5 rounded hero-background">
        <h2 className="fw-bold">About Levld MSP</h2>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          At Levld MSP, we specialize in delivering top-tier managed IT services that empower your business.
          From robust cybersecurity measures to seamless cloud solutions, our goal is to keep your operations running smoothly and securely.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-5 text-center">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="service-card">
                <div className="card-body text-white">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Custom Styles */}
      <style>
        {`
          .hero-background {
            background: linear-gradient(135deg, #A855F7, #FB923C);
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          }

          .service-card {
            background: linear-gradient(135deg, #2D2D2D, #1E1E1E);
            border-radius: 12px;
            padding: 20px;
            min-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(168, 85, 247, 0.5);
          }

          .cta-section {
            background: linear-gradient(135deg, #A855F7, #FB923C);
            color: white;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          }

          .btn-custom {
            background: white;
            color: #A855F7;
            border-radius: 25px;
            padding: 10px 20px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .btn-custom:hover {
            background: rgba(255, 255, 255, 0.8);
            color: #A855F7;
          }
        `}
      </style>
    </div>
  );
}