export const services = [
  {
    num: "01",
    title: "Wedding & Social Events",
    desc: "Destination weddings, sangeets and celebrations designed around your story.",
    highlights: ["Venue scouting & full décor design", "Guest logistics, RSVPs & hospitality", "Live music, MC and choreography coordination"],
  },
  {
    num: "02",
    title: "Corporate Events",
    desc: "Conferences, product launches and leadership summits, produced end-to-end.",
    highlights: ["Stage, AV and branding builds", "Speaker & delegate management", "Post-event reporting and photo/video delivery"],
  },
  {
    num: "03",
    title: "Concerts & Live Shows",
    desc: "Full-scale stage, sound, lighting and artist management for large-format shows.",
    highlights: ["Rigging, sound and lighting design", "Artist & vendor coordination", "Crowd, security and permit management"],
  },
  {
    num: "04",
    title: "Brand Activations",
    desc: "Immersive pop-ups and experiential campaigns that build real audiences.",
    highlights: ["Experience & booth design", "On-ground promoter teams", "Footfall tracking and campaign reporting"],
  },
  {
    num: "05",
    title: "Exhibitions & Expos",
    desc: "Booth design, fabrication and on-ground management for any scale.",
    highlights: ["Custom booth fabrication", "Multi-day staffing & logistics", "Lead capture and stall management"],
  },
  {
    num: "06",
    title: "Decor & Set Design",
    desc: "Bespoke set design and thematic decor fabricated in-house.",
    highlights: ["Concept sketches & 3D mockups", "In-house floral & fabrication studio", "Full teardown and site restoration"],
  },
];

export const processSteps = [
  { number: "01", title: "Discovery", desc: "We learn your vision, audience, budget and goals in a strategy session." },
  { number: "02", title: "Concept & Design", desc: "Mood boards and theme direction, refined until it feels exactly right." },
  { number: "03", title: "Planning", desc: "Vendor booking, permits, timelines and budgets locked with no grey areas." },
  { number: "04", title: "Live Production", desc: "On-ground execution by our producers, technicians and crew." },
  { number: "05", title: "Wrap-Up", desc: "Teardown, reporting and feedback to make the next one even better." },
];

export const portfolioItems = [
  {
    cat: "wedding", featured: true, tall: false,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    title: "The Aravali Sangeet", label: "Wedding",
    brief: "A three-day destination wedding in Udaipur, built around a golden-hour sangeet and a fully custom floral mandap.",
  },
  {
    cat: "corporate", featured: true, tall: false,
    img: "/media/stage-ceremony.jpg",
    title: "MSSW — 75 Years of Excellence", label: "Corporate",
    brief: "Full production for Madras School of Social Work's 75th anniversary — stage, AV, guest of honour hosting and floral design.",
  },
  {
    cat: "concert", featured: true, tall: true,
    img: "/media/live-performance.jpg",
    title: "Traditional Percussion Showcase", label: "Concert",
    brief: "Live stage sound and lighting for a traditional percussion ensemble as part of a campus cultural program.",
  },
  {
    cat: "brand", featured: true, tall: false,
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=900&q=80",
    title: "Lumen Product Launch", label: "Brand Activation",
    brief: "An after-hours launch party built to turn first-time guests into a room full of brand advocates.",
  },
  {
    cat: "wedding", featured: true, tall: false,
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    title: "Coastal Vows, Goa", label: "Wedding",
    brief: "A 120-guest beachside wedding with a long-table reception styled entirely in whites and sea greens.",
  },
  {
    cat: "concert", tall: true,
    img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=900&q=1000",
    title: "Echo Nights Live", label: "Concert",
    brief: "Full-scale stage and lighting rig for a multi-artist night show, run without a single cue missed.",
  },
  {
    cat: "corporate", tall: false,
    img: "/media/panel-discussion.jpg",
    title: "Campus Felicitation & Cultural Program", label: "Corporate",
    brief: "A felicitation ceremony and cultural showcase produced alongside a partner NGO's community program.",
  },
  {
    cat: "corporate", featured: true, tall: false,
    img: "/media/crowd-audience.jpg",
    title: "Campus Assembly Experience", label: "Corporate",
    brief: "Outdoor seating, sound and crowd flow for a 500-plus student assembly across a single campus day.",
  },
  {
    cat: "corporate", tall: false,
    img: "/media/aerial-event-setup.jpg",
    title: "Outdoor Venue Styling, MSSW", label: "Corporate",
    brief: "Full outdoor venue build — seating, staging and floral walkway — shot here from our own drone on-site.",
  },
  {
    cat: "wedding", tall: false,
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    title: "Royal Udaipur Nuptials", label: "Wedding",
    brief: "A palace-adjacent ceremony finished with a confetti send-off timed to the couple's exit song.",
  },
];

