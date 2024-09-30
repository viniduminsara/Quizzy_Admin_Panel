import Logo from '../assets/Logo.png'

const Header = () => {

    return (
        <header className="bg-white shadow-md px-4 py-4 md:px-8 flex justify-between items-center">
            <img src={Logo} alt="logo" className='w-28 md:w-36'/>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Profile</button>
            </div>
        </header>
    )
}

export default Header
