import React from 'react'
import Footer from '../components/Footer'

export default function Allproducts({ shoes }) {
    return (
        <div className='w-full'>
            <h1 className='font-black text-4xl mb-4 mt-12 text-center'>Tüm Airforce'lar</h1>
            <div id='mainarea' className='flex justify-center flex-wrap gap-5 transition-all mx-auto p-10 '>
                {Object.keys(shoes).map(key => (
                    <div key={key} className=" p-6">
                        <div className="border-2 w-[400px] h-[500px] border-[#121212]/50 object-cover cursor-pointer rounded-xl transition-all duration-500 flex justify-center items-center flex-col p-4">
                            <h1 className="font-semibold text-4xl mt-5 text-[#121212]">
                                {shoes[key].name}
                            </h1>
                            <img src={shoes[key].image} alt="" className="p-7" />
                            <button className="p-2 mt-auto bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
                                Detay
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
