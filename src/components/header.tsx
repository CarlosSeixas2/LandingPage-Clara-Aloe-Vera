import {
  House,
  PackageSearch,
  User,
  MessageSquareQuote,
  LogIn,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import logoImage from "../../public/logo_forever.png";

interface NavItemProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
}

export function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-green-500 hover:text-black hover:scale-105"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 m-4 px-6 py-2 md:bg-[#1d1c1c]/65 md:backdrop-blur-lg bg-transparent rounded-full flex justify-between items-center w-full max-w-6xl h-14">
      <nav className="hidden md:flex items-center justify-evenly w-2/5">
        <NavItem href="#inicio" icon={<House size={20} />} label="Início" />
        <NavItem
          href="#produtos"
          icon={<PackageSearch size={20} />}
          label="Produtos"
        />
        <NavItem href="#sobre" icon={<User size={20} />} label="Sobre Mim" />
      </nav>

      <div className="hidden md:flex items-center justify-center w-1/5">
        <a href="#inicio">
          <img
            className="h-10 mx-auto object-cover"
            src={logoImage}
            alt="Logo Forever Aloe Vera"
          />
        </a>
      </div>

      <nav className="hidden md:flex items-center justify-evenly w-2/5">
        <NavItem
          href="#depoimentos"
          icon={<MessageSquareQuote size={20} />}
          label="Depoimentos"
        />
        <NavItem href="#contato" icon={<Phone size={20} />} label="Contato" />
        <NavItem
          href="https://wa.me/55SEUNUMERO?text=Olá!%20Tenho%20interesse%20nos%20produtos%20Forever."
          icon={<LogIn size={20} />}
          label="Log in"
        />
      </nav>

      {/* Botão Mobile (hambúrguer) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-black"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1d1c1c]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <NavItem href="#inicio" icon={<House size={20} />} label="Início" />
          <NavItem
            href="#produtos"
            icon={<PackageSearch size={20} />}
            label="Produtos"
          />
          <NavItem href="#sobre" icon={<User size={20} />} label="Sobre Mim" />
          <NavItem
            href="#depoimentos"
            icon={<MessageSquareQuote size={20} />}
            label="Depoimentos"
          />
          <NavItem href="#contato" icon={<Phone size={20} />} label="Contato" />
          <NavItem
            href="https://wa.me/55SEUNUMERO?text=Olá!%20Tenho%20interesse%20nos%20produtos%20Forever."
            icon={<LogIn size={20} />}
            label="Log in"
          />
        </div>
      )}
    </header>
  );
}
