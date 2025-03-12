import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function FAQ() {
  const [activeTabs, setActiveTabs] = useState({});

  function toggleTab(index) {
    setActiveTabs(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  }

  const faqData = [
    { question: "Что такое TradeBlade", fanswer: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.", sanswer: "Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик." },
    { question: "Должен ли я перевести свои средства на TradeBlade", fanswer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ", sanswer: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla" },
    { question: "Что TradeBlade предлагает инвесторам", fanswer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", sanswer: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla" }
  ];

  return (
    <div className="ds:bg-white ds:pt-[96px] ds:pb-[96px]
    sm:bg-white sm:pt-[56px] sm:pb-[54px]">
      <h1 className="ds:font-IBM ds:font-bold ds:text-[44px] ds:leading-[56px] ds:uppercase ds:ml-[297px]
      sm:font-IBM sm:font-bold sm:text-[28px] sm:leading-[36px] sm:uppercase sm:ml-[16px]">
        часто задаваемые вопросы
      </h1>
      <div className="tabs ds:mt-[64px] ds:ml-[297px]
      sm:mt-[40px] sm:ml-[16px]">
        {faqData.map((item, index) => (
          <div key={index} className={`ds:w-[846px] ds:rounded-[4px] ds:mt-[12px]
          sm:w-[343px] sm:rounded-[4px] sm:mt-[12px] ${activeTabs[index] ? "ds:bg-[#6A54FF] sm:bg-[#6A54FF]"
          : "sm:bg-[#EAEFF0]"}`}>
            <div
              className="ds:flex ds:justify-between ds:items-center ds:px-[16px] ds:py-[16px] ds:cursor-pointer
              sm:flex sm:justify-between sm:items-center sm:px-[16px] sm:py-[16px] sm:cursor-pointer"
              onClick={() => toggleTab(index)}
            >
              <h1 className={`ds:font-IBM ds:font-medium ds:text-[24px] ds:leading-[32px]
                sm:font-IBM sm:font-medium sm:text-[20px] sm:leading-[28px]
                ${activeTabs[index] ? "ds:text-white sm:text-white"
                : "ds:text-[#030718] sm:text-[#030718]"}`}>
                {item.question}
              </h1>
              <IoIosArrowDown
                className={`ds:text-[#4e515d] ds:transform ds:transition-transform ds:duration-300
                  sm:text-[#4e515d] sm:transform sm:transition-transform sm:duration-300 ${
                  activeTabs[index] ? "ds:rotate-180 ds:text-white sm:rotate-180 sm:text-white"
                  : "ds:rotate-0 sm:rotate-0"
                }`}
              />
            </div>
            <div
              className={`ds:overflow-hidden ds:transition-all ds:duration-500
                sm:overflow-hidden sm:transition-all sm:duration-500 ${
                activeTabs[index] ? "ds:max-h-[500px] ds:opacity-100 ds:py-[16px] ds:bg-[#6A54FF] sm:max-h-[500px] sm:opacity-100 sm:py-[16px] sm:bg-[#6A54FF]"
                 : "ds:max-h-0 ds:opacity-0 ds:py-0 sm:max-h-0 sm:opacity-0 sm:py-0"
              }`}
            >
              <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:text-white ds:leading-[20px] ds:px-[16px]
              sm:font-IBM sm:font-normal sm:text-[16px] sm:text-white sm:leading-[20px] sm:px-[16px]">{item.fanswer}</p>
              <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:text-white ds:leading-[20px] ds:px-[16px] ds:mt-[20px]
              sm:font-IBM sm:font-normal sm:text-[16px] sm:text-white sm:leading-[20px] sm:px-[16px] sm:mt-[20px]">{item.sanswer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
