import { createContext, useState } from "react";

const Huh = createContext();

export function HuhProvider({ children }) {
  let [item, setitem] = useState([]);
  let [p, setp] = useState("");
  const Budget = function (mole) {
    let done = isNaN(parseInt(mole.value[0]))
      ? mole.value.substring(1, mole.length)
      : mole.value;
    setp(done);
    console.log(done);
  };
  const remove = (mole) => {
    let b = [];
    let temp =
      mole.parentElement.parentElement.children[0].children[0].innerHTML;
    item.forEach((stuff) => {
      if (temp !== stuff.text) {
        b.push(stuff);
      }
    });
    setitem(b);
  };
  const addToGlobal = function (text, price, t, p) {
    price = isNaN(parseInt(price[0]))
      ? price.substring(1, price.length)
      : price;
    setitem((item) => [...item, { text, price }]);
    t.value = "";
    p.value = "";
  };
  return (
    <Huh.Provider value={{ p, item, addToGlobal, Budget, remove }}>
      {children}
    </Huh.Provider>
  );
}

export default Huh;