// Video items: `img` is the poster frame, `video` is the playable clip.
portfolioItems.push(
  {
    cat: "dance", tall: true, featured: true, video: "/media/portfolio/classical-dance.mp4",
    img: "/media/portfolio/classical-dance.jpg",
    title: "Classical Dance Performance", label: "Dance & Culture",
    brief: "Stage, sound and lighting for a traditional classical dance piece during the MSSW 75th anniversary celebration.",
  },
  {
    cat: "dance", tall: false, video: "/media/portfolio/live-percussion.mp4",
    img: "/media/portfolio/live-percussion.jpg",
    title: "Live Percussion On Stage", label: "Dance & Culture",
    brief: "Mic'd traditional drums on an LED-backed stage — balanced live so every beat reached the back row.",
  },
  {
    cat: "dance", tall: true, video: "/media/portfolio/dance-floor-party.mp4",
    img: "/media/portfolio/dance-floor-party.jpg",
    title: "Dance Floor Party Night", label: "Dance & Culture",
    brief: "A packed dance floor under moving-head lighting, driven by a live DJ set from our own booth.",
  },
  {
    cat: "dj", tall: true, featured: true, video: "/media/portfolio/dj-night-set.mp4",
    img: "/media/portfolio/dj-night-set.jpg",
    title: "Night DJ Set", label: "DJ & Sound",
    brief: "Our DJ on the decks in a purple-lit venue — full controller, laptop rig and stage monitors.",
  },
  {
    cat: "dj", tall: false, video: "/media/portfolio/dj-stage-lighting.mp4",
    img: "/media/portfolio/dj-stage-lighting.jpg",
    title: "DJ Booth & Stage Lighting", label: "DJ & Sound",
    brief: "Booth-side view of a red-washed stage: truss, moving heads and a live DJ rig working together.",
  },
  {
    cat: "dj", tall: false, video: "/media/portfolio/dj-led-wall.mp4",
    img: "/media/portfolio/dj-led-wall.jpg",
    title: "DJ Setup With LED Wall", label: "DJ & Sound",
    brief: "A DJ setup facing a full LED wall — synced visuals, sound and stage lighting on one run sheet.",
  },
  {
    cat: "dj", tall: false, video: "/media/portfolio/outdoor-dj-mixer.mp4",
    img: "/media/portfolio/outdoor-dj-mixer.jpg",
    title: "Outdoor Sound & Mixer Setup", label: "DJ & Sound",
    brief: "Daylight open-air setup with a controller, analogue mixer and monitors covering a whole campus courtyard.",
  },
  {
    cat: "dj", tall: false, video: "/media/portfolio/outdoor-dj-audience.mp4",
    img: "/media/portfolio/outdoor-dj-audience.jpg",
    title: "Campus Outdoor DJ", label: "DJ & Sound",
    brief: "DJ booth on the edge of a live outdoor audience, keeping the whole programme flowing between acts.",
  },
  {
    cat: "dj", tall: false, featured: true,
    img: "/media/portfolio/crew-live-setup.jpg",
    title: "Live Sound Crew At Work", label: "DJ & Sound",
    brief: "The crew mid-show: keys, mixer and DJ laptop all patched into a single front-of-house position.",
  },
  {
    cat: "dj", tall: false,
    img: "/media/portfolio/dj-controller-venue.jpg",
    title: "Controller, Close Up", label: "DJ & Sound",
    brief: "A close look at the controller with the venue's stage lighting glowing behind it.",
  },
  {
    cat: "dj", tall: false,
    img: "/media/portfolio/dj-controller-bokeh.jpg",
    title: "Decks & Stage Glow", label: "DJ & Sound",
    brief: "Pad lights, jog wheels and a blurred stage — the view from the booth just before the doors open.",
  },
  {
    cat: "corporate", tall: false, video: "/media/portfolio/stage-felicitation.mp4",
    img: "/media/portfolio/stage-felicitation.jpg",
    title: "Stage Felicitation", label: "Corporate",
    brief: "A guest-of-honour felicitation on a floral-fronted stage, paced and mic'd from the sound desk.",
  },
  {
    cat: "corporate", tall: false, video: "/media/portfolio/stage-floral-ceremony.mp4",
    img: "/media/portfolio/stage-floral-ceremony.jpg",
    title: "Floral Stage Ceremony", label: "Corporate",
    brief: "An awards moment on a stage dressed in marigold and orange blooms, run to the minute.",
  },
);

