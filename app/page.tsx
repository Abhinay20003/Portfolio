"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  BrainCircuit,
  Server,
  Rocket,
  Award,
  BriefcaseBusiness,
} from "lucide-react";
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
    category: "Java Full Stack Application",
    icon: <Server className="h-5 w-5" />,
    repo: "https://github.com/Abhinay20003/AOS-Ecom",
    stack:
      "Spring Boot · Spring Security · JWT · Hibernate/JPA · Angular · React · MySQL · Docker · JUnit · Mockito",
    description:
      "Secure full-stack e-commerce platform with product browsing, cart management, order tracking, checkout workflows, authentication, role-based access, REST APIs, and tested backend services.",
    highlights: [
      "JWT-secured APIs",
      "Layered Spring Boot architecture",
      "Dockerized services",
      "Swagger/Postman API validation",
    ],
  },
  {
    title: "Fish/Shrimp Detection & Measurement System",
    category: "Computer Vision Research",
    icon: <BrainCircuit className="h-5 w-5" />,
    stack: "Python · OpenCV · YOLO Pose · CVAT · NumPy · pandas · Matplotlib",
    description:
      "Computer vision pipeline for fish and shrimp detection, pose estimation, body landmark analysis, and length/size/weight measurement support using annotated image and video datasets.",
    highlights: [
      "CVAT annotation workflows",
      "YOLO Pose training",
      "Contour-based analysis",
      "Reproducible preprocessing pipelines",
    ],
  },
  {
    title: "Talk2Campus",
    category: "Full Stack RAG / AI Application",
    icon: <Rocket className="h-5 w-5" />,
    stack: "React · FastAPI · Python · RAG · Vector DB · LLM APIs · WhisperX",
    description:
      "API-driven campus assistant that gives conversational access to distributed university information using retrieval-augmented generation, REST endpoints, and voice support.",
    highlights: [
      "10 REST endpoints",
      "Vector retrieval before generation",
      "WhisperX voice support",
      "Frontend/backend separation",
    ],
    repo: "https://github.com/Abhinay20003/Talk2-Campus",
  },
  {
    title: "Emotive Chatbot",
    category: "NLP Application",
    icon: <Code2 className="h-5 w-5" />,
    stack: "Python · Flask · React · NLP · Sentiment140 · scikit-learn",
    description:
      "Emotion-aware chatbot that classifies user sentiment patterns and returns response flows through a Flask API and React interface.",
    highlights: [
      "Text preprocessing",
      "Backend inference APIs",
      "Real-time UI integration",
      "Emotion-aware responses",
    ],
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
    role: "Graduate Assistant — Web & Technical Support",
    org: "Texas A&M University–Corpus Christi",
    date: "Sep 2024 – Jun 2025",
    summary:
      "Maintained departmental web pages, improved layouts and navigation, validated content updates, fixed page issues, and supported student-facing academic web content.",
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
  {
    role: "Web Developer",
    org: "Vignan Institute of Technology and Science",
    date: "May 2020 – Jan 2021",
    summary:
      "Developed and maintained college website pages using HTML5, CSS3, JavaScript, responsive design, UI updates, and content revisions.",
  },
];

const metrics = [
  { value: "2+", label: "Years Professional Software Engineering" },
  { value: "B.Tech + M.S.", label: "Academic Web Development Experience" },
  { value: "30+", label: "Defects Resolved Across Agile Sprints" },
  { value: "40%", label: "Reduced Service Dependencies" },
];

