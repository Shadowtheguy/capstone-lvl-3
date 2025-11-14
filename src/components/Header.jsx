function Header() {
  return (
    <>
      {/* Website Title */}
      <section className="container background-title">
        <h1 className="pokefont-title text-center">PokeMix!</h1>
      </section>
      {/* Website Descritption */}
      <section className="container background-description text-white">
        <h2 className="text-center">Welcome to the website</h2>
        <p className="text-center">
          Hello! Here you can mix and match all kind of Pokemon types,
          Abilities, and Stats to make your ideal pokemon, or even roll random
          combinations for fantasy fun! And if you have a good idea yourself, or
          want to see what other people submit, just go down below and make your
          own! Have fun!
        </p>
        <p className="text-center small opacity-50">
          This website was made as a Capstone Project for my online classes.
        </p>
      </section>
    </>
  );
}

export default Header;
