"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Code2, BrainCircuit, Server, Rocket, Award, BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = {
  "Backend & Full Stack": [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "JWT",
    "Hibernate/JPA",
    "Maven",
    "REST APIs",
    "Microservices",
    "Eureka",
    "Angular",
    "React.js",
    "TypeScript",
  ],
  "Machine Learning & AI": [
    "Python",
    "Computer Vision",
    "Deep Learning",
    "NLP",
    "Object Detection",
    "Keypoint Detection",
    "Pose Estimation",
    "YOLO Pose",
    "OpenCV",
    "CVAT",
    "scikit-learn",
  ],
  "GenAI & Data": [
    "RAG",
    "LangChain",
    "LlamaIndex",
    "LLM APIs",
    "Vector Databases",
    "WhisperX",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Oracle",
  ],
  "Cloud, DevOps & Testing": [
    "Azure",
    "Docker",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "JUnit",
    "Mockito",
    "Swagger/OpenAPI",
    "Postman",
    "Git",
  ],
} as const;

type SkillGroup = keyof typeof skills;

const projects = [
  {
    title: "Micro-Ecommerce Application",
    category: "Java Full Stack",
    icon: <Server className="h-5 w-5" />,
    stack: "Spring Boot · Spring Security · JWT · Hibernate/JPA · Angular · React · MySQL · Docker · JUnit · Mockito",
    description:
      "Secure full-stack e-commerce platform with product browsing, cart management, order tracking, checkout workflows, authentication, role-based access, REST APIs, and tested backend services.",
    highlights: ["JWT-secured APIs", "Layered Spring Boot architecture", "Dockerized services", "Swagger/Postman API validation"],
  },
  {
    title: "Fish/Shrimp Detection & Measurement System",
    category: "Computer Vision Research",
    icon: <BrainCircuit className="h-5 w-5" />,
    stack: "Python · OpenCV · YOLO Pose · CVAT · NumPy · pandas · Matplotlib",
    description:
      "Computer vision pipeline for fish and shrimp detection, pose estimation, body landmark analysis, and length/size/weight measurement support using annotated image and video datasets.",
    highlights: ["CVAT annotation workflows", "YOLO Pose training", "Contour-based analysis", "Reproducible preprocessing pipelines"],
  },
  {
    title: "Talk2Campus",
    category: "RAG / AI Application",
    icon: <Rocket className="h-5 w-5" />,
    stack: "React · FastAPI · Python · RAG · Vector DB · LLM APIs · WhisperX",
    description:
      "API-driven campus assistant that gives conversational access to distributed university information using retrieval-augmented generation, REST endpoints, and voice support.",
    highlights: ["10 REST endpoints", "Vector retrieval before generation", "WhisperX voice support", "Frontend/backend separation"],
    repo: "https://github.com/PushkarSikharam/Talk2Campus",
  },
  {
    title: "Emotive Chatbot",
    category: "NLP Application",
    icon: <Code2 className="h-5 w-5" />,
    stack: "Python · Flask · React · NLP · Sentiment140 · scikit-learn",
    description:
      "Emotion-aware chatbot that classifies user sentiment patterns and returns response flows through a Flask API and React interface.",
    highlights: ["Text preprocessing", "Backend inference APIs", "Real-time UI integration", "Emotion-aware responses"],
  },
];

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Texas A&M University–Corpus Christi",
    date: "Aug 2025 – Present",
    summary:
      "Building computer vision workflows for fish and shrimp detection, pose estimation, annotation pipelines, body measurement, and reproducible ML experiments.",
  },
  {
    role: "Associate Software Engineer",
    org: "DXC Technologies",
    date: "Aug 2022 – Aug 2024",
    summary:
      "Developed Java/Spring Boot microservices, REST APIs, relational database schemas, Dockerized services, and backend reliability workflows in Agile teams.",
  },
  {
    role: "Technical Intern",
    org: "Rakuten Pvt. Ltd.",
    date: "Jan 2022 – Jun 2022",
    summary:
      "Supported cloud application services, API validation, defect resolution, service testing, and sprint-based software delivery.",
  },
];

