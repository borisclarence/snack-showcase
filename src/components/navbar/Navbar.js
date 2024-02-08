import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logouter from "../../assets/img/Logouter-logo.png";

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'A Propos', href: '#about' },
  { name: 'Professionnel', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <a href="#" class="logo">
              <span className="sr-only">Logouter</span>
              <img
                className="h-10 w-10 w-auto rounded logo-img"
                src={logouter}
                alt=""
              />
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>

            <ul className="navbar">
                {navigation.map((item) => (
                <li>
                    <a key={item.name} href={item.href}>
                        {item.name}
                    </a>
                </li>
                ))}
            </ul>
            <div>
                <i className="bx bxl-facebook-square"></i>
                <i className="bx bxl-instagram"></i>
                <i className="bx bxl-twitter"></i>
            </div>
            
        </header>
    );
}
  
export default Navbar;