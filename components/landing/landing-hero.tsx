const Hero = () => {
  return (
    <section className="text-white h-full ">
      <div className="max-w-3xl flex h-full items-center justify-center w-full mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl mb-9">
            Eficiencia. Innovación. Rapidez.
          </h1>

          <p className="mx-auto max-w-xl sm:text-xl/relaxed mb-10 text-gray-300">
            Con nuestra plataforma, tus clientes pueden escanear un código QR en
            sus mesas, ver la cuenta y pagar al instante. Simplifica la
            operación de tu restaurante, reduce tiempos de espera y ofrece una
            experiencia moderna sin necesidad de costosos sistemas de punto de
            venta.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
