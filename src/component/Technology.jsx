import { BiLogoAdobe, BiLogoHtml5, BiLogoJavascript, BiLogoMicrosoft, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"

const Technology = () => {
  return (
    <div id="Technology" className="flex min-h-[70vh] w-full  flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white md:text-6xl ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div >
            <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
        <div >
            <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
        <div >
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
        <div >
            <BiLogoMicrosoft className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
        <div >
            <BiLogoHtml5 className="cursor-pointer text-[80px] text-white-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
        <div >
            <BiLogoAdobe className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:tranalate-y-5 sm-text-[100px] md:text-[120px]"/>
        </div>
      </div>
    </div>
  )
}

export default Technology
