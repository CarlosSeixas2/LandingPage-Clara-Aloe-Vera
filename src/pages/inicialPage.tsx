import { PackageSearch } from "lucide-react";
import WhatsappIcon from "/public/whatsapp.svg";

import imagemInicial from "../../public/item_fundo.png";

export default function InicialPage() {
  return (
    <section
      id="inicio"
      className="mt-24 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-10 py-20"
    >
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Um Nível Superior de <br /> Alegria com{" "}
          <span className="text-green-600">Produtos Aloe Vera!</span>
        </h1>

        <p className="text-gray-500 text-lg">
          Produtos naturais e certificados que valorizam a qualidade, frescor e
          bem-estar do seu corpo.
        </p>

        <div className="gap-4 pt-4 flex flex-col md:flex-row w-full md:w-auto">
          <a
            href="#produtos"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            <PackageSearch size={20} className="inline mr-2" />
            Explorar Catálogo
          </a>

          <a
            href="https://wa.me/55SEUNUMERO?text=Olá!%20Tenho%20interesse%20nos%20produtos%20Forever."
            target="_blank"
            className="flex items-center gap-2 border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            <img src={WhatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>

      <div>
        <img
          className="w-full h-[480px] object-contain"
          src={imagemInicial}
          alt="Produtos Forever"
        />
      </div>
    </section>
  );
}
