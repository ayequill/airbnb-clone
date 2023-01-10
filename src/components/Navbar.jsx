import logo from '../assets/img/airbnb-logo.png'
export function Navbar () {
    return (
        <header>
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </nav>
        </header>
    )
}