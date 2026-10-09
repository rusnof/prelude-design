import { useState, useRef, useEffect, useLayoutEffect } from "react";



const IMAGES = {

  hero:      { src: new URL("./assets/hero.jpg", import.meta.url).href, tone: "#DDD8CC", note: "Hand-troweled plaster wall, raking light, vertical crop" },

  immersive: { src: "/prelude/immersive.jpg", tone: "#CFC9BB", note: "Full-width interior with finished wall, wide crop" },

  material:  { src: "/prelude/material.jpg", tone: "#D9D3C5", note: "Macro: metallic leaf over glaze, layered edge" },

  materialB: { src: "/prelude/materialB.jpg", tone: "#E4DFD4", note: "Brush and pigment on mixing board" },

  w1: { src: "/prelude/w1.jpg", tone: "#D6D0C2", note: "Project 01 — wall in situ" },

  w2: { src: "/prelude/w2.jpg", tone: "#CDC7B8", note: "Project 02 — detail" },

  w3: { src: "/prelude/w3.jpg", tone: "#E0DBCF", note: "Project 03 — wall in situ" },

  w4: { src: "/prelude/w4.jpg", tone: "#D2CCBE", note: "Project 04 — detail" },

  studio: { src: "/prelude/studio.jpg", tone: "#D4CEC0", note: "The artist at work in the Riga studio" },

  j1: { src: "/prelude/j1.jpg", tone: "#DAD4C7", note: "Journal — objects" },

  j2: { src: "/prelude/j2.jpg", tone: "#CFC9BC", note: "Journal — materials" },

  j3: { src: "/prelude/j3.jpg", tone: "#E1DCD0", note: "Journal — spaces" },

  j4: { src: "/prelude/j4.jpg", tone: "#D5CFC2", note: "Journal — people" },

  s1: { src: "/prelude/s1.jpg", tone: "#D8D2C5", note: "Studio floor, samples" },

  s2: { src: "/prelude/s2.jpg", tone: "#CBC5B7", note: "Hands, pigment" },

  s3: { src: "/prelude/s3.jpg", tone: "#E2DDD2", note: "Sample on site" },

  s4: { src: "/prelude/s4.jpg", tone: "#D1CBBD", note: "Tools" },

  s5: { src: "/prelude/s5.jpg", tone: "#DBD5C8", note: "Wall, late light" },

};



const WORKS = [

  {

    slug: "villa-mezaparks", n: "01", name: "Villa Mežaparks", title: ["VILLA", "MEŽAPARKS"], img: "w1", cls: "w-a",

    tech: "Lime plaster, mineral glaze, hand-burnished",

    place: "Mežaparks, Riga", year: "2024", area: "86 m² of wall surface",

    heading: "Light, slowly",

    list: ["Made by hand", "Made once", "Riga studio"],

    lead: "A pre-war villa with north-facing rooms and very little direct sun. The brief was to give the main hall depth without making it darker.",

    body: [

      "We built the walls from three coats of lime plaster, each troweled thin and burnished until the surface took on a soft, stone-like sheen. A mineral glaze, tinted warm grey, pulls the light across the room as the day moves.",

      "Samples were tested on site for two weeks before work began. The final surface was made in sections over five weeks, with every joint matched by hand so that no seam can be found.",

      "The stair hall, which receives light only from the north, was treated last. Here the glaze is slightly warmer, so that the plaster holds colour on grey afternoons and never turns cold.",

    ],

    quote: "The room looks different every hour and is never louder.",

    credit: "Client, Villa Mežaparks",

    caps: ["Main hall, morning light.", "Burnished edge, detail.", "Corner junction, hand-matched.", "The stair hall takes its light from the north.", "Glaze test on lime plaster.", "The main hall at dusk.", "North wall, finished.", "Sample boards in the Riga studio."],

    kinds: ["plaster", "streak"],

  },

  {

    slug: "hotel-kalpaks", n: "02", name: "Hotel Kalpaks, Lounge", title: ["HOTEL", "KALPAKS"], img: "w2", cls: "w-b",

    tech: "Water-based paint, 23ct gold leaf, six layers",

    place: "Old Town, Riga", year: "2025", area: "42 m² of wall surface",

    heading: "Gold, held low",

    list: ["Made by hand", "Six layers", "Riga studio"],

    lead: "A hotel lounge that needed warmth after dark. Candlelight, brass and low ceilings suggested gold, but not the obvious kind.",

    body: [

      "Gold leaf was laid in broken sheets over a deep, water-based ground, then glazed and partly removed. The wall keeps its tone in dim light and opens up where the lamps reach it.",

      "Six layers were needed to reach the depth we wanted. Each was left to cure fully before the next, which set the pace of the whole project.",

      "Lamps were placed after the wall was finished, not before. We adjusted the final glaze on site, at night, with the lighting on, until the surface read evenly from every seat.",

    ],

    quote: "At night the wall seems to hold the light a little longer.",

    credit: "Hotel management",

    caps: ["Lounge wall at evening.", "Leaf edge, macro.", "Ground colour test.", "The seating alcove takes the warmest light.", "Gold leaf before glazing.", "Full wall with the lamps on.", "Detail at the lounge entrance.", "Layers, shown in section."],

    kinds: ["leaf", "streak"], accent: "#C2AA72",

  },

  {

    slug: "private-residence-jurmala", n: "03", name: "Private Residence, Jūrmala", title: ["JŪRMALA", "RESIDENCE"], img: "w3", cls: "w-c",

    tech: "Pigmented plaster, wax finish",

    place: "Jūrmala", year: "2023", area: "120 m² of wall surface",

    heading: "Sand and salt",

    list: ["Made by hand", "Colour in the plaster", "Riga studio"],

    lead: "A house between pine forest and sea. The walls had to feel like sand and salt air without imitating either.",

    body: [

      "Pigments were mixed into the plaster itself, so the colour runs through the material rather than sitting on top. A final wax coat gives the surface a low, even glow.",

      "Because the house is lived in all year, every wall was finished to be touched, repaired and left to age gracefully.",

      "Window reveals and corners were finished by hand rather than taped, which leaves a slightly soft edge. It is the detail most visitors notice without knowing why.",

    ],

    quote: "It feels like it has always been part of the house.",

    credit: "Client, Jūrmala",

    caps: ["Living room, afternoon.", "Plaster grain, detail.", "Hallway.", "The stair wall catches the evening sun.", "Pigment samples.", "Living room, early light.", "Window reveal, finished by hand.", "Bedroom, early light."],

    kinds: ["fine", "plaster"],

  },

  {

    slug: "gallery-stairwell", n: "04", name: "Gallery Stairwell", title: ["GALLERY", "STAIRWELL"], img: "w4", cls: "w-d",

    tech: "Oxidised copper leaf, sealed matte",

    place: "Riga", year: "2025", area: "64 m² across three floors",

    heading: "One wall, three floors",

    list: ["Made by hand", "One continuous wall", "Riga studio"],

    lead: "A stairwell that connects three floors of a gallery and is seen from every one of them. The wall had to read as a single surface in motion.",

    body: [

      "Copper leaf was oxidised by hand in stages, with greens, browns and reds developing in the layers. The surface was sealed matte to keep the colour from changing further.",

      "The wall was made as one continuous composition, planned on paper first and then worked floor by floor.",

      "A matte sealer fixed the final colour. We kept a small panel of every stage, so any future repair can be matched to the original.",

    ],

    quote: "You see a different wall from every landing.",

    credit: "Gallery director",

    caps: ["Stairwell, ground floor.", "Oxidation, macro.", "Second landing.", "Looking up from the entrance floor.", "Oxidation test panels.", "The top-floor wall, finished.", "Looking up.", "Panel kept from every stage."],

    kinds: ["leaf", "streak"], accent: "#A56F4E",

  },

];





