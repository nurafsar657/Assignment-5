import logo from "../assets/logo-text.png";

const Nav = () => {
    return <div className="border-b border-gray-200 sticky top-0 z-50 flex items-center justify-between p-4 bg-white ">
        <nav className="flex items-center justify-between gap-4  container mx-auto py-4">
            <img src={logo} alt="Logo" />
            <ul className="flex items-center gap-4">
                <li className="text-pink-600" ><a href="/" >Home</a></li>
                <li><a href="/technologies">Technologies</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
            <div className="flex items-center gap-5">
                <button className="bg-gray-100 text-black px-5 py-2 rounded-4xl hover:bg-pink-600 hover:scale-110 transition-transform duration-200">Sign In</button>
                <button className="bg-pink-600 text-white px-5 py-2 rounded-4xl hover:bg-gray-100 hover:text-black hover:scale-110 transition-transform duration-200">Sign Up</button>
            </div>
        </nav></div>
}
export default Nav;