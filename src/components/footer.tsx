import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

import logoImage from "../../public/logo_forever.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1d1c1c] backdrop-blur-lg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                className="h-14"
                src={logoImage}
                alt="Logo Forever Aloe Vera"
              />
            </div>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Produtos naturais à base de Aloe Vera para seu bem-estar e beleza.
              Qualidade premium com compromisso com sua saúde.
            </p>
            <a
              href="https://wa.me/5586994657885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          {/* Navegação Rápida */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/produtos"
                  className="hover:text-white transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="/#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="/#contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contahref */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (86) 99465-7885
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                mariaclara@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Parnaíba, PI
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Seixas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
