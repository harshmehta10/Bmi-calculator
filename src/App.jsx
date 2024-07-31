import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(100);
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const bmiValue = (weight / (height * height)) * 10000;
    setBmi(bmiValue.toFixed(2));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30 && bmi <= 34.9) return "Obesity Class I (Moderate)";
    if (bmi >= 35 && bmi <= 39.9) return "Obesity Class II (Severe)";
    if (bmi >= 40) return "Obesity Class III (Very severe or morbidly obese)";
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="m-4 p-2 border-2 border-black-300">BMI CALCULATOR</h1>
      <div className="w-64">
        <label htmlFor="">Weight kg</label>
        <input
          type="range"
          min="0"
          max="200"
          value={weight}
          placeholder="Enter your weight"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="mt-2 mb-2 text-center text-xl">{weight}</div>
      </div>
      <div className="w-64 ">
        <label>
          Height in cm
          <input
            type="range"
            min="100"
            max="300"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            placeholder="Enter your height"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </label>
      </div>
      <div className="mt-2 text-center text-xl">{height}</div>
      <div>
        <button
          className="m-2 border rounded-md bg-gray-400 p-2 border-radius-2"
          onClick={calculate}
        >
          Calculate
        </button>
        {bmi && (
          <div className="mt-4 text-center text-xl">
            <h2>Result: {bmi}</h2>
            <h3>Category: {getBMICategory(bmi)}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