const PROCESS = [

  ["01", "Conversation", "We begin by listening: the architecture, the light, the way the room is lived in."],

  ["02", "Material", "Pigments, glazes and leaf are tested on sample boards, then judged in the space itself."],

  ["03", "Making", "Each surface is built by hand in layers, in the studio or on site, at the pace the material needs."],

  ["04", "Space", "The finished wall is installed and checked against the light at several hours of the day."],

];



const JOURNAL = [

  { cat: "OBJECTS", title: "The brush that outlived three studios", read: "6 min", img: "j1", cls: "j-a" },

  { cat: "MATERIALS", title: "Why gold leaf is never quite flat", read: "9 min", img: "j2", cls: "j-b" },

  { cat: "SPACES", title: "A stairwell, repainted by daylight", read: "5 min", img: "j3", cls: "j-c" },

  { cat: "PEOPLE", title: "Conversations with the architects of Riga", read: "12 min", img: "j4", cls: "j-d" },

];



const CATS = ["ALL", "OBJECTS", "MATERIALS", "SPACES", "PEOPLE"];

const REVEAL = [

  ".hero-sub", ".hero-meta", ".photo", ".sec-head", ".col-label", ".statement", ".para",

  ".caption", ".mat-head", ".mat-text", ".bespoke > .label", ".b-head", ".b-text",

  ".work-meta", ".s-head", ".pull", ".step", ".j-cat", ".j-title",

  ".c-head", ".c-info", ".foot > *",

  ".p-top", ".mg-title", ".mg-labels", ".mg-list", ".mg-block", ".mg-cap", ".folio", ".mg-end", ".p-next",

].join(",");



const NAV = ["WORKS", "STUDIO", "JOURNAL", "TEAM", "CONTACT"];



const USE_PHOTO_FILES = false;

const SHOW_CAPTIONS = false;



const KIND = {

  hero: ["plaster"], immersive: ["plaster"], material: ["leaf", "#B9A26B"],

  materialB: ["streak"], w1: ["plaster"], w2: ["leaf", "#C2AA72"],

  w3: ["fine"], w4: ["leaf", "#A56F4E"], studio: ["streak"],

  j1: ["streak"], j2: ["leaf", "#B9A26B"], j3: ["plaster"], j4: ["fine"],

  s1: ["fine"], s2: ["streak"], s3: ["plaster"], s4: ["fine"], s5: ["plaster"],

};



const GTONES = ["#D6D0C2", "#CDC7B8", "#E0DBCF", "#D2CCBE", "#DAD4C7", "#CFC9BC"];

WORKS.forEach((w) => {

  for (let i = 0; i < 9; i++) {

const id = `${w.slug}-${i}`;

    IMAGES[id] = { src: `/prelude/${id}.jpg`, tone: GTONES[(i + w.n.charCodeAt(1)) % 6], note: `${w.name} — ${i === 0 ? "lead image" : w.caps[i - 1]}` };

const base = w.kinds[0];

    KIND[id] = i % 2 === 0 ? [base, w.accent] : [w.kinds[1], w.accent];

  }

});



const rgb = (h) => [1, 3, 5].map((i) => (parseInt(h.slice(i, i + 2), 16) / 255).toFixed(3));

const layer = (freq, oct, seed, color, a, b, op) => {

const [r, g, bl] = rgb(color);

  return `<filter id="f${seed}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="${oct}" seed="${seed}"/><feColorMatrix values="0 0 0 0 ${r} 0 0 0 0 ${g} 0 0 0 0 ${bl} ${a} 0 0 0 ${b}"/></filter><rect width="1000" height="1000" filter="url(#f${seed})" opacity="${op}"/>`;

};



