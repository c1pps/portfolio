export default function Nav() {
    return (
        <header className='fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-[20px] md:px-[160px] text-white text-xl font-light bg-gradient-to-b from-black/90 to-transparent py-8'>
            <nav>
                <ul className='flex justify-between flex-col md:flex-row'>
                    <div>
                        <li>
                            <a href="https://github.com/c1pps" className="relative inline-flex items-center gap-2 font-semibold text-xl md:text-3xl after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-4 after:bg-current after:transition-all after:duration-300 hover:after:w-12">wthejulio</a>                            
                        </li>
                    </div>
                    <div className='flex gap-[20px] mt-4 md:mt-0'>
                        <li>
                            <a href="/#creations" className='group text-neutral-400 hover:text-white transition duration-300'>Projets<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                        </li>
                        <li>
                            <a href="/#apropos" className='group text-neutral-400 hover:text-white transition duration-300'>À Propos<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                        </li>
                        <li>
                            <a href="/#tarifs" className='group text-neutral-400 hover:text-white transition duration-300'>Tarifs<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                        </li>
                        
                        <li className="block md:hidden">
                            <a href="/#contact" className='group text-neutral-400 hover:text-white transition duration-300'>Contact<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                        </li>
                    </div>
                    <div className="hidden md:block">
                        <a href="/#contact" className='group text-neutral-400 hover:text-white transition duration-300'>Contact<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
