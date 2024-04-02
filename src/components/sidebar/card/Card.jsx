import SEBILogo from '../../../assets/logos/sebilogo.svg'
import ArrowDownIcon from '../../../assets/logos/arrowdown.svg'
import InstragramLogo from '../../../assets/logos/instagram.svg'
import TwitterLogo from '../../../assets/logos/twitter.svg'
import LinkedInLogo from '../../../assets/logos/linkedin.svg'
import WhatsappLogo from '../../../assets/logos/whatsapp.svg'
import LinksLogo from '../../../assets/logos/links.svg'


const CardNavbar = () => {
  return (
    <div className="flex flex-row w-full rounded-sm bg-surfaceDarkColor h-max py-[7px] px-[14px] gap-[20px]">
      <div className="w-max rounded-xs py-[12px] px-[66px] gap-[10px]">
        <p className="text-base font-medium text-lightTextColor">Invest</p>
      </div>
      <div className="w-max rounded-xs py-[12px] px-[66px] gap-[10px] bg-primaryGradient">
        <p className="text-base font-bold text-blackWhiteColor">Trade</p>
      </div>
    </div>
  )
}

const StockHead = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-[8px]">
        <p className="font-bold text-titleTextColor text-xl">Tata Steel</p>
        <p className="font-medium text-base text-bodyTextColor">{'{TickerName}'}</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-right text-titleTextColor font-bold">₹ 6451.50</p>
        <p className="flex items-center text-right text-xs font-medium text-primaryRed"><img className='mr-2' src={ArrowDownIcon} />10.8 (1.65%)</p>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className='flex flex-col bg-primaryColor shadow-primaryShadow w-max bg-red-200 rounded-md p-[20px] gap-[24px]'>
      <CardNavbar />
      <StockHead />
      <div className="flex flex-col gap-[20px]">
        {/* Input radio mainholder */}
        <div className="flex w-full justify-between gap-[16px] flex-col">
          {/* indv radio */}
          <div className="flex w-full justify-between items-center">
            <p className="text-titleTextColor text-base font-medium">Order Type</p>

            <div className="flex gap-[16px]">
              <div className="flex gap-[4px] items-center">
                <input type="radio" name='order-type' className="h-4 w-4 m-4 accent-brandGreenColor" />
                <p className="text-titleTextColor text-base font-medium">Market</p>
              </div>

              <div className="flex gap-[4px] items-center">
                <input type="radio" name='order-type' className="h-4 w-4 m-4 accent-brandGreenColor" />
                <p className="text-titleTextColor text-base font-medium">Limit</p>
              </div>

            </div>
          </div>

          <div className="flex w-full justify-between items-center">
            <p className="text-titleTextColor text-base font-medium">Action Type</p>

            <div className="flex gap-[16px]">
              <div className="flex gap-[4px] items-center">
                <input type="radio" name='acion-type' className="h-4 w-4 m-4 accent-brandGreenColor" />
                <p className="text-titleTextColor text-base font-medium">Buy</p>
              </div>

              <div className="flex gap-[4px] items-center">
                <input type="radio" name='acion-type' className="h-4 w-4 m-4 accent-brandGreenColor" />
                <p className="text-titleTextColor text-base font-medium">Sell</p>
              </div>

            </div>
          </div>

        </div>
        <hr className="border border-borderColor" />
        <div className="flex flex-col gap-[16px]">
          {/* Share Button */}
          <div className="w-full flex justify-between items-center">
            <p className="text-titleTextColor text-base font-medium">Shares</p>

            <div className="w-[40%] flex justify-around bg-surfaceDarkColor rounded-[10px] p-2 items-center">
              <button className="text-titleTextColor text-base font-medium px-1">-</button>
              <p className="text-titleTextColor text-base font-medium px-4">12</p>
              <button className="text-titleTextColor text-base font-medium px-1">+</button>
            </div>
          </div>
          {/* Price Button */}
          <div className="w-full flex justify-between items-center">
            <p className="text-titleTextColor text-base font-medium">Price</p>

            <div className="w-[40%] relative flex justify-center bg-surfaceDarkColor rounded-[10px] items-center overflow-hidden">
              <p className="text-center text-titleTextColor pt-2 pb-2 font-bold"><span className='mr-1'>₹</span> 6451.50</p>
              <div className="absolute bottom-0 left-0 h-1 w-[52%] bg-brandGreenColor"></div>
            </div>
          </div>
          {/* Stoploss Button */}
          <div className="w-full flex justify-between items-center">
            <div className='flex flex-col gap-[8px]'>
              <p className="text-titleTextColor text-base font-medium">Stop Loss</p>
              {/* use state + map would be used to handle selection of a specific button */}
              <div className='flex flex-row gap-[8px]'>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>2.0%</p>
                </div>
                <div className='p-1 border border-titleTextColor bg-titleTextColor rounded-[6px] '>
                  <p className='text-primary text-[10px] font-medium px-1'>1.5%</p>
                </div>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>1.0%</p>
                </div>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>0.5%</p>
                </div>
              </div>
            </div>

            <div className="w-[40%] relative flex justify-center bg-surfaceDarkColor rounded-[10px] items-center overflow-hidden">
              <input type="text" value={'--'} className="w-inherit bg-transparent py-2 rounded-[10px] text-center outline-none text-titleTextColor text-base font-medium px-2" />
            </div>
          </div>
          {/* Target Button */}
          <div className="w-full flex justify-between items-center">
            <div className='flex flex-col gap-[8px]'>
              <p className="text-titleTextColor text-base font-medium">Target</p>
              {/* use state + map would be used to handle selection of a specific button */}
              <div className='flex flex-row gap-[8px]'>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>25%</p>
                </div>
                <div className='p-1 border border-titleTextColor bg-titleTextColor rounded-[6px] '>
                  <p className='text-primary text-[10px] font-medium px-1'>50%</p>
                </div>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>75%</p>
                </div>
                <div className='p-1 border border-bodyTextColor rounded-[6px] '>
                  <p className='text-bodyTextColor text-[10px] font-medium px-1'>MAX</p>
                </div>
              </div>
            </div>

            <div className="w-[40%] relative flex justify-center bg-surfaceDarkColor rounded-[10px] items-center overflow-hidden">
              <input type="text" value={'--'} className="w-inherit bg-transparent py-2 rounded-[10px] text-center outline-none text-titleTextColor text-base font-medium px-2" />
            </div>
          </div>

        </div>
      </div>
      <hr className="border border-borderColor" />
      {/* total Value */}
      <div className="flex flex-row justify-between">
        <p className="text-titleTextColor text-base font-medium">Total Trade Value</p>
        <p className="text-titleTextColor text-lg font-medium">₹43,343</p>
      </div>
      {/* button and sebi regno */}
      <div className="flex flex-col gap-[20px] ">
        <button type="button" className="w-full bg-ctaGradient tracking-wide rounded-sm text-blackWhiteColor font-bold text-center py-3">Create Buy Trade</button>
        <div className="w-max mx-auto flex flex-row items-end gap-[20px] ">
          {/* <SEBIRegistrationLogo /> */}
          <img src={SEBILogo} />
          <p className="text-xs text-bodyTextColor">SEBI Reg. No. INH000009180</p>
        </div>
      </div>
      {/* footer links */}
      <div className="flex flex-row gap-[16px] m-auto items-center">
        <p className="text-center text-sm font-medium text-titleTextColor">Share On</p>
        <div className="flex flex-row gap-[10px]">
          <img className='p-1' src={InstragramLogo} />
          <img className='p-1' src={TwitterLogo} />
          <img className='p-1' src={LinkedInLogo} />
          <img className='p-1' src={WhatsappLogo} />
          <img className='p-1' src={LinksLogo} />
        </div>
      </div>
    </div>
  )
}

export default Card