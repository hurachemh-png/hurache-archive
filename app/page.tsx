"use client";

export default function Home() {
  const featuredAlbums = [
    "2R4WKIpSuNZbhNpKWGNLGA",
    "2vL97zGrI6wl7KUCvgFmmB",
    "3ZgQtt60tXnXFWukje06Af",
  ];

  const embers = Array.from({ length: 36 }, (_, index) => ({
    left: `${(index * 13) % 100}%`,
    bottom: `${8 + ((index * 17) % 45)}%`,
    delay: `${(index * 0.4) % 7}s`,
    duration: `${4 + (index % 5)}s`,
  }));

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #030303;
          color: #f4ead2;
          font-family: Georgia, "Times New Roman", serif;
          overflow-x: hidden;
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fogDriftOne {
          0% { transform: translateX(-25%) translateY(0); opacity: 0.6; }
          50% { transform: translateX(22%) translateY(-5%); opacity: 0.95; }
          100% { transform: translateX(-25%) translateY(0); opacity: 0.6; }
        }

        @keyframes fogDriftTwo {
          0% { transform: translateX(20%) translateY(4%); opacity: 0.45; }
          50% { transform: translateX(-20%) translateY(-4%); opacity: 0.8; }
          100% { transform: translateX(20%) translateY(4%); opacity: 0.45; }
        }

        @keyframes emberRise {
          0% {
            transform: translateY(55px) translateX(0) scale(0.7);
            opacity: 0;
          }

          15% {
            opacity: 0.9;
          }

          70% {
            opacity: 0.75;
          }

          100% {
            transform: translateY(-180px) translateX(35px) scale(1.35);
            opacity: 0;
          }
        }

        @keyframes titleBreath {
          0%, 100% {
            text-shadow:
              0 0 28px rgba(212,175,55,0.34),
              0 0 70px rgba(212,175,55,0.12);
          }

          50% {
            text-shadow:
              0 0 48px rgba(212,175,55,0.7),
              0 0 110px rgba(212,175,55,0.24);
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(212,175,55,0);
          }

          50% {
            box-shadow: 0 0 22px rgba(212,175,55,0.34);
          }
        }

        .hero-bg {
          animation: slowZoom 24s ease-in-out infinite alternate;
        }

        .fog-layer-one {
          animation: fogDriftOne 11s ease-in-out infinite;
        }

        .fog-layer-two {
          animation: fogDriftTwo 15s ease-in-out infinite;
        }

        .ember {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.95);
          box-shadow:
            0 0 14px rgba(212, 175, 55, 1),
            0 0 30px rgba(212, 175, 55, 0.35);
          animation-name: emberRise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .title-breath {
          animation: titleBreath 4s ease-in-out infinite;
        }

        .gold-card {
          transition: all 0.35s ease;
        }

        .gold-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 45px rgba(212, 175, 55, 0.22);
          border-color: rgba(212, 175, 55, 0.7);
        }

        .archive-button {
          transition: all 0.3s ease;
          animation: buttonPulse 5s ease-in-out infinite;
        }

        .archive-button:hover {
          box-shadow: 0 0 28px rgba(212, 175, 55, 0.58);
          transform: translateY(-2px);
        }
      `}</style>

      <main>
        
<a
href="#subscribe"
target="_self"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    background: "#d4af37",
    color: "#000",
    padding: "10px 16px",
    borderRadius: "25px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textDecoration: "none",
  }}
>
  SUBSCRIBE FOR MORE
</a>

        <section style={hero}>
          <div className="hero-bg" style={heroImage}></div>

          <div className="fog-layer-one" style={fogLayerOne}></div>
          <div className="fog-layer-two" style={fogLayerTwo}></div>

          <div style={emberLayer}>
            {embers.map((ember, index) => (
              <span
                key={index}
                className="ember"
                style={{
                  left: ember.left,
                  bottom: ember.bottom,
                  animationDelay: ember.delay,
                  animationDuration: ember.duration,
                }}
              />
            ))}
          </div>

          <div style={heroOverlay}></div>

          <div style={heroContent}>
            <img src="/logo.png" alt="Hurache Logo" style={logo} />

            <p style={eyebrow}>MUSIC • ART • IDEAS</p>

            <h1 className="title-breath" style={title}>
              HURACHE ARCHIVE
            </h1>

            <p style={subtitle}>
              A living archive of public releases, selected transmissions and
              deeper creative work.
            </p>

            <div style={buttonRow}>
              <a href="#main-archive" style={outlineButton} className="archive-button">
                MAIN ARCHIVE
              </a>

              <a href="#featured-releases" style={outlineButton} className="archive-button">
                FEATURED RELEASES
              </a>

              <a
                href="https://mysticmike.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                style={goldButton}
                className="archive-button"
              >
                INNER ARCHIVE
              </a>
            </div>
          </div>
        </section>

        <section style={pageBody}>
          <section id="main-archive" style={panel} className="gold-card">
            <h2 style={sectionTitle}>MAIN ARCHIVE</h2>

            <p style={sectionText}>
              Public music releases and core Hurache transmissions.
            </p>

            <div style={embedCard}>
              <iframe
                style={{ borderRadius: "16px" }}
                src="https://open.spotify.com/embed/artist/77tixe8RClCX6w2Vk21aFi"
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </section>

          <section id="featured-releases" style={panel} className="gold-card">
            <h2 style={sectionTitle}>FEATURED RELEASES</h2>

            <p style={sectionText}>Selected projects from the archive.</p>

            {featuredAlbums.map((album) => (
              <div key={album} style={embedCard}>
                <iframe
                  style={{ borderRadius: "16px" }}
                  src={`https://open.spotify.com/embed/album/${album}`}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            ))}
          </section>

          <section id="inner-archive" style={innerPanel} className="gold-card">
            <h2 style={innerTitle}>INNER ARCHIVE</h2>

            <p style={innerText}>
              Essays, archive fragments, unreleased work, visual studies and
              experimental material.
            </p>

            <p style={innerText}>
              The public archive contains the signal.
              <br />
              The inner archive contains the process.
            </p>

            <a
              href="https://mysticmike.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={innerButton}
              className="archive-button"
            >
              ENTER INNER ARCHIVE
            </a>
          </section>
        </section>


