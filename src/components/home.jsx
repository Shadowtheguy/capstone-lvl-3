// need this later https://pokeapi.co/api/v2/ability?offest=367&limit=367

import { useState, useRef } from "react";

//* Functions
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function Home() {
  //* Setting Variables
  // HTML Inserts
  const [userTypes, setUserTypes] = useState(
    <>
      <p className="col-4 types"></p>
      <p className="col-4 types"></p>
    </>
  );

  const [userAbility, setUserAbility] = useState(
    <p className="pokemix-options">No ability selected yet, go crazy!</p>
  );

  // Lists
  const typeList = [
    "Normal",
    "Grass",
    "Fire",
    "Water",
    "Bug",
    "Flying",
    "Fighting",
    "Psychic",
    "Dark",
    "Dragon",
    "Steel",
    "Rock",
    "Ground",
    "Fairy",
    "Electric",
    "Poison",
    "Ghost",
    "Ice",
    "",
  ];

  // Ability
  const currentUserAbility = useRef("");

  // Stats
  const currentUserStats = useRef("");

  //! Highest Base Stat is HP at 255
  const [HP1, setHP1] = useState(0);
  const [ATK1, setATK1] = useState(0);
  const [DEF1, setDEF1] = useState(0);
  const [SATK1, setSATK1] = useState(0);
  const [SDEF1, setSDEF1] = useState(0);
  const [SPE1, setSPE1] = useState(0);

  const [HP2, setHP2] = useState(0);
  const [ATK2, setATK2] = useState(0);
  const [DEF2, setDEF2] = useState(0);
  const [SATK2, setSATK2] = useState(0);
  const [SDEF2, setSDEF2] = useState(0);
  const [SPE2, setSPE2] = useState(0);

  //* Styles
  // Styles for specific types
  const typeStyleNormal = {
    backgroundColor: "#A8A77A",
    borderColor: "black",
  };

  const typeStyleGrass = {
    backgroundColor: "#7AC74C",
    borderColor: "black",
  };

  const typeStyleFire = {
    backgroundColor: "#EE8130",
    borderColor: "black",
  };

  const typeStyleWater = {
    backgroundColor: "#6390F0",
    borderColor: "black",
  };

  const typeStyleBug = {
    backgroundColor: "#A6B91A",
    borderColor: "black",
  };

  const typeStyleFlying = {
    backgroundColor: "#A98FF3",
    borderColor: "black",
  };

  const typeStyleFighting = {
    backgroundColor: "#C22E28",
    borderColor: "black",
  };

  const typeStylePsychic = {
    backgroundColor: "#F95587",
    borderColor: "black",
  };

  const typeStyleDark = {
    backgroundColor: "#705746",
    borderColor: "black",
  };

  const typeStyleDragon = {
    backgroundColor: "#6F35FC",
    borderColor: "black",
  };

  const typeStyleSteel = {
    backgroundColor: "#B7B7CE",
    borderColor: "black",
  };

  const typeStyleRock = {
    backgroundColor: "#B6A136",
    borderColor: "black",
  };

  const typeStyleGround = {
    backgroundColor: "#E2BF65",
    borderColor: "black",
  };

  const typeStyleFairy = {
    backgroundColor: "#D685AD",
    borderColor: "black",
  };

  const typeStyleElectric = {
    backgroundColor: "#F7D02C",
    borderColor: "black",
  };

  const typeStylePoison = {
    backgroundColor: "#A33EA1",
    borderColor: "black",
  };

  const typeStyleGhost = {
    backgroundColor: "#735797",
    borderColor: "black",
  };

  const typeStyleIce = {
    backgroundColor: "#96D9D6",
    borderColor: "black",
  };

  const typeStyleNone = {
    backgroundColor: "white",
    borderColor: "white",
  };

  // List to cycle through
  const typeStyleList = [
    typeStyleNormal,
    typeStyleGrass,
    typeStyleFire,
    typeStyleWater,
    typeStyleBug,
    typeStyleFighting,
    typeStyleFlying,
    typeStylePsychic,
    typeStyleDark,
    typeStyleDragon,
    typeStyleSteel,
    typeStyleRock,
    typeStyleGround,
    typeStyleFairy,
    typeStyleElectric,
    typeStylePoison,
    typeStyleGhost,
    typeStyleIce,
    typeStyleNone,
  ];

  //* Randomization
  // Randomizing Types

  function randomizeUserType(event) {
    let randomType1 = randomNumber(0, 16);
    let randomType2 = randomNumber(0, 17);

    setUserTypes(
      <>
        <p className="col-4 types" style={typeStyleList[randomType1]}>
          {typeList[randomType1]}
        </p>
        <p className="col-4 types" style={typeStyleList[randomType2]}>
          {typeList[randomType2]}
        </p>
      </>
    );
  }

  // All Together
  function randomizeUserPokemon(event) {
    randomizeUserType();
  }

  //* Fetching From API
  // Ability
  function fetchUserAbility(event) {
    event.preventDefault();
    const abilityInput = currentUserAbility.current.value;
    const fetchAbility = abilityInput.toLowerCase().replace(" ", "-");

    fetch("https://pokeapi.co/api/v2/ability/" + fetchAbility)
      .then((response) => response.json())
      .then((data) => console.log(data));

    currentUserAbility.current.value = "";
  }

  // Stats
  function fetchUserStats(event) {
    event.preventDefault();
    const statInput = currentUserStats.current.value;
    const fetchStats = statInput.toLowerCase.replace(" ", "-");

    fetch("https://pokeapi.co/api/v2/pokemon/" + fetchStats)
      .then((response) => response.json())
      .then((data) => console.log(data));

    currentUserStats.current.value ="";
  }

  //* Actual HTML
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
        <p className="text-center pokemix-options">
          The first mix is for you! Just put in the options that you want, or
          randomize it! Meanwhile, the second pokemix is random every click! Can
          you beat my random creations?
        </p>
        <div className="row">
          <div className="col-5">
            {/* First Pokemix Options */}
            <h4 className="pokefont-mixes text-center">Pokemix 1</h4>
            <div className="pokemix-card card">
              {/* Pokemix 1 Type */}
              <div className="pokemix-options row">
                <h5 className="pokemix-options col-3">Type:</h5>
                {userTypes}
              </div>
              {/* Pokemix 1 Ability */}
              <div>
                <div className="row pokemix-options">
                  <h5 className="pokemix-options col-4">Ability:</h5>
                  <input
                    className="col-4 smaller-input"
                    ref={currentUserAbility}
                  />
                  <button
                    onClick={fetchUserAbility}
                    className="ability-button btn btn-danger col-2"
                  >
                    Go
                  </button>
                </div>
                {userAbility}
              </div>
              {/* Pokemix 1 Stats */}
              <div>
                <div className="row pokemix-options">
                  <h5 className="col-4 pokemix-options">Stats:</h5>
                  <input
                    className="col-4 smaller-input"
                    ref={currentUserStats}
                  />
                  <button
                    type="submit"
                    className="ability-button btn btn-danger col-2"
                  >
                    Go
                  </button>
                </div>
                {/* Actual Stat Container */}
                <div className="stat-container">
                  {/* HP */}
                  <div>
                    <p className="hp-tag">HP</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-HP1"></div>
                    </div>
                  </div>
                  {/* Physical Attack */}
                  <div>
                    <p className="atk-tag">ATK</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-PAtk1"></div>
                    </div>
                  </div>
                  {/* Physical Defense */}
                  <div>
                    <p className="def-tag">DEF</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-PDef1"></div>
                    </div>
                  </div>
                  {/* Special Attack */}
                  <div>
                    <p className="satk-tag">SATK</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-SAtk1"></div>
                    </div>
                  </div>
                  {/* Special Defense */}
                  <div>
                    <p className="sdef-tag">SDEF</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-SDef1"></div>
                    </div>
                  </div>
                  {/* Speed */}
                  <div>
                    <p className="speed-tag">SPE</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-Speed1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary m-1 bottom-button"
                onClick={randomizeUserPokemon}
              >
                Randomize it!
              </button>
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
                <p className="col-4 types" id="opponentType1"></p>
                <p className="col-4 types" id="opponentType2"></p>
              </div>
              {/* Pokemix 2 Ability */}
              <div>
                <h5 className="pokemix-options adjust-pokemix-2">Ability:</h5>
                <p className="pokemix-options">placeholder</p>
              </div>
              {/* Pokemix 2 Stats */}
              <div>
                <div className="adjust-pokemix-2">
                  <h5 className="pokemix-options">Stats:</h5>
                </div>
                {/* Actual Stat Container */}
                <div className="stat-container">
                  {/* HP */}
                  <div>
                    <p className="hp-tag">HP</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-HP1"></div>
                    </div>
                  </div>
                  {/* Physical Attack */}
                  <div>
                    <p className="atk-tag">ATK</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-PAtk1"></div>
                    </div>
                  </div>
                  {/* Physical Defense */}
                  <div>
                    <p className="def-tag">DEF</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-PDef1"></div>
                    </div>
                  </div>
                  {/* Special Attack */}
                  <div>
                    <p className="satk-tag">SATK</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-SAtk1"></div>
                    </div>
                  </div>
                  {/* Special Defense */}
                  <div>
                    <p className="sdef-tag">SDEF</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-SDef1"></div>
                    </div>
                  </div>
                  {/* Speed */}
                  <div>
                    <p className="speed-tag">SPE</p>
                    <div className="stat-bar1">
                      <div className="stat-fill-Speed1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-dark m-1 bottom-button">
                New Opponent!
              </button>
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
