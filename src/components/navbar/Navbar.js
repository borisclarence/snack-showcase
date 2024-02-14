import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logouterofficial from "../../assets/img/logo-logouter-officiel.jpeg";

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/about' },
  { name: 'Professionnel', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <a href="#" class="logo">
              <span className="sr-only">Logouter</span>
              <img
                className="h-10 w-10 w-auto rounded logo-img"
                src={logouterofficial}
                alt=""
              />
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>

            <ul className="navbar">
                {navigation.map((item) => (
                <li>
                    <a key={item.name} href={item.href} className='hover:underline hover:text-violet-600'>
                        {item.name}
                    </a>
                </li>
                ))}
            </ul>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100087431025887">
                    <i className="bx bxl-facebook-square"></i>
                </a>
                <a href="https://instagram.com/lo_gouter?igshid=NzZhOTFlYzFmZQ==">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://wa.me/c/24176406405"><i className="bx bxl-whatsapp"></i></a>  
            </div>
            
        </header>
    );
}
  
export default Navbar;