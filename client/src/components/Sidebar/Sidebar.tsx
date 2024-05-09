import ReactDOM from 'react-dom'
import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
    const sidebarContentRef = React.useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (sidebarContentRef.current && !sidebarContentRef.current.contains(event.target as Node)) {
            onClose();
        }
    }

    return isOpen ? ReactDOM.createPortal(
        <div className='fixed top-0 left-0 h-full w-full flex justify-end bg-black bg-opacity-50' onClick={handleClickOutside}>
            <div className='bg-gray-800 w-56 h-full p-8 flex flex-col' ref={sidebarContentRef}>
                    <ul className="flex flex-col space-y-8 mt-4 text-center">
                        <li><a className="text-white hover:text-gray-200" href="#">How To Play</a></li>
                        <li><a className="text-white hover:text-gray-200" href="/leaderboard">Leaderboard</a></li>
                    </ul>
            </div>
        </div>,
        document.body
    ) : null;
}

export default Sidebar;