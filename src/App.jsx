
import { useState } from "react";

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [num3, setnum3] = useState(0);
  const [Add, setAdd] = useState(0);
  const [total, setTotal] = useState(0);
  const [timetype, settimetype] = useState("year");

  const calsum = (e) => {
    e.preventDefault();

    let P = parseFloat(num1);
    let R = parseFloat(num2);
    let T = parseFloat(num3);

    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R <= 0 || T <= 0) {
      alert("Please enter valid numbers");
      return;
    }


    if (timetype === "day") {
      T = T / 365;
    } else if (timetype === "month") {
      T = T / 12;
    }

    let SI = (P * R * T) / 100;
    setAdd(SI.toFixed(2));
    let total = SI+P;
    setTotal(total.toFixed(2)) ;
  };

  const reset = () => {
    setnum1(0);
    setnum2(0);
    setnum3(0);
    setAdd(0);
    setTotal(0);
    settimetype("year");
  };

  return (
    <div className="grid place-content-center mt-7 bg-black">
      <div className="w-2xl bg-white border-2 border-amber-400 rounded-2xl grid gap-2 m-7 p-5">
        <h1 className="text-4xl font-bold">Simple Interest Calculator</h1>
        <p className="text-[15px]">Calculate your simple interest easily</p>

        <div className="bg-green-300 h-[100px] w-[500px] grid place-content-center gap-2">
          
        <p className="text-[13px]">Total Simple Interest 
        <span className="text-1xl font-bold">  = {num1}</span>
        </p> 

        <p className="text-[13px]">Total Simple Interest 
        <span className="text-1xl font-bold">  = {Add}</span>
        </p>
        <p className="text-[13px]">Total Value 
        <span className="text-1xl font-bold"> = {total}</span>
        </p>
        
         
         
        </div>

        <form onSubmit={calsum}>
          <div className="grid place-content-center gap-7">
            <input
              className="h-11 w-[300px] border-2 border-b-black rounded-[5px] pl-5"
              type="number"
              placeholder="Principal amount.."
              value={num1 || ""}
              onChange={(e) => setnum1(e.target.value)}
            />

            <input
              className="h-11 w-[300px] border-2 border-b-black rounded-[5px] pl-5"
              type="number"
              placeholder="Rate Of Interest.."
              value={num2 || ""}
              onChange={(e) => setnum2(e.target.value)}
            />

            <select
              className="h-11 w-[300px] border-2 border-b-black rounded-[5px] pl-5"
              value={timetype}
              onChange={(e) => settimetype(e.target.value)}
            >
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>

            <input
              className="h-11 w-[300px] border-2 border-b-black rounded-[5px] pl-5"
              type="number"
              placeholder="Time period.."
              value={num3 || ""}
              onChange={(e) => setnum3(e.target.value)}
            />

            <div className="mb-7 flex gap-4">
              <button
                className="h-[40px] w-[150px] bg-green-400 text-white rounded-[5px] cursor-pointer"
                type="submit"
              >
                Calculate
              </button>
              <button
                className="h-[40px] w-[150px] bg-gray-400 text-white rounded-[5px] cursor-pointer"
                onClick={reset}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
