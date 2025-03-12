import logo from "../assets/logo.svg"
import name from "../assets/name.svg"
import { useState } from "react"

function NavBar() {
  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(prevState => !prevState);
  }

  return (
    <nav className="bg-[#030718]">
      {/* Desktop navigation */}
      <div className="ds:flex ds:items-center ds:justify-between ds:px-[80px] ds:py-[20px] sm:hidden">
        <div className="ds:flex ds:items-center">
          <img src={logo} alt="logo" className="w-[52px] h-[52px]" />
          <img src={name} alt="name" className="ml-[-25px] w-[64px] h-[27px]" />
        </div>

        <ul className="ds:flex ds:space-x-[32px]">
          {["Цифры", "Сделки онлайн", "О компании", "Как начать", "Тарифы", "Отзывы", "FAQ"].map((item, index) => (
            <li key={index} className="font-IBM font-medium text-[14px] leading-[17px] uppercase text-[#b2b3b8] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div>
          <button className="bg-[#57E1FF] bg-opacity-20 px-[24px] py-[11px] text-[#57E1FF] border-[1.5px] border-[#57E1FF] uppercase shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] rounded-[3px]">
            вход
          </button>
          <button className="bg-[#57E1FF] px-[24px] py-[11px] ml-[12px] text-[#030718] border-[1px] border-[#57E1FF] uppercase shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] rounded-[3px]">
            регистрация
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="sm:flex sm:justify-between sm:items-center sm:px-[15px] sm:py-[20px] ds:hidden">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[52px] h-[52px]" />
          <img src={name} alt="name" className="ml-[-25px] w-[64px] h-[27px]" />
        </div>

        <div className="sm:cursor-pointer sm:z-50" onClick={toggleActive}>
          <div className={`w-[23px] h-[2px] bg-white rounded-[20px] transition-transform ${active ? "rotate-45 translate-y-[8px]" : ""}`} />
          <div className={`w-[23px] h-[2px] bg-white rounded-[20px] my-[4.5px] transition-opacity ${active ? "opacity-0" : ""}`} />
          <div className={`w-[23px] h-[2px] bg-white rounded-[20px] transition-transform ${active ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </div>
      </div>

      {/* Mobile menu */}
      {active && (
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:bg-[#6A54FF] sm:w-full sm:h-screen sm:fixed sm:top-0 sm:left-0">
          <ul className="sm:text-[#b2b3b8] sm:-ml-[224px] sm:cursor-pointer">
            {["Цифры", "Сделки онлайн", "О компании", "Как начать", "Тарифы", "Отзывы", "FAQ"].map((item, index) => (
              <li key={index} className="font-IBM font-medium text-[16px] leading-[20px] uppercase mb-4">
                {item}
              </li>
            ))}
          </ul>

          <div className="sm:mt-[113px] sm:-ml-[92px]">
            <button className="bg-[#57E1FF] bg-opacity-20 px-[24px] py-[11px] text-[#57E1FF] border-[1.5px] border-[#57E1FF] uppercase shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] rounded-[3px]">
              вход
            </button>
            <button className="bg-[#57E1FF] px-[24px] py-[11px] ml-[12px] text-[#030718] border-[1px] border-[#57E1FF] uppercase shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] rounded-[3px]">
              регистрация
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar;
