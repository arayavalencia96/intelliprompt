import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Descubrir y Compartir Propmts.</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center font-extrabold text-5xl">
        AI-power Propmpts
      </span>
      <p className="desc text-center">
        IntelliPropmts es una herramienta open-source para descubrir, guardar y
        compartir propmts para utilizar en las diferentes AI existentes.
      </p>
      <Feed />
    </section>
  );
};
export default Home;
