import React from 'react'
import appPhoto from '../assets/phoneLanding.png'
import appStore from '../assets/appstore.svg'
import googlePlay from '../assets/googleplay.svg'
import huaweiApp from '../assets/huawei.svg'

export default function Application() {
    return (
        <div className='w-2/3 mx-auto h-[600px]   mt-12 p-12'>
            <div className='w-full h-full border shadow-xl  border-opacity-50 bg-[url("./assets/appBanner.svg")] bg-cover  rounded-xl px-6 flex  relative'>
                <div className='w-[40%] flex justify-center'>
                    <img src={appPhoto} alt="" className='w-[300px] ml-auto absolute bottom-0 drop-shadow-2xl ' />
                </div>
                <div className=' w-[60%] h-full flex justify-start items-center p-12 text-center flex-col gap-y-3'>
                    <h1 className='font-black text-4xl'>AirForce'ı indir!</h1>
                    <p className='font-semibold text-xl'>Yüzlerce airforce arasından en sevdiğini daha kolay bir şekilde seçebilmen için tasarlandı.</p>
                    <div className='flex flex-col gap-y-5 mt-5'>
                        <img src={appStore} alt="" className='cursor-pointer' />
                        <img src={googlePlay} alt="" className='cursor-pointer' />
                        <img src={huaweiApp} alt="" className='cursor-pointer' />
                    </div>
                </div>
            </div>

        </div>
    )
}
