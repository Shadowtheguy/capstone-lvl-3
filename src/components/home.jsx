import { useState, useRef } from "react";
import { supabase } from '../utils/supabase'

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
      <button onClick={nextFirstType} className="col-4 types">
        Select
      </button>
      <button onClick={nextSecondType} className="col-4 types">
        Select
      </button>
    </>
  );

  const [opponentTypes, setOpponentTypes] = useState(
    <>
      <button className="col-4 types">Loading..</button>
      <button className="col-4 types">Loading..</button>
    </>
  );

  const [userAbility, setUserAbility] = useState(
    "No ability selected yet, go crazy!"
  );

  const [opponentAbility, setOpponentAbility] = useState("Loading..");

  // Types
  let userFirstType = 17;
  let userSecondType = 18;

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
  const maxStatTotal = 255;

  const [userHP, setUserHP] = useState(0);
  const [userATK, setUserATK] = useState(0);
  const [userDEF, setUserDEF] = useState(0);
  const [userSPA, setUserSPA] = useState(0);
  const [userSPD, setUserSPD] = useState(0);
  const [userSPE, setUserSPE] = useState(0);

  const [opponentHP, setOpponentHP] = useState(0);
  const [opponentATK, setOpponentATK] = useState(0);
  const [opponentDEF, setOpponentDEF] = useState(0);
  const [opponentSPA, setOpponentSPA] = useState(0);
  const [opponentSPD, setOpponentSPD] = useState(0);
  const [opponentSPE, setOpponentSPE] = useState(0);

  // Color Selector for Stats
  const [userHPColor, setUserHPColor] = useState("white");
  const [userATKColor, setUserATKColor] = useState("white");
  const [userDEFColor, setUserDEFColor] = useState("white");
  const [userSPAColor, setUserSPAColor] = useState("white");
  const [userSPDColor, setUserSPDColor] = useState("white");
  const [userSPEColor, setUserSPEColor] = useState("white");

  const [opHPColor, setOpHPColor] = useState("white");
  const [opATKColor, setOpATKColor] = useState("white");
  const [opDEFColor, setOpDEFColor] = useState("white");
  const [opSPAColor, setOpSPAColor] = useState("white");
  const [opSPDColor, setOpSPDColor] = useState("white");
  const [opSPEColor, setOpSPEColor] = useState("white");

  //Inputs
  const [HPSliderValue, setHPSliderValue] = useState(130);
  const [ATKSliderValue, setATKSliderValue] = useState(130);
  const [DEFSliderValue, setDEFSliderValue] = useState(130);
  const [SPASliderValue, setSPASliderValue] = useState(130);
  const [SPDSliderValue, setSPDSliderValue] = useState(130);
  const [SPESliderValue, setSPESliderValue] = useState(130);

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

  const opponentStyleHP = {
    backgroundColor: opHPColor,
    width: calculatePercentage(opponentHP, maxStatTotal) + "%",
  };

  const opponentStyleATK = {
    backgroundColor: opATKColor,
    width: calculatePercentage(opponentATK, maxStatTotal) + "%",
  };

  const opponentStyleDEF = {
    backgroundColor: opDEFColor,
    width: calculatePercentage(opponentDEF, maxStatTotal) + "%",
  };

  const opponentStyleSPA = {
    backgroundColor: opSPAColor,
    width: calculatePercentage(opponentSPA, maxStatTotal) + "%",
  };

  const opponentStyleSPD = {
    backgroundColor: opSPDColor,
    width: calculatePercentage(opponentSPD, maxStatTotal) + "%",
  };

  const opponentStyleSPE = {
    backgroundColor: opSPEColor,
    width: calculatePercentage(opponentSPE, maxStatTotal) + "%",
  };

  // Setting the Colors for the stat bars
  //! Bar colors only update after clicking the button again
  function statBarColoring() {
    if (userHP < 51) {
      setUserHPColor("red");
    } else if (userHP < 102) {
      setUserHPColor("orange");
    } else if (userHP < 153) {
      setUserHPColor("yellow");
    } else if (userHP < 204) {
      setUserHPColor("lime");
    } else {
      setUserHPColor("cyan");
    }

    if (userATK < 51) {
      setUserATKColor("red");
    } else if (userATK < 102) {
      setUserATKColor("orange");
    } else if (userATK < 153) {
      setUserATKColor("yellow");
    } else if (userATK < 204) {
      setUserATKColor("lime");
    } else {
      setUserATKColor("cyan");
    }

    if (userDEF < 51) {
      setUserDEFColor("red");
    } else if (userDEF < 102) {
      setUserDEFColor("orange");
    } else if (userDEF < 153) {
      setUserDEFColor("yellow");
    } else if (userDEF < 204) {
      setUserDEFColor("lime");
    } else {
      setUserDEFColor("cyan");
    }

    if (userSPA < 51) {
      setUserSPAColor("red");
    } else if (userSPA < 102) {
      setUserSPAColor("orange");
    } else if (userSPA < 153) {
      setUserSPAColor("yellow");
    } else if (userSPA < 204) {
      setUserSPAColor("lime");
    } else {
      setUserSPAColor("cyan");
    }

    if (userSPD < 51) {
      setUserSPDColor("red");
    } else if (userSPD < 102) {
      setUserSPDColor("orange");
    } else if (userSPD < 153) {
      setUserSPDColor("yellow");
    } else if (userSPD < 204) {
      setUserSPDColor("lime");
    } else {
      setUserSPDColor("cyan");
    }

    if (userSPE < 51) {
      setUserSPEColor("red");
    } else if (userSPE < 102) {
      setUserSPEColor("orange");
    } else if (userSPE < 153) {
      setUserSPEColor("yellow");
    } else if (userSPE < 204) {
      setUserSPEColor("lime");
    } else {
      setUserSPEColor("cyan");
    }
  }

  function opponentBarColoring() {
    if (opponentHP < 51) {
      setOpHPColor("red");
    } else if (opponentHP < 102) {
      setOpHPColor("orange");
    } else if (opponentHP < 153) {
      setOpHPColor("yellow");
    } else if (opponentHP < 204) {
      setOpHPColor("lime");
    } else {
      setOpHPColor("cyan");
    }

    if (opponentATK < 51) {
      setOpATKColor("red");
    } else if (opponentATK < 102) {
      setOpATKColor("orange");
    } else if (opponentATK < 153) {
      setOpATKColor("yellow");
    } else if (opponentATK < 204) {
      setOpATKColor("lime");
    } else {
      setOpATKColor("cyan");
    }

    if (opponentDEF < 51) {
      setOpDEFColor("red");
    } else if (opponentDEF < 102) {
      setOpDEFColor("orange");
    } else if (opponentDEF < 153) {
      setOpDEFColor("yellow");
    } else if (opponentDEF < 204) {
      setOpDEFColor("lime");
    } else {
      setOpDEFColor("cyan");
    }

    if (opponentSPA < 51) {
      setOpSPAColor("red");
    } else if (opponentSPA < 102) {
      setOpSPAColor("orange");
    } else if (opponentSPA < 153) {
      setOpSPAColor("yellow");
    } else if (opponentSPA < 204) {
      setOpSPAColor("lime");
    } else {
      setOpSPAColor("cyan");
    }

    if (opponentSPD < 51) {
      setOpSPDColor("red");
    } else if (opponentSPD < 102) {
      setOpSPDColor("orange");
    } else if (opponentSPD < 153) {
      setOpSPDColor("yellow");
    } else if (opponentSPD < 204) {
      setOpSPDColor("lime");
    } else {
      setOpSPDColor("cyan");
    }

    if (opponentSPE < 51) {
      setOpSPEColor("red");
    } else if (opponentSPE < 102) {
      setOpSPEColor("orange");
    } else if (opponentSPE < 153) {
      setOpSPEColor("yellow");
    } else if (opponentSPE < 204) {
      setOpSPEColor("lime");
    } else {
      setOpSPEColor("cyan");
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

  //* General Functions
  //Cycling through Types
  function nextFirstType(event) {
    if (userFirstType < 17) {
      userFirstType = userFirstType + 1;
    } else {
      userFirstType = 0;
    }

    setUserTypes(
      <>
        <button
          onClick={nextFirstType}
          className="col-4 types"
          style={typeStyleList[userFirstType]}
        >
          {typeList[userFirstType]}
        </button>
        <button
          onClick={nextSecondType}
          className="col-4 types"
          style={typeStyleList[userSecondType]}
        >
          {typeList[userSecondType]}
        </button>
      </>
    );
  }

  function nextSecondType(event) {
    if (userSecondType < 18) {
      userSecondType = userSecondType + 1;
    } else {
      userSecondType = 0;
    }

    setUserTypes(
      <>
        <button
          onClick={nextFirstType}
          className="col-4 types"
          style={typeStyleList[userFirstType]}
        >
          {typeList[userFirstType]}
        </button>
        <button
          onClick={nextSecondType}
          className="col-4 types"
          style={typeStyleList[userSecondType]}
        >
          {typeList[userSecondType]}
        </button>
      </>
    );
  }

  //* Randomization for User
  // Randomizing Types

  function randomizeUserType(event) {
    userFirstType = randomNumber(0, 17);
    userSecondType = randomNumber(0, 18);

    if (userFirstType == userSecondType) {
      userSecondType = 18;
    }

    setUserTypes(
      <>
        <button
          onClick={nextFirstType}
          className="col-4 types"
          style={typeStyleList[userFirstType]}
        >
          {typeList[userFirstType]}
        </button>
        <button
          onClick={nextSecondType}
          className="col-4 types"
          style={typeStyleList[userSecondType]}
        >
          {typeList[userSecondType]}
        </button>
      </>
    );
  }

  // Randomizing Ability
  function randomizeUserAbility() {
    let randomAbilityNumber = randomNumber(1, 307);

    fetch("https://pokeapi.co/api/v2/ability/" + randomAbilityNumber)
      .then((response) => response.json())
      .then(userAbilityData);
  }

  //Randomizing Stats
  function randomUserStats() {
    let randomStatNumber = randomNumber(1, 1025);

    fetch("https://pokeapi.co/api/v2/pokemon/" + randomStatNumber)
      .then((response) => response.json())
      .then(userStatData);
  }

  // All Together
  function randomizeUserPokemon(event) {
    randomizeUserType();
    randomizeUserAbility();
    randomUserStats();
    statBarColoring();
  }

  //* Randomization for Opponent
  // Randomizing Types

  function randomizeOpponentType(event) {
    let OpFirstType = randomNumber(0, 17);
    let OpSecondType = randomNumber(0, 18);

    if (OpFirstType == OpSecondType) {
      OpSecondType = 18;
    }

    setOpponentTypes(
      <>
        <button className="col-4 types" style={typeStyleList[OpFirstType]}>
          {typeList[OpFirstType]}
        </button>
        <button className="col-4 types" style={typeStyleList[OpSecondType]}>
          {typeList[OpSecondType]}
        </button>
      </>
    );
  }

  // Randomizing Ability
  function randomizeOpponentAbility() {
    let randomAbilityNumber = randomNumber(1, 307);

    fetch("https://pokeapi.co/api/v2/ability/" + randomAbilityNumber)
      .then((response) => response.json())
      .then(opponentAbilityData);
  }

  //Randomizing Stats
  function randomOpponentStats() {
    let randomStatNumber = randomNumber(1, 1025);

    fetch("https://pokeapi.co/api/v2/pokemon/" + randomStatNumber)
      .then((response) => response.json())
      .then(opponentStatData);
  }

  // All Together
  function randomizeOpPokemon(event) {
    randomizeOpponentType();
    randomizeOpponentAbility();
    randomOpponentStats();
    opponentBarColoring();
  }

  //* Fetching From API

  // Ability

  function userAbilityData(data) {
    if (data.effect_entries[1] == undefined) {
      console.log(data.effect_entries[0].effect);

      setUserAbility(data.effect_entries[0].effect);
    } else {
      console.log(data.effect_entries[1].effect);

      setUserAbility(data.effect_entries[1].effect);
    }
  }

  function opponentAbilityData(data) {
    if (data.effect_entries[1] == undefined) {
      console.log(data.effect_entries[0].effect);

      setOpponentAbility(data.effect_entries[0].effect);
    } else {
      console.log(data.effect_entries[1].effect);

      setOpponentAbility(data.effect_entries[1].effect);
    }
  }

  function fetchUserAbility(event) {
    event.preventDefault();
    const abilityInput = currentUserAbility.current.value;
    const fetchAbility = abilityInput.toLowerCase().replace(" ", "-");

    fetch("https://pokeapi.co/api/v2/ability/" + fetchAbility)
      .then((response) => response.json())
      .then(userAbilityData);

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

  function opponentStatData(data) {
    console.log(data.stats[0].base_stat + " HP");
    console.log(data.stats[1].base_stat + " ATK");
    console.log(data.stats[2].base_stat + " DEF");
    console.log(data.stats[3].base_stat + " SPA");
    console.log(data.stats[4].base_stat + " SPD");
    console.log(data.stats[5].base_stat + " SPE");

    setOpponentHP(data.stats[0].base_stat);
    setOpponentATK(data.stats[1].base_stat);
    setOpponentDEF(data.stats[2].base_stat);
    setOpponentSPA(data.stats[3].base_stat);
    setOpponentSPD(data.stats[4].base_stat);
    setOpponentSPE(data.stats[5].base_stat);
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

  //* Input Fields
  //Stat Sliders
  function HPSliderChange(event) {
    setHPSliderValue(parseInt(event.target.value));
  }

  function ATKSliderChange(event) {
    setATKSliderValue(parseInt(event.target.value));
  }

  function DEFSliderChange(event) {
    setDEFSliderValue(parseInt(event.target.value));
  }

  function SPASliderChange(event) {
    setSPASliderValue(parseInt(event.target.value));
  }

  function SPDSliderChange(event) {
    setSPDSliderValue(parseInt(event.target.value));
  }

  function SPESliderChange(event) {
    setSPESliderValue(parseInt(event.target.value));
  }

  //Send to Supabase

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
                {opponentTypes}
              </div>
              {/* Pokemix 2 Ability */}
              <div>
                <h5 className="pokemix-options adjust-pokemix-2">Ability:</h5>
                <p className="pokemix-options">{opponentAbility}</p>
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
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleHP}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentHP}/255</p>
                  </div>
                  {/* Physical Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleATK}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentATK}/255</p>
                  </div>
                  {/* Physical Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleDEF}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentDEF}/255</p>
                  </div>
                  {/* Special Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleSPA}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentSPA}/255</p>
                  </div>
                  {/* Special Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleSPD}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentSPD}/255</p>
                  </div>
                  {/* Speed */}
                  <div className="row">
                    <p className="col-2 stat-label">HP</p>
                    <div className="stat-bar col-5">
                      <div
                        className="stat-filled"
                        style={opponentStyleSPE}
                      ></div>
                    </div>
                    <p className="col-4 small stat-label">{opponentSPE}/255</p>
                  </div>
                </div>
              </div>
              <button
                onClick={randomizeOpPokemon}
                className="btn btn-dark m-1 bottom-button"
              >
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
        <form className="m-3">
          <div className="form-formatting">
            <label>
              User Name
              <br />
              <input type="text" name="username" id="username" />
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Custom Type
              <br />
              <input type="text" name="customType" id="customType" />
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Good Against:
              <br />
              <label className="fake-button" style={typeStyleNormal}>
                {" "}
                Normal
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="normalGood"
                  id="normalGood"
                />
              </label>
              <label className="fake-button" style={typeStyleGrass}>
                {" "}
                Grass
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="grassGood"
                  id="grassGood"
                />
              </label>
              <label className="fake-button" style={typeStyleFire}>
                {" "}
                Fire
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fireGood"
                  id="fireGood"
                />
              </label>
              <label className="fake-button" style={typeStyleWater}>
                {" "}
                Water
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="waterGood"
                  id="waterGood"
                />
              </label>
              <label className="fake-button" style={typeStyleBug}>
                {" "}
                Bug
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="bugGood"
                  id="bugGood"
                />
              </label>
              <label className="fake-button" style={typeStyleFlying}>
                {" "}
                Flying
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="flyingGood"
                  id="flyingGood"
                />
              </label>
              <label className="fake-button" style={typeStyleFighting}>
                {" "}
                Fighting
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fightingGood"
                  id="fightingGood"
                />
              </label>
              <label className="fake-button" style={typeStylePsychic}>
                {" "}
                Psychic
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="psychicGood"
                  id="psychicGood"
                />
              </label>
              <label className="fake-button" style={typeStyleDark}>
                {" "}
                Dark
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="darkGood"
                  id="darkGood"
                />
              </label>
              <label className="fake-button" style={typeStyleSteel}>
                {" "}
                Steel
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="steelGood"
                  id="steelGood"
                />
              </label>
              <label className="fake-button" style={typeStyleRock}>
                {" "}
                Rock
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="rockGood"
                  id="rockGood"
                />
              </label>
              <label className="fake-button" style={typeStyleGround}>
                {" "}
                Ground
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="groundGood"
                  id="groundGood"
                />
              </label>
              <label className="fake-button" style={typeStyleElectric}>
                {" "}
                Electric
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="electricGood"
                  id="electricGood"
                />
              </label>
              <label className="fake-button" style={typeStylePoison}>
                {" "}
                Poison
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="poisonGood"
                  id="poisonGood"
                />
              </label>
              <label className="fake-button" style={typeStyleGhost}>
                {" "}
                Ghost
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="ghostGood"
                  id="ghostGood"
                />
              </label>
              <label className="fake-button" style={typeStyleIce}>
                {" "}
                Ice
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="iceGood"
                  id="iceGood"
                />
              </label>
              <label className="fake-button" style={typeStyleDragon}>
                {" "}
                Dragon
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="dragonGood"
                  id="dragonGood"
                />
              </label>
              <label className="fake-button" style={typeStyleFairy}>
                {" "}
                Fairy
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fairyGood"
                  id="fairyGood"
                />
              </label>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Bad Against:
              <br />
              <label className="fake-button" style={typeStyleNormal}>
                {" "}
                Normal
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="normalBad"
                  id="normalBad"
                />
              </label>
              <label className="fake-button" style={typeStyleGrass}>
                {" "}
                Grass
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="grassBad"
                  id="grassBad"
                />
              </label>
              <label className="fake-button" style={typeStyleFire}>
                {" "}
                Fire
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fireBad"
                  id="fireBad"
                />
              </label>
              <label className="fake-button" style={typeStyleWater}>
                {" "}
                Water
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="waterBad"
                  id="waterBad"
                />
              </label>
              <label className="fake-button" style={typeStyleBug}>
                {" "}
                Bug
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="bugBad"
                  id="bugBad"
                />
              </label>
              <label className="fake-button" style={typeStyleFlying}>
                {" "}
                Flying
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="flyingBad"
                  id="flyingBad"
                />
              </label>
              <label className="fake-button" style={typeStyleFighting}>
                {" "}
                Fighting
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fightingBad"
                  id="fightingBad"
                />
              </label>
              <label className="fake-button" style={typeStylePsychic}>
                {" "}
                Psychic
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="psychicBad"
                  id="psychicBad"
                />
              </label>
              <label className="fake-button" style={typeStyleDark}>
                {" "}
                Dark
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="darkBad"
                  id="darkBad"
                />
              </label>
              <label className="fake-button" style={typeStyleSteel}>
                {" "}
                Steel
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="steelBad"
                  id="steelBad"
                />
              </label>
              <label className="fake-button" style={typeStyleRock}>
                {" "}
                Rock
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="rockBad"
                  id="rockBad"
                />
              </label>
              <label className="fake-button" style={typeStyleGround}>
                {" "}
                Ground
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="groundBad"
                  id="groundBad"
                />
              </label>
              <label className="fake-button" style={typeStyleElectric}>
                {" "}
                Electric
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="electricBad"
                  id="electricBad"
                />
              </label>
              <label className="fake-button" style={typeStylePoison}>
                {" "}
                Poison
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="poisonBad"
                  id="poisonBad"
                />
              </label>
              <label className="fake-button" style={typeStyleGhost}>
                {" "}
                Ghost
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="ghostBad"
                  id="ghostBad"
                />
              </label>
              <label className="fake-button" style={typeStyleIce}>
                {" "}
                Ice
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="iceBad"
                  id="iceBad"
                />
              </label>
              <label className="fake-button" style={typeStyleDragon}>
                {" "}
                Dragon
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="dragonBad"
                  id="dragonBad"
                />
              </label>
              <label className="fake-button" style={typeStyleFairy}>
                {" "}
                Fairy
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fairyBad"
                  id="fairyBad"
                />
              </label>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Custom Ability Name
              <br />
              <input type="text" id="customAbilityName" name="customAbilityName"/>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Custom Ability Description
              <br />
              <textarea className="text-area-big" type="text" name="customAbilityDescription" id="customAbilityDescription"/>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              <div className="row">
                <h6 className="col-2 input-label">HP</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={HPSliderChange}
                />
                <p className="col-2">{HPSliderValue}/255</p>
              </div>
              <div className="row">
                <h6 className="col-2">ATK</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={ATKSliderChange}
                />
                <p className="col-2">{ATKSliderValue}/255</p>
              </div>
              <div className="row">
                <h6 className="col-2">DEF</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={DEFSliderChange}
                />
                <p className="col-2">{DEFSliderValue}/255</p>
              </div>
              <div className="row">
                <h6 className="col-2">SPA</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={SPASliderChange}
                />
                <p className="col-2">{SPASliderValue}/255</p>
              </div>
              <div className="row">
                <h6 className="col-2">SPD</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={SPDSliderChange}
                />
                <p className="col-2">{SPDSliderValue}/255</p>
              </div>
              <div className="row">
                <h6 className="col-2">SPE</h6>
                <input
                  className="slider col-8"
                  min="1"
                  max="255"
                  type="range"
                  onChange={SPESliderChange}
                />
                <p className="col-2">{SPESliderValue}/255</p>
              </div>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Creation Name
              <br />
              <input type="text" id="creationName" name="creationName"/>
            </label>
          </div>
        </form>
        <button className="btn btn-success mx-auto d-grid" type="submit">
          Click Here To Add Custom Ideas!
        </button>
      </section>
    </>
  );
}

export default Home;
