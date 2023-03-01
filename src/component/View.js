import { Link } from "react-router-dom";
import Huh from "../context/context";
import "./style.css";
import { useContext } from "react";
const View = function () {
  let { item, p, addToGlobal, remove } = useContext(Huh);
  console.log(item);
  const spent = function (mole) {
    let sum = 0,
      temp = "";
    if (mole.length === 0) return 0;
    if (mole.length === 1) return parseInt(mole[0].price);
    for (let i = 0; i < mole.length; i++) {
      temp = mole[i].price;
      console.log(temp);
      sum += parseInt(temp);
    }
    return sum;
  };
  const remains = item.length === 0 ? p : parseInt(p) - spent(item);
  let List = item.map((item, index) => {
    return (
      <div
        className="flex flex-row items-stretch w-full rounded p-3 justify-between shadow"
        id="j"
        key={index}
      >
        <div className="flex flex-row items-center shadow sm:w-1/3 justify-between p-3 w-4/5">
          <p className="font-pop font-semibold text-sm self-start">
            {item.text}
          </p>
          <p className="font-pop font-bold text-xs rounded-lg bg-black text-white p-1">
            ${item.price}
          </p>
        </div>
        <p className="text-base text-red-600 place-self-start">
          <i
            style={{ fontSize: "24px" }}
            className="fa cursor-pointer"
            onClick={(e) => remove(e.target)}
          >
            &#xf00d;
          </i>
        </p>
      </div>
    );
  });
  const Button =
    parseInt(p) === spent(item) || parseInt(p) < spent(item) ? (
      <button
        type={"button"}
        disabled={true}
        onClick={() =>
          addToGlobal(
            document.querySelector(".obj").value,
            document.querySelector(".price").value,
            document.querySelector(".obj"),
            document.querySelector(".price")
          )
        }
        className="bg-black text-orange-500 font-pop text-sm font-semibold p-2 cursor-pointer
              block w-full"
      >
        Budget limit has been reached!!
      </button>
    ) : (
      <button
        type={"button"}
        onClick={() =>
          addToGlobal(
            document.querySelector(".obj").value,
            document.querySelector(".price").value,
            document.querySelector(".obj"),
            document.querySelector(".price")
          )
        }
        className="bg-black text-white font-pop text-sm font-semibold p-2
              block w-full cursor-pointer"
      >
        Add
      </button>
    );
  return (
    <>
      <Link to={"/"}>
        <div className="self-start">
          <i
            style={{ fontSize: "24px" }}
            className="fa text-black text-lg cursor-pointer"
          >
            &#xf0a8;
          </i>
        </div>
      </Link>
      <div className="grid sm:grid-cols-3 gap-7 items-center w-full grid-cols-1">
        <div className="rounded bg-gray-100 p-3 font-pop font-semibold text-base uppercase">
          Budget: ${p}
        </div>
        <div className="rounded bg-green-100 p-3 font-pop font-semibold text-base uppercase">
          Remains: ${remains}
        </div>
        <div className="rounded bg-cyan-100 p-3 font-pop font-semibold text-base uppercase">
          Spent: ${spent(item)}
        </div>
      </div>
      <div className="flex flex-col items-center w-full my-5 shadow p-5 overflow-y-scroll h-52">
        <h1 className="font-pop font-semibold text-left self-start">
          Expenses
        </h1>
        <div className="flex flex-col items-center w-full gap-4">{List}</div>
      </div>
      <div className="flex flex-col items-center rounded shadow p-5">
        <h1 className="font-pop font-semibold text-left self-start">
          Add New Item
        </h1>
        <div className="p-3 flex sm:flex-row items-start flex-col gap-4 w-full">
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <label className="font-pop font-semibold text-sm text-left self-start">
              Item Name
            </label>
            <input className="p-2 rounded shadow font-pop font-semibold block w-full outline-none border-none text-sm obj"></input>
          </div>
          <div className="flex flex-col sm:items-center sm:w-1/2 w-full">
            <label className="font-pop font-semibold text-sm text-left self-start">
              Item Price
            </label>
            <input className="p-2 rounded shadow font-pop font-semibold block w-full outline-none border-none text-sm price"></input>
          </div>
        </div>
        {Button}
      </div>
    </>
  );
};

export default View;
