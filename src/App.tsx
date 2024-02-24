import { useState } from "react";
import "./App.css";
import HumanTimeToRuTimeCalculator from "./Components/HumanTimeToRuTimeCalculator";
import FoxDisplayCard from "./Components/FoxDisplayCard";
import React from "react";

function App() {
  const [ruYears, setRuYears] = useState(0);
  const [ruMonths, setRuMonths] = useState(0);
  const [ruWeeks, setRuWeeks] = useState(0);
  const [ruDays, setRuDays] = useState(0);
  const [ruHours, setRuHours] = useState(0);
  const [ruMinutes, setRuMinutes] = useState(0);
  const [ruSeconds, setRuSeconds] = useState(0);
  const [round, setRound] = useState(false);
  return (
    <>
      <FoxDisplayCard
        direction={
          ruYears > 0 ? "positive" : ruYears < 0 ? "negative" : "neutral"
        }
      />
      <h1>How many years does Ru experience per day?</h1>
      <HumanTimeToRuTimeCalculator
        ruYears={ruYears}
        setRuDays={setRuDays}
        setRuHours={setRuHours}
        setRuMinutes={setRuMinutes}
        setRuMonths={setRuMonths}
        setRuSeconds={setRuSeconds}
        setRuWeeks={setRuWeeks}
        setRuYears={setRuYears}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <h2>Thats {round ? "(rounded)" : ""} ...</h2>
          <p>{round ? Math.ceil(ruYears) : ruYears} Ru Years</p>
          <p>{round ? Math.ceil(ruMonths) : ruMonths} Ru Months</p>
          <p>{round ? Math.ceil(ruWeeks) : ruWeeks} Ru Weeks</p>
          <p>{round ? Math.ceil(ruDays) : ruDays} Ru Days</p>
          <p>{round ? Math.ceil(ruHours) : ruHours} Ru Hours</p>
          <p>{round ? Math.ceil(ruMinutes) : ruMinutes} Ru Minutes</p>
          <p>{round ? Math.ceil(ruSeconds) : ruSeconds} Ru Seconds</p>
        </div>
        <button
          style={{ width: "25%", borderColor: round ? "red" : "" }}
          onClick={() => setRound(!round)}
        >
          Round for Ru
        </button>
      </div>
    </>
  );
}

export default App;
