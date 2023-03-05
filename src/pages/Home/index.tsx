import { AiOutlineArrowRight } from 'react-icons/ai'
import { FormSearch } from './components/FormSearch'

import backgroundImage from '../../assets/hero-image-1.png'
import featuredImage from '../../assets/featured-img.png'
import imageShadow from '../../assets/image-shadow.png'
import hotel1 from '../../assets/hotel-1.jpeg'
import hotel2 from '../../assets/hotel-2.jpeg'
import hotel3 from '../../assets/hotel-3.jpeg'
import hotel4 from '../../assets/hotel-4.jpeg'


export function Home() {

    return (
        <>
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
                            <FormSearch />
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
                    <FormSearch />
                </div>
            </div>
        </>
    )
}