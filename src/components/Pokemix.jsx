import { useState, useRef } from "react";
import { supabase } from "../utils/supabase";

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

function Pokemix() {
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

  const typeList = [
    "Normal",
    "Grass",
    "Fire",
    "Water",
    "Bug",
    "Fighting",
    "Flying",
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
  let userHPColor = "white";
  let userATKColor = "white";
  let userDEFColor = "white";
  let userSPAColor = "white";
  let userSPDColor = "white";
  let userSPEColor = "white";

  let opHPColor = "white";
  let opATKColor = "white";
  let opDEFColor = "white";
  let opSPAColor = "white";
  let opSPDColor = "white";
  let opSPEColor = "white";

  //Supabase
  const [customPokemix, setCustomPokemix] = useState([]);

  //* Styles
  // Styles for specific types
  const typeStyleCustom = {
    backgroundColor: "white",
    color: "black",
  };

  const typeStyleNormal = {
    backgroundColor: "#A8A77A",
    borderColor: "black",
    color: "white",
  };

  const typeStyleGrass = {
    backgroundColor: "#7AC74C",
    borderColor: "black",
    color: "white",
  };

  const typeStyleFire = {
    backgroundColor: "#EE8130",
    borderColor: "black",
    color: "white",
  };

  const typeStyleWater = {
    backgroundColor: "#6390F0",
    borderColor: "black",
    color: "white",
  };

  const typeStyleBug = {
    backgroundColor: "#A6B91A",
    borderColor: "black",
    color: "white",
  };

  const typeStyleFlying = {
    backgroundColor: "#A98FF3",
    borderColor: "black",
    color: "white",
  };

  const typeStyleFighting = {
    backgroundColor: "#C22E28",
    borderColor: "black",
    color: "white",
  };

  const typeStylePsychic = {
    backgroundColor: "#F95587",
    borderColor: "black",
    color: "white",
  };

  const typeStyleDark = {
    backgroundColor: "#705746",
    borderColor: "black",
    color: "white",
  };

  const typeStyleDragon = {
    backgroundColor: "#6F35FC",
    borderColor: "black",
    color: "white",
  };

  const typeStyleSteel = {
    backgroundColor: "#B7B7CE",
    borderColor: "black",
    color: "white",
  };

  const typeStyleRock = {
    backgroundColor: "#B6A136",
    borderColor: "black",
    color: "white",
  };

  const typeStyleGround = {
    backgroundColor: "#E2BF65",
    borderColor: "black",
    color: "white",
  };

  const typeStyleFairy = {
    backgroundColor: "#D685AD",
    borderColor: "black",
    color: "white",
  };

  const typeStyleElectric = {
    backgroundColor: "#F7D02C",
    borderColor: "black",
    color: "white",
  };

  const typeStylePoison = {
    backgroundColor: "#A33EA1",
    borderColor: "black",
    color: "white",
  };

  const typeStyleGhost = {
    backgroundColor: "#735797",
    borderColor: "black",
    color: "white",
  };

  const typeStyleIce = {
    backgroundColor: "#96D9D6",
    borderColor: "black",
    color: "white",
  };

  const typeStyleNone = {
    backgroundColor: "white",
    borderColor: "white",
  };

  // Styles for each stat
  statBarColoring();
  opponentBarColoring();

  const statStyleHP = {
    backgroundColor: userHPColor,
    width: calculatePercentage(userHP, maxStatTotal) + "%",
  };

  console.log(statStyleHP);

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
  function statBarColoring() {
    if (userHP < 51) {
      userHPColor = "red";
    } else if (userHP < 102) {
      userHPColor = "orange";
    } else if (userHP < 153) {
      userHPColor = "yellow";
    } else if (userHP < 204) {
      userHPColor = "lime";
    } else {
      userHPColor = "cyan";
    }

    if (userHP < 51) {
      userHPColor = "red";
    } else if (userHP < 102) {
      userHPColor = "orange";
    } else if (userHP < 153) {
      userHPColor = "yellow";
    } else if (userHP < 204) {
      userHPColor = "lime";
    } else {
      userHPColor = "cyan";
    }

    if (userATK < 51) {
      userATKColor = "red";
    } else if (userATK < 102) {
      userATKColor = "orange";
    } else if (userATK < 153) {
      userATKColor = "yellow";
    } else if (userATK < 204) {
      userATKColor = "lime";
    } else {
      userATKColor = "cyan";
    }

    if (userDEF < 51) {
      userDEFColor = "red";
    } else if (userDEF < 102) {
      userDEFColor = "orange";
    } else if (userDEF < 153) {
      userDEFColor = "yellow";
    } else if (userDEF < 204) {
      userDEFColor = "lime";
    } else {
      userDEFColor = "cyan";
    }

    if (userSPA < 51) {
      userSPAColor = "red";
    } else if (userSPA < 102) {
      userSPAColor = "orange";
    } else if (userSPA < 153) {
      userSPAColor = "yellow";
    } else if (userSPA < 204) {
      userSPAColor = "lime";
    } else {
      userSPAColor = "cyan";
    }

    if (userSPD < 51) {
      userSPDColor = "red";
    } else if (userSPD < 102) {
      userSPDColor = "orange";
    } else if (userSPD < 153) {
      userSPDColor = "yellow";
    } else if (userSPD < 204) {
      userSPDColor = "lime";
    } else {
      userSPDColor = "cyan";
    }

    if (userSPE < 51) {
      userSPEColor = "red";
    } else if (userSPE < 102) {
      userSPEColor = "orange";
    } else if (userSPE < 153) {
      userSPEColor = "yellow";
    } else if (userSPE < 204) {
      userSPEColor = "lime";
    } else {
      userSPEColor = "cyan";
    }
  }

  function opponentBarColoring() {
    if (opponentHP < 51) {
      opHPColor = "red";
    } else if (opponentHP < 102) {
      opHPColor = "orange";
    } else if (opponentHP < 153) {
      opHPColor = "yellow";
    } else if (opponentHP < 204) {
      opHPColor = "lime";
    } else {
      opHPColor = "cyan";
    }

    if (opponentATK < 51) {
      opATKColor = "red";
    } else if (opponentATK < 102) {
      opATKColor = "orange";
    } else if (opponentATK < 153) {
      opATKColor = "yellow";
    } else if (opponentATK < 204) {
      opATKColor = "lime";
    } else {
      opATKColor = "cyan";
    }

    if (opponentDEF < 51) {
      opDEFColor = "red";
    } else if (opponentDEF < 102) {
      opDEFColor = "orange";
    } else if (opponentDEF < 153) {
      opDEFColor = "yellow";
    } else if (opponentDEF < 204) {
      opDEFColor = "lime";
    } else {
      opDEFColor = "cyan";
    }

    if (opponentSPA < 51) {
      opSPAColor = "red";
    } else if (opponentSPA < 102) {
      opSPAColor = "orange";
    } else if (opponentSPA < 153) {
      opSPAColor = "yellow";
    } else if (opponentSPA < 204) {
      opSPAColor = "lime";
    } else {
      opSPAColor = "cyan";
    }

    if (opponentSPD < 51) {
      opSPDColor = "red";
    } else if (opponentSPD < 102) {
      opSPDColor = "orange";
    } else if (opponentSPD < 153) {
      opSPDColor = "yellow";
    } else if (opponentSPD < 204) {
      opSPDColor = "lime";
    } else {
      opSPDColor = "cyan";
    }

    if (opponentSPE < 51) {
      opSPEColor = "red";
    } else if (opponentSPE < 102) {
      opSPEColor = "orange";
    } else if (opponentSPE < 153) {
      opSPEColor = "yellow";
    } else if (opponentSPE < 204) {
      opSPEColor = "lime";
    } else {
      opSPEColor = "cyan";
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

    if (randomAbilityNumber === 266 || randomAbilityNumber === 267) {
      randomAbilityNumber = randomNumber(1, 307);
    }

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
  }

  //Randomizing From Supabase
  async function fetchFromSupabase() {
    const result = await supabase.from("Pokemix Entries").select();
    const data = result.data;

    setCustomPokemix(data);
  }

  function randomCustomPokemon(event) {
    fetchFromSupabase();

    let randomPokemix = randomNumber(0, customPokemix.length);

    userFirstType = customPokemix[randomPokemix].type;
    userSecondType = 18;

    setUserTypes(
      <>
        <button
          onClick={nextFirstType}
          className="col-4 types"
          style={typeStyleCustom}
        >
          {userFirstType}
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

    setUserAbility(customPokemix[randomPokemix].ability_description);

    setUserHP(customPokemix[randomPokemix].hp);
    setUserATK(customPokemix[randomPokemix].physical_attack);
    setUserDEF(customPokemix[randomPokemix].physical_defense);
    setUserSPA(customPokemix[randomPokemix].special_attack);
    setUserSPD(customPokemix[randomPokemix].special_defense);
    setUserSPE(customPokemix[randomPokemix].speed);
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
    console.log(data.stats[0].base_stat);

    setUserHP(data.stats[0].base_stat);
    setUserATK(data.stats[1].base_stat);
    setUserDEF(data.stats[2].base_stat);
    setUserSPA(data.stats[3].base_stat);
    setUserSPD(data.stats[4].base_stat);
    setUserSPE(data.stats[5].base_stat);

    console.log(userHP);
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
  }

  return (
    <>
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
                    <p className="col-2 stat-label">ATK</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleATK}></div>
                    </div>
                    <p className="col-4 small stat-label">{userATK}/255</p>
                  </div>
                  {/* Physical Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">DEF</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleDEF}></div>
                    </div>
                    <p className="col-4 small stat-label">{userDEF}/255</p>
                  </div>
                  {/* Special Attack */}
                  <div className="row">
                    <p className="col-2 stat-label">SPA</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleSPA}></div>
                    </div>
                    <p className="col-4 small stat-label">{userSPA}/255</p>
                  </div>
                  {/* Special Defense */}
                  <div className="row">
                    <p className="col-2 stat-label">SPD</p>
                    <div className="stat-bar col-5">
                      <div className="stat-filled" style={statStyleSPD}></div>
                    </div>
                    <p className="col-4 small stat-label">{userSPD}/255</p>
                  </div>
                  {/* Speed */}
                  <div className="row">
                    <p className="col-2 stat-label">SPE</p>
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
              <button
                className="btn btn-secondary bottom-button"
                onClick={randomCustomPokemon}
              >
                Random Custom Entry!
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
                    <p className="col-2 stat-label">ATK</p>
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
                    <p className="col-2 stat-label">DEF</p>
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
                    <p className="col-2 stat-label">SPA</p>
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
                    <p className="col-2 stat-label">SPD</p>
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
                    <p className="col-2 stat-label">SPE</p>
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
    </>
  );
}

export default Pokemix;
