import Nav from "../components/Nav";
import mockup from "../assets/img/mockup-zoomed.png";
import { TypeAnimation } from 'react-type-animation'; 
import { ArrowDown } from 'lucide-react'

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
                        <a
                        href=""
                        className="bg-white text-[#191919] text-sm font-medium px-6 py-2 rounded-full transition duration-300 hover:bg-neutral-400"
                        >
                        Découvrez mes créations
                        </a>
                        <a
                        href=""
                        className="bg-transparent text-white border border-neutral-400 text-sm font-medium px-6 py-2 rounded-full transition duration-300 hover:bg-white/10"
                        >
                        Travaillons ensemble ?
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end">
                    <img
                        src={mockup}
                        alt="Mockup MacBook codant"
                        className="w-full max-w-lg rounded-xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>

            <div className="mt-[240px] pb-[300px] relative">
                <a href="" className="absolute -top-5 left-[50%] border border-neutral-400 p-2 rounded-full transition-all duration-300 hover:bg-white/10 z-50 hover:top-1">
                    <ArrowDown className="text-neutral-400" />
                </a>
            </div>
        </main>
    </>
  );
}
