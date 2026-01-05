export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <h2>Projects</h2>

      <div className="card">
        <h3>Scalable E-Commerce Management System</h3>
        <ul>
          <li>Designed modular Spring Boot REST APIs for authentication, product, cart, order, and payment workflows</li>
          <li>Implemented JWT authentication and role-based access control</li>
          <li>Integrated Razorpay payment gateway and validated APIs using Postman</li>
          <li>Built React frontend for product listing, cart, and order tracking</li>
        </ul>
        <p><b>Tech:</b> Java, Spring Boot, React, MySQL, JWT</p>
      </div>

      <div className="card">
        <h3>User Authentication & Registration System</h3>
        <ul>
          <li>Built Spring Boot MVC application with layered architecture</li>
          <li>Implemented server-side validation and secure data persistence</li>
          <li>Designed responsive authentication UI using HTML and CSS</li>
        </ul>
        <p><b>Tech:</b> Java, Spring Boot, JPA, MySQL</p>
      </div>
    </section>
  );
}
