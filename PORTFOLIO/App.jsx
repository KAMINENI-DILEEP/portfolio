const { useState, useEffect } = React;

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [formStatus, setFormStatus] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const roles = ["Student","Learner","Problem Solver"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        if (darkMode) {
            document.body.className = 'dark-mode';
        } else {
            document.body.className = 'light-mode';
        }

        const roleInterval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);

        return () => clearInterval(roleInterval);
    }, [darkMode]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xvzevjlw", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setFormStatus(true);
                form.reset();
                setTimeout(() => setFormStatus(false), 5000);
            } else {
                alert("There was a problem submitting your form.");
            }
        } catch (error) {
            alert("There was a problem submitting your form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="header">
                <a href="#" className="logo">DK</a>
                
                {/* Mobile Hamburger Menu Icon */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
                </div>

                <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                    <a href="#home" className="active" onClick={() => setMenuOpen(false)}>
                        <img src={darkMode ? "profile-dark.jpg" : "profile-light.jpg"} alt="" className="nav-thumb" /> Home
                    </a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=100&auto=format&fit=crop&q=60" alt="" className="nav-thumb" /> About
                    </a>
                    <a href="#journey" onClick={() => setMenuOpen(false)}>
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=60" alt="" className="nav-thumb" /> Journey
                    </a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&auto=format&fit=crop&q=60" alt="" className="nav-thumb" /> Skills
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        <img src="https://images.unsplash.com/photo-1423784346385-c1d4dac9093a?w=100&auto=format&fit=crop&q=60" alt="" className="nav-thumb" /> Contact
                    </a>
                    <i 
                        className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} 
                        id="darkMode-icon" 
                        onClick={() => {
                            setDarkMode(!darkMode);
                            setMenuOpen(false);
                        }}
                    ></i>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Hi, I'm Dileep Kamineni</h1>
                    <h3 className="rotating-role">And I'm a <span>{roles[currentRoleIndex]}</span></h3>
                    <p>Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning. Experienced in building automation and software apps.</p>
                    <div className="btn-box">
                        <a href="#contact" className="btn">Hire Me</a>
                        <a href="#about" className="btn secondary">Let's Talk</a>
                    </div>
                    <div className="social-media">
                        <a href="https://github.com" target="_blank"><i className='bx bxl-github'></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className='bx bxl-linkedin'></i></a>
                        <a href="mailto:dileepkamineni@gmail.com"><i className='bx bxs-envelope'></i></a>
                    </div>
                </div>
                <div className="hero-img-container">
                    <img 
                        src={darkMode ? "profile-dark.jpg" : "profile-light.jpg"} 
                        alt="Dileep Kamineni" 
                        className="hero-img" 
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="section" id="about">
                <h2 className="heading">About <span>Me</span></h2>
                <div className="about-content">
                    <p>
                        As a Computer Science Engineering graduate, I combine solid technical skills with a passion for building smart automation, interactive web apps, and IoT hardware prototypes.
                    </p>
                    <p>Based in Bangalore, I love creating clean, efficient solutions to real-world problems.</p>
                    <a href="Resume.pdf" download className="btn">Download Resume</a>
                </div>
            </section>

            {/* Journey Section */}
            <section className="section" id="journey">
                <h2 className="heading">My <span>Journey</span></h2>
                
                <div className="education-triangle">
                    <h3 className="education-heading">Education</h3>
                    <div className="triangle-top">
                        <div className="journey-item">
                            <span className="year">Expected 2027</span>
                            <h4>Siddharth Institute of Engineering and Technology</h4>
                            <p><strong>B.Tech in Computer Science Engineering</strong><br/>Specialization in AI & ML | Puttur, AP</p>
                        </div>
                    </div>
                    <div className="triangle-bottom">
                        <div className="journey-item">
                            <span className="year">Completed</span>
                            <h4>Narayana Junior College</h4>
                            <p><strong>Intermediate (MPC)</strong><br/>Pulivendula, Andhra Pradesh</p>
                        </div>
                        <div className="journey-item">
                            <span className="year">Completed</span>
                            <h4>New Vikas EM High School</h4>
                            <p><strong>S.S.C (Secondary School Certificate)</strong><br/>Pulivendula, Andhra Pradesh</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>
                
                <div className="skills-triangle">
                    <div className="skills-triangle-top">
                        <div className="skill-box">
                            <h3>Programming Languages</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Core Java</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-triangle-bottom">
                        <div className="skill-box">
                           <h3>Web Technologies</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">HTML</span>
                                <span className="skill-tag">CSS</span>
                                <span className="skill-tag">JDBC</span>
                                <span className="skill-tag">MySQL</span>
                            </div>
                        </div>
                        <div className="skill-box">
                           <h3>Tools & Soft Skills</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Visual Studio Code</span>
                                <span className="skill-tag">GitHub</span>
                                <span className="skill-tag">Problem Solving</span>
                                <span className="skill-tag">Team Management</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section" id="contact">
                <div className="contact-wrapper-ref">
                    <div className="contact-left">
                        <span className="contact-subtitle">CONTACT US</span>
                        <h2>Get in touch today</h2>
                        <p>We love questions and feedback – and we're always happy to help! Here are some ways to contact us.</p>
                        
                        <div className="contact-card-item">
                            <i className='bx bx-envelope'></i>
                            <div>
                                <span className="card-label">Email</span>
                                <span className="card-value">dileepkamineni@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact-card-item">
                            <i className='bx bx-phone'></i>
                            <div>
                                <span className="card-label">Phone</span>
                                <span className="card-value">+91 9398083208</span>
                            </div>
                        </div>

                        <div className="contact-socials-row">
                            <span>Reach out to us on:</span>
                            <div className="contact-social-icons">
                                <a href="https://github.com" target="_blank"><i className='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com" target="_blank"><i className='bx bxl-twitter'></i></a>
                                <a href="https://www.instagram.com/dillu_14_" target="_blank"><i className='bx bxl-instagram'></i></a>
                                <a href="https://linkedin.com" target="_blank"><i className='bx bxl-linkedin'></i></a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-right-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Your email address" required />
                        </div>
                        <div className="form-group">
                            <label>Leave us a message</label>
                            <textarea name="message" placeholder="Write your message here..." required></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn" style={{ width: '100%', cursor: 'pointer', marginTop: '10px' }}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {formStatus && (
                            <div className="form-status">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2026 Dileep Kamineni. All rights reserved.</p>
            </footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
