// Icons
import {
  FaChalkboardTeacher,
  FaClock,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

// Hero Section
export const heroContent = {
  title: "Empowering Minds, Shaping Futures",
  subtitle: "Your journey to academic excellence starts here.",
  buttonText: "Explore Courses",
  background: "/images/hero-bg.png",
};

// About Section

export const aboutContent = {
  subtitle: "About Us",
  title: "Your Partner in Sri Lankan Education",
  desc1:
    "At EduLanka, we are dedicated to revolutionizing the learning experience for students across Sri Lanka. Our mission is to provide accessible, high-quality education that empowers students to achieve their academic goals and unlock their full potential.",
  desc2:
    "We believe in a future where every student has the tools and support they need to succeed, regardless of their location or background. Our platform combines innovative technology with expert instruction to create a dynamic and engaging learning environment.",

  features: [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
      title: "Expert Tutors",
      desc: "Learn from the best educators in Sri Lanka, dedicated to your academic growth.",
    },
    {
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "Flexible Learning",
      desc: "Study anytime, anywhere, with our on-demand video lessons and live classes.",
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
      title: "Affordable Plans",
      desc: "High-quality education that is accessible and budget-friendly for everyone.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "Progress Tracking",
      desc: "Monitor your performance with detailed analytics and personalized feedback.",
    },
  ],
};

// Classes Category Data

export const classesData = [
  {
    name: "Mathematics",
    desc: "Numbers, logic, and patterns.",
    img: "/images/classes-category-image-01.png",
  },
  {
    name: "Science",
    desc: "Explore the natural world.",
    img: "/images/classes-category-image-02.png",
  },
  {
    name: "IT & Programming",
    desc: "Build the future with code.",
    img: "/images/classes-category-image-03.png",
  },
  {
    name: "Languages",
    desc: "Connect with the world.",
    img: "/images/classes-category-image-04.png",
  },
];

// Featured Courses

export const featuredCourses = [
  {
    title: "Advanced Level Mathematics",
    desc: "Comprehensive A/L Math course covering all key topics.",
    img: "/images/feautured-couse-image-01.avif",
    link: "#",
  },
  {
    title: "O Level Science",
    desc: "O/L Science course with practical experiments and theory.",
    img: "/images/feautured-couse-image-02.avif",
    link: "#",
  },
  {
    title: "Introduction to Programming",
    desc: "Beginner-friendly programming course with hands-on projects.",
    img: "/images/feautured-couse-image-03.avif",
    link: "#",
  },
  {
    title: "English for Professionals",
    desc: "Improve your English skills for professional success.",
    img: "/images/feautured-couse-image-04.avif",
    link: "#",
  },
];

// Teachers Section Data
export const teachersData = [
  {
    name: "Ms. Nimali Perera",
    title: "Mathematics Expert",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=NimaliPerera",
  },
  {
    name: "Mr. Kamal Silva",
    title: "Science Specialist",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=KamalSilva",
  },
  {
    name: "Ms. Deepani Fernando",
    title: "IT & Programming Instructor",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=DeepaniFernando",
  },
  {
    name: "Mr. Rohan De Silva",
    title: "Language Coach",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=RohanDeSilva",
  },
  {
    name: "Ms. Sanduni Jayasuriya",
    title: "History Lecturer",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=SanduniJayasuriya",
  },
  {
    name: "Mr. Nuwan Peris",
    title: "Commerce Instructor",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=NuwanPeris",
  },
  {
    name: "Ms. Dilani Fernando",
    title: "Art & Design Teacher",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=DilaniFernando",
  },
  {
    name: "Mr. Saman Wijesinghe",
    title: "Music Teacher",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=SamanWijesinghe",
  },
  {
    name: "Ms. Ishara Gunasekara",
    title: "Biology Teacher",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=IsharaGunasekara",
  },
  {
    name: "Mr. Pradeep Fernando",
    title: "Physics Instructor",
    img: "https://api.dicebear.com/7.x/adventurer/svg?seed=PradeepFernando",
  },
];

// Testimonial Section Data
export const testimonialsData = [
  {
    name: "Chamath Rajapaksa",
    date: "2023-08-15",
    rating: 5,
    img: "https://api.dicebear.com/7.x/micah/svg?seed=ChamathRajapaksa",
    text: "“EduLanka helped me achieve top marks in my A/L exams. The tutors are excellent and the platform is easy to use.”",
  },
  {
    name: "Sandali Jayawardena",
    date: "2023-09-22",
    rating: 4,
    img: "https://api.dicebear.com/7.x/micah/svg?seed=SandaliJayawardena",
    text: "“I improved my English significantly with the help of EduLanka’s language courses. Highly recommended!”",
  },
  {
    name: "Ravin Fernando",
    date: "2023-10-10",
    rating: 5,
    img: "https://api.dicebear.com/7.x/micah/svg?seed=RavinFernando",
    text: "“The programming course was fantastic. I learned so much and now feel confident in my coding skills.”",
  },
  {
    name: "Dilani Perera",
    date: "2023-11-05",
    rating: 5,
    img: "https://api.dicebear.com/7.x/micah/svg?seed=DilaniPerera",
    text: "“The teachers are very supportive and the lessons are easy to follow. I love the interactive platform!”",
  },
];

// Footer Data
export const footerData = {
  sections: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/", active: true },
        { label: "Classes", href: "/classes" },
        { label: "Teachers", href: "/teachers" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Courses",
      links: [
        { label: "Mathematics", href: "/classes" },
        { label: "Science", href: "/classes" },
        { label: "IT", href: "/classes" },
        { label: "Languages", href: "/classes" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/privacy" },
      ],
    },
  ],
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
};
