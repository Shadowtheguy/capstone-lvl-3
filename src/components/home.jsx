import { useState } from "react";

function Home() {
  return (
    <>
      {/* Website Title */}
      <section className="container background-title">
        <h1 className="pokefont-title text-center">PokeMix!</h1>
      </section>
      {/* Website Descritpion */}
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
      {/* Website Function */}
      <section className="container background-mixes">
        <p className="text-center pokemix-options">The first mix is for you! Just put in the options that you want, or randomize it! Meanwhile, the second pokemix is random every click! Can you beat my random creations?
        </p>
        <div className="row">
          <div className="col-5">
            {/* First Pokemix Options */}
            <h4 className="pokefont-mixes text-center">Pokemix 1</h4>
            <div className="pokemix-card card">
              {/* Pokemix 1 Type */}
              <div className="pokemix-options row">
                <h5 className="pokemix-options col-3">Type:</h5>
                <p className="col-4 types"></p>
                <p className="col-4 types"></p>
              </div>
              {/* Pokemix 1 Ability */}
              <div>
                <div className="row pokemix-options">
                  <h5 className="pokemix-options col-4">Ability:</h5>
                  <input className="col-4 smaller-input" />
                  <button
                    type="submit"
                    className="ability-button btn btn-danger col-2"
                  >
                    Go
                  </button>
                </div>
                <p className="pokemix-options">
                  No ability selected yet, go crazy!
                </p>
              </div>
              {/* Pokemix 1 Stats */}
              <div>
                <div className="row pokemix-options">
                  <h5 className="col-4 pokemix-options">Stats:</h5>
                  <input className="col-4 smaller-input" />
                  <button
                    type="submit"
                    className="ability-button btn btn-danger col-2"
                  >
                    Go
                  </button>
                </div>
                <p>placeholder</p>
              </div>
              <button className="btn btn-primary m-1 bottom-button">Randomize it!</button>
            </div>
          </div>
          {/* VS */}
          <div className="col-2">
            <h2 className="pokefont-mixes text-center vs-middle">VS</h2>
          </div>
          {/* Second Pokemix */}
          <div className="col-5">
            {/* Pokemix 2 Type */}
            <h4 className="pokefont-mixes text-center">Pokemix 2</h4>
            <div className="pokemix-card card">
              <div className="pokemix-options row">
                <h5 className="pokemix-options col-3">Type:</h5>
                <p className="col-4 types"></p>
                <p className="col-4 types"></p>
              </div>
              {/* Pokemix 2 Ability */}
              <div>
                <h5 className="pokemix-options">Ability:</h5>
                <p className="pokemix-options">placeholder</p>
              </div>
              {/* Pokemix 2 Stats */}
              <div>
                <h5 className="pokemix-options">Stats:</h5>
                <p>placeholder</p>
              </div>
              <button className="btn btn-dark m-1 bottom-button">New Opponent!</button>
            </div>
          </div>
        </div>
      </section>
      {/* User Info Collection */}
      <section className="container background-submit">
        <h1 className="text-center">Make Your Own Here!</h1>
        <p className="text-center">
          Here you can submit your own ideas! Just click the button below and
          the form should pop up, fill it out then BAM! Your idea will be added
          and in the pool for selection if people turn on custom ideas!
        </p>
        <button className="btn btn-success mx-auto d-grid">
          Click Here To Add Custom Ideas!
        </button>
      </section>
    </>
  );
}

export default Home;
