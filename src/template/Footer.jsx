import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importa los íconos de las redes sociales
import img1 from "../../src/assets/ampeilogo.png"

function Footer() {
    return (
        <footer className="bg-red-primary text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex items-center mb-4">
                    <img src={img1} alt="Logo Empresa" className="w-10 h-10 mr-2" />
                    <h1 className="text-lg font-bold">AMPEI SOFTWARE</h1>
                </div>
                <ul className="flex mb-4">
                    <li className="mr-4">
                        <a href="https://www.facebook.com/profile.php?id=100088275306099&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                            <FaFacebook className="w-5 h-5" />
                        </a>
                    </li>
                </ul>

                {/* Mensaje de la empresa */}
                <p className="text-sm mb-2 hidden md:block lg:block">Nosotros creamos posibilidades para conectar al mundo de tus pasiones.</p>

                {/* Derechos reservados */}
                <p className="text-xs">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
