import React, { useState, useEffect } from "react";

export default function Updates({}) {
  const [content, setContent] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    setContent([
      "Yönlendiriciler hazırlandı.",
      "Database düzenlemesi yapıldı.",
      "Ayakkabılar cinsiyetlere göre ayarlandı",
      "Artık her link'in kendine ait bir yönlendiricisi var",
    ]);
  }, []);

  return (
    <div className="h-screen relative">
      <div className="w-full h-20 flex justify-center items-center border-b">
        <h1 className="text-2xl font-semibold">Güncellemeler - 18.05.2024</h1>
      </div>
      <ul className="text-center font-bold text-2xl p-4 flex justify-center items-center flex-col gap-y-4">
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
