import { useState} from "react";
import { supabase } from "../utils/supabase";

function CustomEntry() {
  //* Setting Variables
  //Inputs
  const [HPSliderValue, setHPSliderValue] = useState(130);
  const [ATKSliderValue, setATKSliderValue] = useState(130);
  const [DEFSliderValue, setDEFSliderValue] = useState(130);
  const [SPASliderValue, setSPASliderValue] = useState(130);
  const [SPDSliderValue, setSPDSliderValue] = useState(130);
  const [SPESliderValue, setSPESliderValue] = useState(130);

  //Checkbox Lists
  const [checkedGood, setCheckedGood] = useState([]);

  const [checkedBad, setCheckedBad] = useState([]);

  //Type Description
  let goodAgainst = "Good Against: ";
  let badAgainst = "Bad Against: ";

  //* Styles
  // Styles for specific types
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

  // Style For Disabled Buttons
  const [disabledTypes, setDisabledTypes] = useState({
    NormalGood: false,
    WaterGood: false,
    GrassGood: false,
    FireGood: false,
    FlyingGood: false,
    FightingGood: false,
    PsychicGood: false,
    DarkGood: false,
    DragonGood: false,
    FairyGood: false,
    PoisonGood: false,
    BugGood: false,
    IceGood: false,
    SteelGood: false,
    RockGood: false,
    GroundGood: false,
    ElectricGood: false,
    GhostGood: false,
    NormalBad: false,
    WaterBad: false,
    GrassBad: false,
    FireBad: false,
    FlyingBad: false,
    FightingBad: false,
    PsychicBad: false,
    DarkBad: false,
    DragonBad: false,
    FairyBad: false,
    PoisonBad: false,
    BugBad: false,
    IceBad: false,
    SteelBad: false,
    RockBad: false,
    GroundBad: false,
    ElectricBad: false,
    GhostBad: false,
  });

  const disabledButton = {
    opacity: "70%",
  };

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

  //Checkbox Fixing
  function typeGoodCheckboxChange(event) {
    let currentCheckGood;

    if (event.target.checked === true) {
      currentCheckGood = event.target.value;
      setCheckedGood((prev) => [...prev, currentCheckGood]);
    }

    if (event.target.checked === false) {
      currentCheckGood = event.target.value;
      setCheckedGood((prev) => prev.filter((item) => item != currentCheckGood));
    }
    console.log(checkedGood);

    setDisabledTypes((prev) => ({
      ...prev,
      [currentCheckGood + "Good"]: !prev[currentCheckGood + "Good"],
    }));
  }

  function typeBadCheckboxChange(event) {
    let currentCheckBad;

    if (event.target.checked === true) {
      currentCheckBad = event.target.value;
      setCheckedBad((prev) => [...prev, currentCheckBad]);
    }

    if (event.target.checked === false) {
      currentCheckBad = event.target.value;
      setCheckedBad((prev) => prev.filter((item) => item != currentCheckBad));
    }
    console.log(checkedBad);

    setDisabledTypes((prev) => ({
      ...prev,
      [currentCheckBad + "Bad"]: !prev[currentCheckBad + "Bad"],
    }));
  }

  function getStyle(type, baseStyle) {
    return {
      ...baseStyle,
      ...(disabledTypes[type] ? disabledButton : {}),
    };
  }

  function makeTypeDescription() {
    goodAgainst = "Good Against: ";
    badAgainst = "Bad Against: ";

    for (let i = 0; i < checkedGood.length; i++) {
      goodAgainst = goodAgainst + checkedGood[i] + " ";
    }

    for (let i = 0; i < checkedBad.length; i++) {
      badAgainst = badAgainst + checkedBad[i] + " ";
    }

    console.log(goodAgainst);
    console.log(badAgainst);

    setCheckedGood([]);
    setCheckedBad([]);
    setDisabledTypes((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, false]))
    );
  }

  //Send to Supabase
  async function handleAddCustomPokemix(event) {
    event.preventDefault();
    const userName = event.target.elements.username.value;
    const customType = event.target.elements.customType.value;
    const customAbilityName = event.target.elements.customAbilityName.value;
    const customAbilityDescription =
      event.target.elements.customAbilityDescription.value;
    const ideaName = event.target.elements.creationName.value;

    makeTypeDescription();

    const newPokemix = {
      username: userName,
      type: customType,
      type_description: goodAgainst + "\n" + badAgainst,
      ability_name: customAbilityName,
      ability_description: customAbilityDescription,
      bst:
        HPSliderValue +
        ATKSliderValue +
        DEFSliderValue +
        SPASliderValue +
        SPDSliderValue +
        SPESliderValue,
      speed: SPESliderValue,
      physical_attack: ATKSliderValue,
      physical_defense: DEFSliderValue,
      special_attack: SPASliderValue,
      special_defense: SPDSliderValue,
      hp: HPSliderValue,
      idea_name: ideaName,
    };

    console.log(newPokemix);

    await supabase.from("Pokemix Entries").insert(newPokemix);

    event.target.elements.username.value = "";
    event.target.elements.customType.value = "";
    event.target.elements.customAbilityName.value = "";
    event.target.elements.customAbilityDescription.value = "";
    event.target.elements.creationName.value = "";
  }

  return (
    <>
      {/* User Info Collection */}
      <section className="container background-submit">
        <h1 className="text-center">Make Your Own Here!</h1>
        <p className="text-center">
          Here you can submit your own ideas! Just click the button below and
          the form should pop up, fill it out then BAM! Your idea will be added
          and in the pool for selection if people turn on custom ideas!
        </p>
        <form onSubmit={handleAddCustomPokemix} className="background-submit">
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
              <label
                className="fake-button"
                style={getStyle("NormalGood", typeStyleNormal)}
              >
                {" "}
                Normal
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Normal"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GrassGood", typeStyleGrass)}
              >
                {" "}
                Grass
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Grass"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FireGood", typeStyleFire)}
              >
                {" "}
                Fire
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Fire"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("WaterGood", typeStyleWater)}
              >
                {" "}
                Water
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Water"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("BugGood", typeStyleBug)}
              >
                {" "}
                Bug
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Bug"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FlyingGood", typeStyleFlying)}
              >
                {" "}
                Flying
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Flying"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FightingGood", typeStyleFighting)}
              >
                {" "}
                Fighting
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Fighting"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("PsychicGood", typeStylePsychic)}
              >
                {" "}
                Psychic
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Psychic"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("DarkGood", typeStyleDark)}
              >
                {" "}
                Dark
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Dark"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("SteelGood", typeStyleSteel)}
              >
                {" "}
                Steel
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Steel"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("RockGood", typeStyleRock)}
              >
                {" "}
                Rock
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Rock"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GroundGood", typeStyleGround)}
              >
                {" "}
                Ground
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Ground"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("ElectricGood", typeStyleElectric)}
              >
                {" "}
                Electric
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Electric"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("PoisonGood", typeStylePoison)}
              >
                {" "}
                Poison
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Poison"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GhostGood", typeStyleGhost)}
              >
                {" "}
                Ghost
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Ghost"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("IceGood", typeStyleIce)}
              >
                {" "}
                Ice
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Ice"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("DragonGood", typeStyleDragon)}
              >
                {" "}
                Dragon
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Dragon"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FairyGood", typeStyleFairy)}
              >
                {" "}
                Fairy
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="good"
                  id="good"
                  value="Fairy"
                  onChange={typeGoodCheckboxChange}
                />
              </label>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Bad Against:
              <br />
              <label
                className="fake-button"
                style={getStyle("NormalBad", typeStyleNormal)}
              >
                {" "}
                Normal
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="normalBad"
                  id="normalBad"
                  value="Normal"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GrassBad", typeStyleGrass)}
              >
                {" "}
                Grass
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="grassBad"
                  id="grassBad"
                  value="Grass"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FireBad", typeStyleFire)}
              >
                {" "}
                Fire
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fireBad"
                  id="fireBad"
                  value="Fire"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("WaterBad", typeStyleWater)}
              >
                {" "}
                Water
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="waterBad"
                  id="waterBad"
                  value="Water"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("BugBad", typeStyleBug)}
              >
                {" "}
                Bug
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="bugBad"
                  id="bugBad"
                  value="Bug"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FlyingBad", typeStyleFlying)}
              >
                {" "}
                Flying
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="flyingBad"
                  id="flyingBad"
                  value="Flying"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FightingBad", typeStyleFighting)}
              >
                {" "}
                Fighting
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fightingBad"
                  id="fightingBad"
                  value="Fighting"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("PsychicBad", typeStylePsychic)}
              >
                {" "}
                Psychic
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="psychicBad"
                  id="psychicBad"
                  value="Psychic"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("DarkBad", typeStyleDark)}
              >
                {" "}
                Dark
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="darkBad"
                  id="darkBad"
                  value="Dark"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("SteelBad", typeStyleSteel)}
              >
                {" "}
                Steel
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="steelBad"
                  id="steelBad"
                  value="Steel"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("RockBad", typeStyleRock)}
              >
                {" "}
                Rock
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="rockBad"
                  id="rockBad"
                  value="Rock"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GroundBad", typeStyleGround)}
              >
                {" "}
                Ground
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="groundBad"
                  id="groundBad"
                  value="Ground"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("ElectricBad", typeStyleElectric)}
              >
                {" "}
                Electric
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="electricBad"
                  id="electricBad"
                  value="Electric"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("PoisonBad", typeStylePoison)}
              >
                {" "}
                Poison
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="poisonBad"
                  id="poisonBad"
                  value="Poison"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("GhostBad", typeStyleGhost)}
              >
                {" "}
                Ghost
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="ghostBad"
                  id="ghostBad"
                  value="Ghost"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("IceBad", typeStyleIce)}
              >
                {" "}
                Ice
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="iceBad"
                  id="iceBad"
                  value="Ice"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("DragonBad", typeStyleDragon)}
              >
                {" "}
                Dragon
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="dragonBad"
                  id="dragonBad"
                  value="Dragon"
                  onChange={typeBadCheckboxChange}
                />
              </label>
              <label
                className="fake-button"
                style={getStyle("FairyBad", typeStyleFairy)}
              >
                {" "}
                Fairy
                <input
                  className="check-to-button"
                  type="checkbox"
                  name="fairyBad"
                  id="fairyBad"
                  value="Fairy"
                  onChange={typeBadCheckboxChange}
                />
              </label>
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Custom Ability Name
              <br />
              <input
                type="text"
                id="customAbilityName"
                name="customAbilityName"
              />
            </label>
          </div>
          <div className="form-formatting">
            <label>
              Custom Ability Description
              <br />
              <textarea
                className="text-area-big"
                type="text"
                name="customAbilityDescription"
                id="customAbilityDescription"
              />
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
              <input type="text" id="creationName" name="creationName" />
            </label>
          </div>
          <br />
          <button className="btn btn-success mx-auto d-grid" type="submit">
            Click Here To Add Custom Ideas!
          </button>
        </form>
      </section>
    </>
  );
}

export default CustomEntry;
