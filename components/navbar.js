import { UserCircleIcon, MenuIcon, } from '@heroicons/react/solid'
import SearchBox from './searchbox'

export default function Navbar({ children, router }) {
    return (
        <div>
            <div className="w-full h-32 bg-rose-700 flex flex-row justify-between rounded-b-3xl shadow-xl items-center">
                <h1 className=' text-white text-2xl self-center ml-10'>
                    SÖZLÜK
                </h1>
                <SearchBox />
                <div className='flex flex-row justify-between w-20 mr-10'>
                    <MenuIcon className=' w-6 h-6 self-center text-white' />
                    <UserCircleIcon className=' w-8 text-black self-center' />
                </div>

            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

