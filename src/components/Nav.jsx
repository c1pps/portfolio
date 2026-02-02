export default function Nav() {
    return (
        <>
            <header className='mt-10 mx-[160px] text-white text-xl font-light'>
                <nav>
                    <ul className='flex justify-between'>
                        <div>
                            <li>
                                <a href="" className="relative inline-flex items-center gap-2 font-semibold text-3xl after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-4 after:bg-current after:transition-all after:duration-300 hover:after:w-12">wthejulio</a>                            
                            </li>
                        </div>
                        <div className='flex gap-[20px]'>
                            <li>
                                <a href="" className='group text-neutral-400 hover:text-white transition duration-300'>Projets<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                            </li>
                            <li>
                                <a href="" className='group text-neutral-400 hover:text-white transition duration-300'>Tarifs<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                            </li>
                            <li>
                                <a href="" className='group text-neutral-400 hover:text-white transition duration-300'>À Propos<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                            </li>
                        </div>
                        <div>
                            <a href="" className='group text-neutral-400 hover:text-white transition duration-300'>Contact<span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-white'></span></a>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}