<section style={{ textAlign: "center", padding: "50px 20px" }}>
  <h2 style={{ color: "#d4af37", marginBottom: "15px" }}>
    BIG SKAT — CONCEPT MATERIAL
  </h2>
  <p style={{ color: "#f1d783", marginBottom: "25px" }}>
    Listen to the album and download it for free.
  </p>
  <iframe
   style={{ border: 0, maxWidth: "100%", display: "block", margin: "0 auto" }}
    src="https://bandcamp.com/EmbeddedPlayer/album=3604565823/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
    width="350"
    height="470"
    title="Big Skat — Concept Material"
    loading="lazy"
  />
</section>
<section id="subscribe" style={{ textAlign: "center", padding: "50px 20px" }}>
  <h2 style={{ color: "#d4af37", marginBottom: "15px" }}>
    SUBSCRIBE TO THE INNER ARCHIVE
  </h2>
  <p style={{ color: "#f1d783", marginBottom: "25px" }}>
    Independent writing, investigations and creative transmissions.
  </p>
  <iframe
  className="mx-auto block"
    src="https://mysticmike.substack.com/embed"
    width="480"
    height="320"
    style={{ border: "1px solid #d4af37", maxWidth: "100%" }}
    title="Subscribe to Hurache"
  />
</section>
      
      </main>
    </>
  );
}

const gold = "#d4af37";
const softGold = "#f1d783";

const hero = {
  position: "relative" as const,
  minHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
};

const heroImage = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: "url('/hero.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 0,
};

const fogLayerOne = {
  position: "absolute" as const,
  inset: "-18%",
  background:
    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.55), transparent 30%), radial-gradient(circle at 70% 45%, rgba(212,175,55,0.38), transparent 32%)",
  filter: "blur(28px)",
  zIndex: 1,
};

