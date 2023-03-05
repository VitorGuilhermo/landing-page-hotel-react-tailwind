import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'

export function Footer() {
    return (
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
    )
}