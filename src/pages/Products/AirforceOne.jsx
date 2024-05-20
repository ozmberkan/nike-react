import React from "react";
import shoes from "~/db";

export default function AirforceOne() {
  return (
    <div className="w-full  h-[760px]  justify-center items-center px-12 flex gap-x-5">
      <div className="bg-zinc-100 border shadow-md rounded-xl w-full flex justify-center items-center h-[550px]">
        <img
          src={shoes?.products?.allproducts?.shoe9.image}
          alt=""
          className="drop-shadow-2xl object-cover w-[800px]"
        />
      </div>
      <div className=" w-full p-6 bg-zinc-100 rounded-xl border shadow-md h-[550px] flex flex-col gap-y-4">
        <h1 className="font-bold text-3xl ">Airforce One</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          maxime, sit doloremque consequuntur, tempora delectus consectetur
          harum eius natus accusamus voluptates provident quidem, quaerat
          ducimus temporibus ut rem officiis sint incidunt quasi et distinctio
          expedita. Sit quos ad, culpa quia, voluptate, exercitationem soluta
          esse dolorem beatae repellat minima odio laborum sapiente possimus
          eius iusto cum numquam consequatur aperiam! Obcaecati esse omnis ex
          repellat reprehenderit saepe accusamus minus? Perferendis,
          consequatur. Iure repellendus dolor beatae vel nemo.
        </p>
  
      </div>
    </div>
  );
}
