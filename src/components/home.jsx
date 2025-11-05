// need this later https://pokeapi.co/api/v2/ability?offest=367&limit=367

import { useState, useRef } from "react";

//* Functions
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function calculatePercentage(partialValue, totalValue) {
  if (totalValue === 0) {
    return 0;
  }
  return (partialValue / totalValue) * 100;
}

function Home() {
  //* Setting Variables
  // HTML Inserts
  const [userTypes, setUserTypes] = useState(
    <>
      <button className="col-4 types">Select</button>
      <button className="col-4 types">Select</button>
    </>
  );

  const [userAbility, setUserAbility] = useState(
    "No ability selected yet, go crazy!"
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
  const [fetchedAbility, setFetchedAbility] = useState("");

  // Stats
  const currentUserStats = useRef("");
  const maxStatTotal = 255;

  const [userHP, setUserHP] = useState(0);
  const [userATK, setUserATK] = useState(0);
  const [userDEF, setUserDEF] = useState(0);
  const [userSPA, setUserSPA] = useState(0);
  const [userSPD, setUserSPD] = useState(0);
  const [userSPE, setUserSPE] = useState(0);

  // Color Selector for Stats
  const [userHPColor, setUserHPColor] = useState("white")
  const [userATKColor, setUserATKColor] = useState("white")
  const [userDEFColor, setUserDEFColor] = useState("white")
  const [userSPAColor, setUserSPAColor] = useState("white")
  const [userSPDColor, setUserSPDColor] = useState("white")
  const [userSPEColor, setUserSPEColor] = useState("white")

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

  // Styles for each stat
  const statStyleHP = {
    backgroundColor: userHPColor,
    width: calculatePercentage(userHP, maxStatTotal) + "%",
  };

  const statStyleATK = {
    backgroundColor: userATKColor,
    width: calculatePercentage(userATK, maxStatTotal) + "%",
  };

  const statStyleDEF = {
    backgroundColor: userDEFColor,
    width: calculatePercentage(userDEF, maxStatTotal) + "%",
  };

  const statStyleSPA = {
    backgroundColor: userSPAColor,
    width: calculatePercentage(userSPA, maxStatTotal) + "%",
  };

  const statStyleSPD = {
    backgroundColor: userSPDColor,
    width: calculatePercentage(userSPD, maxStatTotal) + "%",
  };

  const statStyleSPE = {
    backgroundColor: userSPEColor,
    width: calculatePercentage(userSPE, maxStatTotal) + "%",
  };

  // Setting the Colors for the stat bars
  //! Bar colors only update after clicking the button again
  function statBarColoring() {
    if (userHP < 51) {
      setUserHPColor("red")
    } else if (userHP < 102) {
      setUserHPColor("orange")
    } else if (userHP < 153) {
      setUserHPColor("yellow")
    } else if (userHP < 204) {
      setUserHPColor("lime")
    } else {
      setUserHPColor("cyan")
    }

    if (userATK < 51) {
      setUserATKColor("red")
    } else if (userATK < 102) {
      setUserATKColor("orange")
    } else if (userATK < 153) {
      setUserATKColor("yellow")
    } else if (userATK < 204) {
      setUserATKColor("lime")
    } else {
      setUserATKColor("cyan")
    }

    if (userDEF < 51) {
      setUserDEFColor("red")
    } else if (userDEF < 102) {
      setUserDEFColor("orange")
    } else if (userDEF < 153) {
      setUserDEFColor("yellow")
    } else if (userDEF < 204) {
      setUserDEFColor("lime")
    } else {
      setUserDEFColor("cyan")
    }

    if (userSPA < 51) {
      setUserSPAColor("red")
    } else if (userSPA < 102) {
      setUserSPAColor("orange")
    } else if (userSPA < 153) {
      setUserSPAColor("yellow")
    } else if (userSPA < 204) {
      setUserSPAColor("lime")
    } else {
      setUserSPAColor("cyan")
    }

    if (userSPD < 51) {
      setUserSPDColor("red")
    } else if (userSPD < 102) {
      setUserSPDColor("orange")
    } else if (userSPD < 153) {
      setUserSPDColor("yellow")
    } else if (userSPD < 204) {
      setUserSPDColor("lime")
    } else {
      setUserSPDColor("cyan")
    }

    if (userSPE < 51) {
      setUserSPEColor("red")
    } else if (userSPE < 102) {
      setUserSPEColor("orange")
    } else if (userSPE < 153) {
      setUserSPEColor("yellow")
    } else if (userSPE < 204) {
      setUserSPEColor("lime")
    } else {
      setUserSPEColor("cyan")
    }
  }

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

  const statStyleList = [
    statStyleHP,
    statStyleATK,
    statStyleDEF,
    statStyleSPA,
    statStyleSPD,
    statStyleSPE,
  ];

  //* Randomization
  // Randomizing Types

  function randomizeUserType(event) {
    let randomType1 = randomNumber(0, 16);
    let randomType2 = randomNumber(0, 17);

    setUserTypes(
      <>
        <button className="col-4 types" style={typeStyleList[randomType1]}>
          {typeList[randomType1]}
        </button>
        <button className="col-4 types" style={typeStyleList[randomType2]}>
          {typeList[randomType2]}
        </button>
      </>
    );
  }

  // Randomizing Ability

  // All Together
  function randomizeUserPokemon(event) {
    randomizeUserType();
  }

  //* Fetching From API

  // Ability

  function userAbilityData(data) {
    console.log(data.effect_entries[1].effect);

    setUserAbility(data.effect_entries[1].effect);
  }

  function fetchUserAbility(event) {
    event.preventDefault();
    const abilityInput = currentUserAbility.current.value;
    const fetchAbility = abilityInput.toLowerCase().replace(" ", "-");

    fetch("https://pokeapi.co/api/v2/ability/" + fetchAbility)
      .then((response) => response.json())
      .then(userAbilityData)

    currentUserAbility.current.value = "";
  }

  // Stats

  function userStatData(data) {
    console.log(data.stats[0].base_stat + " HP");
    console.log(data.stats[1].base_stat + " ATK");
    console.log(data.stats[2].base_stat + " DEF");
    console.log(data.stats[3].base_stat + " SPA");
    console.log(data.stats[4].base_stat + " SPD");
    console.log(data.stats[5].base_stat + " SPE");

    setUserHP(data.stats[0].base_stat);
    setUserATK(data.stats[1].base_stat);
    setUserDEF(data.stats[2].base_stat);
    setUserSPA(data.stats[3].base_stat);
    setUserSPD(data.stats[4].base_stat);
    setUserSPE(data.stats[5].base_stat);
  }

  function fetchUserStats(event) {
    event.preventDefault();
    const statInput = currentUserStats.current.value;
    const fetchStats = statInput.toLowerCase().replace(" ", "-");

    fetch("https://pokeapi.co/api/v2/pokemon/" + fetchStats)
      .then((response) => response.json())
      .then(userStatData);

    currentUserStats.current.value = "";
    statBarColoring();
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
                <p className="pokemix-options">{userAbility}</p>
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
                    onClick={fetchUserStats}
                    className="ability-button btn btn-danger col-2"
                  >
                    Go
                  </button>
                </div>
                {/* Actual Stat Container */}
                <div className="stat-container">
                  {/* HP */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleHP}></div>
                    </div>
                    <p className="col-4 small stat-label">{userHP}/255</p>
                  </div>
                  {/* Physical Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleATK}></div>
                    </div>
                    <p className="col-4 small stat-label">{userATK}/255</p>
                  </div>
                  {/* Physical Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleDEF}></div>
                    </div>
                    <p className="col-4 small stat-label">{userDEF}/255</p>
                  </div>
                  {/* Special Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleSPA}></div>
                    </div>
                    <p className="col-4 small stat-label">{userSPA}/255</p>
                  </div>
                  {/* Special Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleSPD}></div>
                    </div>
                    <p className="col-4 small stat-label">{userSPD}/255</p>
                  </div>
                  {/* Speed */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleSPE}></div>
                    </div>
                    <p className="col-4 small stat-label">{userSPE}/255</p>
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
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
                  </div>
                  {/* Physical Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
                  </div>
                  {/* Physical Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
                  </div>
                  {/* Special Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
                  </div>
                  {/* Special Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
                  </div>
                  {/* Speed */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-6">
                      <div className="stat-filled"></div>
                    </div>
                    <p className="col-3 small stat-label">0/255</p>
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
