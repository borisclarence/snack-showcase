// import '../../assets/css/Footers.css';
import logouter from "../../assets/img/Logouter-logo.png";

const Footers = () => {
    return (
      <div className="bg-white bg-global shadow" id="footer">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={logouter} className="h-10 w-10 rounded" alt="Logouter Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logouter</span>
                </a>
                
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  text-white sm:mb-0">
                  <li>
                    <a href="#home" className="hover:underline me-4 md:me-6">Accueil</a>
                  </li>
                  <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                    <a href="#services" className="hover:underline me-4 md:me-6">Professionnel</a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                  </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center  text-white">© 2024. Snack-showcase Made by E.F.B.C.</span>
        </div>
      </div>
    );
  }
  
export default Footers;