const focusAreas = [
  {
    title: "Java Full Stack",
    detail:
      "Spring Boot, REST APIs, microservices, secure backend systems, Angular/React interfaces, SQL databases, and tested API workflows.",
  },
  {
    title: "AI / Computer Vision",
    detail:
      "YOLO Pose, OpenCV, CVAT annotation workflows, fish/shrimp detection, pose estimation, and measurement pipelines.",
  },
  {
    title: "RAG Applications",
    detail:
      "FastAPI, React, vector retrieval, LLM APIs, WhisperX voice support, and API-driven campus information assistant development.",
  },
  {
    title: "Academic Web Experience",
    detail:
      "Worked on website updates during B.Tech and M.S., improving layouts, navigation, content accuracy, accessibility, and student-facing pages.",
  },
];

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<SkillGroup>(
    "Backend & Full Stack"
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-96 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-40 left-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="mb-10 flex items-center justify-between">
          <div className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Abhinay Kumar Nalband
          </div>

          <div className="hidden gap-8 text-lg font-medium text-slate-300 md:flex">
  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-white"
  >
    Projects
  </button>

  <button
    onClick={() =>
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-white"
  >
    Skills
  </button>

  <button
    onClick={() =>
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-white"
  >
    Experience
  </button>

  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-white"
  >
    Contact
  </button>
</div>
        </nav>

        <section className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Java Full Stack Developer · AI/ML Engineer · Software Engineer
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Building full-stack software and AI systems that solve real
              problems.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              M.S. Computer Science student and Software Engineer with 2+ years
              of experience building Java/Spring Boot full-stack applications,
              RESTful APIs, microservices, secure backend systems, and
              React/Angular interfaces, with hands-on work in computer vision,
              YOLO Pose, RAG pipelines, and AI-driven applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:abhinaykumarnalband@gmail.com">
                <Button className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </a>

              <a
                href="https://github.com/Abhinay20003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-2xl border-slate-700 bg-slate-900/50 px-6 text-slate-100 hover:bg-slate-800"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/abhinay-kumar-nalband-1635ba1b2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-2xl border-slate-700 bg-slate-900/50 px-6 text-slate-100 hover:bg-slate-800"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </a>
              <a href="/Abhinay_Kumar_Resume.pdf" download>
  <Button
    variant="outline"
    className="rounded-2xl border-slate-700 bg-slate-900/50 px-6 text-slate-100 hover:bg-slate-800"
  >
    <BriefcaseBusiness className="mr-2 h-4 w-4" /> Resume
  </Button>
</a>
            </div>

            <div className="mt-8 max-w-2xl">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl">
                <div className="grid items-stretch gap-0 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[320px] w-full">
                    <Image
                      src="/profile-new.jpg"
                      alt="Abhinay Kumar Nalband"
                      fill
                      className="object-cover object-[80%_center]"
                      priority
                    />
                  </div>

                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                        Personal Profile
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">
                        Abhinay Kumar Nalband
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        M.S. Computer Science student at Texas A&M
                        University–Corpus Christi, with professional experience
                        in Java full-stack development and hands-on work in
                        AI/ML systems.
                      </p>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          From
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          Hyderabad, India
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Current Location
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          Corpus Christi, Texas
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Graduate Education
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          M.S. Computer Science
                        </p>
                        <p className="text-xs text-slate-400">
                          Texas A&M University–Corpus Christi
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Undergraduate Education
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          B.Tech Computer Science
                        </p>
                        <p className="text-xs text-slate-400">
                          Vignan Institute of Technology and Science
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="relative overflow-hidden rounded-3xl border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <CardContent className="relative p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      Engineering Command Center
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Java Full Stack + AI Builder
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                      A compact view of my Java full-stack, AI/ML research,
                      academic web, and production software experience.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                    <BrainCircuit className="h-10 w-10 text-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
                    >
                      <div className="text-3xl font-black text-white group-hover:text-cyan-300">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-5 text-slate-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Core Strengths
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {focusAreas.map((area) => (
                      <div
                        key={area.title}
                        className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 transition hover:border-cyan-400/50"
                      >
                        <div className="text-sm font-bold text-white">
                          {area.title}
                        </div>
                        <div className="mt-1 text-xs leading-5 text-slate-400">
                          {area.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-slate-300">
                  <MapPin className="mr-2 inline h-4 w-4 text-cyan-300" />
                  Corpus Christi, TX · Open to Java Full Stack, Software
                  Engineering, Backend Engineering, ML Engineering, and AI
                  Application roles.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="mt-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Selected Work
              </p>
              <h2 className="mt-3 text-4xl font-black">
                Projects that prove the stack
              </h2>
            </div>
            <p className="hidden max-w-md text-right text-slate-400 md:block">
              Backend, AI, computer vision, RAG, and full-stack systems
              presented with measurable engineering details.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full rounded-3xl border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                          {project.icon}
                        </div>
                        <div>
                          <p className="text-sm text-cyan-300">
                            {project.category}
                          </p>
                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5 text-slate-400 hover:text-cyan-300" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm font-medium text-slate-300">
                      {project.stack}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
                        >
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

        <section
          id="skills"
          className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Technical Depth
            </p>
            <h2 className="mt-3 text-4xl font-black">
              One profile. Two serious skill sets.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              This portfolio is built around the intersection of production
              software engineering and AI systems, not random tools thrown
              together.
            </p>
          </div>

          <Card className="rounded-3xl border-slate-800 bg-slate-900/70">
            <CardContent className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {(Object.keys(skills) as SkillGroup[]).map((group) => (
                  <button
                    key={group}
                    onClick={() => setActiveSkill(group)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      activeSkill === group
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-400/60"
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {skills[activeSkill].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 text-4xl font-black">Engineering timeline</h2>

          <div className="mt-8 grid gap-5">
            {experience.map((item) => (
              <Card
                key={`${item.role}-${item.org}`}
                className="rounded-3xl border-slate-800 bg-slate-900/70"
              >
                <CardContent className="grid gap-4 p-6 md:grid-cols-[0.35fr_1fr]">
                  <div>
                    <p className="text-sm text-cyan-300">{item.date}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-slate-400">{item.org}</p>
                  </div>
                  <p className="leading-7 text-slate-300">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section
  id="contact"
  className="mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center shadow-2xl sm:p-8"
>
  <div className="mx-auto max-w-4xl">
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10">
      <Award className="h-8 w-8 text-cyan-300" />
    </div>

    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
      Let’s Connect
    </p>

    <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
      Open to Java Full Stack, Software Engineering, and AI/ML roles.
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
      I am interested in roles where I can build reliable full-stack
      applications, backend APIs, AI-powered systems, and production-ready
      software that is clean, tested, and useful.
    </p>

    <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Core Focus
        </p>
        <p className="mt-2 text-base font-bold text-white">
          Java Full Stack Engineering
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Software Strength
        </p>
        <p className="mt-2 text-base font-bold text-white">
          Backend APIs & Microservices
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          AI Direction
        </p>
        <p className="mt-2 text-base font-bold text-white">
          ML / AI Applications
        </p>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
      <p className="text-sm text-slate-400">Reach me at</p>

      <a
        href="mailto:abhinaykumarnalband@gmail.com"
        className="mx-auto mt-2 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-cyan-300 hover:text-cyan-200 sm:text-xl"
      >
        abhinaykumarnalband@gmail.com
      </a>
    </div>

    <p className="mt-6 text-sm text-slate-500">
      Based in Corpus Christi, Texas · Available for full-stack, backend,
      software engineering, and AI application opportunities.
    </p>
  </div>
</section>
      </main>
    </div>
  );
}