const fogLayerTwo = {
  position: "absolute" as const,
  inset: "-18%",
  background:
    "radial-gradient(circle at 50% 65%, rgba(255,255,255,0.42), transparent 35%), radial-gradient(circle at 85% 35%, rgba(212,175,55,0.3), transparent 28%)",
  filter: "blur(36px)",
  zIndex: 1,
};

const emberLayer = {
  position: "absolute" as const,
  inset: 0,
  zIndex: 2,
  pointerEvents: "none" as const,
};

const heroOverlay = {
  position: "absolute" as const,
  inset: 0,
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.38), rgba(0,0,0,0.74)), radial-gradient(circle at center, rgba(212,175,55,0.12), transparent 55%)",
  zIndex: 3,
};

const heroContent = {
  position: "relative" as const,
  zIndex: 4,
  maxWidth: "920px",
  padding: "40px 18px",
};

const logo = {
  width: "140px",
  marginBottom: "22px",
  filter: "drop-shadow(0 0 30px rgba(212,175,55,0.34))",
};

const eyebrow = {
  color: softGold,
  letterSpacing: "5px",
  fontSize: "13px",
  marginBottom: "18px",
};

const title = {
  color: "#fff5d7",
  fontSize: "clamp(46px, 10vw, 86px)",
  letterSpacing: "8px",
  margin: "0 0 20px",
};

const subtitle = {
  color: "#e5dcc8",
  fontSize: "18px",
  lineHeight: 1.7,
  maxWidth: "680px",
  margin: "0 auto 34px",
};

const buttonRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap" as const,
  justifyContent: "center",
};

const outlineButton = {
  padding: "14px 22px",
  borderRadius: "999px",
  border: `1px solid ${gold}`,
  color: softGold,
  textDecoration: "none",
  background: "rgba(0,0,0,0.58)",
  letterSpacing: "2px",
  fontSize: "13px",
};

const goldButton = {
  padding: "14px 22px",
  borderRadius: "999px",
  border: `1px solid ${gold}`,
  color: "#050505",
  textDecoration: "none",
  background: gold,
  fontWeight: "bold",
  letterSpacing: "2px",
  fontSize: "13px",
};

const pageBody = {
  minHeight: "100vh",
  padding: "70px 14px 90px",
  background:
    "radial-gradient(circle at top, rgba(80,60,18,0.28) 0%, #030303 55%, #000 100%)",
};

const panel = {
  maxWidth: "950px",
  margin: "0 auto 58px",
  padding: "28px",
  borderRadius: "26px",
  background: "rgba(5,5,5,0.86)",
  border: "1px solid rgba(212,175,55,0.34)",
  boxShadow: "0 0 40px rgba(0,0,0,0.65)",
};

const sectionTitle = {
  textAlign: "center" as const,
  color: gold,
  letterSpacing: "5px",
  marginBottom: "14px",
};

const sectionText = {
  textAlign: "center" as const,
  color: "#cfc6b1",
  marginBottom: "28px",
  lineHeight: 1.6,
};

const embedCard = {
  marginBottom: "26px",
  padding: "10px",
  borderRadius: "24px",
  background:
    "linear-gradient(145deg, rgba(212,175,55,0.16), rgba(255,255,255,0.035))",
  border: "1px solid rgba(212,175,55,0.18)",
};

const innerPanel = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "38px 28px",
  borderRadius: "26px",
  background: "rgba(5,5,5,0.9)",
  border: "1px solid rgba(212,175,55,0.45)",
  textAlign: "center" as const,
  boxShadow: "0 0 60px rgba(212,175,55,0.12)",
};

const innerTitle = {
  color: gold,
  letterSpacing: "5px",
  marginBottom: "24px",
};

const innerText = {
  color: "#d8d0bd",
  lineHeight: 1.75,
  fontSize: "16px",
};

const innerButton = {
  display: "inline-block",
  marginTop: "26px",
  padding: "15px 28px",
  borderRadius: "999px",
  color: "#050505",
  border: `1px solid ${gold}`,
  textDecoration: "none",
  background: gold,
  fontWeight: "bold",
  letterSpacing: "2px",
};