function texture(id) {

const { tone } = IMAGES[id];

const [kind, accent] = KIND[id] || ["plaster"];

const seed = Object.keys(IMAGES).indexOf(id) * 7 + 3;

let body = "";

  if (kind === "plaster") {

    body = layer(0.006, 5, seed, "#6B6256", 1.6, -0.6, 0.38) +

           layer(0.013, 4, seed + 1, "#FFFFFF", 1.7, -0.75, 0.55) +

           layer(0.9, 2, seed + 2, "#4A4338", 1.2, -0.4, 0.07);

  } else if (kind === "fine") {

    body = layer(0.02, 4, seed, "#6B6256", 1.5, -0.55, 0.3) +

           layer(0.6, 3, seed + 1, "#FFFFFF", 1.4, -0.55, 0.35) +

           layer(1.1, 2, seed + 2, "#4A4338", 1.2, -0.4, 0.1);

  } else if (kind === "streak") {

    body = layer("0.0025 0.05", 4, seed, "#6B6256", 1.7, -0.7, 0.4) +

           layer("0.004 0.12", 3, seed + 1, "#FFFFFF", 1.7, -0.8, 0.5) +

           layer(0.9, 2, seed + 2, "#4A4338", 1.2, -0.4, 0.06);

  } else {

    body = layer(0.007, 5, seed, "#5C5347", 1.6, -0.6, 0.45) +

           layer(0.018, 3, seed + 1, accent, 11, -5.6, 0.9) +

           layer(0.05, 2, seed + 2, "#E6D6A8", 11, -6.3, 0.5) +

           layer(0.9, 2, seed + 3, "#2E2A24", 1.2, -0.4, 0.08);

  }

const base = kind === "leaf" ? "#8E8470" : tone;

const svg = `<svg xmlns="http\://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"><rect width="1000" height="1000" fill="${base}"/>${body}</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

}



function Photo({ id, className = "", caption = true }) {

const { src, tone, note } = IMAGES[id];

const [failed, setFailed] = useState(false);

const useFile = (id === "hero" || USE_PHOTO_FILES) && src && !failed;

  return (

    <figure className={`photo ${className}`} style={{ background: tone }}>

      <img src={useFile ? src : texture(id)} alt={note} loading="lazy" onError={() => setFailed(true)} />

      {!useFile && SHOW_CAPTIONS && caption && (

        <figcaption className="plate">PHOTOGRAPH — {note}</figcaption>

      )}

    </figure>

  );

}



const parseRoute = () => {

const m = window.location.hash.match(/^#\/project\/([\w-]+)/);

  return m ? m[1] : null;

};



function Opening({ text }) {

const w = text.split(" ");

  return (

    <p>

      <span className="sc">{w.slice(0, 3).join(" ")}</span> {w.slice(3).join(" ")}

    </p>

  );

}



const teamImg = (file) => new URL(`./assets/${file}`, import.meta.url).href;

const TEAM = [
  { name: "Armands Doķis", role: "Co-founder & Artist", image: teamImg("Armands-profil-new-1.webp"), tone: "#D6D0C2" },
  { name: "Edgars Pukitis", role: "Co-founder & Finances", image: teamImg("Edgars-profil.webp"), tone: "#CDC7B8" },
  { name: "Ugis Fabriciuss", role: "Client Relations Manager", image: teamImg("Ugis-profil.webp"), tone: "#E0DBCF" },
  { name: "Ruslan Novadvorski", role: "Marketing", image: teamImg("Ruslans-profil.webp"), tone: "#D2CCBE" },
  { name: "Toms Čivlis", role: "Technical support", image: teamImg("Toms-profil.webp"), tone: "#DAD4C7" },
];

function TeamPhoto({ member }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="team-photo" style={{ background: member.tone }}>
      {!failed ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <img src={texture("hero")} alt="" aria-hidden="true" />
      )}
    </figure>
  );
}

function TeamPage() {
  return (
    <main className="team-page" id="team">
      <section className="team-intro">
        <div className="team-kicker">
          <p className="label muted">PRELUDE DESIGN</p>
          <p className="label muted">THE PEOPLE BEHIND THE WORK</p>
        </div>
        <h1 className="serif display team-title">TEAM</h1>
        <p className="body team-lead">
          A small, trusted team bringing craftsmanship, design and care to every Prelude project.
        </p>
      </section>

      <section className="team-grid" aria-label="Prelude Design team">
        {TEAM.map((member) => (
          <article className="team-member" key={member.name}>
            <TeamPhoto member={member} />
            <div className="team-meta">
              <h2 className="serif team-name">{member.name}</h2>
              <p className="label muted team-role">{member.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="team-end">
        <p className="serif team-quote">Good work is always a collaboration.</p>
        <a href="#contact" className="label view">GET IN TOUCH →</a>
      </section>
    </main>
  );
}

function ProjectPage({ project }) {

const i = WORKS.findIndex((w) => w.slug === project.slug);

const next = WORKS[(i + 1) % WORKS.length];

const id = (k) => `${project.slug}-${k}`;

const cap = (k) => project.caps[k - 1];

const paras = [project.lead, ...project.body];

const base = 20 + i * 14;

const folio = (n) => (

    <div className="folio">

      <p className="label muted">{n}    PRELUDE DESIGN    WORKS</p>

      <p className="label muted">WORKS    PRELUDE DESIGN    {n + 1}</p>

    </div>

  );



  return (

    <main className="project">

      <div className="p-top">

        <a
          href="#works"
          className="label navlink"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "#works";
          }}
        >← ALL WORKS</a>

        <span className="label muted">{project.n} / {String(WORKS.length).padStart(2, "0")}</span>

      </div>



      {/* COVER */}

      <section className="mg-cover">

        <h1 className="mg-title" aria-label={project.name}>

          <span>{project.title[0]}</span>

          <span>{project.title[1]}</span>

        </h1>

        <div className="mg-labels">

          <span className="label">{project.place}</span>

          <span className="label">{project.year}</span>

          <span className="label">{project.area}</span>

        </div>

        <div className="mg-cover-body">

          <Photo id={id(0)} className="mg-cover-img" />

          <ul className="mg-list l">

            {project.tech.split(", ").map((t) => (<li key={t} className="label">{t}</li>))}

          </ul>

          <ul className="mg-list r">

            {project.list.map((t) => (<li key={t} className="label">{t}</li>))}

          </ul>

        </div>

      </section>



      {/* SPREAD 1 — text and framed images */}

      <section className="spread s1">

        <div className="s1-img1"><Photo id={id(1)} /><p className="mg-cap">{cap(1)}</p></div>

        <div className="s1-right mg-block">

          <div className="mg-text" lang="en">

            {paras.slice(2).map((t) => (<p key={t}>{t}</p>))}

          </div>

        </div>

        <div className="s1-left mg-block">

          <h2 className="mg-h">{project.heading}</h2>

          <div className="mg-text" lang="en">

            <Opening text={paras[0]} />

            <p>{paras[1]}</p>

          </div>

        </div>

        <div className="s1-img2"><p className="mg-cap top">{cap(2)}</p><Photo id={id(2)} /></div>

        <div className="s1-img3"><Photo id={id(3)} /><p className="mg-cap">{cap(3)}</p></div>

        {folio(base)}

      </section>



      {/* SPREAD 2 — bleed and framed */}

      <section className="spread s2">

        <div className="s2-a">

          <Photo id={id(4)} />

          <p className="mg-cap">{cap(4)} <span className="sc">OPPOSITE:</span> {cap(6)}</p>

        </div>

        <div className="s2-b"><Photo id={id(5)} /></div>

        <div className="s2-c"><Photo id={id(6)} /></div>

        {folio(base + 2)}

      </section>



      {/* SPREAD 3 — full bleed and one framed image */}

      <section className="spread s3">

        <div className="s3-a"><Photo id={id(7)} /></div>

        <div className="s3-b"><Photo id={id(8)} /><p className="mg-cap">{cap(8)}</p></div>

        {folio(base + 4)}

      </section>



      <section className="mg-end">

        <p className="serif mg-quote">“{project.quote}”</p>

        <p className="label muted">{project.credit}</p>

      </section>



      <a href={`#/project/${next.slug}`} className="p-next">

        <span className="label muted">NEXT PROJECT {next.n}</span>

        <span className="serif p-next-name">{next.name}</span>

        <span className="label view">VIEW PROJECT →</span>

      </a>

    </main>

  );

}



