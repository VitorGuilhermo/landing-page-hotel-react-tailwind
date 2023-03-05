import { AiOutlineSearch } from 'react-icons/ai'

export function FormSearch() {
    return (
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
    )
}