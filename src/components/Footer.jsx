export function Footer() {
    return (
      <footer className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Levld Up. All Rights Reserved.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item"><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li className="list-inline-item"><a href="/services" className="text-white text-decoration-none">Services</a></li>
            <li className="list-inline-item"><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
            <li className="list-inline-item"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>
      </footer>
    );
  }