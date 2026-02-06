import Nav from "../components/Nav";
import Footer from '../components/Footer'

import { motion } from "framer-motion";
import mockup from "../assets/img/mockup-zoomed.webp";
import gtasWebsite from "../assets/img/gtas-website.webp"
import greenThumbs from "../assets/img/greenthumbs.webp"
import greenMarket from "../assets/img/greenmarket.webp"
import servUp from "../assets/img/servup.webp"
import { TypeAnimation } from 'react-type-animation'; 
import { ArrowDown, ArrowRight, Code, Terminal, Cpu, Globe, Zap, LayoutTemplate, Hash, Braces, LoaderCircle } from 'lucide-react'
import React, {useState, useRef} from "react"

// Front
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
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

// Logiciel
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { SiPhpstorm } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import emailjs from '@emailjs/browser';
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
                .sendForm(
                    'portfolio',
                    'portoflio-template',
                    form.current,
                    { publicKey: 'olWgdrjClCGSGMNiq' }
                )
                .then(() => {
                    console.log('SUCCESS!');
                    form.current.reset();
                })
                .catch((error) => {
                    console.log('FAILED...', error.text);
                })
                .finally(() => {
                    setIsLoading(false);
                });

        }, 2000);
    };

    const pricingData = [
        {
            name: 'Basique',
            price: "300",
            description: 'Pour une présence en ligne simple et professionnelle.',
            features: [
                'Site vitrine 1 page (one page)',
                // 'Développement en React + Tailwind CSS',
                'Responsive mobile uniquement',
                'Intégration du contenu fourni',
                'SEO de base (balises, structure)',
                'Optimisation des performances',
                'Support après livraison (7 jours)'
            ]
        },
        {
            name: 'Professionnel',
            mostPopular: true,
            price: "700",
            description: 'Idéal pour indépendants et petites entreprises.',
            features: [
                'Site vitrine jusqu’à 5 pages',
                'Design personnalisé',
                // 'React + Tailwind CSS',
                'Responsive tous supports',
                'SEO optimisé',
                'Accessibilité de base (contrastes, navigation clavier)',
                'Formulaire de contact',
                'Corrections mineures après livraison (14 jours)'
            ]
        },
        {
            name: 'Entreprise',
            price: "1000",
            description: 'Pour un site vitrine complet et évolutif.',
            features: [
                'Site vitrine sur mesure (jusqu’à 8 pages)',
                'Architecture propre et scalable',
                // 'React + Tailwind CSS avancé',
                'SEO avancé',
                'Accessibilité renforcée (WCAG basique)',
                'Optimisation performances (Lighthouse)',
                // 'Déploiement & mise en ligne',
                'Support et ajustements (14 jours)'
            ]
        }
    ]

    const options = [
        {
            name: 'SEO Avancé',
            price: 150,
            description: 'Amélioration du référencement pour une meilleure visibilité.',
            features: [
                'Optimisation des balises meta',
                'Amélioration de la structure des pages',
                'Optimisation des performances',
                'Conseils mots-clés'
            ]
        },
        {
            name: 'Accessibilité',
            price: 180,
            description: 'Rendre le site accessible au plus grand nombre.',
            features: [
                'Contrastes et lisibilité optimisés',
                'Navigation clavier',
                'Balises ARIA essentielles',
                'Bonnes pratiques WCAG (niveau basique)'
            ]
        },
        {
            name: 'Animations & UI',
            price: 100,
            description: 'Rendre le site plus vivant et moderne.',
            features: [
                'Animations simples (hover, transitions)',
                'Micro-interactions UI',
                'Animations TailwindCSS',
                'Respect des performances'
            ]
        },
        // {
        //     name: 'Maintenance post-livraison',
        //     price: 80,
        //     description: 'Corrections et ajustements après la mise en ligne.',
        //     features: [
        //         'Corrections de bugs mineurs (sur 14 jours)',
        //         '5 petits ajustements UI',
        //         'Support par email'
        //     ]
        // },
        // {
        //     name: 'Aide au contenu',
        //     price: 120,
        //     description: 'Accompagnement pour les textes et contenus.',
        //     features: [
        //         'Structuration des pages',
        //         'Aide à la rédaction',
        //         'Optimisation SEO du contenu'
        //     ]
        // },
        {
            name: 'Base de donnée',
            price: 200,
            description: 'Ajout de fonctionnalités dynamiques avec stockage de données.',
            features: [
                'Stockage de données simples (contenus)',
                'Backend léger',
                'Dashboard pour gérer le contenu'
                // 'Solution type Firebase / Supabase',
            ]
        }
    ]

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#191919] via-transparent to-[#191919]"></div>

        {/* Floating Icons - Top Left */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 0.03, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-32 left-20 text-white rotate-12"
        >
            <Code size={120} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Top Right */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 0.03, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-40 right-20 text-white -rotate-12"
        >
            <Terminal size={100} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Middle Left */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.02, scale: 1 }} 
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute top-1/2 left-32 text-white rotate-6"
        >
            <Braces size={140} strokeWidth={0.5} />
        </motion.div>

         {/* Floating Icons - Middle Right */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.02, scale: 1 }} 
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute top-[45%] right-40 text-white -rotate-6"
        >
            <Cpu size={110} strokeWidth={0.5} />
        </motion.div>

        {/* Floating Icons - Bottom Left */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 0.03, y: 0 }} 
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute bottom-40 left-10 text-white rotate-45"
        >
            <Hash size={90} strokeWidth={1} />
        </motion.div>

        {/* Floating Icons - Bottom Right */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 0.03, y: 0 }} 
            transition={{ duration: 1, delay: 1.5 }}
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
                        <TypeAnimation sequence={[ 'votre prochain site.', 2000, 'une expérience web.', 1500, 'un produit performant.', 2000]} speed={50} repeat={Infinity} className="transition duration-300 text-neutral-400 font-light leading-14 tracking-tight hover:text-white"/>
                    </h1>
                    <p className="mt-4 font-light text-lg md:text-xl">
                        « Je crois aux choix réfléchis, aux détails soignés et aux résultats durables. »
                    </p>
                    <div className="mt-8 flex md:gap-x-6 gap-y-3 flex-wrap">
                        <a href="/#creations" className="bg-white text-[#191919] text-sm font-medium px-6 py-2 transition duration-300 hover:bg-neutral-400">Découvrez mes créations</a>
                        <a href="/#contact" className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-6 py-2 transition duration-300 hover:bg-white/10">Travaillons ensemble</a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end md:mt-0 mt-10">
                    <img src={mockup} alt="Mockup MacBook codant" className="w-full max-w-lg shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105" loading="lazy"/>
                </div>
            </div>

            <div className="mt-[120px] md:mt-[240px] pb-[150px] md:pb-[300px] relative">
                <a href="/#creations" className="absolute -top-5 left-[50%] border border-neutral-400 p-2 transition-all duration-300 hover:bg-white/10 z-50 hover:top-0.5">
                    <ArrowDown className="text-neutral-400" />
                </a>
            </div>

            <div className="md:mx-[160px] mx-[20px] md:pb-[250px] pb-[150px]" id="creations">
                <h2 className="flex items-center gap-4 text-white md:text-3xl text-xl font-semibold leading-tight tracking-tight mb-10">Découvrez mes dernières créations <div className="bg-white h-[2px] w-25"></div></h2>

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
                    <SwiperSlide className="group text-white border border-neutral-400/20 bg-transparent">
                        <div className="relative overflow-hidden">
                            <img
                            src={gtasWebsite}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter md:grayscale group-hover:grayscale-0"
                            loading="lazy"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2026</div>
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
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">React JS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Tailwind CSS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Optimisation SEO</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Responsive</p>
                            </div>

                            <a href="https://gta-stories.fr/" className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 bg-transparent">
                        <div className="relative overflow-hidden">
                            <img
                            src={greenMarket}
                            alt="Image illustrative du projet Green Market"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            loading="lazy"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2025</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    Green Market - Site vitrine 
                                </h3>
                                <p className="text-sm mt-2 text-neutral-400">
                                    Projet réalisé dans le cadre d'un exercice scolaire. Green Market est censé représenté un site e-commerce fictif contenant une page home, une page produits incluant un système de filtre, et des pages produit dynamique.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">React JS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Tailwind CSS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Optimisation SEO</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Récupération de données API</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Responsive</p>
                            </div>

                            <a href="https://green-market-d3jw.vercel.app/" className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 bg-transparent">
                        <div className="relative overflow-hidden">
                            <img
                            src={servUp}
                            alt="Image illustrative du projet ServUP"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            loading="lazy"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2024</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    ServUp - Site SaaS
                                </h3>
                                <p className="text-sm mt-2 text-neutral-400">
                                    ServUP est une plateforme SaaS qui booste la visibilité des serveurs FiveM. Les utilisateurs peuvent créer un compte (vérifié par e-mail) et publier une fiche promotionnelle. D'autres fonctionnalités sont à prévoir.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">HTML</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">CSS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">JS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">PHP (POO)</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">MYSQL</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Responsive</p>
                            </div>

                            {/* <button className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min" disabled>Découvrir <ArrowRight size="14" /></button> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 bg-transparent">
                        <div className="relative overflow-hidden">
                            <img
                            src={greenThumbs}
                            alt="Image illustrative du projet Green Thumbs"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            loading="lazy"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2023</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    Green Thumbs - Site vitrine
                                </h3>
                                <p className="text-sm mt-2 text-neutral-400">
                                    Projet réalisé dans le cadre d'un exercice scolaire. Green Thumbs est un site vitrine fictif.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">HTML</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">CSS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">JS</p>
                                <p className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs">Responsive</p>
                            </div>

                            <a href="https://r-green-thumbs-z62e.vercel.app/" className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-4 py-2 transition duration-300 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="mx-[20px] md:mx-[160px] md:pb-[250px] pb-[150px]" id="apropos">
                <div className="md:w-[60%]">
                    <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">À Propos <div className="bg-white h-[2px] w-15"></div></h2>
                    <p className="text-md md:text-lg text-neutral-400 mb-14">Rapidement, je suis Jules, un jeune développeur web de 17 ans, avec maintenant plus de 4 ans d'éxperience.</p>
                    <div className='mt-6 flex gap-2 w-min bg-white/5 p-1 border border-white/10'>
                        <button onClick={() => setIsSchool(false)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isSchool ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Etudes</button>
                        <button onClick={() => setIsSchool(true)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isSchool ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Compétences</button>
                    </div>
                </div>
                {!isSchool ? (
                        <div className="w-full flex flex-col md:flex-row gap-10 justify-between mt-4">
                            
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Stage d'observation</h3>
                                    <p className="text-neutral-400 text-sm">J'ai effectué mon stage de troisième au siège social de Microsoft à Issy-les-Moulineaux. Dans un cadre très pédagogique, j'ai eu l'opportunité de découvrir leurs locaux et d'assister à des formations sur la cybersécurité, la désinformation et la sensibilisation aux cyberattaques.</p>
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Formation</h3>
                                    <p className="text-neutral-400 text-sm">
                                    Je suis actuellement étudiant à EDEN School Paris dans un cursus de trois ans dédié au développement web et mobile. La première année est axée sur le front-end, la deuxième sur le back-end, et la troisième, en alternance, sur le développement mobile.
                                    </p>
                                </div>
                            </div>
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Alternance</h3>
                                    <p className="text-neutral-400 text-sm">Je suis actuellement en alternance en tant que développeur web, où je mets en pratique les compétences acquises à l’école à travers des projets concrets et professionnels. Cette expérience me permet de renforcer mon autonomie et ma maîtrise des technologies web.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-10 md:gap-0 w-full mt-4">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between mb-4">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Languages Front End <div className="bg-white h-[2px] w-22"></div></h3>
                                    <p className="text-neutral-400 text-sm">Je développe des interfaces modernes, responsives et accessibles, en accordant une attention particulière à l’ergonomie, aux performances et à la qualité de l’intégration visuelle.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaHtml5 size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaCss3Alt size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <RiTailwindCssFill size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaBootstrap size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaJs size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaReact size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center mb-4">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Languages Back End <div className="bg-white h-[2px] w-20"></div></h3>
                                    <p className="text-neutral-400 text-sm">Je conçois des logiques applicatives robustes et des bases de données structurées, en assurant la communication entre le front-end et le serveur ainsi que la gestion des données et des fonctionnalités.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaPhp size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaNodeJs size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <RiNextjsFill size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <SiMysql size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <SiSqlite size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <DiMongodb size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaLaravel size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaSymfony size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Logiciels et autres <div className="bg-white h-[2px] w-18"></div></h3>
                                    <p className="text-neutral-400 text-sm">J’utilise des outils professionnels pour concevoir, développer et maintenir des projets web efficacement, en favorisant un workflow organisé, collaboratif et orienté qualité.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaFigma size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <DiPhotoshop size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <DiVisualstudio size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <SiPhpstorm size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <VscTerminalCmd size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaGitAlt size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                </div>
                            </div>
                        </div>
                    )}
            </div>

            <div className="md:mx-[160px] mx-[20px] md:pb-[250px] pb-[150px]" id="tarifs">
                <section className='flex items-start justify-center flex-col w-full'>
                    <div className="text-left md:w-[60%]">
                        <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">Tarifs <div className="bg-white h-[2px] w-10"></div></h2>
                        <p className="text-md md:text-lg text-neutral-400 mb-2">* Le code source est livré au client après paiement. L’hébergement est mis en place par mes soins, puis transféré au client (avec support et explication si besoin).</p>
                        <p className="text-md md:text-lg text-neutral-400 mb-14">* Les offres et options présentés ici peuvent varier, cela dépendra de la complexité de votre demande.</p>
                        <div className='mt-6 flex gap-2 w-min bg-white/5 p-1 border border-white/10'>
                            <button onClick={() => setIsOptions(false)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isOptions ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Développement</button>
                            <button onClick={() => setIsOptions(true)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isOptions ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Options</button>
                        </div>
                    </div>
                    {!isOptions ? (
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {pricingData.map((item, index) => (
                                <div key={index} className={`border p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-white/5 border-white/20' : 'border-neutral-400/20 bg-transparent'}`}>
                                    <h3 className='font-medium text-xl md:text-3xl text-white mt-1'>{item.name}</h3>
                                    <p className='text-sm text-neutral-400 mt-2'>{item.description}</p>
                                    <h3 className='font-medium text-3xl md:text-5xl text-white mt-4 md:mt-6'><span className="text-xl font-light">Dès</span> €{item.price}</h3>
                                    <button className={`w-full px-4 py-3 cursor-pointer text-sm mt-6 md:mt-8 transition duration-300 font-medium ${item.mostPopular ? 'bg-white hover:bg-neutral-400 text-black' : 'border border-neutral-400/20 text-white hover:bg-white/10'}`}>
                                        Choisir cette offre
                                    </button>
                                    <div className='w-full mt-8 space-y-2.5 pb-4'>
                                        {item.features.map((feature, index) => (
                                            <p key={index} className='flex items-center gap-3 text-sm text-neutral-400'>
                                                <span className='size-3 bg-neutral-800 flex items-center justify-center shrink-0'>
                                                    <span className='size-1.5 bg-white' />
                                                </span>
                                                {feature}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='mt-4 w-full'>
                            <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={3} navigation breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 1.3 },
                        1024: { slidesPerView: 3 }}}>
                                {options.map((item, index) => (
                                    <SwiperSlide key={index} className={`border p-6 flex flex-col items-start transition duration-300 border-neutral-400/20 bg-transparent`}>
                                        <h3 className='font-medium text-xl md:text-3xl text-white mt-1'>{item.name}</h3>
                                        <p className='text-sm text-neutral-400 mt-2'>{item.description}</p>
                                        <h3 className='font-medium text-3xl md:text-5xl text-white mt-4 md:mt-6'><span className="text-xl font-light">Dès</span> €{item.price}</h3>
                                        <button className={`w-full px-4 py-3 cursor-pointer text-sm mt-6 md:mt-8 transition duration-300 border border-neutral-400/20 text-white hover:bg-white/10 font-medium`}>
                                            Discutons-en ensemble
                                        </button>
                                        <div className='w-full mt-8 space-y-2.5 pb-4'>
                                            {item.features.map((feature, index) => (
                                                <p key={index} className='flex items-center gap-3 text-sm text-neutral-400'>
                                                    <span className='size-3 bg-neutral-800 flex items-center justify-center shrink-0'>
                                                        <span className='size-1.5 bg-white' />
                                                    </span>
                                                    {feature}
                                                </p>
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </section>
            </div>

            <div className="mx-[20px] md:mx-[160px] md:pb-[250px] pb-[150px]" id="apropos">
                <div className="md:w-[60%]">
                    <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">À Propos <div className="bg-white h-[2px] w-15"></div></h2>
                    <p className="text-md md:text-lg text-neutral-400 mb-14">Brièvement, je suis Jules, un jeune développeur web de 17 ans, avec maintenant plus de 4 ans d'éxperience.</p>
                    <div className='mt-6 flex gap-2 w-min bg-white/5 p-1 border border-white/10'>
                        <button onClick={() => setIsSchool(false)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isSchool ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Etudes</button>
                        <button onClick={() => setIsSchool(true)} className={`px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isSchool ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Compétences</button>
                    </div>
                </div>
                {!isSchool ? (
                        <div className="w-full flex flex-col md:flex-row gap-10 justify-between mt-4">
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Alternance</h3>
                                    <p className="text-neutral-400 text-sm">Je suis actuellement en alternance en tant que développeur web, où je mets en pratique les compétences acquises à l’école à travers des projets concrets et professionnels. Cette expérience me permet de renforcer mon autonomie et ma maîtrise des technologies web.</p>
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Formation</h3>
                                    <p className="text-neutral-400 text-sm">
                                    Je suis actuellement étudiant à EDEN School Paris dans un cursus de trois ans dédié au développement web et mobile. La première année est axée sur le front-end, la deuxième sur le back-end, et la troisième, en alternance, sur le développement mobile.
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
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-1">Stage d'observation</h3>
                                    <p className="text-neutral-400 text-sm">J'ai effectué mon stage de troisième au siège social de Microsoft à Issy-les-Moulineaux. Dans un cadre très pédagogique, j'ai eu l'opportunité de découvrir leurs locaux et d'assister à des formations sur la cybersécurité, la désinformation et la sensibilisation aux cyberattaques.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-10 md:gap-0 w-full mt-4">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between mb-4">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Languages Front End <div className="bg-white h-[2px] w-22"></div></h3>
                                    <p className="text-neutral-400 text-sm">Je développe des interfaces modernes, responsives et accessibles, en accordant une attention particulière à l’ergonomie, aux performances et à la qualité de l’intégration visuelle.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaHtml5 size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaCss3Alt size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <RiTailwindCssFill size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaBootstrap size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaJs size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaReact size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center mb-4">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Languages Back End <div className="bg-white h-[2px] w-20"></div></h3>
                                    <p className="text-neutral-400 text-sm">Je conçois des logiques applicatives robustes et des bases de données structurées, en assurant la communication entre le front-end et le serveur ainsi que la gestion des données et des fonctionnalités.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaPhp size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaNodeJs size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <RiNextjsFill size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <SiMysql size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <SiSqlite size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <DiMongodb size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaLaravel size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                    <FaSymfony size={36} className="text-neutral-400 hover:text-white transition duration-300"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between">
                                <div className="md:w-[40%]">
                                    <h3 className="font-medium text-xl md:text-3xl text-white mb-2 flex items-center gap-4">Logiciels et autres <div className="bg-white h-[2px] w-18"></div></h3>
                                    <p className="text-neutral-400 text-sm">J’utilise des outils professionnels pour concevoir, développer et maintenir des projets web efficacement, en favorisant un workflow organisé, collaboratif et orienté qualité.</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <FaFigma size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <DiPhotoshop size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <DiVisualstudio size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <SiPhpstorm size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <VscTerminalCmd size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                    <FaGitAlt size={36} className="text-neutral-400 hover:text-white transition duration-300" />
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <div className="md:w-[70%] md:mx-auto mx-[20px] p-4 md:p-8 border border-white/10 mb-[100px]">
                <div className="flex flex-col md:flex-row gap-14 justify-between items-start">
                    <div className="md:w-[40%] w-[100%]">
                        <h2 className="flex items-center gap-4 text-white text-xl md:text-3xl font-semibold leading-tight tracking-tight mb-2">Prenons contact !</h2>
                        <p className="text-md text-neutral-400">Décrivez votre projet en précisant <strong>l’offre souhaitée,</strong> les <strong>options nécessaires,</strong> ainsi que toute information utile (objectifs, délais, budget estimé). <br/> <br/> Plus votre message est détaillé, plus nous pourrons vous répondre rapidement et efficacement.</p>
                    </div>
                    <div className="md:w-[60%] w-[100%]" id="contact">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-neutral-400">*Nom</label>
                                    <input type="text" name="name" required className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40" placeholder="Votre nom" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-neutral-400">*Email</label>
                                    <input type="email" name="email" required className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40" placeholder="vous@exemple.com" />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-2">
                                <label className="text-sm text-neutral-400">*Message</label>
                                <textarea name="message" rows="4" required className="w-full bg-transparent border border-neutral-400/20 text-white placeholder-neutral-500 px-3 py-2 focus:outline-none focus:border-white/40" placeholder="Présentez votre projet, votre offre, vos besoins, votre délai et vos éventuelles options" />
                            </div>
                            <div className="g-recaptcha mt-4" data-sitekey="6LdcIF8sAAAAADcdK8Tpf_uWdwQyqGDEaWJrH3s4" required></div>
                            <button type="submit" className="mt-6 bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-6 py-2 transition duration-300 flex items-center gap-2 cursor-pointer">Envoyer {isLoading ? <LoaderCircle size="14" className="animate-spin" /> : <ArrowRight size="14" />}</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    </>
  );
}
