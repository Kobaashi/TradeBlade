import React from "react";
import ArrowUp from "../assets/ArrowUp.png";
import "../style/PastDeals.css";

const deals = [
  {
    id: 1,
    title: "near/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "58.6206%",
    goal: "Цель 4",
    date: "06.10.2022",
  },
  {
    id: 2,
    title: "btc/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "6.02%",
    goal: "Цель 3",
    date: "06.10.2022",
  },
  {
    id: 3,
    title: "eth/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "16.3%",
    goal: "Цель 4",
    date: "06.10.2022",
  },
  {
    id: 4,
    title: "near/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "58.6206%",
    goal: "Цель 4",
    date: "06.10.2022",
  },
  {
    id: 5,
    title: "btc/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "6.02%",
    goal: "Цель 3",
    date: "06.10.2022",
  },
  {
    id: 6,
    title: "eth/usdt",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "16.3%",
    goal: "Цель 4",
    date: "06.10.2022",
  },
];

function DealCard({ deal }) {
  return (
    <div className="ds:w-[299px] ds:h-[270px] ds:overflow-hidden ds:bg-[#6A54FF] title ds:rounded-[4px] ds:flex ds:flex-col
    sm:w-[299px] sm:h-[270px] sm:overflow-hidden sm:bg-[#6A54FF] title sm:rounded-[4px] sm:flex sm:flex-col">
      <div className="ds:mx-[16px] ds:my-[16px]
      sm:ml-[16px] sm:mx-[16px]">
        <h1 className="ds:font-IBM ds:font-medium ds:text-[20px] ds:text-white ds:leading-[28px] ds:uppercase
        sm:font-IBM sm:font-medium sm:text-[20px] sm:text-white sm:leading-[28px] sm:uppercase">{deal.title}</h1>
        <div className="ds:flex
        sm:flex">
          <p className="ds:font-IBM ds:font-medium ds:text-[14px] ds:text-[#b2b3b8] ds:leading-[18px]
          sm:font-IBM sm:font-medium sm:text-[20px] sm:text-[#b2b3b8] sm:leading-[28px]">{deal.type}</p>
          <span className="ds:font-IBM ds:font-normal ds:text-[14px] ds:text-[#b2b3b8] ds:leading-[18px]
          sm:font-IBM sm:font-normal sm:text-[14px] sm:text-[#b2b3b8] sm:leading-[18px] sm:mt-[5px]">· {deal.time}</span>
        </div>
      </div>
      <div className="ds:mx-[16px] ds:my-[48px] profit
      sm:mx-[16px] sm:my-[48px]">
        <p className="ds:font-IBM ds:font-medium ds:text-[14px] ds:text-[#d2cbff] ds:leading-[18px] ds:uppercase
          sm:font-IBM sm:font-medium sm:text-[14px] sm:text-[#d2cbff] sm:leading-[18px] sm:uppercase">Прибыль</p>
        <div className="ds:flex
        sm:flex">
          <h1 className="ds:font-IBM ds:font-medium ds:text-[28px] ds:text-[#35FF9E] ds:leading-[36px] ds:uppercase ds:slashed-zero
          sm:font-IBM sm:font-medium sm:text-[28px] sm:text-[#35FF9E] sm:leading-[36px] sm:uppercase sm:slashed-zero">{deal.profit}</h1>
          <img src={ArrowUp} alt="arrow up" className="ds:w-[9px] ds:h-[16px] ds:mt-[4px] ds:ml-[6px]
          sm:w-[9px] sm:h-[16px] sm:mt-[8px] sm:ml-[6px]" />
        </div>
      </div>
      <div className="ds:flex ds:ml-[16px] ds:mt-[9px] ds:mb-[13px] target
      sm:flex sm:ml-[16px] sm:mt-[9px] sm:mb-[13px]">
        <h1 className="ds:font-IBM ds:font-medium ds:text-[14px] ds:text-[#d2cbff] ds:leading-[18px]
        sm:font-IBM sm:font-medium sm:text-[14px] sm:text-[#d2cbff] sm:leading-[18px]">{deal.goal}</h1>
        <p className="ds:font-IBM ds:font-normal ds:text-[14px] ds:text-[#b2b3b8] ds:leading-[18px] ds:ml-[76px]
        sm:font-IBM sm:font-normal sm:text-[14px] sm:text-[#b2b3b8] sm:leading-[18px] sm:ml-[76px]">Дата входа {deal.date}</p>
      </div>
    </div>
  );
}

function PastDeals() {
  return (
    <div className="ds:mt-[61px] ds:pt-[96px] ds:bg-[#030718] ds:pb-[100px] ds:overflow-hidden
    sm:mt-[48px] sm:bg-[#030718] sm:pb-[53px] sm:overflow-hidden">
      <div className="ds:flex ds:overflow-x-auto ds:whitespace-nowrap
      sm:flex sm:overflow-x-auto sm:whitespace-nowrap">
        <div className="ds:mt-[61px] ds:bg-[#030718] ds:pb-[100px] ds:overflow-hidden
        sm:mt-[48px] sm:bg-[#030718] sm:pb-[53px] sm:overflow-hidden">
          <div className="deals">
            <h1 className="ds:font-IBM ds:font-black ds:text-[44px] ds:text-white ds:leading-[56px] ds:uppercase ds:ml-[80px]
            sm:font-IBM sm:font-black sm:text-[28px] sm:text-white sm:leading-[36px] sm:uppercase sm:ml-[16px]">
              Прошедшие сделки
            </h1>
            <div className="ds:flex ds:ml-[80px] ds:-mt-[8px]
            sm:flex sm:ml-[16px] sm:mt-[2px]">
              <span className="ds:bg-[#35FF9E] ds:rounded-full ds:w-[7px] ds:h-[7px] ds:mt-[5px]
              sm:bg-[#35FF9E] sm:rounded-full sm:w-[7px] sm:h-[7px] sm:mt-[6px]"></span>
              <p className="ds:font-IBM ds:font-normal ds:text-[14px] ds:text-[#35FF9E] ds:leading-[20px] ds:slashed-zero ds:ml-[8px]
              sm:font-IBM sm:font-normal sm:text-[14px] sm:text-[#35FF9E] sm:leading-[20px] sm:slashed-zero sm:ml-[4px]">
                Онлайн
              </p>
            </div>
          </div>
          <div className="ds:flex  ds:overflow-x-auto ds:scrollbar ds:scroller
          sm:flex sm:overflow-x-auto sm:scrollbar sm:scroller"
              style={{ maxWidth: "100%", height: "100%", minHeight: "50px" }}>
            <div className="ds:flex ds:space-x-[16px] ds:ml-[80px] ds:mt-[72px]
                    sm:flex sm:space-x-[16px] sm:ml-[16px] sm:mt-[24px]">
              {deals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastDeals;
