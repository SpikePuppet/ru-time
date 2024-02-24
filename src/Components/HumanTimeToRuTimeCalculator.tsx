import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { humanYearsPerDayThatRuExperiences } from "../utils/constants";
import React from "react";

interface Props {
  ruYears: number;
  setRuYears: React.Dispatch<React.SetStateAction<number>>;
  setRuMonths: React.Dispatch<React.SetStateAction<number>>;
  setRuWeeks: React.Dispatch<React.SetStateAction<number>>;
  setRuDays: React.Dispatch<React.SetStateAction<number>>;
  setRuHours: React.Dispatch<React.SetStateAction<number>>;
  setRuMinutes: React.Dispatch<React.SetStateAction<number>>;
  setRuSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const HumanTimeToRuTimeCalculator: FunctionComponent<Props> = (props) => {
  const [humanDays, setHumanDays] = useState(0);
  const [measurement, setMeasurement] = useState("Days");
  const options = ["Days", "Hours", "Minutes", "Seconds"];
  const {
    ruYears,
    setRuDays,
    setRuHours,
    setRuMinutes,
    setRuMonths,
    setRuSeconds,
    setRuWeeks,
    setRuYears,
  } = props;

  const convertHumanTimeToRuTime = useCallback(
    (divisor: number): void => {
      setRuYears((humanDays * humanYearsPerDayThatRuExperiences) / divisor);
      // Average days in a month is 30.44
      setRuMonths((ruYears * 12) / divisor);
      // Seven days in a week
      setRuWeeks((ruYears * 52) / divisor);
      setRuDays((ruYears * 365) / divisor);
      setRuHours((ruYears * 8760) / divisor);
      setRuMinutes((ruYears * 525600) / divisor);
      setRuSeconds((ruYears * 3153600) / divisor);
    },
    [
      humanDays,
      ruYears,
      setRuDays,
      setRuHours,
      setRuMinutes,
      setRuMonths,
      setRuSeconds,
      setRuWeeks,
      setRuYears,
    ],
  );

  useEffect(() => {
    switch (measurement) {
      case "Days":
        convertHumanTimeToRuTime(1);
        break;
      case "Hours":
        convertHumanTimeToRuTime(24);
        break;
      case "Minutes":
        convertHumanTimeToRuTime(1440);
        break;
      case "Seconds":
        convertHumanTimeToRuTime(86400);
        break;
    }
  }, [convertHumanTimeToRuTime, measurement]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <select
        name="measurement"
        id="measurement"
        value={measurement}
        onChange={(e) => setMeasurement(e.target.value)}
        style={{ width: "25%" }}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={humanDays}
        onChange={(e) => setHumanDays(Number(e.target.value))}
        style={{ width: "25%", marginTop: "20px" }}
      />
    </div>
  );
};

export default HumanTimeToRuTimeCalculator;