export default function PreludeDesign() {

const [cat, setCat] = useState("ALL");

const shown = JOURNAL.filter((a) => cat === "ALL" || a.cat === cat);

const root = useRef(null);

const [slug, setSlug] = useState(parseRoute);
  const [team, setTeam] = useState(window.location.hash === "#/team");
const [showNav, setShowNav] = useState(true);
const [hasScrolled, setHasScrolled] = useState(false);
const navHiddenOnce = useRef(false);
const navRevealed = useRef(false);

const project = WORKS.find((w) => w.slug === slug);



  useEffect(() => {
    const onHash = () => {
      setSlug(parseRoute());
      setTeam(window.location.hash === "#/team");
    };

    window.addEventListener("hashchange", onHash);

    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setHasScrolled(true);
      }

      if (!navHiddenOnce.current && currentScrollY > 80) {
        navHiddenOnce.current = true;
        setShowNav(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (
        navHiddenOnce.current &&
        !navRevealed.current &&
        currentScrollY < lastScrollY
      ) {
        navRevealed.current = true;
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setHasScrolled(false);
    setShowNav(true);
    navHiddenOnce.current = false;
    navRevealed.current = false;
  }, [slug]);

  const navigateFromProject = (e, hash) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  const scrollToSection = (e, hash) => {
    e.preventDefault();

    // route hashes (#/team, #/project/...) are pages, not in-page anchors
    if (hash.startsWith("#/")) {
      window.location.hash = hash;
      return;
    }

    const id = hash.replace(/^#/, "");
    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", hash);
  };

  useLayoutEffect(() => {

const h = window.location.hash.slice(1);

    if (project || team || !h || h.startsWith("/")) window.scrollTo(0, 0);

    else document.getElementById(h)?.scrollIntoView();

  }, [project?.slug, team]);



  useLayoutEffect(() => {

const node = root.current;

    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

const els = [...node.querySelectorAll(REVEAL)].filter((e) => e.dataset.rv !== "in" && e.dataset.rv !== "done");

    els.forEach((e) => { e.dataset.rv = "out"; });

const io = new IntersectionObserver(

      (entries) => {

let k = 0;

        entries.forEach((en) => {

          if (!en.isIntersecting) return;

const el = en.target;

const hero = el.closest(".hero");

const base = hero ? (el.matches(".photo") ? 250 : 750) : 0;

          el.style.setProperty("--d", `${base + Math.min(k, 3) * 130}ms`);

          k += 1;

          el.dataset.rv = "in";

          io.unobserve(el);

          setTimeout(() => { el.dataset.rv = "done"; }, 3200);

        });

      },

      { threshold: 0.1, rootMargin: "0px" }

    );

    els.forEach((e) => io.observe(e));

    return () => io.disconnect();

  }, [cat, slug]);



  return (

    <div className="pd" ref={root}>

      <style>{css}</style>



      {/* NAV */}

      <header
        className={`nav ${showNav ? "nav-visible" : "nav-hidden"} ${
          hasScrolled ? "nav-scrolled" : ""
        }`}
      >

        <a
          href="#top"
          className="brand"
          onClick={(e) => {
            if (project) navigateFromProject(e, "#top");
            else scrollToSection(e, "#top");
          }}
          aria-label="Prelude Design"
        >
          <img src="/logo-black.svg" alt="Prelude Design" />
        </a>

        <nav>

          {NAV.map((l) => {
            const hash = l === "TEAM" ? "#/team" : `#${l.toLowerCase()}`;

            return (
              <a
                key={l}
                href={hash}
                className="label navlink"
                onClick={(e) => {
                  if (project || team) navigateFromProject(e, hash);
                  else scrollToSection(e, hash);
                }}
              >
                {l}
              </a>
            );
          })}

        </nav>

      </header>



      {project ? <ProjectPage project={project} /> : team ? <TeamPage /> : (

      <main id="top">

        {/* HERO */}

        <section className="hero">

          <div className="hero-text">

            <p className="label muted hero-meta">

              PRELUDE DESIGN STUDIO <span className="hero-meta-line" /> RIGA / LATVIA

            </p>

            <h1 className="serif display">

              <span className="line l1">LET YOUR</span>

              <span className="line l2">WALLS</span>

              <span className="line l3 serif-italic">TALK.</span>

            </h1>

            <p className="body hero-sub">

              Handcrafted wall coverings<br />for considered spaces.

            </p>

          </div>

          <Photo id="hero" className="hero-img" />

          <a
            href="#philosophy"
            className="label muted scroll"
            onClick={(e) => scrollToSection(e, "#philosophy")}
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow" aria-hidden="true">↓</span>
          </a>

        </section>



        {/* 01 PHILOSOPHY */}

        <section className="sec philosophy" id="philosophy">

          <p className="label muted col-label">01 / PHILOSOPHY</p>

          <h2 className="serif statement">

            WE DON’T DECORATE WALLS.<br />WE CREATE ATMOSPHERE.

          </h2>

          <p className="body measure para">

            Every Prelude surface is made by hand and made once. Layer by layer, we

            build wall coverings that respond to the light, scale and character of a

            room. Nothing is repeated from a roll, and nothing is taken from a catalogue.

            The result is bespoke, quiet and slow to reveal itself.

          </p>

        </section>



        {/* 03 IMMERSIVE */}

        <section className="bleed">

          <Photo id="immersive" className="immersive" />

          <p className="label muted caption">VILLA MEŽAPARKS — LIME PLASTER, NORTH LIGHT</p>

        </section>



        {/* 04 MATERIAL */}

        <section className="sec material">

          <div className="mat-head">

            <p className="label muted">MATERIAL</p>

            <h2 className="serif headline">

              SURFACE<br />IS THE<br />STARTING<br />POINT.

            </h2>

          </div>

          <Photo id="material" className="mat-a" />

          <Photo id="materialB" className="mat-b" />

          <p className="body measure mat-text">

            We work with water-based paints, translucent glazes, metallic leaf and

            pigmented plasters, built up in thin layers and finished by hand. Each

            layer changes how the one beneath it reads. This is why a Prelude wall

            looks different at nine in the morning and at five in the evening.

          </p>

        </section>



        {/* 05 BESPOKE */}

        <section className="sec bespoke">

          <p className="label muted">BESPOKE</p>

          <h2 className="serif headline b-head">MADE<br />FOR<br />A SPACE.</h2>

          <p className="body measure b-text">

            Every project begins with a conversation. From there, the wall is

            designed and made specifically for the architecture, the vision and the

            technical needs of the project: its light, its substrate, its use.

          </p>

        </section>



        {/* 06 WORKS */}

        <section className="sec works" id="works">

          <div className="sec-head">

            <p className="label muted">FEATURED WORKS</p>

            <p className="label muted">2022 — 2026</p>

          </div>

          <div className="works-grid">

            {WORKS.map((w) => (

              <article key={w.n} className={`work ${w.cls}`}>

                <a href={`#/project/${w.slug}`} className="work-link">

                  <Photo id={w.img} className="work-img" />

                  <div className="work-meta">

                    <span className="label muted">{w.n}</span>

                    <h3 className="serif work-name">{w.name}</h3>

                    <p className="body small muted">{w.tech}</p>

                    <span className="label view">VIEW PROJECT →</span>

                  </div>

                </a>

              </article>

            ))}

          </div>

        </section>



        {/* 07 STUDIO */}

        <section className="sec studio" id="studio">

          <Photo id="studio" className="studio-img" />

          <div className="studio-text">

            <h2 className="serif headline s-head">THE STUDIO<br />RIGA, LATVIA</h2>

            <p className="serif pull">

              A small studio.<br />A long process.<br />No shortcuts.

            </p>

          </div>

        </section>



        {/* 08 PROCESS */}

        <section className="sec process">

          <div className="sec-head">

            <p className="label muted">PROCESS</p>

            <p className="label muted">FOUR STAGES</p>

          </div>

          <ol className="steps">

            {PROCESS.map(([n, t, d]) => (

              <li key={n} className="step">

                <span className="serif step-n">{n}</span>

                <h3 className="label step-t">{t.toUpperCase()}</h3>

                <p className="body muted step-d">{d}</p>

              </li>

            ))}

          </ol>

        </section>



        {/* 09 JOURNAL */}

        <section className="sec journal" id="journal">

          <div className="sec-head">

            <p className="label muted">JOURNAL</p>

            <div className="cats" role="tablist" aria-label="Journal categories">

              {CATS.map((c) => (

                <button

                  key={c}

                  role="tab"

                  aria-selected={cat === c}

                  className={`label cat ${cat === c ? "on" : ""}`}

                  onClick={() => setCat(c)}

                >

                  {c}

                </button>

              ))}

            </div>

          </div>

          <div className="j-grid">

            {shown.map((a, i) => (

              <article key={a.title} className={`j-item ${shown.length === 4 ? a.cls : `j-solo j-solo-${i % 2}`}`}>

                <a href="#journal" className="work-link">

                  <Photo id={a.img} className="j-img" />

                  <p className="label muted j-cat">{a.cat}  /  {a.read}</p>

                  <h3 className="serif j-title">{a.title}</h3>

                </a>

              </article>

            ))}

          </div>

        </section>



        {/* 10 FROM THE STUDIO */}

        <section className="sec social">

          <div className="sec-head">

            <p className="label muted">FROM THE STUDIO</p>

            <a href="#contact" className="label view">@PRELUDE.DESIGN →</a>

          </div>

          <div className="soc-grid">

            <Photo id="s1" className="soc soc-1" />

            <Photo id="s2" className="soc soc-2" />

            <Photo id="s3" className="soc soc-3" />

            <Photo id="s4" className="soc soc-4" />

            <Photo id="s5" className="soc soc-5" />

          </div>

        </section>



        {/* CONTACT */}

        <section className="sec contact" id="contact">

          <h2 className="serif display c-head">

            LET’S CREATE<br />SOMETHING<br />EXTRAORDINARY<br />TOGETHER.

          </h2>

          <div className="c-info">

            <a href="mailto:info@prelude.design" className="body mail">info@prelude.design</a>

            <p className="body muted">Riga, Latvia</p>

          </div>

        </section>

      </main>

      )}



      {/* BACK TO TOP */}

      <div className="back-top-wrap">
        <a
          href="#top"
          className="back-top navlink"
          onClick={(e) => {
            if (project) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              scrollToSection(e, "#top");
            }
          }}
        >
          <span>BACK ON TOP</span>
          <span className="back-top-chevron">↑</span>
        </a>
      </div>

      {/* FOOTER */}

      <footer className="foot">

        <p className="label">
          <img
            src="/logo-black.svg"
            alt="Prelude Design"
            className="footer-logo"
          />
        </p>

        <nav className="foot-nav">

          {NAV.map((l) => {
            const hash = l === "TEAM" ? "#/team" : `#${l.toLowerCase()}`;

            return (
              <a
                key={l}
                href={hash}
                className="label navlink"
                onClick={(e) => {
                  if (project || team) navigateFromProject(e, hash);
                  else scrollToSection(e, hash);
                }}
              >
                {l}
              </a>
            );
          })}

        </nav>

        <p className="label foot-soc">

          <a
            href="https://www.instagram.com/by.prelude/"
            target="_blank"
            rel="noreferrer"
            className="navlink"
          >
            Instagram
          </a>

            /  

          <a
            href="https://www.linkedin.com/company/prelude-design-studio"
            target="_blank"
            rel="noreferrer"
            className="navlink"
          >
            LinkedIn
          </a>

            /  

          <a
            href="https://www.facebook.com/prelude.designs"
            target="_blank"
            rel="noreferrer"
            className="navlink"
          >
            Facebook
          </a>

        </p>

        <p className="label muted foot-c">© 2026 Prelude Design</p>

      </footer>

    </div>

  );

}



const css = `

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

@font-face{
  font-family:'Epilogue';
  src:url('/fonts/Epilogue/Epilogue-VariableFont_wght.ttf') format('truetype');
  font-style:normal;
  font-weight:100 900;
  font-display:swap;
}

@font-face{
  font-family:'Epilogue';
  src:url('/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf') format('truetype');
  font-style:italic;
  font-weight:100 900;
  font-display:swap;
}



.pd{

  --bg:#F5F4F0; --ink:#171717; --mute:#6E6B65; --line:#D8D5CE;

  --pad:clamp(20px,4vw,64px);

  background:var(--bg); color:var(--ink);

  font-family:'Epilogue',system-ui,sans-serif; font-weight:300;

  -webkit-font-smoothing:antialiased; overflow-x:hidden;

}

.pd *{box-sizing:border-box;margin:0;padding:0}

.pd a{color:inherit;text-decoration:none}

.pd ol{list-style:none}

.pd button{background:none;border:0;color:inherit;font:inherit;cursor:pointer}

.pd :focus-visible{outline:1px solid var(--ink);outline-offset:4px}



.serif{font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;letter-spacing:-0.01em}

.label{font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:400}

.body{font-size:15px;line-height:1.7}

.small{font-size:13px;line-height:1.6}

.muted{color:var(--mute)}

.measure{max-width:42ch}



/* photo plates */

.photo{position:relative;overflow:hidden;width:100%}

.photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}

.plate{position:absolute;left:14px;bottom:12px;right:14px;font-size:10px;letter-spacing:0.18em;

  text-transform:uppercase;color:var(--mute);line-height:1.6}



/* NAV */

.nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:100;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:22px var(--pad);

  background:transparent;
  border-bottom:1px solid transparent;
  box-shadow:none;

  transform:translateY(0);
  opacity:1;
  pointer-events:auto;

  transition:
    transform 600ms cubic-bezier(.2,.7,.2,1),
    opacity 400ms ease,
    background 500ms ease,
    border-color 500ms ease,
    box-shadow 500ms ease,
    -webkit-backdrop-filter 500ms ease,
    backdrop-filter 500ms ease;
}

.nav.nav-hidden{
  transform:translateY(-110%);
  opacity:0;
  pointer-events:none;
}

.nav.nav-visible{
  transform:translateY(0);
  opacity:1;
  pointer-events:auto;
}

.nav.nav-scrolled{
  background:rgba(245,244,240,.68);
  border-bottom-color:rgba(216,213,206,.72);
  box-shadow:0 8px 30px rgba(23,23,23,.045);

  -webkit-backdrop-filter:blur(18px) saturate(120%);
  backdrop-filter:blur(18px) saturate(120%);
}

.nav nav,.foot-nav{display:flex;gap:clamp(14px,3vw,40px)}

.brand{display:flex;align-items:center;flex-shrink:0}
.brand img{display:block;width:clamp(120px,11vw,170px);height:auto}

.navlink{transition:color 600ms ease}

.navlink:hover{color:var(--mute)}

/* Keep anchored sections clear of the fixed Header */
.pd #works,.pd #studio,.pd #journal,.pd #contact,.pd #top{
  scroll-margin-top:90px;
}



/* HERO */

.hero{position:relative;min-height:calc(100vh - 66px);display:grid;

  grid-template-columns:repeat(12,1fr);column-gap:20px;padding:0 0 0 var(--pad)}

.hero-text{grid-column:1 / 8;align-self:center;padding:56px 0 96px;display:flex;flex-direction:column;transform:translateY(42px)}

.display{font-size:clamp(64px,10.5vw,172px);line-height:0.88;display:block}

.line{display:block;opacity:0;animation:rise 1400ms cubic-bezier(.2,.6,.2,1) forwards}

.l1{animation-delay:100ms}.l2{animation-delay:260ms}.l3{animation-delay:420ms}.l4{animation-delay:580ms}

@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

.hero-sub{margin-top:40px;color:var(--ink);font-size:16px}

.hero-meta{order:-1;margin:0 0 48px;line-height:1;display:flex;align-items:center;gap:14px}
.hero-meta-line{display:inline-block;width:20px;height:1px;background:var(--line);vertical-align:middle}
.serif-italic{font-style:italic}

.hero-img{grid-column:9 / 13;align-self:stretch;margin:-0px 0 -72px;min-height:620px;z-index:2;

  margin-right:0}

.scroll{position:absolute;left:50%;bottom:28px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;text-decoration:none}
.scroll-arrow{display:block;font-family:Arial,sans-serif;font-size:20px;line-height:1;animation:scrollArrow 1600ms ease-in-out infinite}
@keyframes scrollArrow{0%,100%{transform:translateY(0);opacity:.55}50%{transform:translateY(6px);opacity:1}}



/* SECTIONS */

.sec{padding:clamp(96px,14vw,220px) var(--pad) 0}

.sec-head{position:relative;display:flex;justify-content:space-between;align-items:baseline;gap:24px;

  padding-bottom:18px;margin-bottom:clamp(40px,6vw,96px)}

.sec-head::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--line)}



.philosophy{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:56px;padding-top:clamp(160px,20vw,300px)}

.col-label{grid-column:1 / 4}

.statement{grid-column:3 / 12;font-size:clamp(34px,5.6vw,92px);line-height:1.02}

.para{grid-column:7 / 12}



.bleed{margin-top:clamp(96px,14vw,220px)}

.immersive{height:min(92vh,980px)}

.caption{padding:14px var(--pad) 0}



.material{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:28px}

.mat-head{grid-column:1 / 7;grid-row:1 / 3;display:flex;flex-direction:column;gap:36px;padding-bottom:40px}

.headline{font-size:clamp(46px,7.4vw,124px);line-height:0.92}

.mat-a{grid-column:8 / 13;grid-row:1;aspect-ratio:4/5;margin-right:calc(var(--pad) * -1)}

.mat-b{grid-column:3 / 6;grid-row:3;aspect-ratio:1/1;margin-top:-6vw}

.mat-text{grid-column:7 / 12;grid-row:3;align-self:end}



.bespoke{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:40px;

  border-top:0}

.bespoke > .label{grid-column:1 / 13}

.b-head{grid-column:5 / 13}

.b-text{grid-column:1 / 5;grid-row:2 / 3;align-self:end}



/* WORKS */

.works-grid{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:clamp(64px,9vw,140px)}

.work-link{display:block}

.work-img{transition:opacity 900ms ease}

.work-link:hover .work-img{opacity:.88}

.work-meta{display:grid;gap:6px;margin-top:18px}

.work-name{font-size:clamp(26px,2.8vw,42px);line-height:1.05;margin:6px 0 2px}

.view{margin-top:12px;border-bottom:1px solid transparent;justify-self:start;transition:border-color 700ms ease}

.work-link:hover .view,.view:hover{border-color:var(--ink)}

.w-a{grid-column:1 / 8}.w-a .work-img{aspect-ratio:5/4}

.w-b{grid-column:9 / 13;margin-top:18vw}.w-b .work-img{aspect-ratio:3/4}

.w-c{grid-column:2 / 6}.w-c .work-img{aspect-ratio:4/5}

.w-d{grid-column:7 / 13;margin-top:-4vw}.w-d .work-img{aspect-ratio:16/11}



/* STUDIO */

.studio{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:48px;padding-left:0;padding-right:0}

.studio-img{grid-column:1 / 9;aspect-ratio:4/3.2}

.studio-text{grid-column:9 / 13;padding-right:var(--pad);display:flex;flex-direction:column;justify-content:space-between;gap:64px}

.s-head{font-size:clamp(34px,4.2vw,68px)}

.pull{font-size:clamp(22px,2.2vw,34px);line-height:1.3;font-style:italic;color:var(--mute)}



/* PROCESS */

.steps{border-top:0}

.step{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;align-items:baseline;

  padding:clamp(32px,5vw,72px) 0;border-bottom:1px solid var(--line)}

.step:first-child{padding-top:0}

.step-n{grid-column:1 / 4;font-size:clamp(64px,10vw,168px);line-height:.85}

.step-t{grid-column:5 / 8}

.step-d{grid-column:8 / 13;max-width:40ch}



/* JOURNAL */

.cats{display:flex;gap:clamp(12px,2vw,28px);flex-wrap:wrap}

.cat{padding:0 0 4px;color:var(--mute);border-bottom:1px solid transparent;transition:color 500ms ease,border-color 500ms ease}

.cat:hover,.cat.on{color:var(--ink)}

.cat.on{border-color:var(--ink)}

.j-grid{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:clamp(56px,8vw,120px)}

.j-img{transition:opacity 900ms ease}

.work-link:hover .j-img{opacity:.88}

.j-cat{margin:18px 0 8px}

.j-title{font-size:clamp(24px,2.6vw,40px);line-height:1.1;max-width:20ch}

.j-a{grid-column:1 / 6}.j-a .j-img{aspect-ratio:4/5}

.j-b{grid-column:7 / 13;margin-top:8vw}.j-b .j-img{aspect-ratio:3/2}

.j-c{grid-column:2 / 8}.j-c .j-img{aspect-ratio:16/10}

.j-d{grid-column:9 / 13;margin-top:-6vw}.j-d .j-img{aspect-ratio:3/4}

.j-solo{grid-column:span 6}.j-solo .j-img{aspect-ratio:4/5}

.j-solo-1{margin-top:8vw}



/* SOCIAL */

.soc-grid{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:20px;align-items:start}

.soc-1{grid-column:1 / 5;aspect-ratio:1/1}

.soc-2{grid-column:6 / 9;aspect-ratio:3/4;margin-top:8vw}

.soc-3{grid-column:10 / 13;aspect-ratio:4/5}

.soc-4{grid-column:3 / 6;aspect-ratio:1/1;margin-top:-3vw}

.soc-5{grid-column:7 / 12;aspect-ratio:16/10;margin-top:2vw}



/* CONTACT */

.contact{padding-top:clamp(120px,18vw,280px);padding-bottom:clamp(96px,12vw,180px);

  display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:64px}

.c-head{grid-column:1 / 13;font-size:clamp(48px,9vw,148px)}

.c-info{grid-column:8 / 13;display:grid;gap:6px}

.mail{font-size:clamp(18px,2vw,28px);border-bottom:1px solid var(--line);padding-bottom:6px;

  justify-self:start;transition:border-color 700ms ease}

.mail:hover{border-color:var(--ink)}




/* FOOTER */
.footer-logo{
  display:block;
  width:120px;
  height:auto;
}

.back-top-wrap{
  display:flex;
  justify-content:flex-end;
  padding:0 var(--pad) 14px;
}

.back-top{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:2px 0;
  text-decoration:none;
  font-size:9px;
  letter-spacing:0.14em;
  line-height:1;
  opacity:.72;
}

.back-top-chevron{
  display:inline-block;
  font-size:11px;
  line-height:1;
  transition:transform 400ms ease;
}

.back-top:hover{
  opacity:1;
}

.back-top:hover .back-top-chevron{
  transform:translateY(-3px);
}

@media (max-width: 720px){
  .back-top-wrap{
    padding:0 var(--pad) 12px;
  }

  .back-top{
    font-size:8px;
    gap:5px;
  }

  .back-top-chevron{
    font-size:10px;
  }
}


.foot{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:20px;

  padding:28px var(--pad) 36px;border-top:1px solid var(--line);align-items:baseline}

.foot > :nth-child(1){grid-column:1 / 4}

.foot-nav{grid-column:4 / 9}

.foot-soc{grid-column:9 / 12}

.foot-c{grid-column:12 / 13;text-align:right;white-space:nowrap}



/* MOBILE — single column, recomposed rather than stacked */

@media (max-width:820px){

  .nav{padding:18px var(--pad)}
  .nav.nav-scrolled{
    background:rgba(245,244,240,.72);
    -webkit-backdrop-filter:blur(16px) saturate(120%);
    backdrop-filter:blur(16px) saturate(120%);
  }

  .nav nav{gap:14px}

  .nav .label{font-size:10px;letter-spacing:0.16em}

  .brand img{width:clamp(118px,34vw,150px)}



  .hero{display:block;min-height:0;padding:0}

  .hero-text{padding:42px var(--pad) 40px}
  .hero-meta{margin-bottom:42px}
  .hero-meta-line{width:16px}
  .display{font-size:clamp(64px,21vw,116px)}

  .hero-img{display:block;width:calc(100% - var(--pad) * 1);margin:0 0 0 var(--pad);min-height:0;aspect-ratio:3/4.4}

  .scroll{position:static;transform:none;display:flex;padding:32px var(--pad) 40px;align-items:center}



  .sec{padding-top:112px}

  .philosophy,.material,.bespoke,.works-grid,.j-grid,.soc-grid,.contact,.foot,.step{display:block}

  .philosophy{padding-top:128px}

  .col-label{margin-bottom:36px}

  .statement{font-size:clamp(32px,9.4vw,52px)}

  .para{margin:36px 0 0 12%}



  .immersive{height:78vh}



  .mat-head{display:block}

  .mat-head .headline{margin-top:28px}

  .mat-a{width:calc(100% + var(--pad));margin:48px 0 0 auto;aspect-ratio:4/5}

  .mat-b{width:56%;margin:-12% 0 0 0;aspect-ratio:1/1;position:relative}

  .mat-text{margin-top:40px}



  .b-head{margin:32px 0 0 0}

  .b-text{margin:40px 0 0 22%}



  .work{margin-bottom:72px}

  .work-meta{margin-top:14px}

  .w-a,.w-b,.w-c,.w-d{margin-top:0}

  .w-a .work-img{aspect-ratio:4/3.4}

  .w-b{width:78%;margin-left:auto}

  .w-c{width:84%}

  .w-d{width:calc(100% + var(--pad));margin-left:0}

  .w-d .work-img{aspect-ratio:3/2}



  .studio{padding:112px 0 0}

  .studio-img{aspect-ratio:4/5}

  .studio-text{padding:0 var(--pad);margin-top:40px;gap:40px}



  .step{padding:28px 0}

  .step-n{display:block;font-size:84px;margin-bottom:18px}

  .step-t{margin-bottom:10px}



  .sec-head{flex-wrap:wrap}

  .j-item{margin-bottom:64px}

  .j-b{width:84%;margin-left:auto;margin-top:0}

  .j-c{width:90%;margin-top:0}

  .j-d{width:70%;margin-top:0}

  .j-solo,.j-solo-1{margin-top:0}



  .soc-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}

  .soc{margin:0 !important}

  .soc-1{grid-column:1 / 3}

  .soc-2{grid-column:1 / 2;margin-top:0}

  .soc-3{grid-column:2 / 3;margin-top:36px !important}

  .soc-4{grid-column:1 / 2}

  .soc-5{grid-column:1 / 3;aspect-ratio:16/10}



  .c-head{font-size:clamp(40px,12.4vw,80px)}

  .c-info{margin-top:56px}



  .foot > *{margin-bottom:18px}

  .foot-nav{flex-wrap:wrap}

  .foot-c{text-align:left}

}



/* REVEAL — медленное проявление при прокрутке */

.pd [data-rv="out"],.pd [data-rv="in"]{

  transition:opacity 1400ms ease var(--d,0ms),transform 1400ms cubic-bezier(.2,.6,.2,1) var(--d,0ms)}

.pd [data-rv="out"]{opacity:0;transform:translateY(16px)}

.pd [data-rv="in"]{opacity:1;transform:none}

.pd .photo[data-rv="out"]{transform:none}

.pd .photo[data-rv="out"] img{transform:scale(1.06)}

.pd .photo[data-rv="in"] img{transform:none;transition:transform 2400ms cubic-bezier(.2,.6,.2,1) var(--d,0ms)}

.pd .sec-head::after{transform-origin:left center}

.pd .sec-head[data-rv="out"]::after{transform:scaleX(0)}

.pd .sec-head[data-rv="in"]::after{transform:none;transition:transform 1800ms cubic-bezier(.3,.6,.2,1) calc(var(--d,0ms) + 200ms)}

.pd .sec-head[data-rv="out"],.pd .sec-head[data-rv="in"]{transform:none}



/* PROJECT PAGE — magazine spreads */

.project{padding-bottom:0}

.p-top{display:flex;justify-content:space-between;align-items:baseline;padding:96px var(--pad) 0}

.sc{text-transform:uppercase;letter-spacing:.12em;font-size:.82em}



.mg-cover{padding:clamp(56px,8vw,130px) var(--pad) 0}

.mg-title{display:flex;justify-content:space-between;gap:24px;font-family:'Cormorant Garamond',Georgia,serif;

  font-weight:400;font-size:clamp(22px,5.2vw,92px);letter-spacing:.22em;text-transform:uppercase;line-height:1}

.mg-labels{display:flex;justify-content:space-between;gap:16px;margin-top:clamp(36px,5.5vw,90px)}

.mg-labels .label:nth-child(2){text-align:center}

.mg-labels .label:nth-child(3){text-align:right}

.mg-cover-body{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;align-items:end;

  margin-top:clamp(28px,3.5vw,56px)}

.mg-cover-img{grid-column:4 / 10;grid-row:1;aspect-ratio:3/4.1}

.mg-list{grid-row:1;padding-bottom:6px}

.mg-list.l{grid-column:1 / 4}

.mg-list.r{grid-column:10 / 13;text-align:right}

.mg-list li{line-height:3.4}



.spread{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;align-items:start;

  padding:clamp(100px,14vw,220px) var(--pad) 0}

.mg-cap{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;font-size:13px;line-height:1.5;

  color:var(--mute);margin-top:12px;max-width:46ch}

.mg-cap.top{margin:0 0 12px}

.mg-h{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;font-size:13px;letter-spacing:.14em;

  text-transform:uppercase;text-decoration:underline;text-underline-offset:5px;

  text-decoration-thickness:1px;margin-bottom:12px}

.mg-text{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(14px,1.08vw,17px);

  line-height:1.42;text-align:justify;hyphens:auto;column-count:2;column-gap:32px;column-rule:1px solid var(--line)}

.mg-text p + p{text-indent:1.2em}

.folio{grid-column:1 / 13;display:grid;grid-template-columns:1fr 1fr;margin-top:clamp(56px,7vw,110px)}

.folio p:last-child{text-align:right}



/* spread 1 */

.s1-img1{grid-column:2 / 6;grid-row:1}.s1-img1 .photo{aspect-ratio:4/5.2}

.s1-right{grid-column:7 / 13;grid-row:1;padding-top:clamp(24px,3vw,48px)}

.s1-left{grid-column:1 / 7;grid-row:2;margin-top:clamp(56px,8vw,130px)}

.s1-img2{grid-column:7 / 10;grid-row:2;align-self:end;margin-top:clamp(56px,8vw,130px)}.s1-img2 .photo{aspect-ratio:4/5}

.s1-img3{grid-column:11 / 13;grid-row:2;align-self:end}.s1-img3 .photo{aspect-ratio:4/5}



/* spread 2 */

.s2{row-gap:0}

.s2-a{grid-column:1 / 6;grid-row:1;margin-left:calc(var(--pad) * -1)}

.s2-a .photo{aspect-ratio:3/4}

.s2-a .mg-cap{padding-left:var(--pad)}

.s2-b{grid-column:4 / 7;grid-row:2;margin-top:clamp(24px,3vw,48px)}.s2-b .photo{aspect-ratio:3/4}

.s2-c{grid-column:7 / 13;grid-row:1 / 3;margin-right:calc(var(--pad) * -1)}.s2-c .photo{aspect-ratio:4/5.4}



/* spread 3 */

.s3-a{grid-column:1 / 7;grid-row:1;margin-left:calc(var(--pad) * -1)}.s3-a .photo{aspect-ratio:4/5.2}

.s3-b{grid-column:8 / 12;grid-row:1;align-self:center}.s3-b .photo{aspect-ratio:3/4.2}



.mg-end{padding:clamp(120px,16vw,260px) var(--pad) 0;text-align:center}

.mg-quote{font-size:clamp(24px,3vw,46px);line-height:1.2;max-width:26ch;margin:0 auto 28px;font-style:italic}



.p-next{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:18px;align-items:baseline;

  margin-top:clamp(96px,13vw,200px);padding:clamp(40px,6vw,90px) var(--pad) clamp(96px,12vw,180px);

  border-top:1px solid var(--line)}

.p-next > :nth-child(1){grid-column:1 / 13}

.p-next-name{grid-column:1 / 10;font-size:clamp(40px,7vw,116px);line-height:.95;transition:color 700ms ease}

.p-next:hover .p-next-name{color:var(--mute)}

.p-next .view{grid-column:1 / 13;justify-self:start}



@media (max-width:820px){

  .p-top{padding-top:86px}

  .mg-title{flex-direction:column;gap:6px;font-size:clamp(26px,8.2vw,56px)}

  .mg-title span:last-child{align-self:flex-end}

  .mg-labels{flex-direction:column;gap:10px}

  .mg-labels .label:nth-child(n){text-align:left}

  .mg-cover-body{display:flex;flex-wrap:wrap;justify-content:space-between}

  .mg-cover-img{flex:0 0 100%;width:100%;aspect-ratio:3/4}

  .mg-list{flex:0 0 48%;padding-top:28px}

  .mg-list.r{text-align:right}

  .mg-list li{line-height:2.8}



  .spread{display:block;padding-top:96px}

  .mg-text{column-count:1;column-rule:none;font-size:16px}

  .s1-img1{width:64%;margin-left:12%}

  .s1-left{margin-top:56px}

  .s1-right{padding-top:0;margin-top:24px}

  .s1-img2{width:80%;margin:56px 0 0 auto}

  .s1-img3{width:38%;margin:36px 0 0 auto}

  .s2-a{width:calc(100% + var(--pad));margin-left:calc(var(--pad) * -1)}

  .s2-b{width:54%;margin:40px 0 0 24%}

  .s2-c{width:calc(100% + var(--pad));margin:56px calc(var(--pad) * -1) 0 auto}

  .s2-c .photo{aspect-ratio:4/5}

  .s3-a{width:calc(100% + var(--pad));margin-left:calc(var(--pad) * -1)}

  .s3-b{width:72%;margin:56px 0 0 auto}

  .folio{margin-top:56px}

  .folio .label{font-size:9px;letter-spacing:.14em}

  .p-next{display:block}

  .p-next-name{display:block;font-size:clamp(40px,12vw,72px);margin:14px 0 24px}

}



@media (prefers-reduced-motion:reduce){

  .line{animation:none;opacity:1}

  .pd *{transition:none !important}

}

/* TEAM PAGE */
.team-page{padding:clamp(110px,13vw,190px) var(--pad) 0}
.team-intro{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;align-items:end;padding-bottom:clamp(90px,11vw,160px)}
.team-kicker{grid-column:1 / 4;display:grid;gap:10px;align-self:start;padding-top:10px}
.team-title{grid-column:4 / 13;font-size:clamp(76px,14vw,220px);line-height:.82;letter-spacing:-.035em}
.team-lead{grid-column:8 / 13;max-width:34ch;margin-top:42px;line-height:1.45}
.team-grid{display:grid;grid-template-columns:repeat(12,1fr);column-gap:20px;row-gap:clamp(70px,9vw,140px)}
.team-member:nth-child(1){grid-column:1 / 6}
.team-member:nth-child(2){grid-column:8 / 13;margin-top:clamp(80px,10vw,160px)}
.team-member:nth-child(3){grid-column:2 / 7}
.team-member:nth-child(4){grid-column:8 / 12;margin-top:clamp(50px,7vw,100px)}
.team-member:nth-child(5){grid-column:4 / 9;margin-top:clamp(20px,4vw,60px)}
.team-photo{width:100%;aspect-ratio:3/4;overflow:hidden}
.team-photo img{display:block;width:100%;height:100%;object-fit:cover;transition:transform 1600ms cubic-bezier(.2,.6,.2,1)}
.team-member:hover .team-photo img{transform:scale(1.025)}
.team-meta{padding-top:14px;display:flex;justify-content:space-between;align-items:baseline;gap:20px}
.team-name{font-size:clamp(24px,2.4vw,38px);line-height:1}
.team-role{white-space:nowrap;text-align:right}
.team-end{padding:clamp(150px,20vw,300px) 0 clamp(110px,14vw,190px);text-align:center}
.team-quote{font-size:clamp(28px,4vw,62px);line-height:1.1;margin-bottom:28px}
@media (max-width:820px){
  .team-page{padding-top:94px}
  .team-intro{display:block;padding-bottom:90px}
  .team-kicker{display:flex;justify-content:space-between;margin-bottom:58px}
  .team-title{font-size:clamp(72px,22vw,150px)}
  .team-lead{margin:36px 0 0 24%;max-width:30ch}
  .team-grid{display:block}
  .team-member{width:84%;margin:0 0 76px !important}
  .team-member:nth-child(even){margin-left:auto !important}
  .team-member:nth-child(5){margin-left:12% !important}
  .team-meta{display:block}
  .team-role{text-align:left;margin-top:8px}
  .team-end{padding-top:100px}
}


`;
