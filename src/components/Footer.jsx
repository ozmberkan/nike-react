import React from "react";
import Logo from '~/assets/Svg/Logo.svg'
import appStore from '~/assets/SocialMedia/appstore.svg'
import googlePlay from '~/assets/SocialMedia/googleplay.svg'
import huaweiApp from '~/assets/SocialMedia/huawei.svg'
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";



export default function Footer() {
  return (
    <div className="w-full h-[400px] border-t flex justify-between px-24 gap-x-5 mt-12">
      <div className=" w-[380px] p-4 ">
        <div className="flex items-center gap-x-5">
          <img src={Logo} alt="" />
          <span className="font-black">JUST DO IT</span>
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-start mt-6">
          <p className="font-semibold text-lg leading-tight">Airforce'ı indir</p>
          <img src={appStore} alt="" className="w-[200px] cursor-pointer hover:scale-105 transition-all" />
          <img src={googlePlay} alt="" className="w-[200px] cursor-pointer hover:scale-105 transition-all" />
          <img src={huaweiApp} alt="" className="w-[200px] cursor-pointer hover:scale-105 transition-all" />
        </div>
      </div>
      <div className=" w-[380px] p-7 ">
        <h1 className="font-semibold">AirForce'ı Keşfet</h1>
        <div className="flex flex-col gap-y-5 mt-12">
          <Link to="/about-us" className="text-lg hover:underline cursor-pointer text-[#121212]">Hakkımızda</Link>
          <Link to="/careers" className="text-lg hover:underline cursor-pointer text-[#121212]">Kariyer</Link>
          <Link to="/shoes-careers" className="text-lg hover:underline cursor-pointer text-[#121212]">Ayakkabı Kariyerleri</Link>
          <Link to="/contact-us" className="text-lg hover:underline cursor-pointer text-[#121212]">İletişim</Link>
          <Link to="/social-projects" className="text-lg hover:underline cursor-pointer text-[#121212]">Sosyal Sorumluluk Projeleri</Link>
        </div>
      </div>
      <div className=" w-[380px] p-7 ">
        <h1 className="font-semibold">Yardıma İhtiyacın var mı ?</h1>
        <div className="flex flex-col gap-y-5 mt-12">
          <Link to="/faq" className="text-lg hover:underline cursor-pointer text-[#121212]">Sıkça Sorulan Sorular</Link>
          <Link to="/personal-data" className="text-lg hover:underline cursor-pointer text-[#121212]">Kişisel Verilerin Korunması</Link>
          <Link to="/terms-conditions" className="text-lg hover:underline cursor-pointer text-[#121212]">Gizlilik Politikası</Link>
          <Link to="/cookie-policy" className="text-lg hover:underline cursor-pointer text-[#121212]">Kullanım Koşulları</Link>
          <Link to="/privacy-policy" className="text-lg hover:underline cursor-pointer text-[#121212]">Çerez Politikası</Link>
        </div>
      </div>
      <div className=" w-[380px] p-7 ">
        <h1 className="font-semibold">İş Ortağımız Ol</h1>
        <div className="flex flex-col gap-y-5 mt-12">
          <Link to="/our-dealer" className="text-lg hover:underline cursor-pointer text-[#121212]">Bayimiz Olun</Link>
          <Link to="/rent-wearhouse" className="text-lg hover:underline cursor-pointer text-[#121212]">Deponu Kirala</Link>
          <Link to="/share-design" className="text-lg hover:underline cursor-pointer text-[#121212]">Tasarımlarını Paylaş</Link>
        </div>
      </div>
      <div className=" w-[380px] p-7 ">
        <h1 className="font-semibold">Sosyal Medya</h1>
        <div className="flex flex-col gap-y-5 mt-12">
          <span className="flex items-center gap-x-2 cursor-pointer"><FaInstagram /> Instagram</span>
          <span className="flex items-center gap-x-2 cursor-pointer"><FaXTwitter /> Twitter</span>
          <span className="flex items-center gap-x-2 cursor-pointer"><CiFacebook /> Facebook</span>

        </div>
      </div>
    </div>
  )

    ;
}
