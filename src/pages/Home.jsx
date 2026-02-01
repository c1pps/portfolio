import Nav from "../components/Nav";
import mockup from "../assets/img/mockup-zoomed.png";
import gtasWebsite from "../assets/img/gtas-website.png"
import greenThumbs from "../assets/img/greenthumbs.png"
import greenMarket from "../assets/img/greenmarket.png"
import servUp from "../assets/img/servup.png"
import { TypeAnimation } from 'react-type-animation'; 
import { ArrowDown, ArrowRight } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <>
      <Nav />
        <main>
            <div className="mt-[200px] text-white flex flex-col lg:flex-row items-center justify-between gap-10 mx-[160px]">
                <div className="flex-1">
                    <div className="bg-white h-[2px] w-16 mb-4"></div>
                    <h1 className="text-6xl font-semibold leading-tight tracking-tight">
                        Je développe
                        <br />
                        <TypeAnimation sequence={[ 'votre prochain site.', 2000, 'une expérience web.', 1500, 'un produit performant.', 2000]} speed={50} repeat={Infinity} className="transition duration-300 text-neutral-400 font-light leading-14 tracking-tight hover:text-white"/>
                    </h1>
                    <p className="mt-4 font-light text-xl tracking-[0.5px]">
                        « Je crois aux choix réfléchis, aux détails soignés et aux résultats durables. »
                    </p>
                    <div className="mt-8 flex gap-6 flex-wrap">
                        <a href="" className="bg-white text-[#191919] text-sm font-medium px-6 py-2 transition duration-300 hover:bg-neutral-400">Découvrez mes créations</a>
                        <a href="" className="bg-transparent text-white border border-neutral-400 text-sm font-medium px-6 py-2 transition duration-300 hover:bg-white/10">Travaillons ensemble ?</a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end">
                    <img src={mockup} alt="Mockup MacBook codant" className="w-full max-w-lg shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"/>
                </div>
            </div>

            <div className="mt-[240px] pb-[300px] relative">
                <a href="#creations" className="absolute -top-5 left-[50%] border border-neutral-400 p-2 transition-all duration-300 hover:bg-white/10 z-50 hover:top-0.5">
                    <ArrowDown className="text-neutral-400" />
                </a>
            </div>

            <div className="mx-[160px]">
                <h2 className="flex items-center gap-4 text-white text-3xl font-semibold leading-tight tracking-tight mb-10">Découvrez mes dernières créations <div className="bg-white h-[2px] w-25 mt-1"></div></h2>

                <Swiper spaceBetween={50} slidesPerView={3} id="creations">
                    <SwiperSlide className="group text-white border border-neutral-400/20 overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                            src={gtasWebsite}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 bg-black/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                                    GTA Stories - Site vitrine
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2">
                                    Projet réalisé pour le serveur FiveM GTA Stories.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">React JS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Tailwind CSS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Optimisation SEO</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Responsive</p>
                            </div>

                            <a href="" className="bg-white text-[#191919] text-sm font-medium px-4 py-2 transition duration-300 hover:bg-neutral-400 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                            src={servUp}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 bg-black/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                                    ServUp - Site SaaS
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2">
                                    ServUP est une plateforme SaaS qui booste la visibilité des serveurs FiveM. Les utilisateurs peuvent créer un compte (vérifié par e-mail) et publier une fiche promotionnelle. D'autres fonctionnalités sont à prévoir.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">HTML</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">CSS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">JS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">PHP (POO)</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">MYSQL</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Responsive</p>
                            </div>

                            <a href="" className="bg-white text-[#191919] text-sm font-medium px-4 py-2 transition duration-300 hover:bg-neutral-400 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                            src={greenMarket}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 bg-black/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                                    Green Market - Site vitrine 
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2">
                                    Projet réalisé dans le cadre d'un exercice scolaire. Green Market est censé représenté un site e-commerce fictif contenant une page home, une page produits incluant un système de filtre, et des pages produit dynamique.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">React JS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Tailwind CSS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Optimisation SEO</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Récupération de données API</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Responsive</p>
                            </div>

                            <a href="" className="bg-white text-[#191919] text-sm font-medium px-4 py-2 transition duration-300 hover:bg-neutral-400 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="group text-white border border-neutral-400/20 overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                            src={greenThumbs}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 bg-black/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                                    Green Thumbs - Site vitrine
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2">
                                    Projet réalisé dans le cadre d'un exercice scolaire. Green Thumbs est un site vitrine fictif.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap mb-4">
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">HTML</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">CSS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">JS</p>
                                <p className="px-3 py-1 bg-black/50 border border-neutral-400/20">Responsive</p>
                            </div>

                            <a href="" className="bg-white text-[#191919] text-sm font-medium px-4 py-2 transition duration-300 hover:bg-neutral-400 flex items-center gap-2 w-min">Découvrir <ArrowRight size="14" /></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    </>
  );
}
