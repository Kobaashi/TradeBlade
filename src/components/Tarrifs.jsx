import { useState } from "react";
import yes from "../assets/yes.png";

function Tarrifs() {
  const [active, setActive] = useState(true);

  function toggleActive() {
    setActive((prevState) => !prevState);
  }

  return (
    <div className="ds:mt-[96px] ds:pt-[96px] ds:pb-[96px] ds:bg-[#030718]
    sm:mt-[56px] sm:pb-[44px] sm:bg-[#030718]">
      <h1 className="ds:font-IBM ds:font-bold ds:text-[44px] ds:text-white ds:leading-[56px] ds:uppercase ds:ml-[297px]
      sm:font-IBM sm:font-bold sm:text-[28px] sm:text-white sm:leading-[36px] sm:uppercase sm:ml-[16px]">
        тарифы
      </h1>

      <div className="ds:flex ds:w-[413px] ds:h-[52px] ds:bg-[#6A54FF] ds:ml-[297px] ds:rounded-[4px] ds:mt-[40px]
      sm:flex sm:w-[343px] sm:h-[52px] sm:bg-[#6A54FF] sm:ml-[16px] sm:rounded-[4px] sm:mt-[24px]">
        <div
          className={`ds:w-[201px] ds:h-[44px] ds:mt-[4px] ds:ml-[4px] ds:mb-[4px] ds:flex ds:items-center ds:justify-center ds:py-[4px] ds:rounded-[4px] ds:font-IBM ds:font-bold ds:text-[24px] ds:uppercase ds:cursor-pointer ds:transition-all
            sm:w-[167px] sm:h-[44px] sm:mt-[4px] sm:ml-[4px] sm:mb-[4px] sm:flex sm:items-center sm:justify-center dsm:py-[4px] sm:rounded-[4px] sm:font-IBM sm:font-bold sm:text-[18px] sm:uppercase sm:cursor-pointer sm:transition-all ${
            active ? "ds:bg-[#57E1FF] ds:text-black sm:bg-[#57E1FF] sm:text-black"
            : "ds:text-[#57E1FF] sm:text-[#57E1FF]"
          }`}
          onClick={() => setActive(true)}
        >
          спот
        </div>
        <div
          className={`ds:w-[201px] ds:h-[44px] ds:mt-[4px] ds:ml-[4px] ds:mb-[4px] ds:flex ds:items-center ds:justify-center ds:rounded-[4px] ds:font-IBM ds:font-bold ds:text-[24px] ds:uppercase ds:cursor-pointer ds:transition-all
             sm:w-[167px] sm:h-[44px] sm:mt-[4px] sm:mr-[4px] sm:mb-[4px] sm:flex sm:items-center sm:justify-center dsm:py-[4px] sm:rounded-[4px] sm:font-IBM sm:font-bold sm:text-[18px] sm:uppercase sm:cursor-pointer sm:transition-all ${
            !active ? "ds:bg-[#57E1FF] ds:text-black sm:bg-[#57E1FF] sm:text-blac"
            : "ds:text-[#57E1FF] sm:text-[#57E1FF]"
          }`}
          onClick={() => setActive(false)}
        >
          фьючерсы
        </div>
      </div>
      <div className="ds:flex">
      <div className="ds:mt-[44px]
      sm:mt-[24px]">
          <div className="ds:w-[413px] ds:h-[556px] ds:border-[1px] ds:border-[#6A54FF] ds:ml-[297px]
          sm:w-[343px] sm:h-[420px] sm:border-[1px] sm:border-[#6A54FF] sm:ml-[16px]">
            <h1 className="ds:font-IBM ds:font-medium ds:text-[32px] ds:text-white ds:leading-[48px] ds:ml-[24px] ds:mt-[24px] ds:uppercase
            sm:font-IBM sm:font-medium sm:text-[20px] sm:text-white sm:leading-[28px] sm:ml-[16px] sm:mt-[16px] sm:uppercase">standart</h1>
            <div>
              <div className="ds:mt-[56px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-[#b2b3b8] sm:ml-[10px]">
                  Ручной трейдинг
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
               sm:mt-[8px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px] " />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-[#b2b3b8] sm:ml-[10px]">
                  Автоматическое или полуавтоматическое копирование сделок
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[8px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                 sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-[#b2b3b8] sm:ml-[10px]">
                  Личный кабинет со статистикой
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[8px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-[#b2b3b8] sm:ml-[10px]">
                  Среднесрочные сделки с уровнями набора портфеля
                </p>
              </div>
              <div>
                <div className="ds:flex ds:ml-[24px] ds:mt-[111px]
                sm:flex sm:ml-[16px] sm:mt-[24px]">
                  <h1 className="ds:font-IBM ds:font-medium ds:text-[35px] ds:text-white ds:leading-[40px] ds:-mt-[5px]
                  sm:font-IBM sm:font-medium sm:text-[35px] sm:text-white sm:leading-[40px] sm:-mt-[5px]">$234</h1>
                  <p className="ds:font-IBM ds:font-medium ds:text-[18px] ds:text-[#35FF9E] ds:leading-[40px] ds:-mt-[10px]
                  sm:font-IBM sm:font-medium sm:text-[18px] sm:text-[#35FF9E] sm:leading-[20px] sm:-mt-[2px]">-35%</p>
                  <div className="ds:ml-[109px]
                  sm:ml-[55px]">
                    <select name="months" id="month-select" className="ds:pt-[15px] ds:pl-[20px] ds:w-[128px] ds:pl-[8px] ds:pr-[5px] ds:pt-[6px] ds:pb-[6px] ds:bg-[#4e515d] ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-white
                    sm:pt-[8px] sm:pl-[8px] sm:w-[128px] sm:pl-[8px] sm:pr-[5px] sm:pt-[6px] sm:pb-[6px] sm:bg-[#4e515d] sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white">
                      <option value="years">12 місяців</option>
                      <option value="halfYears">6 місяців</option>
                      <option value="quarter">3 місяці</option>
                      <option value="month">1 місяць</option>
                    </select>
                  </div>
                </div>
                <button className="ds:w-[365px] ds:h-[52px] ds:bg-[#57E1FF] ds:shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] ds:rounded-[3px] ds:ml-[24px] ds:mt-[24px]
                sm:w-[310px] sm:h-[52px] sm:bg-[#57E1FF] sm:shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] sm:rounded-[3px] sm:ml-[16px] sm:mt-[24px]">
                  <h1 className="ds:font-IBM ds:font-medium ds:text-[16px] ds:text-[#030718] ds:leading-[20px] ds:uppercase
                  sm:font-IBM sm:font-medium sm:text-[16px] sm:text-[#030718] sm:leading-[20px] sm:uppercase">Попробовать</h1>
                  <p className="sm:font-IBM sm:font-normal sm:text-[12px] leading-[16px]">5 дней бесплатно</p>
                </button>
              </div>
            </div>
          </div>
        <div>
        </div>
      </div>
      <div className="ds:mt-[20px]
      sm:mt-[20px]">
          <div className="ds:w-[413px] ds:h-[556px] ds:bg-[#6A54FF] ds:ml-[20px]
          sm:w-[343px] sm:h-[556px] sm:bg-[#6A54FF] sm:ml-[16px]">
            <h1 className="ds:font-IBM ds:fot-medium ds:text-[32px] ds:text-white ds:leading-[48px] ds:ml-[24px] ds:mt-[24px] ds:pt-[24px] ds:uppercase
            sm:font-IBM sm:fot-medium sm:text-[20px] sm:text-white sm:leading-[28px] sm:ml-[16px] sm:mt-[16px] sm:uppercase">vip</h1>
            <div>
              <div className="ds:mt-[56px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Ручной трейдинг
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Автоматическое или полуавтоматическое копирование сделок
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Личный кабинет со статистикой
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Краткосрочные, среднесрочные и инвест сделки
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Доступ в Vip чат с командой
                </p>
              </div>
              <div className="ds:mt-[8px] ds:pl-[24px] ds:flex ds:w-full ds:pb-[8px] ds:border-b-2 ds:border-dashed ds:border-[#b2b3b8]
              sm:mt-[24px] sm:pl-[16px] sm:flex sm:w-full sm:pb-[8px] sm:border-b-2 sm:border-dashed sm:border-[#b2b3b8]">
                <img src={yes} alt="icon" className="ds:w-[12px] ds:h-[12px] sm:w-[12px] sm:h-[12px] sm:mt-[5px]" />
                <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:ml-[10px]
                sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white sm:ml-[10px]">
                  Наш авторский курс по трейдингу
                </p>
              </div>
              <div>
                <div className="ds:flex ds:ml-[24px] ds:mt-[40px]
                sm:flex sm:ml-[16px] sm:mt-[40px]">
                  <h1 className="ds:font-IBM ds:font-medium ds:text-[35px] ds:text-white ds:leading-[40px] ds:-mt-[5px]
                  sm:font-IBM sm:font-medium sm:text-[35px] sm:text-white sm:leading-[40px] sm:-mt-[5px]">$585</h1>
                  <p className="ds:font-IBM ds:font-medium ds:text-[18px] ds:text-[#35FF9E] ds:leading-[40px] ds:-mt-[10px]
                  sm:font-IBM sm:font-medium sm:text-[18px] sm:text-[#35FF9E] sm:leading-[20px] sm:-mt-[2px]">-35%</p>
                  <div className="ds:ml-[109px]
                  sm:ml-[55px]">
                    <select name="months" id="month-select" className="ds:pt-[15px] ds:pl-[20px] ds:w-[128px] ds:pl-[8px] ds:pr-[5px] ds:pt-[6px] ds:pb-[6px] ds:bg-[#8876ff] ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-white
                    sm:pt-[8px] sm:pl-[8px] sm:w-[128px] sm:pl-[8px] sm:pr-[5px] sm:pt-[6px] sm:pb-[6px] sm:bg-[#8876ff] sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-white">
                      <option value="years">12 місяців</option>
                      <option value="halfYears">6 місяців</option>
                      <option value="quarter">3 місяці</option>
                      <option value="month">1 місяць</option>
                    </select>
                  </div>
                </div>
                <button className="ds:w-[365px] ds:h-[52px] ds:bg-[#57E1FF] ds:shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] ds:rounded-[3px] ds:ml-[24px] ds:mt-[24px]
                sm:w-[310px] sm:h-[52px] sm:bg-[#57E1FF] sm:shadow-[0px_0px_4px_0px_rgba(87,_225,_255,_1)] sm:rounded-[3px] sm:ml-[16px] sm:mt-[14px]">
                  <h1 className="ds:font-IBM ds:font-medium ds:text-[16px] ds:text-[#030718] ds:leading-[20px] ds:uppercase
                  sm:font-IBM sm:font-medium sm:text-[16px] sm:text-[#030718] sm:leading-[20px] sm:uppercase">Попробовать</h1>
                  <p >5 дней бесплатно</p>
                </button>
              </div>
            </div>
          </div>
        <div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Tarrifs;
