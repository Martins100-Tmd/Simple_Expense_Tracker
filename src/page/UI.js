import View from "../component/View";
const Ui = function () {
  return (
    <div className="shadow flex flex-col items-center rounded sm:w-2/3 w-full mx-auto">
      <h1 className="font-pop font-semibold text-xl text-center w-full bg-black text-white p-5">
        Budget Planner
      </h1>
      <div className="flex flex-col items-cente w-full rounded p-5">
        <div className="items-start w-full my-7">
          <View />
        </div>
      </div>
    </div>
  );
};

export default Ui;
