// image Project
import Project1 from "../assets/img/project/pro1.png";
import Project2 from "../assets/img/project/grahasta.png";
import Project3 from "../assets/img/project/netflix.png";

import Award1 from "../assets/img/project/magang.jpeg";
import Award2 from "../assets/img/project/abdidaya.jpeg";
export const navLinks = [
    {id: 1, path: "/", text: "Home"},
    {id: 2, path: "/Project", text: "Project"},
    {id: 3, path: "/Awards", text: "Experience"},
    {id: 4, path: "https://grahasta.my.id/", text: "Businnes"},
    // {id: 5, path: "/", text: "awards and competitions"},
];

export const projects = [
    {
        id: 1,
        image: Project1,
        title: "Website Bali Tour",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sed.",
        tech : ["React", "Bootstrap"], // Menggunakan Array
        link : "https://travel-webbali.netlify.app/" // Link tujuan proyek
    },
    {
        id: 2,
        image: Project3,
        title: "",
        desc : "Platform integrasi pertanian dan peternakan dengan layanan konsultasi.",
        tech : ["Python", "Streamlit"], 
        link : "https://github.com/dayuani/harvest-hub"
    },
    {
        id: 4,
        image: Project2,
        title: "Grahasta Wedding Invitation",
        desc : "Website undangan digital elegan dengan fitur Wish dan RSVP realtime.",
        tech : ["React", "Tailwind CSS", "Supabase"], 
        link : "https://grahasta.my.id/"
    }
]
export const achievements = [
 {
    id: 1,
    year: "2026",
    category: "lomba",
    title: "Best UI/UX Design - Harvest HUB Project",
    rank: "Finalist / Best Design",
    institution: "Design-Oriented Human-Computer Interaction Exhibition",
    desc: "Berhasil meraih penghargaan desain antarmuka terbaik dalam pengembangan platform integrasi pertanian dan peternakan dengan pendekatan User-Centered Design.",
    icon: "bi bi-trophy-fill",
    images: [
      { id: 101, url: Award1, alt: "Harvest HUB Showcase" }
    ]
  },
  {
    id: 2,
    year: "2026",
    category: "activity",
    title: "Semantic Web Innovation Project - Ceraken",
    rank: "Core Developer",
    institution: "Udayana University",
    desc: "Mengembangkan inovasi arsitektur digital 'Ceraken' menggunakan teknologi Semantic Web ontologies (RDF, OWL, SPARQL) untuk manajemen arsip budaya Bali.",
    icon: "bi bi-cpu-fill",
    images: []
  },
  {
    id: 3,
    year: "2025",
    category: "magang",
    title: "Frontend Developer Intern",
    rank: "Internship",
    institution: "Tech Company / Studio",
    desc: "Membangun komponen antarmuka web yang responsif menggunakan React dan Tailwind CSS, serta mengintegrasikan API eksternal untuk optimasi performa.",
    icon: "bi bi-briefcase-fill",
    images: []
  }
];
export const skillCategories = [
  {
    id: 1,
    title: "Skills",
    items: [
      { name: "CSS3", bg: "#007acc", icon: "bi bi-filetype-css" },
      { name: "HTML5", bg: "#e34f26", icon: "bi bi-filetype-html" },
      { name: "JAVASCRIPT", bg: "#f7df1e", color: "#000000", icon: "bi bi-filetype-js" },
      { name: "PHP", bg: "#777bb4", icon: "bi bi-code-slash" },
      { name: "PYTHON", bg: "#3776ab", icon: "bi bi-terminal" }
    ]
  },
  {
    id: 2,
    title: "Framework",
    items: [
      { name: "BOOTSTRAP", bg: "#7952b3", icon: "bi bi-bootstrap-fill" },
      { name: "JQUERY", bg: "#0769ad", icon: "bi bi-lightning-fill" },
      { name: "LARAVEL", bg: "#ff2d20", icon: "bi bi-box-seam" },
      { name: "REACT", bg: "#20232a", icon: "bi bi-patch-check" },
      { name: "TAILWIND CSS", bg: "#38b2ac", icon: "bi bi-wind" }
    ]
  },
  {
    id: 3,
    title: "Desain",
    items: [
      { name: "CANVA", bg: "#00c4cc", icon: "bi bi-palette" },
      { name: "FIGMA", bg: "#f24e1e", icon: "bi bi-figma" }
    ]
  },
  {
    id: 4,
    title: "Database",
    items: [
      { name: "MYSQL", bg: "#00758f", icon: "bi bi-database" },
      { name: "SUPABASE", bg: "#1c1c1c", icon: "bi bi-triangle-half" }
    ]
  }
];