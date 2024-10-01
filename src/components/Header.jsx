import Logo from '../assets/Logo.png'

const Header = () => {

    return (
        <header className='px-4 py-4 md:px-8 flex justify-between items-center'>
            <img src={Logo} alt="logo" className='w-28 md:w-36'/>
            <div>
                <div
                    className='w-10 h-10 bg-secondary text-white text-xl flex items-center justify-center rounded-full'>
                    V
                </div>
            </div>
        </header>
    )
}

export default Header
