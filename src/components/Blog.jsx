import { useState } from 'react';
import blogPosts from '../data/blogPosts.json'; // Importing posts from the JSON file

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section 
      id='blog' 
      className="bg-dark text-white position-relative" 
      style={{ width: "100vw", overflow: "hidden", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="container">
        <h2 
          className="text-center fw-bold" 
          style={{ 
            color: "#A855F7", 
            marginBottom: "2.5rem" // Adds space below the title
          }}
        >
          Latest Blog Posts
        </h2>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-3" data-aos="zoom-in" data-aos-delay={`${index * 100}`}> 
              <div className="card h-100 shadow-sm blog-card">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold" style={{ color: "#A855F7" }}>{post.title}</h5>
                  <p className="card-text text-muted">{post.date}</p>
                  <p className="card-text">{post.content.substring(0, 80)}...</p>
                  <button
                    className="btn btn-sm mt-auto"
                    style={{ backgroundColor: "#A855F7", color: "white" }}
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#A855F7" }}>{selectedPost.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedPost(null)}></button>
              </div>
              <div className="modal-body" style={{ color: "#333" }}>
                <p className="text-muted">{selectedPost.date}</p>
                <p>{selectedPost.content}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedPost(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add hover zoom effect in CSS */}
      <style>
        {`
          .blog-card {
            transition: transform 0.3s ease-in-out;
          }
          .blog-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </section>
  );
}