export const filters = [
  { key: "all", label: "All Work" },
  { key: "wedding", label: "Weddings" },
  { key: "corporate", label: "Corporate" },
  { key: "concert", label: "Concerts" },
  { key: "dj", label: "DJ & Sound" },
  { key: "dance", label: "Dance & Culture" },
  { key: "brand", label: "Brand Activation" },
];

export const testimonials = [
  {
    quote: "RR Events turned our wedding into something out of a film. Every single detail — from the lighting to the last song — was perfect. Our guests are still talking about it.",
    name: "Ananya Sharma",
    role: "Destination Wedding, Udaipur",
  },
  {
    quote: "We've run three annual summits with this team and each one has topped the last. Their production crew treats our brand like it's their own.",
    name: "Karan Mehta",
    role: "Head of Marketing, NexTech",
  },
  {
    quote: "Stage, sound, lighting, crowd management — flawless. They ran our 10,000-capacity show without a single hiccup. True professionals.",
    name: "Rohan Verma",
    role: "Producer, Sundown Festival",
  },
  {
    quote: "From concept sketches to the final reveal, the design team understood exactly what our brand needed. The activation drove real footfall and buzz.",
    name: "Priya Nair",
    role: "Brand Manager, Aura",
  },
  {
    quote: "They ran our 75th anniversary celebration down to the minute — guest of honour hosting, stage AV, the works. Nothing felt rushed.",
    name: "Dr. Lakshmi Iyer",
    role: "Administrative Head, MSSW",
  },
  {
    quote: "Our campus assembly needed seating, sound and crowd flow for 500+ students outdoors. RR Events handled it like it was routine.",
    name: "Vignesh Raman",
    role: "Student Affairs Coordinator",
  },
  {
    quote: "I called them two weeks before our launch party in a panic. They still delivered a full brand activation without missing a beat.",
    name: "Meera Pillai",
    role: "Founder, Lumen",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "/about", label: "About", route: true },
  { href: "/services", label: "What We Do", route: true },
  { href: "/portfolio", label: "Portfolio", route: true },
  { href: "/testimonials", label: "Testimonials", route: true },
];

// Add a file to public/media/clients/ and set `logo` to show a logo instead of the name.
export const clients = [
  { name: "Indian Institute of Technology Madras", short: "IIT Madras", logo: "/media/clients/iitm.png" },
  { name: "SRM Institute of Science and Technology", short: "SRM", logo: "/media/clients/srm.svg", dark: true },
  { name: "Madras School of Social Work", short: "Madras School of Social Work", logo: "/media/clients/mssw.jpg" },
  { name: "Sri Ramachandra Institute of Higher Education and Research", short: "Sri Ramachandra", logo: "/media/clients/sriher.png" },
  { name: "Dwaraka Doss Goverdhan Doss Vaishnav College", short: "DG Vaishnav College", logo: "/media/clients/dgvc.jpg" },
];

export const instagramUrl = "https://www.instagram.com/_rr_events___?stkn=eGV5N2RpZnZjcmEx&utm_source=qr";
export const youtubeUrl = "https://youtube.com/@rrevent26?si=otxtbuvsTtbfH3nH";
