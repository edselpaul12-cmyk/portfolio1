"use client";

import { useState, useEffect, FormEvent } from "react";

const myEmail = "edselpaul12@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [note, setNote] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    root.setAttribute(
      "data-theme",
      root.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
  }

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));

    const subject = "Portfolio message from " + name;
    const body = message + "\n\nFrom: " + name + " (" + email + ")";

    window.location.href =
      "mailto:" + myEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setNote("Opening your email app...");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <a className="logo" href="#home">Edsel Ortiz</a>
        <nav id="menu" aria-label="Sections" className={menuOpen ? "open" : ""}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="actions">
          <button className="theme-btn" id="themeBtn" type="button" aria-label="Switch theme" title="Switch theme" onClick={toggleTheme}>
            <svg className="icon-sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            <svg className="icon-moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          </button>
          <button className="menu-btn" id="menuBtn" type="button" aria-controls="menu" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="card">
            <div className="card-text">
              <h1>Edsel Paul Ortiz</h1>
              <p className="bio">Hi there! I’m Edsel, 20 years old, a 2nd-year BSIT student at Holy Cross of Davao College in Davao City, Philippines. I run an online buy and sell service for gamers, including RMT, and I’m learning JavaScript. I also do basic editing. Let’s connect!</p>
              <div className="icons">
                <a href="#contact" aria-label="Go to contact section" title="Contact me"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></a>
                <a href="#contact" aria-label="Go to contact section" title="Contact me"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></a>
              </div>
            </div>
            <div className="photo">
              <span className="initials" aria-hidden="true">EO</span>
              {/* Put profile.jpg inside the public folder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Photo of Edsel Paul Ortiz" width="320" height="320" onError={(e) => (e.currentTarget.style.display = "none")} />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <h2>About</h2>
            <p>I’m a 2nd-year BSIT student at Holy Cross of Davao College, living in Davao City. I run an online buy and sell service for gaming, and I’m learning JavaScript.</p>
            <div className="facts">
              <div className="fact"><span>Age</span>20</div>
              <div className="fact"><span>Course</span>BSIT</div>
              <div className="fact"><span>Location</span>Davao City, Philippines</div>
              <div className="fact"><span>Language</span>English</div>
              <div className="fact"><span>School</span>Holy Cross of Davao College</div>
            </div>
          </div>
        </section>

        <section id="resume" className="alt">
          <div className="wrap">
            <h2>Resume</h2>

            <h3>Education</h3>
            <div className="item">
              <div className="when">2nd year, ongoing</div>
              <div><h4>Bachelor of Science in Information Technology (BSIT)</h4><p className="sub">Holy Cross of Davao College</p></div>
            </div>

            <h3>Experience</h3>
            <div className="item">
              <div className="when">Ongoing</div>
              <div><h4>Online gaming buy and sell</h4><p className="sub">Online seller · Middleman · RMT</p><p>Online buy and sell service for gamers, including real money trading (RMT).</p></div>
            </div>

            <h3>Certifications</h3>
            <div className="item">
              <div className="when">23 May 2026</div>
              <div>
                <h4>JavaScript Essentials 1</h4>
                <p className="sub">Cisco Networking Academy with JS Institute</p>
                {/* Put ciscocert.jpg inside the public folder */}
                <a className="cert" href="/ciscocert.jpg" target="_blank" rel="noopener" title="Open full size">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/ciscocert.jpg" alt="Certificate of completion: JavaScript Essentials 1, awarded to Edsel Paul Ortiz on 23 May 2026" loading="lazy" />
                </a>
              </div>
            </div>

            <h3>Skills</h3>
            <ul className="skills">
              <li>JavaScript</li>
              <li>HTML &amp; CSS</li>
              <li>Basic editing</li>
              <li>Reselling (buy low, sell high)</li>
              <li>Customer service</li>
              <li>Middleman (buyer and seller deals)</li>
              <li>RMT</li>
            </ul>

            <h3>Projects</h3>
            <div className="item">
              <div className="when">GitHub</div>
              <div>
                <h4>StudyCards</h4>
                <p className="sub">GitHub project</p>
                <p><a href="https://github.com/edselpaul12-cmyk/StudyCards" target="_blank" rel="noopener">View on GitHub</a></p>
              </div>
            </div>
            <div className="item">
              <div className="when">GitHub</div>
              <div>
                <h4>EdselPaulOrtiz_Auth</h4>
                <p className="sub">Firebase Authentication</p>
                <p>A login and register app that uses Firebase Auth. <a href="https://github.com/edselpaul12-cmyk/EdselPaulOrtiz_Auth" target="_blank" rel="noopener">View on GitHub</a></p>
              </div>
            </div>
            <div className="item">
              <div className="when">GitHub</div>
              <div>
                <h4>my-app</h4>
                <p className="sub">Next.js</p>
                <p>A web app built with Next.js. <a href="https://github.com/edselpaul12-cmyk/my-app" target="_blank" rel="noopener">View on GitHub</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <h2>Work</h2>
            <div className="item">
              <div className="when">Ongoing</div>
              <div><h4>Online gaming buy and sell</h4><p className="sub">Online seller · Middleman · RMT</p><p>I run an online buy and sell service for gamers. I buy gaming items at a low price and resell them for more, handle real money trading (RMT), and act as a middleman between buyers and sellers, helping both sides complete safe and smooth deals.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="alt">
          <div className="wrap">
            <h2>Contact</h2>
            <p>Want to work together or just say hi? Reach me here.</p>
            <ul className="links">
              <li>Email: <a href="mailto:edselpaul12@gmail.com">edselpaul12@gmail.com</a></li>
              <li>Phone: 09690184435</li>
              <li>Facebook: <a href="https://www.facebook.com/profile.php?id=61581628923752" target="_blank" rel="noopener">Edsel Paul Ortiz</a></li>
            </ul>
            <form id="contactForm" onSubmit={sendMessage}>
              <label>Your name<input id="fName" name="name" required autoComplete="name" /></label>
              <label>Your email<input id="fEmail" name="email" type="email" required autoComplete="email" /></label>
              <label>Message<textarea id="fMsg" name="message" required /></label>
              <button className="btn primary" type="submit">Send message</button>
              <p id="formNote" role="status">{note}</p>
            </form>
          </div>
        </section>
      </main>

      <footer>© {year} Edsel Paul Ortiz</footer>
    </>
  );
}