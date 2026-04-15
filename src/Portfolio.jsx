import { useState, useEffect, useRef } from "react";

const NAV = ["My Portfolio"];
// Work", "About", "Skills", "Contact


const PROJECTS = [
  {
    id: "01",
    title: "E-commerce website",
    subtitle: "Gadaget Wearable Shopping website",
    year: "2026",
    tags: ["React","Node.js", "Firebase", "Tailwind"],
    desc: "A full-stack e-commerce platform for wearable gadgets. Features include product browsing, cart management, and secure checkout. Built with React frontend, Node.js backend, and Firebase for authentication and data storage.",
    color: "#c8f542",
    link: "https://leafpremium.netlify.app/"
  },
  {
    id: "02",
    title: "Student Management",
    subtitle: "Student Management System",
    year: "2026",
    tags: ["React"],
    desc: "A student management system built using React. It allows users to add, edit, and delete student records, as well as view a list of all students,age,subject,skill,. The application is designed for educational institutions to manage their student data efficiently.",
    color: "#42c8f5",
    link: "https://studenttool1.netlify.app/",
  },
  // {
  //   id: "03",
  //   title: "Attendify",
  //   subtitle: "Attendance Analytics Dashboard",
  //   year: "2023",
  //   tags: ["Node.js", "MongoDB", "Chart.js"],
  //   desc: "Full-stack dashboard showing attendance trends, subject-wise breakdown, and bunk forecasting. Built for personal use, used by 200+ students.",
  //   color: "#f542a7",
  //   link: "#",
  // },
  // {
  //   id: "04",
  //   title: "DevDiary",
  //   subtitle: "Coding Progress Tracker",
  //   year: "2023",
  //   tags: ["React", "LocalStorage", "CSS"],
  //   desc: "Track your daily coding streak, categorize problems solved, and visualize your growth over time with heatmaps.",
  //   color: "#f5a742",
  //   link: "#",
  // },
];

const SKILLS = [
  { cat: "Languages", items: ["C++", "Python", "JavaScript", "SQL"] },
  { cat: "Frontend", items: ["React", "HTML/CSS", "Tailwind"] },
  { cat: "Backend", items: ["Node.js",] },
  { cat: "Tools", items: ["Git","MongoDB",] },
];

const EXPERIENCE = [
  {
    role: "web dev",
    org: "own projects",
    period: "Mar – Apr 2026",
    desc: "Built and deployed a full-stack e-commerce website using React, Node.js, and Firebase. Implemented features like product browsing, cart management, and secure checkout. The site is live and used by 100+ users.",
  },
  // {
  //   role: "Web Dev Lead",
  //   org: "GDSC AKTU Chapter",
  //   period: "2023 – 2024",
  //   desc: "Led a team of 12, organized 4 workshops and 2 hackathons. Managed the club's official website.",
  // },
];

function useTypewriter(text, speed = 60, delay = 500) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text]);
  return displayed;
}

function Cursor() {
  const [v, setV] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setV(x => !x), 530);
    return () => clearInterval(iv);
  }, []);
  return <span style={{ opacity: v ? 1 : 0, color: "#c8f542" }}>_</span>;
}

