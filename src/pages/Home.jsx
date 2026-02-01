import Nav from "../components/Nav";
import mockup from "../assets/img/mockup-zoomed.png";
import gtasWebsite from "../assets/img/gtas-website.png"
import greenThumbs from "../assets/img/greenthumbs.png"
import greenMarket from "../assets/img/greenmarket.png"
import servUp from "../assets/img/servup.png"
import { TypeAnimation } from 'react-type-animation'; 
import { ArrowDown, ArrowRight } from 'lucide-react'
import {useState} from "react"

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
    const [isAnnual, setIsAnnual] = useState(true);

    const pricingData = [
        { 
            name: 'Basic', price: isAnnual ? 100 : 10, description: 'For startups and small teams.',
            features: ['Essential site setup support','Access to basic UI templates','Email support for minor updates','Access to basic components']
        },
        {
            name: 'Pro',mostPopular: true,price: isAnnual ? 300 : 30,description: 'Perfect for growing businesses.',
            features: ['Custom web page design up to 5 pages','Access to basic UI templates','Email support for minor updates','Access to basic components']
        },
        {
            name: 'Enterprise',price: isAnnual ? 500 : 50,description: 'For scaling brands and teams.',
            features: ['Full website redesign & development','Advanced analytics insights','Ongoing dedicated support','Access to basic UI templates']
        }

    ]

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
                        <a href="" className="bg-transparent border border-neutral-400/20 text-white hover:bg-white/10 text-sm font-medium px-6 py-2 transition duration-300 hover:bg-white/10">Travaillons ensemble ?</a>
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

            <div className="mx-[160px] pb-[250px]">
                <h2 className="flex items-center gap-4 text-white text-3xl font-semibold leading-tight tracking-tight mb-10">Découvrez mes dernières créations <div className="bg-white h-[2px] w-25 mt-1"></div></h2>

                <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={3} navigation id="creations">
                    <SwiperSlide className="group text-white border border-neutral-400/20 bg-transparent">
                        <div className="relative overflow-hidden">
                            <img
                            src={gtasWebsite}
                            alt="Image illustrative du projet GTA Stories"
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2026</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    GTA Stories - Site vitrine
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2 text-neutral-400">
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
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2025</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    Green Market - Site vitrine 
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2 text-neutral-400">
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
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2024</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    ServUp - Site SaaS
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2 text-neutral-400">
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
                            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-white/10">2023</div>
                        </div>
                        <div className="p-4 bg-transparent">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                                    Green Thumbs - Site vitrine
                                </h3>
                                <p className="text-md font-light leading-tight tracking-tight mt-2 text-neutral-400">
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

            <div className="mx-[160px]">
                <section className='flex items-center justify-center flex-col px-4'>
                <h2 className="flex items-center gap-4 text-white text-3xl font-semibold leading-tight tracking-tight mb-10">Tarifs <div className="bg-white h-[2px] w-10 mt-1"></div></h2>
                <div className='mt-6 flex bg-white/5 p-1 border border-white/10'>
                    <button onClick={() => setIsAnnual(false)} className={`px-6 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${!isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`px-6 py-2 text-sm cursor-pointer font-medium transition-all duration-300 ${isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}>Annually</button>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pricingData.map((item, index) => (
                        <div key={index} className={`border p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-white/5 border-white/20' : 'border-neutral-400/20 bg-transparent'}`}>
                            <h1 className='font-medium text-3xl text-white mt-1'>{item.name}</h1>
                            <p className='text-sm text-neutral-400 mt-2'>{item.description}</p>
                            <h1 className='font-medium text-5xl text-white mt-6'>${item.price}</h1>
                            <button className={`w-full px-4 py-3 cursor-pointer text-sm mt-8 transition duration-300 ${item.mostPopular ? 'bg-white hover:bg-neutral-200 text-black' : 'border border-neutral-400/20 text-white hover:bg-white/10'}`}>
                                Get Started
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
            </section>
            </div>
        </main>
    </>
  );
}
