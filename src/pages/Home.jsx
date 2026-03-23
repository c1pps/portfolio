import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import mockup from "../assets/img/mockup-zoomed.webp";
import gtasWebsite from "../assets/img/gtas-website.webp";
import greenThumbs from "../assets/img/greenthumbs.webp";
import greenMarket from "../assets/img/greenmarket.webp";
import valorProject from "../assets/img/valor.webp";
import theloopProject from "../assets/img/tlwebsite.webp";
import servUp from "../assets/img/servup.webp";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowRight,
  Code,
  Terminal,
  Cpu,
  Globe,
  Zap,
  LayoutTemplate,
  Hash,
  Braces,
  LoaderCircle,
} from "lucide-react";
import React, { useState, useRef } from "react";

// Front
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

// Back
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

// Logiciel
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { SiPhpstorm } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import emailjs from "@emailjs/browser";
export default function Home() {
  const [isOptions, setIsOptions] = useState(false);
  const [isSchool, setIsSchool] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      emailjs
        .sendForm("portfolio", "portoflio-template", form.current, {
          publicKey: "olWgdrjClCGSGMNiq",
        })
        .then(() => {
          console.log("SUCCESS!");
          form.current.reset();
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  const pricingData = [
    {
      name: "Basique",
      price: "265",
      days: "5",
      description: "Pour lancer votre présence en ligne rapidement.",
      features: [
        "Site vitrine one page",
        "Design moderne",
        "Responsive mobile & tablette",
        "Intégration du contenu fourni",
        "SEO essentiel (balises, structure)",
        "Optimisation des performances",
        "Support après livraison (14 jours)",
      ],
    },
    {
      name: "Professionnel",
      mostPopular: true,
      price: "265",
      days: "12",
      description:
        "Le meilleur choix pour indépendants et petites entreprises.",
      features: [
        "Site vitrine jusqu’à 5 pages",
        "Design personnalisé",
        "Responsive tous supports",
        "SEO optimisé",
        "Accessibilité standard",
        "Formulaire de contact",
        "Optimisation des performances avancée",
        "Corrections après livraison (30 jours)",
      ],
    },
    {
      name: "Entreprise",
      price: "Sur devis",
      days: "20",
      description: "Un site complet, performant et évolutif.",
      features: [
        "Site vitrine sur mesure (jusqu’à 8 pages)",
        "Architecture évolutive",
        "SEO avancé",
        "Accessibilité renforcée",
        "Optimisation Lighthouse",
        "Formulaires ou modules spécifiques",
        "Support prioritaire (30 jours)",
      ],
    },
  ];

  const options = [
    // {
    //   name: "SEO Avancé",
    //   price: 300,
    //   description:
    //     "Travail approfondi pour améliorer votre visibilité sur Google.",
    //   features: [
    //     "Recherche de mots-clés",
    //     "Optimisation du contenu",
    //     "Structure SEO avancée",
    //     "Conseils de positionnement",
    //   ],
    // },
    {
      name: "Accessibilité renforcée",
      price: 180,
      description: "Amélioration de l’expérience pour tous les utilisateurs.",
      features: [
        "Contrastes optimisés",
        "Navigation clavier",
        "Balises ARIA",
        "Bonnes pratiques WCAG",
      ],
    },
    {
      name: "Animations & UI Premium",
      price: 100,
      description: "Un rendu plus moderne et interactif.",
      features: [
        "Micro-interactions",
        "Transitions avancées",
        "Animations légères",
        "Optimisation des performances",
      ],
    },
    {
      name: "Fonctionnalités dynamiques",
      price: 350,
      description: "Ajout de gestion de contenu ou stockage de données.",
      features: [
        "Backend léger",
        "Base de données",
        "Dashboard d’administration",
        "Formation rapide à l’utilisation",
      ],
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#191919] via-transparent to-[#191919]"></div>

        {/* Floating Icons - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.03, y: [-15, 15] }}
          transition={{ opacity: { duration: 1, delay: 0.5 }, y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 } }}
          className="absolute top-32 left-20 text-white rotate-12"
        >
          <Code size={120} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.03, y: [-10, 10] }}
          transition={{ opacity: { duration: 1, delay: 0.7 }, y: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 } }}
          className="absolute top-40 right-20 text-white -rotate-12"
        >
          <Terminal size={100} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1, y: [-12, 12] }}
          transition={{ opacity: { duration: 1, delay: 0.9 }, scale: { duration: 1, delay: 0.9 }, y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 } }}
          className="absolute top-1/2 left-32 text-white rotate-6"
        >
          <Braces size={140} strokeWidth={0.5} />
        </motion.div>

        {/* Floating Icons - Middle Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1, y: [-15, 15] }}
          transition={{ opacity: { duration: 1, delay: 1.1 }, scale: { duration: 1, delay: 1.1 }, y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.1 } }}
          className="absolute top-[45%] right-40 text-white -rotate-6"
        >
          <Cpu size={110} strokeWidth={0.5} />
        </motion.div>

        {/* Floating Icons - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.03, y: [-10, 10] }}
          transition={{ opacity: { duration: 1, delay: 1.3 }, y: { duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.3 } }}
          className="absolute bottom-40 left-10 text-white rotate-45"
        >
          <Hash size={90} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.03, y: [-20, 20] }}
          transition={{ opacity: { duration: 1, delay: 1.5 }, y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 } }}
          className="absolute bottom-20 right-10 text-white -rotate-12"
        >
          <Globe size={130} strokeWidth={0.5} />
        </motion.div>
      </div>
      <Nav />
      <main>
        <div className="mt-[100px] md:mt-[200px] text-white flex flex-col lg:flex-row items-center justify-between gap-10 mx-[20px] md:mx-[160px]">
          <div className="flex-1">
            <div className="bg-white h-[2px] w-16 mb-4 mt-14 md:mt-0"></div>
            <h1 className="md:text-6xl text-4xl font-semibold leading-tight tracking-tight">
              Je développe
              <br />
              <TypeAnimation
                sequence={[
                  "votre prochain site.",
                  2000,
                  "une expérience web.",
                  1500,
                  "un produit performant.",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-500 font-light leading-14 tracking-tight"
              />
            </h1>
            <p className="mt-4 font-light text-lg md:text-xl">
              « Je crois aux choix réfléchis, aux détails soignés et aux
              résultats durables. »
            </p>
            <div className="mt-8 flex md:gap-x-6 gap-y-3 flex-wrap">
              <a
                href="/#creations"
                className="bg-white text-[#191919] text-sm font-medium px-6 py-2 transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Découvrez mes créations
              </a>
              <a
                href="/#contact"
                className="bg-transparent border border-neutral-400/20 text-white text-sm font-medium px-6 py-2 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                Travaillons ensemble
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end md:mt-0 mt-10">
            <img
              src={mockup}
              alt="Mockup MacBook codant"
              className="w-full max-w-lg shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-[120px] md:mt-[240px] pb-[150px] md:pb-[300px] relative">
          <a
            href="/#creations"
            className="absolute -top-5 left-[50%] border border-neutral-400 p-2 transition-all duration-300 hover:bg-white/10 z-50 hover:top-0.5"
          >
            <ArrowDown className="text-neutral-400" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:mx-[160px] mx-[20px] md:pb-[200px] pb-[150px]"
          id="creations"
        >
          <h2 className="flex items-center gap-4 text-white md:text-3xl text-xl font-semibold leading-tight tracking-tight mb-10">
            Découvrez mes dernières créations{" "}
            <div className="bg-white h-[2px] w-25"></div>
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.3 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide className="bg-transparent h-auto">
              <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={valorProject}
                  alt="Interface tactique V.A.L.O.R."
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />

                <div className="absolute bottom-2 right-2 flex gap-2">
                  <div className="bg-orange-500/20 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-orange-500/30 text-orange-400">
                    En développement
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                    2026
                  </div>
                </div>
              </div>

              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    V.A.L.O.R. - Dashboard Tactique
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    Plateforme de commandement (C2) pour la coordination des
                    unités d'élite du COS (projet réalisé dans le cadre d'un
                    exercice scolaire).
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    React JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Node JS (Express)
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Socket.io
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Mapbox
                  </p>
                </div>

                <div className="flex items-center gap-2 text-orange-400/80 text-sm font-medium py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full -full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex -full h-2 w-2 bg-orange-500"></span>
                  </span>
                  Phase de développement active...
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-transparent h-auto">
            <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={theloopProject}
                  alt="Image illustrative du projet The Loop LS"
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />

                <div className="absolute bottom-2 right-2 flex gap-2">
                  {/* <div className="bg-orange-500/20 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-orange-500/30 text-orange-400">
                    En développement
                  </div> */}
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                    2026
                  </div>
                </div>
              </div>

              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    The Loop LS - Roleplay
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    The Loop Los Santos est un serveur Imagine Roleplay sur FiveM basé sur le roleplay vocal et écrit.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    React JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Node JS (Express)
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Socket.io
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Discord.js
                  </p>
                </div>

                <a
                  href="https://theloop-rp.fr/"
                  className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min"
                  aria-label="Découvrir le projet The Loop LS"
                >
                  Découvrir <ArrowRight size="14" />
                </a>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-transparent h-auto">
              <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={gtasWebsite}
                  alt="Image illustrative du projet GTA Stories"
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                  2026
                </div>
              </div>
              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    GTA Stories - Site vitrine
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    Projet réalisé pour le serveur FiveM GTA Stories.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    React JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Tailwind CSS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Optimisation SEO
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Responsive
                  </p>
                </div>

                <a
                  href="https://gta-stories.fr/"
                  className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min"
                  aria-label="Découvrir le projet GTA Stories"
                >
                  Découvrir <ArrowRight size="14" />
                </a>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-transparent h-auto">
              <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={greenMarket}
                  alt="Image illustrative du projet Green Market"
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                  2025
                </div>
              </div>
              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    Green Market - Site vitrine
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    Projet réalisé dans le cadre d'un exercice scolaire. Green
                    Market est censé représenté un site e-commerce fictif
                    contenant une page home, une page produits incluant un
                    système de filtre, et des pages produit dynamique.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    React JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Tailwind CSS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Optimisation SEO
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Récupération de données API
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Responsive
                  </p>
                </div>

                <a
                  href="https://green-market-d3jw.vercel.app/"
                  className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min"
                  aria-label="Découvrir le projet Green Market"
                >
                  Découvrir <ArrowRight size="14" />
                </a>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-transparent h-auto">
              <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={servUp}
                  alt="Image illustrative du projet ServUP"
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                  2024
                </div>
              </div>
              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    ServUp - Site SaaS
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    ServUP est une plateforme SaaS qui booste la visibilité des
                    serveurs FiveM. Les utilisateurs peuvent créer un compte
                    (vérifié par e-mail) et publier une fiche promotionnelle.
                    D'autres fonctionnalités sont à prévoir.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    HTML
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    CSS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    PHP (POO)
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    MYSQL
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Responsive
                  </p>
                </div>

                {/* <button className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min" disabled>Découvrir <ArrowRight size="14" /></button> */}
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-transparent h-auto">
              <div className="group h-full text-white border border-neutral-400/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={greenThumbs}
                  alt="Image illustrative du projet Green Thumbs"
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">
                  2023
                </div>
              </div>
              <div className="p-4 bg-transparent">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    Green Thumbs - Site vitrine
                  </h3>
                  <p className="text-sm mt-2 text-neutral-400">
                    Projet réalisé dans le cadre d'un exercice scolaire. Green
                    Thumbs est un site vitrine fictif.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    HTML
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    CSS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    JS
                  </p>
                  <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    Responsive
                  </p>
                </div>

                <a
                  href="https://r-green-thumbs-z62e.vercel.app/"
                  className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min"
                  aria-label="Découvrir le projet Green Thumbs"
                >
                  Découvrir <ArrowRight size="14" />
                </a>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-[20px] md:mx-[160px] md:pb-[200px] pb-[150px]"
          id="apropos"
        >
          <div className="md:w-[60%]">
            <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">
              À Propos <div className="bg-white h-[2px] w-15"></div>
            </h2>
            <p className="text-md md:text-lg text-neutral-400 mb-14">
              Brièvement, je suis Jules, un jeune développeur web de 17 ans,
              avec maintenant plus de 4 ans d'éxperience.
            </p>
            <div className="mt-6 flex gap-2 w-min bg-white/5 p-1 border border-white/10">
              <button
                onClick={() => setIsSchool(false)}
                className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isSchool ? "bg-white text-black shadow-sm" : "text-neutral-400 hover:text-white"}`}
                aria-label="Accéder à la partie d'études"
              >
                Etudes
              </button>
              <button
                onClick={() => setIsSchool(true)}
                className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isSchool ? "bg-white text-black shadow-sm" : "text-neutral-400 hover:text-white"}`}
                aria-label="Accéder à la partie des compétences"
              >
                Compétences
              </button>
            </div>
          </div>
          {!isSchool ? (
            <div className="w-full flex flex-col md:flex-row gap-10 justify-between mt-10">
              <div>
                <div>
                  <ul>
                    <div className="flex items-center gap-6 w-full mb-2">
                      <li className="list-disc text-neutral-400 mx-5 font-medium">
                        <span>Sept 2025 - Juil 2026</span>
                      </li>
                      <div className="h-px flex-1 bg-neutral-400"></div>
                    </div>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-1">
                    Alternance
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Je suis actuellement en alternance en tant que développeur
                    web, où je mets en pratique les compétences acquises à
                    l’école à travers des projets concrets et professionnels.
                    Cette expérience me permet de renforcer mon autonomie et ma
                    maîtrise des technologies web.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <div className="flex items-center gap-6 w-full mb-2">
                      <li className="list-disc text-neutral-400 mx-5 font-medium">
                        <span>Sept 2023 - Juil 2026</span>
                      </li>
                      <div className="h-px flex-1 bg-neutral-400"></div>
                    </div>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-1">
                    Formation
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Je suis actuellement étudiant à EDEN School Paris dans un
                    cursus de trois ans dédié au développement web et mobile. La
                    première année est axée sur le front-end, la deuxième sur le
                    back-end, et la troisième, en alternance, sur le
                    développement mobile.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <div className="flex items-center gap-6 w-full mb-2">
                      <li className="list-disc text-neutral-400 mx-5 font-medium">
                        <span>Déc 2022</span>
                      </li>
                      <div className="h-px flex-1 bg-neutral-400"></div>
                    </div>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-1">
                    Stage d'observation
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    J'ai effectué mon stage de troisième au siège social de
                    Microsoft à Issy-les-Moulineaux. Dans un cadre très
                    pédagogique, j'ai eu l'opportunité de découvrir leurs locaux
                    et d'assister à des formations sur la cybersécurité, la
                    désinformation et la sensibilisation aux cyberattaques.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-10 md:gap-0 w-full mt-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between mb-4">
                <div className="md:w-[40%]">
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">
                    Languages Front End{" "}
                    <div className="bg-white h-[2px] w-22"></div>
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Je développe des interfaces modernes, responsives et
                    accessibles, en accordant une attention particulière à
                    l’ergonomie, aux performances et à la qualité de
                    l’intégration visuelle.
                  </p>
                </div>
                <div className="flex flex-wrap flex-row-reverse gap-6">
                  <FaHtml5 size={36} className="text-neutral-400 hover:text-orange-500 hover:scale-110 transition-all duration-300" />
                  <FaCss3Alt size={36} className="text-neutral-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" />
                  <BsFiletypeScss size={36} className="text-neutral-400 hover:text-pink-500 hover:scale-110 transition-all duration-300" />
                  <RiTailwindCssFill size={36} className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300" />
                  <FaBootstrap size={36} className="text-neutral-400 hover:text-purple-500 hover:scale-110 transition-all duration-300" />
                  <FaJs size={36} className="text-neutral-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300" />
                  <FaReact size={36} className="text-neutral-400 hover:text-blue-400 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center mb-4">
                <div className="md:w-[40%]">
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">
                    Languages Back End{" "}
                    <div className="bg-white h-[2px] w-20"></div>
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Je conçois des logiques applicatives robustes et des bases
                    de données structurées, en assurant la communication entre
                    le front-end et le serveur ainsi que la gestion des données
                    et des fonctionnalités.
                  </p>
                </div>
                <div className="flex flex-wrap flex-row-reverse gap-6">
                  <FaPhp size={36} className="text-neutral-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300" />
                  <FaNodeJs size={36} className="text-neutral-400 hover:text-green-500 hover:scale-110 transition-all duration-300" />
                  <RiNextjsFill size={36} className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300" />
                  <SiMysql size={36} className="text-neutral-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" />
                  <SiSqlite size={36} className="text-neutral-400 hover:text-blue-300 hover:scale-110 transition-all duration-300" />
                  <DiMongodb size={36} className="text-neutral-400 hover:text-green-500 hover:scale-110 transition-all duration-300" />
                  <FaLaravel size={36} className="text-neutral-400 hover:text-red-500 hover:scale-110 transition-all duration-300" />
                  <FaSymfony size={36} className="text-neutral-400 hover:text-gray-300 hover:scale-110 transition-all duration-300" />
                  <SiExpress size={36} className="text-neutral-400 hover:text-gray-400 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between">
                <div className="md:w-[40%]">
                  <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">
                    Logiciels et autres{" "}
                    <div className="bg-white h-[2px] w-18"></div>
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    J’utilise des outils professionnels pour concevoir,
                    développer et maintenir des projets web efficacement, en
                    favorisant un workflow organisé, collaboratif et orienté
                    qualité.
                  </p>
                </div>
                <div className="flex flex-wrap flex-row-reverse gap-6">
                  <FaFigma size={36} className="text-neutral-400 hover:text-pink-400 hover:scale-110 transition-all duration-300" />
                  <DiPhotoshop size={36} className="text-neutral-400 hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                  <DiVisualstudio size={36} className="text-neutral-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" />
                  <SiPhpstorm size={36} className="text-neutral-400 hover:text-purple-600 hover:scale-110 transition-all duration-300" />
                  <VscTerminalCmd size={36} className="text-neutral-400 hover:text-green-400 hover:scale-110 transition-all duration-300" />
                  <FaGitAlt size={36} className="text-neutral-400 hover:text-orange-600 hover:scale-110 transition-all duration-300" />
                  <FaDocker size={36} className="text-neutral-400 hover:text-blue-400 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:mx-[160px] mx-[20px] md:pb-[200px] pb-[150px]"
          id="tarifs"
        >
          <section className="flex items-start justify-center flex-col w-full">
            <div className="text-left md:w-[60%]">
              <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">
                Tarifs <div className="bg-white h-[2px] w-10"></div>
              </h2>
              <p className="text-md md:text-lg text-neutral-400 mb-2">
                * Le code source est livré au client après paiement.
                L’hébergement est mis en place par mes soins, puis transféré au
                client (avec support et explication si besoin).
              </p>
              <p className="text-md md:text-lg text-neutral-400 mb-14">
                * Les offres et options présentés ici peuvent varier, cela
                dépendra de la complexité de votre demande.
              </p>
              <div className="mt-6 flex gap-2 w-min bg-white/5 p-1 border border-white/10">
                <button
                  onClick={() => setIsOptions(false)}
                  className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isOptions ? "bg-white text-black shadow-sm" : "text-neutral-400 hover:text-white"}`}
                  aria-label="Accéder à la partie de développement"
                >
                  Développement
                </button>
                <button
                  onClick={() => setIsOptions(true)}
                  className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isOptions ? "bg-white text-black shadow-sm" : "text-neutral-400 hover:text-white"}`}
                  aria-label="Accéder à la partie des options"
                >
                  Options
                </button>
              </div>
            </div>
            {!isOptions ? (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative h-full p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]
                    ${item.mostPopular
                        ? "bg-white/10 border border-white/30 backdrop-blur-md"
                        : "bg-neutral-900/50 border border-neutral-400/20 backdrop-blur-sm hover:border-white/30"
                      }`}
                  >
                    {item.mostPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 font-medium">
                        Le plus populaire
                      </span>
                    )}

                    <h3 className="font-medium text-2xl text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-2">
                      {item.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-neutral-400 text-sm">À partir de</p>
                      <p className="text-white font-medium text-4xl">
                        {item.name === "Entreprise"
                          ? "Sur devis"
                          : item.price + "€ / jour"}
                      </p>
                      <p className="text-neutral-400 text-sm mt-1">
                        Généralement {item.days} jours
                      </p>
                    </div>

                    <a
                      href="/#contact"
                      className={`w-full px-4 py-3 text-center text-sm mt-6 font-medium transition duration-300
                      ${item.mostPopular
                          ? "bg-white text-black hover:bg-neutral-300"
                          : "border border-neutral-400/20 text-white hover:bg-white/10"
                        }`}
                    >
                      Choisir cette offre
                    </a>

                    <div className="w-full mt-8 space-y-2.5">
                      {item.features.map((feature, index) => (
                        <p
                          key={index}
                          className="flex items-center gap-3 text-sm text-neutral-400"
                        >
                          <span className="size-3 bg-neutral-800 flex items-center justify-center shrink-0">
                            <span className="size-1.5 bg-white" />
                          </span>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 w-full">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={3}
                  navigation
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1.3 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {options.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="bg-transparent h-auto"
                    >
                      <div className={`h-full border p-6 flex flex-col items-start transition-all duration-500 border-neutral-400/20 bg-neutral-900/40 backdrop-blur-sm hover:border-white/30`}>
                        <h3 className="font-medium text-2xl text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-400 mt-2">
                          {item.description}
                        </p>
                        <div className="mt-6">
                          <p className="text-neutral-400 text-sm">Dès</p>
                          <p className="text-white font-medium text-4xl">
                            {item.price + "€"}
                          </p>
                        </div>
                        <button
                          className={`w-full px-4 py-3 cursor-pointer text-sm mt-6 md:mt-8 transition duration-300 border border-neutral-400/20 text-white hover:bg-white/10 font-medium`}
                          aria-label="Discutons-en ensemble"
                        >
                          Discutons-en ensemble
                        </button>
                        <div className="w-full mt-8 space-y-2.5">
                          {item.features.map((feature, index) => (
                            <p
                              key={index}
                              className="flex items-center gap-3 text-sm text-neutral-400"
                            >
                              <span className="size-3 bg-neutral-800 flex items-center justify-center shrink-0">
                                <span className="size-1.5 bg-white" />
                              </span>
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-[70%] md:mx-auto mx-[20px] p-4 md:p-8 border border-white/10 mb-[100px] relative overflow-hidden"
        >
          {/* Subtle Glow Effect for Contact */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="flex flex-col md:flex-row gap-14 justify-between items-start">
            <div className="md:w-[40%] w-[100%]">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight">
                  Prenons contact !
                </h2>
                <div className="bg-green-500/20 backdrop-blur-sm px-3 py-1 text-md font-medium border border-green-500/30 text-green-400">
                  Disponible
                </div>
                {/* <div className="bg-orange-500/20 backdrop-blur-sm px-3 py-1 text-md font-medium border border-orange-500/30 text-orange-400">
                  Indisponible
                </div> */}
              </div>
              <p className="text-md text-neutral-400">
                Décrivez votre projet en précisant{" "}
                <strong>l’offre souhaitée,</strong> les{" "}
                <strong>options nécessaires,</strong> ainsi que toute
                information utile (objectifs, délais, budget estimé). <br />{" "}
                <br /> Plus votre message est détaillé, plus nous pourrons vous
                répondre rapidement et efficacement.
              </p>
            </div>
            <div className="md:w-[60%] w-[100%]" id="contact">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-400">*Nom</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-400">*Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <label className="text-sm text-neutral-400">*Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40"
                    placeholder="Présentez votre projet, votre offre, vos besoins, votre délai et vos éventuelles options"
                  />
                </div>
                <div
                  className="g-recaptcha mt-4"
                  data-sitekey="6LdcIF8sAAAAADcdK8Tpf_uWdwQyqGDEaWJrH3s4"
                  required
                ></div>
                <button
                  type="submit"
                  className="mt-6 bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-6 py-2 transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Envoyer{" "}
                  {isLoading ? (
                    <LoaderCircle size="14" className="animate-spin" />
                  ) : (
                    <ArrowRight size="14" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