export default function Portfolio() {
  const [active, setActive] = useState("Work");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [time, setTime] = useState("");
  const name = useTypewriter("Anurag", 80, 300);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }));
    };
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  const bg = "#0d0d0d";
  const surface = "#141414";
  const border = "#222";
  const accent = "#c8f542";
  const textPrimary = "#f0f0f0";
  const textMuted = "#666";

  const sectionStyle = {
    minHeight: "100vh",
    padding: "100px 0 60px",
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#0d0d0d;}
        ::-webkit-scrollbar-thumb{background:#333;border-radius:2px;}
        @keyframes fadeup{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        @keyframes fadein{from{opacity:0;}to{opacity:1;}}
        .fadeup{animation:fadeup 0.7s cubic-bezier(.22,1,.36,1) both;}
        .fadein{animation:fadein 0.5s ease both;}
        .nav-link{text-decoration:none;font-family:'DM Mono',monospace;font-size:13px;letter-spacing:0.08em;color:#555;transition:color 0.2s;}
        .nav-link:hover,.nav-link.active{color:#f0f0f0;}
        .proj-row{border-top:1px solid #222;cursor:pointer;transition:background 0.2s;}
        .proj-row:hover{background:#141414;}
        .skill-pill{display:inline-block;padding:6px 14px;border:1px solid #2a2a2a;border-radius:99px;font-family:'DM Mono',monospace;font-size:12px;color:#888;margin:4px;transition:all 0.2s;}
        .skill-pill:hover{border-color:#c8f542;color:#c8f542;}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#c8f542;color:#0d0d0d;font-family:'DM Mono',monospace;font-size:13px;font-weight:500;letter-spacing:0.04em;border:none;border-radius:4px;cursor:pointer;text-decoration:none;transition:opacity 0.2s;}
        .btn:hover{opacity:0.85;}
        .btn-ghost{background:transparent;color:#f0f0f0;border:1px solid #333;}
        .btn-ghost:hover{border-color:#555;opacity:1;}
        .tag{display:inline-block;padding:3px 10px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:4px;font-family:'DM Mono',monospace;font-size:11px;color:#555;margin-right:6px;}
        a{color:inherit;text-decoration:none;}
      `}</style>

      <div style={{ background: bg, color: textPrimary, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 48px", height: 64,
          borderBottom: `1px solid ${border}`,
          background: "rgba(13,13,13,0.92)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: accent, letterSpacing: "0.1em" }}>
            Hello,Anurag
          </div>
          <div style={{ display: "flex", gap: 36 }}>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className={`nav-link ${active === n ? "active" : ""}`}
                onClick={() => setActive(n)}>{n.toLowerCase()}</a>
            ))}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: textMuted }}>
            IST {time}
          </div>
        </nav>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

          {/* HERO */}
          <section style={{ ...sectionStyle, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh" }}>
            <div className="fadeup" style={{ animationDelay: "0.1s" }}>
              <div style={{ fontFamily: "'Arial', Arial,", fontSize: 12, color: textMuted, letterSpacing: "0.15em", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 28, height: 1, background: textMuted }} />
                BTech CSE-Ai · 3rd Year · AKTU
              </div>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 400,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: textPrimary,
                marginBottom: 4,
              }}>
                {name}<Cursor />
              </h1>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.02,
                color: textMuted,
                marginBottom: 48,
              }}>
                builds for the web.
              </h2>
            </div>

            <div className="fadeup" style={{ animationDelay: "0.35s", display: "flex", alignItems: "flex-start", gap: 64, flexWrap: "wrap" }}>
              <p style={{ maxWidth: 480, fontSize: 17, lineHeight: 1.75, color: "#999", fontWeight: 300 }}>
                A developer who cares about clean code and interfaces that actually make sense. Currently exploring system design and backend architecture.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#work" className="btn">View Projects →</a>
                <a href="#contact" className="btn btn-ghost">Get in touch</a>
              </div>
            </div>

            {/* Status bar */}
            <div className="fadeup" style={{
              animationDelay: "0.5s",
              marginTop: 80,
              paddingTop: 32,
              borderTop: `1px solid ${border}`,
              display: "flex", gap: 48, flexWrap: "wrap",
            }}>
              {[
                { label: "Status", val: "Open to Internships" },
                { label: "Location", val: "Noida, UP" },
                { label: "Available", val: "Jun 2026 onwards" },
                { label: "GPA", val: "7.1 / 10" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.1em", marginBottom: 6 }}>{s.label.toUpperCase()}</div>
                  <div style={{ fontSize: 14, color: s.label === "Status" ? accent : textPrimary, fontWeight: 500 }}>{s.val}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section id="work" style={{ ...sectionStyle }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.15em", marginBottom: 16 }}>02 — SELECTED WORK</div>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400 }}>Projects</h2>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: textMuted }}>
                {PROJECTS.length} projects
              </div>
            </div>

            <div>
              {PROJECTS.map((p, i) => (
                <div key={p.id}
                  className="proj-row"
                  onMouseEnter={() => setHoveredProject(p.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    padding: "28px 0",
                    borderBottom: `1px solid ${border}`,
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: 24,
                    alignItems: "center",
                    borderLeft: hoveredProject === p.id ? `3px solid ${p.color}` : "3px solid transparent",
                    paddingLeft: hoveredProject === p.id ? 20 : 0,
                    transition: "all 0.25s cubic-bezier(.22,1,.36,1)",
                  }}
                >
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: textMuted }}>{p.id}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 400, fontFamily: "'DM Serif Display', serif", color: hoveredProject === p.id ? p.color : textPrimary, transition: "color 0.2s" }}>
                        {p.title}
                      </h3>
                      <span style={{ fontSize: 14, color: textMuted, fontStyle: "italic" }}>{p.subtitle}</span>
                    </div>
                    {hoveredProject === p.id && (
                      <p className="fadein" style={{ fontSize: 14, color: "#888", maxWidth: 560, lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
                    )}
                    <div>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: textMuted, marginBottom: 8 }}>{p.year}</div>
                    <a href={p.link} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 12, color: accent,
                      opacity: hoveredProject === p.id ? 1 : 0, transition: "opacity 0.2s",
                    }}>View →</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" style={{ ...sectionStyle }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.15em", marginBottom: 16 }}>03 — ABOUT</div>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, marginBottom: 32, lineHeight: 1.1 }}>
                  Developer,<br />
                  <span style={{ fontStyle: "italic", color: textMuted }}>not just a student.</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "#999", fontWeight: 300, marginBottom: 24 }}>
                  I'm Anurag — a 3rd year CSE-Ai student who got hooked on building things early. Started with a simple HTML page in sem 1, now I'm shipping full-stack products that people actually use.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "#999", fontWeight: 300, marginBottom: 40 }}>
                  I care about the details — clean APIs, fast UIs, readable code. Currently exploring distributed systems and trying to get better at system design every week.
                </p>
                <a href="#contact" className="btn">Let's talk →</a>
              </div>

              <div>
                {/* Experience */}
                <div style={{ marginBottom: 48 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.12em", marginBottom: 24 }}>EXPERIENCE</div>
                  {EXPERIENCE.map((e, i) => (
                    <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < EXPERIENCE.length - 1 ? `1px solid ${border}` : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                        <div>
                          <span style={{ fontSize: 16, fontWeight: 500, color: textPrimary }}>{e.role}</span>
                          <span style={{ color: accent, margin: "0 8px" }}>@</span>
                          <span style={{ fontSize: 15, color: "#aaa" }}>{e.org}</span>
                        </div>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted }}>{e.period}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>{e.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div style={{ padding: "24px", background: surface, borderRadius: 8, border: `1px solid ${border}` }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.12em", marginBottom: 16 }}>EDUCATION</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: textPrimary, marginBottom: 4 }}>B.Tech in Computer Science in Artificial Intelligence</div>
                  <div style={{ fontSize: 14, color: "#888", marginBottom: 12 }}>Dr. A.P.J. Abdul Kalam Technical University</div>
                  <div style={{ display: "flex", gap: 24 }}>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, marginBottom: 4 }}>BATCH</div>
                      <div style={{ fontSize: 14, color: textPrimary }}>2023 – 2027</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, marginBottom: 4 }}>GPA</div>
                      <div style={{ fontSize: 14, color: accent }}>7.1 / 10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" style={{ ...sectionStyle }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.15em", marginBottom: 16 }}>04 — SKILLS</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, marginBottom: 56 }}>What I work with</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
              {SKILLS.map(group => (
                <div key={group.cat}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 11, color: accent,
                    letterSpacing: "0.12em", marginBottom: 20, paddingBottom: 12,
                    borderBottom: `1px solid ${border}`,
                  }}>{group.cat.toUpperCase()}</div>
                  <div>
                    {group.items.map(item => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications / Achievements row */}
            <div style={{ marginTop: 80, padding: "40px 0", borderTop: `1px solid ${border}` }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.12em", marginBottom: 28 }}>ACHIEVEMENTS</div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  "UIDAI Hackathon ",
                  "Build own E-commerce website using react.js,Node.js and Mongobd",
                  "Created a Ai chatBoat"
                  
                ].map(ach => (
                  <div key={ach} style={{
                    padding: "12px 20px", background: surface,
                    border: `1px solid ${border}`, borderRadius: 6,
                    fontSize: 13, color: "#aaa",
                  }}>{ach}</div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{ ...sectionStyle }}>
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.15em", marginBottom: 16 }}>05 — CONTACT</div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 400, lineHeight: 1.05,
                marginBottom: 28,
              }}>
                Let's build<br />
                <span style={{ fontStyle: "italic", color: textMuted }}>something real.</span>
              </h2>
              <p style={{ fontSize: 16, color: "#888", lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
                Currently looking for SDE internship opportunities.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
                <a href="mailto:anuragk06469@gmail.com" className="btn">Send Email →</a>
                <a href="https://linkedin.com/anuragkumar002" className="btn btn-ghost">LinkedIn</a>
                <a href="https://github.com/141anuragkumar" className="btn btn-ghost">GitHub</a>
              </div>

              <div style={{ borderTop: `1px solid ${border}`, paddingTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
                {[
                  { label: "Email", val: "Anuragk06469@gmail.com" },
                  
                  { label: "Location", val: "Noida, India" },
                ].map(c => (
                  <div key={c.label}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: textMuted, letterSpacing: "0.1em", marginBottom: 8 }}>{c.label.toUpperCase()}</div>
                    <div style={{ fontSize: 14, color: "#aaa" }}>{c.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer style={{
          borderTop: `1px solid ${border}`,
          padding: "24px 48px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
          background: surface,
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: textMuted }}>
            Anurag kumar
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: textMuted }}>
            Designed & developed by Anurag.
          </div>
        </footer>
      </div>
    </>
  );
}