import logo from "../assets/logo.svg"
import name from "../assets/name.svg"


function Footer() {
  return (
    <div className="ds:pt-[44px] ds:pb-[45px] ds:bg-[#030718]
    sm:pt-[40px] sm:pb-[25px] sm:bg-[#030718]">
      <div className="ds:flex ds:justify-between ds:items-end
      sm:justify-between sm:items-end sm:ml-[16px]">
        <div>
          <h1 className="ds:w-[207px] ds:ml-[80px] ds:font-IBM ds:font-normal ds:text-[14px] ds:text-[#4e515d] ds:leading-[20px] ds:uppercase
          sm:w-[107px] sm:ml-[16px] sm:font-IBM sm:font-normal sm:text-[14px] sm:text-[#4e515d] sm:leading-[20px] sm:uppercase">
            Быстрая навигация
          </h1>
          <ul className="ds:flex ds:ml-[80px] ds:pt-[288px]
          sm:ml-[186px] sm:-mt-[40px]">
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
            sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              Цифры
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              Сделки онлайн
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              о компании
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              как начать
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              тарифы
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              отзывы
            </li>
            <li className="ds:font-IBM ds:font-medium ds:text-[14px] ds:leading-[17px] ds:uppercase ds:text-[#b2b3b8] ds:mr-[32px] ds:cursor-pointer
             sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#b2b3b8] sm:mr-[32px] sm:cursor-pointer sm:mt-[16px]">
              FAQ
            </li>
          </ul>
        </div>

        <div className="ds:border-t-0 ds:border-l-[1px] ds:border-[#4e515d] ds:h-[360px] ds:mt-[28px] sm:border-t-[1px]  sm:mt-[100px]">
          <div className="ds:mr-[164px] ds:-ml-[39px] sm:mt-[78px]
          sm:ml-[30px]">
            <div className="ds:flex ds:items-center ds:ml-[200px] ds:-mt-[118px]
                  sm:flex sm:items-center sm:-ml-[22px] sm:-mt-[20px]">
              <img src={logo} alt='logo' />
              <img src={name} alt='name' />
            </div>
            <div className="ds:mt-[290px] sm:mt-[80px]">
              <p className="ds:ml-[150px] ds:font-IBM ds:font-normal ds:text-[14px] ds:text-[#4e515d] ds:leading-[20px]
                    sm:font-IBM sm:font-normal sm:text-[14px] sm:text-[#4e515d] sm:leading-[20px]">
                © 2022 TradeBlade. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
