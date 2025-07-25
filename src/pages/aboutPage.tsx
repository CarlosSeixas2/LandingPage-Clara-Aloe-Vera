import revendedoraImage from "../../public/revendedora.jpg";

export default function AboutPage() {
  return (
    <section
      id="sobre"
      className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center md:items-start gap-20"
    >
      <div className="flex-shrink-0">
        <img
          className="h-[480px] object-cover rounded-2xl shadow-2xl"
          src={revendedoraImage}
          alt="Revendedora"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-xl">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Sobre Mim
        </h1>

        <p className="text-justify text-gray-600 text-xl leading-7 ">
          Olá! Meu nome é
          <span className="font-semibold text-green-600"> Maria Clara</span>
          , sou revendedora autorizada dos produtos Forever Living. Estou aqui
          para compartilhar com você minha paixão por produtos naturais e de
          qualidade. <br />
          Acredito que o <strong className="text-green-600">
            Aloe Vera
          </strong>{" "}
          pode transformar vidas, trazendo mais saúde, beleza e bem-estar para o
          seu dia a dia.
        </p>
      </div>
    </section>
  );
}
