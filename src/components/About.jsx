

function About() {
  return(
    <div className="ds:mt-[56px] ds:flex
    sm:mt-[48px] ">
      <div className="ds:w-[413px] ds:ml-[80px]
      sm:w-[190px] sm:ml-[16px]">
        <h1 className="ds:font-IBM ds:font-bold ds:text-[44px] ds:text-black ds:leading-[56px] ds:uppercase
        sm:font-IBM sm:font-bold sm:text-[28px] sm:text-black sm:leading-[36px] sm:uppercase">О компании</h1>
        <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:text-[#030718] ds:leadint-[20px]
        sm:font-IBM sm:font-normal sm:text-[16px] sm:text-[#030718] sm:leadint-[20px] sm:w-[343px]">Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным
        официальным брокером биржи Binance</p>
        <p className="ds:font-IBM ds:font-normal ds:text-[16px] ds:text-[#030718] ds:leadint-[20px] ds:mt-[40px]
        sm:font-IBM sm:font-normal sm:text-[16px] sm:text-[#030718] sm:leadint-[20px] sm:mt-[20px] sm:w-[343px]">Он представляет пользователям множество преимуществ, таких как более високая скорость
        синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade
        всего в 1 клик.</p>
      </div>
      <div className="ds:w-[630px] ds:h-[203px] ds:mt-[56px] ds:ml-[237px] ds:bg-[#6A54FF] ds:rounded-[4px]
      sm:w-[356px] sm:h-[203px] sm:mt-[40px] sm:ml-[16px] sm:bg-[#6A54FF] sm:rounded-[4px]">
        <h1 className="ds:font-IBM ds:font-medium ds:text-[28px] ds:text-white ds:text-center ds:leading-[36px] ds:pl-[64px] ds:pt-[32px] ds:w-[502px] ds:h-[72px]
        sm:font-IBM sm:font-medium sm:text-[20px] sm:text-white sm:text-center sm:leading-[28px] sm:pl-[16px] sm:pt-[16px] ds:w-[502px] ds:h-[72px]">Попробуйте сейчас и получите
        5 дней бесплатного пользования</h1>
        <input type="text" placeholder="Ваш e–mail" className="ds:w-[500px] ds:h-[60px] ds:rounded-[4px] ds:bg-[#201A4F] ds:ml-[64px] ds:mt-[52px] ds:placeholder: uppercase ds:placeholder: pl-[16px]
        sm:w-[324px] sm:h-[50px] sm:rounded-[4px] sm:bg-[#201A4F] sm:ml-[16px] sm:mt-[20px] sm:placeholder: uppercase sm:placeholder: pl-[16px]" />
        <button className="ds:w-[165px] ds:h-[52px] ds:py-[16px] ds:px-[24px] ds:font-IBM ds:font-medium ds:text-[16px] ds:leading-[20px] ds:uppercase ds:text-[#030718] ds:rounded-[4px] ds:bg-[#57E1FF] ds:border-[#57E1FF] ds:border-[1px] ds:-ml-[170px]
        sm:w-[324px] sm:h-[52px] sm:py-[16px] sm:px-[24px] sm:font-IBM sm:font-medium sm:text-[16px] sm:leading-[20px] sm:uppercase sm:text-[#030718] sm:rounded-[4px] sm:bg-[#57E1FF] sm:border-[#57E1FF] sm:border-[1px] sm:ml-[16px] sm:mt-[4px]">попробовать</button>
      </div>
    </div>
  )
}

export default About
