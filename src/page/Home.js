import { Link } from "react-router-dom";
import Huh from "../context/context";
import { useContext } from "react";
const Home = function () {
  let { item, p, Budget } = useContext(Huh);
  console.log(item, p);
  return (
    <div className="flex flex-col shadow rounded p-5 sm:w-1/2 w-full mx-auto">
      <h1 className="font-pop font-semibold text-center text-lg">
        Welcome User!
      </h1>
      <p className="font-pop text-sm text-center w-full">
        Budget Planner💰💰💰 is a simple online software that keep track of your
        expenses and regulate your spending habit
      </p>
      <div className="shadow rounded w-full p-3 my-5">
        <div className="flex flex-col items-start w-full">
          <label className="font-pop font-semibold text-left">
            Enter your budget
          </label>
          <input
            type={"text"}
            id="budget"
            placeholder="eg $1000"
            onBlur={() => Budget(document.getElementById("budget"))}
            className="font-pop font-semibold p-2 rounded-sm shadow outline-none border-none block w-full bg-slate-50"
          />
        </div>
        <Link to={"/UI"}>
          <button
            type={"button"}
            id="btn"
            className="bg-black text-white font-pop font-semibold block w-full p-2 text-sm mt-3 rounded-sm"
          >
            Done
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
