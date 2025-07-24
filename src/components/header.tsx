import {
  House,
  PackageSearch,
  User,
  MessageSquareQuote,
  LogIn,
  Phone,
} from "lucide-react";

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
  return (
    <header className="fixed m-4 px-6 py-2 bg-[#1d1c1c]/65 backdrop-blur-lg rounded-full flex justify-between items-center w-full max-w-6xl h-14 shadow-xl">
      {/* Menu Esquerdo */}
      <nav className="flex items-center justify-evenly w-2/5">
        <NavItem href="#inicio" icon={<House size={20} />} label="Início" />
        <NavItem
          href="#produtos"
          icon={<PackageSearch size={20} />}
          label="Produtos"
        />
        <NavItem href="#sobre" icon={<User size={20} />} label="Sobre Mim" />
      </nav>

      {/* Logo */}
      <div className="flex items-center justify-center w-1/5">
        <a href="#inicio">
          <img
            className="h-10 mx-auto object-cover"
            src="/public/logo_forever.png"
            alt="Logo Forever Aloe Vera"
          />
        </a>
      </div>

      {/* Menu Direito */}
      <nav className="flex items-center justify-evenly w-2/5">
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
    </header>
  );
}
