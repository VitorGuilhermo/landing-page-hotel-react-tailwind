import backgroundImage from '../../assets/hero-image-1.png'
import featuredImage from '../../assets/featured-img.png'
import imageShadow from '../../assets/image-shadow.png'
import hotel1 from '../../assets/hotel-1.jpeg'
import hotel2 from '../../assets/hotel-2.jpeg'
import hotel3 from '../../assets/hotel-3.jpeg'
import hotel4 from '../../assets/hotel-4.jpeg'


import { 
    AiOutlineSearch, 
    AiOutlineArrowRight, 
    AiOutlineFacebook, 
    AiOutlineInstagram 
} from 'react-icons/ai'

export function Home() {

    return (
        <>
            <header className='container max-w-5xl mx-auto px-4 h-24 flex items-center justify-between'>
                <div className='font-black'>
                    LOGO
                </div>
                <ul className='flex flex-items-center space-x-4'>
                    <li>
                        <a href="#" className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Como reservar</a>
                    </li>
                    <li>
                        <a href="#" className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Sobre nós</a>
                    </li>
                    <li>
                        <a href="#" className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Informações</a>
                    </li>
                    <li>
                        <a href="#" className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Contato</a>
                    </li>
                </ul>
            </header>

            <section
                className='h-[450px]'
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className='container max-w-5xl mx-auto px-4 h-full flex items-center justify-center'>
                    <div>
                        <div className='text-center'>
                            <h1 className='text-gray-200 text-3xl mb-2'>Onde você quer ir?</h1>
                            <p className='text-green-50'>Escolha o estado e cidade para achar os melhores resorts</p>
                        </div>
                        <div className='mt-7'>
                            <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                                <select name="" id=""
                                    className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
                                >
                                    <option value="">Escolha estado...</option>
                                </select>

                                <select name="" id=""
                                    className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
                                >
                                    <option value="">Escolha cidade</option>
                                </select>

                                <button
                                    className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'
                                >
                                    <AiOutlineSearch size={18} />
                                    <span className='ml-2'>Pesquisar resorts</span>                                
                                </button>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>

            <main
                className='container max-w-5xl mx-auto px-4 py-20'
            >
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='flex-grow-1 lg:pr-10'>
                        <h4 className='text-sm text-gray-400 font-medium'>RESORT EM DESTAQUE</h4>
                        <h2 className='text-2xl text-gray-700'>Ecoresort Praia do Forte Bahia</h2>
                        <h4 className='text-sm text-gray-400 font-medium mt-2'>Hotel qualidade 5 estrelas</h4>
                        <div className='text-sm text-gray-400 font-medium mt-4'>
                            <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fuga ipsam neque quas asperiores adipisci autem inventore repellat recusandae ut. Modi voluptate nihil voluptates neque possimus dolores facere et excepturi!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fuga ipsam neque quas asperiores adipisci autem inventore repellat recusandae ut. Modi voluptate nihil voluptates neque possimus dolores facere et excepturi!</p>
                        </div>

                        <a
                            href='#'
                            className='mt-4 inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'
                        >
                            <span className='mr-2'>Solicitar reservar</span>
                            <AiOutlineArrowRight size={18} />
                        </a>
                    </div>
                    <div className='lg:ml-auto mb-5 lg:mb-0 flex-shrink-0'>
                        <img 
                            src={featuredImage} 
                            alt="Imagem de um resort com coqueiros e águas cristalinas" 
                            className='w-[450px]'
                        />
                    </div>
                </div>
            </main>

            <div>
                <div className='container max-w-5xl mx-auto px-4'>
                    <h4 className='text-center text-2xl text-gray-500 font-semibold mb-8'>Conheça mais resorts</h4>

                    <div 
                        className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0'
                    >
                        <div className='relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden'>
                            <span className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>
                                Beach Park Resort
                            </span>
                            <img src={imageShadow} className='absolute bottom-0 left-0 right-0 h-20 z-10' />
                            <img src={hotel1} className='w-full h-full object-cover' />
                        </div>
                        <div className='relative md:col-span-2 md:h-40 rounded-md overflow-hidden'>
                            <span className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>
                                Salinas do Maragogi Resort
                            </span>
                            <img src={imageShadow} className='absolute bottom-0 left-0 right-0 h-20 z-10' />
                            <img src={hotel2} className='w-full h-full object-cover' />
                        </div>
                        <div className='relative rounded-md overflow-hidden'>
                            <span className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>
                                Grand Palladium
                            </span>
                            <img src={imageShadow} className='absolute bottom-0 left-0 right-0 h-20 z-10' />
                            <img src={hotel3} className='w-full h-full object-cover' />
                        </div>
                        <div className='relative rounded-md overflow-hidden'>
                            <span className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>
                                Arraial d'Ajuda Eco Resort
                            </span>
                            <img src={imageShadow} className='absolute bottom-0 left-0 right-0 h-20 z-10' />
                            <img src={hotel4} className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-20'>
                <div className='container max-w-5xl mx-auto px-4 flex justify-center'>
                    <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                        <select name="" id=""
                            className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
                        >
                            <option value="">Escolha estado...</option>
                        </select>

                        <select name="" id=""
                            className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'
                        >
                            <option value="">Escolha cidade</option>
                        </select>

                        <button
                            className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'
                        >
                            <AiOutlineSearch size={18} />
                            <span className='ml-2'>Pesquisar resorts</span>
                        </button>
                    </form>
                </div>
            </div>

            <footer className='border-t border-gray-200'>
                <div className='container max-w-5xl mx-auto px-4 py-8 flex items-center justify-between'>
                    <div className='text-gray-400 font-black'>
                        LOGO
                    </div>

                    <div className='flex items-center space-x-3'>
                        <a href='#'>
                            <AiOutlineFacebook size={32} />
                        </a>
                        <a href="#">
                            <AiOutlineInstagram size={32} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}