import { useState, useRef } from "react";
import { supabase } from "../utils/supabase";
import Header from "./Header";
import Pokemix from "./Pokemix";
import CustomEntry from "./CustomEntry";

function Home() {
  return (
    <>
      <Header />
      <Pokemix />
      <CustomEntry />
    </>
  );
}

export default Home;
