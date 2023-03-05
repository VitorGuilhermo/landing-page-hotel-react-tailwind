

export function Header() {
    return (
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
    )
}