// image Project
import Project1 from "../assets/img/project/pro1.png";
import Project2 from "../assets/img/project/grahasta.png";
import Project3 from "../assets/img/project/netflix.png";

// lomba IOT Faramadina Jakarta 
import SertifLomba1 from "../assets/img/lomba/Sertif-IOT.jpg"
import DokumLomba1 from "../assets/img/lomba/Dokum-IOT.jpg"
// lomba Invention Udayana
import SertifLomba2 from "../assets/img/lomba/Sertif-Invention.jpg"

// Magang
import SertifMagang from "../assets/img/magang/magang.jpeg"

// Activity Mentoring
import Mentoring from "../assets/img/activity/Mentoring.png"
import Abdidaya from "../assets/img/activity/Abdidaya.jpeg"

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
    year: "2022",
    category: "lomba",
    title: "Best UI/UX Design - DAMEKO Project",
    rank: "Finalis / Best Design",
    institution: "Invention Udayana",
    desc: "Dameko merupakan salah satu platform yang berkontribusi dalam mewujudkan tujuan pembangunan berkelanjutan (Sustunaible Development Goals atau SDGs).",
    icon: "bi bi-trophy-fill",
    images: [
      { url: SertifLomba2, alt: "Sertifikat Magang Vinix"}
    ]
  },
  {
    id: 2,
    year: "2024",
    category: "lomba",
    title: "Juara 3 - Automatic Watering System",
    rank: "Juara 3",
    institution: "Universitas Paramadina Jakarta",
    desc: "Sistem penyiraman otomatis berbasis IOT untuk menentukan kesuburan tanah",
    icon: "bi bi-trophy-fill",
    images: [
      { url: SertifLomba1, alt: "Sertifikat Lomba IOT"},
      { url: DokumLomba1, alt: "Dokum Lomba IOT"}
    ]
  },
  
  {
    id: 3,
    year: "2024",
    category: "activity",
    title: "Generation Girl Goed to High School",
    rank: "Mentor",
    institution: "Generation Girl Bali",
    desc: "Pelatihan pembuatan website portofolio bagi siswa-siswi SMAN 1 Mengwi",
    icon: "bi bi-cpu-fill",
    images: [
      { url: Mentoring, alt: "SMA 1 MENGWI"}
    ]
  },
  {
    id: 4,
    year: "2025",
    category: "activity",
    title: "Abdidaya Ormawa",
    rank: "Tim Web",
    institution: "Universitas Udayana",
    desc: "Membuat website yang digunakan sebagai sumber informasi untuk acara abdidaya ormawa di universitas udayana",
    icon: "bi bi-cpu-fill",
    images: [
      { url: Abdidaya, alt: "Abdidaya"}
    ]
  },
  {
    id: 5,
    year: "2025",
    category: "magang",
    title: "Science data",
    rank: "Internship",
    institution: "Vinix7",
    desc: "Analisis data terkait IUP (International Undergraduate Program) di perguruan tinggi",
    icon: "bi bi-briefcase-fill",
    images: [ 
       { url: SertifMagang, alt: "Sertif Magang"}
    ]
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