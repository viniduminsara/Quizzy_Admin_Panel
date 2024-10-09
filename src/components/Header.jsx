import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/Logo.png';
import { useAuth } from "../store/AuthContext.jsx";
import UserDetailsModel from "./Model/UserDetailsModel.jsx";

const Header = () => {
    const { currentUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <header className='px-4 py-4 md:px-8 flex justify-between items-center'>
            <img src={Logo} alt="logo" className='w-28 md:w-36'/>
            <div className="relative" ref={dropdownRef}>
                {currentUser && (
                    <div>
                        <div
                            className='w-10 h-10 bg-secondary text-white text-xl flex items-center justify-center rounded-full cursor-pointer transform transition duration-300 hover:scale-105'
                            onClick={toggleDropdown}
                        >
                            {currentUser.email.slice(0, 1).toUpperCase()}
                        </div>
                        {isDropdownOpen && (
                            <UserDetailsModel
                                currentUser={currentUser}
                                closeDropdown={toggleDropdown}
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
