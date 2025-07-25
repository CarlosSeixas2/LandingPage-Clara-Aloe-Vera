import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section id="contato" className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h1>
      <p className="text-gray-600 mb-10">
        Fique à vontade para nos chamar no WhatsApp ou seguir nas redes sociais.
      </p>

      <div className="flex flex-col items-center gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          Fale no WhatsApp
        </a>

        {/* Redes sociais */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://instagram.com/suaempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:scale-110 transition-transform"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://facebook.com/suaempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaFacebook size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
