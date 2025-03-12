import card from "../assets/card.png"

function Header() {
 return(
    <div className="ds:flex ds:pt-[160px] ds:pb-[134px] ds:bg-[#030718]
    sm:pt-[40px] sm:pb-[37px] sm:bg-[#030718]">
       <div className="sm:ml-[16px] sm:mt-[10px]
      ds:hidden ">
          <img src={card} alt="card" className="sm:w-[300px] sm:h-[134px]" />
      </div>
      <div>
        <h1 className="ds:font-IBM ds:font-bold ds:text-[60px] ds:leading-[72px] ds:text-white ds:w-[630px] ds:uppercase ds:ml-[80px]
        sm:font-IBM sm:font-bold sm:text-[35px] sm:leading-[44px] sm:text-white sm:w-[353px] sm:uppercase sm:ml-[16px] ">моментально Копируй сделки профи трейдеров</h1>
        <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:leading-[20px] ds:text-[#b2b3b8] ds:w-[565px] ds:ml-[80px] ds:mt-[12px]
        sm:font-IBM sm:font-normal sm:text-[16px] sm:leading-[20px] sm:text-[#b2b3b8] sm:w-[343px] sm:ml-[16px] sm:mt-[12px]">Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
        <input type="text" placeholder="Ваш e–mail" className="ds:w-[500px] ds:h-[60px] ds:rounded-[4px] ds:bg-[#201A4F] ds:ml-[80px] ds:mt-[24px] ds:placeholder: uppercase ds:placeholder: ds:pl-[16px]
        sm:w-[343px] sm:h-[50px] sm:rounded-[4px] sm:bg-[#201A4F] sm:ml-[16px] sm:mt-[24px] sm:placeholder: uppercase sm:placeholder: sm:pl-[16px]" />
        <button className="ds:w-[109px] ds:h-[52px] ds:py-[16px] ds:px-[24px] ds:font-IBM ds:font-medium ds:text-[16px] ds:leading-[20px] ds:uppercase ds:text-[#030718] ds:rounded-[4px] ds:bg-[#57E1FF] ds:border-[#57E1FF] ds:border-[1px] ds:-ml-[115px]
        sm:w-[102px] sm:h-[42px] sm:py-[11px] sm:pr-[4px] sm:font-IBM sm:font-medium sm:text-[14px] sm:leading-[20px] sm:uppercase sm:text-[#030718] sm:rounded-[3px] sm:bg-[#57E1FF] sm:border-[#57E1FF] sm:border-[1px] sm:-ml-[105px]">начать</button>
        <p className="ds:font-IBM ds:font-normal ds:text-[#4e515d] ds:text-[14px] ds:leading-[20px] ds:ml-[80px] ds:mt-[12px]
        sm:font-IBM sm:font-normal sm:text-[#4e515d] sm:text-[14px] sm:leading-[20px] sm:ml-[16px] sm:mt-[12px]">5 дней бесплатного пользования</p>
      </div>
      <div className="ds:ml-[128px] ds:mt-[20px]
      sm:hidden ">
          <img src={card} alt="card" />
      </div>
    </div>
 )
}

export default Header
