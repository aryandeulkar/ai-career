import { BrainCircuit, Briefcase, LineChart, ScrollText  , UserPlus, FileEdit, Users} from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
  },
];




export const howItWorks = [
  {
    title: "Professional Onboarding",
    description: "Share your industry and expertise for personalized guidance",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Craft Your Documents",
    description: "Create ATS-optimized resumes and compelling cover letters",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Prepare for Interviews",
    description:
      "Practice with AI-powered mock interviews tailored to your role",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track Your Progress",
    description: "Monitor improvements with detailed performance analytics",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];



export const testimonial = [
  {
    quote:
      "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
    author: "Sarah Chen",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    role: "Software Engineer",
    company: "Tech Giant Co.",
  },
  {
    quote:
      "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
    author: "Michael Rodriguez",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    role: "Product Manager",
    company: "StartUp Inc.",
  },
  {
    quote:
      "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
    author: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    role: "Marketing Director",
    company: "Global Corp",
  },
  {
    quote:
      "Got more interviews in two weeks than in six months! Very  Good and helpful to use!",
    author: "Kunal Kamra",
    image: "/kamra.webp",
    role: "Marketing Director",
    company: "Global Corp",
  },
];

export const faqs = [
  {
    question: "What makes Sensai unique as a career development tool?",
    answer:
      "Sensai combines AI-powered career tools with industry-specific insights to help you advance your career. Our platform offers three main features: an intelligent resume builder, a cover letter generator, and an adaptive interview preparation system. Each tool is tailored to your industry and skills, providing personalized guidance for your professional journey.",
  },
  {
    question: "How does Sensai create tailored content?",
    answer:
      "Sensai learns about your industry, experience, and skills during onboarding. It then uses this information to generate customized resumes, cover letters, and interview questions. The content is specifically aligned with your professional background and industry standards, making it highly relevant and effective.",
  },
  {
    question: "How accurate and up-to-date are Sensai's industry insights?",
    answer:
      "We update our industry insights weekly using advanced AI analysis of current market trends. This includes salary data, in-demand skills, and industry growth patterns. Our system constantly evolves to ensure you have the most relevant information for your career decisions.",
  },
  {
    question: "Is my data secure with Sensai?",
    answer:
      "Absolutely. We prioritize the security of your professional information. All data is encrypted and securely stored using industry-standard practices. We use Clerk for authentication and never share your personal information with third parties.",
  },
  {
    question: "How can I track my interview preparation progress?",
    answer:
      "Sensai tracks your performance across multiple practice interviews, providing detailed analytics and improvement suggestions. You can view your progress over time, identify areas for improvement, and receive AI-generated tips to enhance your interview skills based on your responses.",
  },
  {
    question: "Can I edit the AI-generated content?",
    answer:
      "Yes! While Sensai generates high-quality initial content, you have full control to edit and customize all generated resumes, cover letters, and other content. Our markdown editor makes it easy to refine the content to perfectly match your needs.",
  },
];