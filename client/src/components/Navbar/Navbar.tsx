import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='flex items-center justify-end p-5'>
            <a href='#' className='brand ml-8 mr-auto text-2xl'>Whisperer</a>
            <a className="cta mr-16 block" href="#">
                <button className='bg-red-800 text-white px-4 py-2 
                rounded-full transition-colors duration-500 ease
                hover:bg-red-700'>
                Play
                </button>
            </a>
            <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
                <FiMenu size={24} />
            </button>
            <nav className='ml-4 hidden md:block'>
                <ul className="flex space-x-16">
                    <li><a className="text-white hover:text-gray-200" href="#">How To Play</a></li>
                    <li><a className="text-white hover:text-gray-200 md:mr-16" href="/leaderboard">Leaderboard</a></li>
                </ul>
            </nav>
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    );
}

export default Navbar;
