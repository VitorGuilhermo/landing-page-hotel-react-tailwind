import backgroundImage from '../../assets/hero-image-1.png'

import { AiOutlineSearch } from 'react-icons/ai'

export function Home() {

    return (
        <>
            <header className='container mx-auto px-4 h-24 flex items-center justify-between'>
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
                <div className='container mx-auto px-4 h-full flex items-center justify-center'>
                    <div>
                        <div className='text-center'>
                            <h1 className='text-gray-200 text-3xl mb-2'>Onde você quer ir?</h1>
                            <p className='text-green-50'>Escolha o estado e cidade para achar os melhores resorts</p>
                        </div>
                        <div className='mt-7'>
                            <form className='flex space-x-4'>
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
                                    className='inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'
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
                className='container mx-auto px-4 py-10'
            >
                <div className='flex'>
                    <div className='flex-grow-1'>
                        <h4>RESORT EM DESTAQUE</h4>
                        <h2>Ecoresort Praia do Forte Bahia</h2>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fuga ipsam neque quas asperiores adipisci autem inventore repellat recusandae ut. Modi voluptate nihil voluptates neque possimus dolores facere et excepturi!</p>
                        </div>
                    </div>
                    <div className='ml-auto'>
                        aa
                    </div>
                </div>
            </main>
        </>
    )
}