const metrics = [
  { value: "2+", label: "Years Software Engineering" },
  { value: "40%", label: "Reduced Service Dependencies" },
  { value: "30%", label: "Reduced Post-Deployment Defects" },
  { value: "10", label: "REST Endpoints in Talk2Campus" },
];

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<SkillGroup>("Backend & Full Stack");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-96 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-40 left-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="mb-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Abhinay Kumar</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Software Engineer · Java Backend · AI Applications
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Building backend systems and AI products that actually work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              M.S. Computer Science student with professional Java/Spring Boot engineering experience and hands-on work in computer vision, YOLO Pose, RAG systems, and API-driven AI applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:abhinaykumarnalband@gmail.com">
  <Button className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
    <Mail className="mr-2 h-4 w-4" /> Contact Me
  </Button>
</a>
              <a href="https://github.com/Abhinay20003" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="rounded-2xl border-slate-700 bg-slate-900/50 px-6 text-slate-100 hover:bg-slate-800">
    <ExternalLink className="mr-2 h-4 w-4" /> GitHub
  </Button>
</a>

<a href="https://www.linkedin.com/in/abhinay-kumar-nalband-1635ba1b2/" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="rounded-2xl border-slate-700 bg-slate-900/50 px-6 text-slate-100 hover:bg-slate-800">
    <ExternalLink className="mr-2 h-4 w-4" /> LinkedIn
  </Button>
</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="rounded-3xl border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile Snapshot</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Engineer + AI Builder</h2>
                  </div>
                  <BrainCircuit className="h-9 w-9 text-cyan-300" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                      <div className="text-3xl font-black text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                  <MapPin className="mr-2 inline h-4 w-4 text-cyan-300" /> Corpus Christi, TX · Open to Software Engineering, Java Full Stack, ML Engineer, and AI Application roles.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="mt-28">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Selected Work</p>
              <h2 className="mt-3 text-4xl font-black">Projects that prove the stack</h2>
            </div>
            <p className="hidden max-w-md text-right text-slate-400 md:block">
              Backend, AI, computer vision, RAG, and full-stack systems presented with measurable engineering details.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <Card className="h-full rounded-3xl border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">{project.icon}</div>
                        <div>
                          <p className="text-sm text-cyan-300">{project.category}</p>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                      {project.repo && (
  <a href={project.repo} target="_blank" rel="noopener noreferrer">
    <ExternalLink className="h-5 w-5 text-slate-400 hover:text-cyan-300" />
  </a>
)}
                    </div>
                    <p className="text-sm font-medium text-slate-300">{project.stack}</p>
                    <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span key={h} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                          {h}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-28 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Technical Depth</p>
            <h2 className="mt-3 text-4xl font-black">One profile. Two serious skill sets.</h2>
            <p className="mt-5 leading-7 text-slate-400">
              This portfolio is built around the intersection of production software engineering and AI systems, not random tools thrown together.
            </p>
          </div>
          <Card className="rounded-3xl border-slate-800 bg-slate-900/70">
            <CardContent className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
              {(Object.keys(skills) as SkillGroup[]).map((group) => (
                  <button
                    key={group}
                    onClick={() => setActiveSkill(group)}
                    className={`rounded-full px-4 py-2 text-sm transition ${activeSkill === group ? "bg-cyan-400 text-slate-950" : "border border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-400/60"}`}
                  >
                    {group}
                  </button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {skills[activeSkill].map((skill) => (
                  <div key={skill} className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mt-28">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-4xl font-black">Engineering timeline</h2>
          <div className="mt-8 grid gap-5">
            {experience.map((item) => (
              <Card key={item.role} className="rounded-3xl border-slate-800 bg-slate-900/70">
                <CardContent className="grid gap-4 p-6 md:grid-cols-[0.35fr_1fr]">
                  <div>
                    <p className="text-sm text-cyan-300">{item.date}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-slate-400">{item.org}</p>
                  </div>
                  <p className="leading-7 text-slate-300">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-28 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl">
          <Award className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-4 text-4xl font-black">Let’s build something useful.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Interested in Java full stack, backend engineering, ML engineering, and AI application roles where software quality matters.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
              <Mail className="mr-2 h-4 w-4" /> abhinaykumarnalband@gmail.com
            </Button>
            <a href="/Abhinay_Kumar_Resume.pdf" download>
  <Button variant="outline" className="rounded-2xl border-slate-700 bg-slate-950 px-6 text-slate-100 hover:bg-slate-800">
    <BriefcaseBusiness className="mr-2 h-4 w-4" /> Download Resume
  </Button>
</a>
          </div>
        </section>
      </main>
    </div>
  );
}
