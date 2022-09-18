import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 ">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2> LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            lacus dui. Quisque sollicitudin eu tellus non gravida. Vivamus id
            velit velit. Mauris laoreet tempus felis id aliquam. Donec rutrum,
            libero ut consequat laoreet, nibh enim accumsan tortor, quis commodo
            risus ante ut lectus. Vestibulum nec nibh quis risus eleifend semper
            eu quis elit. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Aenean ultrices euismod
            mauris, quis fermentum lacus varius a. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Donec laoreet leo et elit
            porttitor cursus
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py1 px-2"> Leading Service</h3>
              <p className="py1 px-2"> All-inclusive company for 20 years in a row</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py1 px-2"> Leading Service</h3>
              <p className="py1 px-2"> All-inclusive company for 20 years in a row</p>
            </div>
          </div>
        </div>
      </div>

      <div>

        <div className="border text-center ">
            <p> Get an additional 10% off </p>
            <p className="py-4"> 12 hrs left </p>
            <p className="bg-gray-800 text-gray-200 py-2"> Book now and save </p>
        </div>
        <form className="w-full " >
            <div className="flex flex-col my-2">
                <label > Destination</label>
                <select className="border rounded-md p-2"> 
                    <option value="">Grande Antigua</option>
                    <option value="">Key West</option>
                    <option value="">Maldives</option>
                    <option value="">Conzumel</option>
                </select>
            </div>
            <div className="flex flex-col my-4">
                <label htmlFor="">Check In</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="">Check out</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
            <button className="w-full my-4">Rates and availabilities</button>
        </form>
        
      </div>
    </div>
  );
};

export default Search;
