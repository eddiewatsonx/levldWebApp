import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "quarterly" : "monthly");
  };

  const pricingData = {
    monthly: { startup: 400, growth: 900, enterprise:1500  },
    quarterly: { startup: 340, growth: 765, enterprise: 1275 },
  };

  return (
    <section
      id="pricing"
      className="pricing-section py-5 text-center"
      style={{ background: "linear-gradient(135deg, #A855F7, #FB923C)", color: "white" }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">Service Packages & Pricing</h2>
        <p className="mb-4">Scalable solutions designed to support your business growth.</p>

        {/* Toggle Button */}
        <div className="toggle-container mb-4" style={{ maxWidth: "350px", margin: "0 auto" }}>
          <button className={`toggle-btn ${billingCycle === "monthly" ? "active" : ""}`} onClick={toggleBillingCycle}>Monthly</button>
          <button className={`toggle-btn ${billingCycle === "quarterly" ? "active" : ""}`} onClick={toggleBillingCycle}>Quarterly (Save 15%)</button>
        </div>

        {/* Pricing Cards */}
        <div className="row justify-content-center">
          {["startup", "growth", "enterprise"].map((plan, index) => (
            <div key={index} className="col-md-4 d-flex align-items-stretch">
              <div className={`pricing-card ${plan === "growth" ? "featured" : ""}`}>
                <h4 className="plan-title">
                  {plan === "startup" ? "Startup Essentials" : plan === "growth" ? "Growth Pro" : "Enterprise Pro"}
                </h4>
                <p className="price">
                  ${pricingData[billingCycle][plan]} <span>/month</span>
                </p>
                <ul className="features-list">
                  {plan === "startup" && (
                    <>
                      <li>Basic Website Development & Hosting (Up to 5 pages)</li>
                      <li>Business Email Setup</li>
                      <li>Logo & Branding Kit</li>
                      <li>Social Media Setup (1 Platform)</li>
                      <li>Basic IT Support & Security</li>
                      <li>Cloud Storage Setup</li>
                      <li>Monthly IT & Security Checkup</li>
                    </>
                  )}
                  {plan === "growth" && (
                    <>
                      <li>Includes Everything in Startup Essentials</li>
                      <li>Advanced Website Development (Up to 10 pages + SEO)</li>
                      <li>E-Commerce Store Setup (Up to 50 Products)</li>
                      <li>Graphic Design Package</li>
                      <li>Social Media Management (2 Platforms, Monthly Content)</li>
                      <li>Google Ads Setup & Management</li>
                      <li>Managed IT Support & Advanced Cybersecurity</li>
                      <li>VoIP Business Phone Setup</li>
                    </>
                  )}
                  {plan === "enterprise" && (
                    <>
                      <li>Everything in Growth Pro, Plus:</li>
                      <li>Custom Web & App Development</li>
                      <li>Full SEO Optimization</li>
                      <li>Photography & Videography Services</li>
                      <li>Advanced Ad Campaign Management</li>
                      <li>Comprehensive IT Security Suite</li>
                      <li>Cloud Infrastructure & Server Management</li>
                      <li>Unlimited IT Support & On-Site Support</li>
                      <li>Custom Business Solutions & AI Integrations</li>
                    </>
                  )}
                </ul>
                <button className="btn">
                  {plan === "enterprise" ? "Book a Consultation" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
  .pricing-section {
    padding: 80px 0;
  }
  .toggle-container {
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 5px;
    border-radius: 25px;
  }
  .toggle-btn {
    background: transparent;
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
  .toggle-btn.active {
    background: white;
    color: #A855F7;
    border-radius: 20px;
  }
  .pricing-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    color: black;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 100%;
    min-height: 500px; /* Ensures all cards are the same height */
  }
  .features-list {
    list-style: none; /* Removes bullet points */
    padding: 0;
  }

.features-list li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Light dividers */
}

.features-list li:last-child {
  border-bottom: none; /* Removes border from the last item */
}
  .featured {
    border: 2px solid #A855F7;
  }
  .btn {
    background: #A855F7;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    transition: 0.3s;
    margin-top: auto;
  }
  .btn:hover {
    background: #FB923C;
  }
`}</style>
    </section>
  );
}