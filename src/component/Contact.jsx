
const Contact = () => {
  return (
    <div id="#Contact" className="flex min-h-[70vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-3 space-y-5 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
        <span className="bg-gradient-to-r from-indigo-500 t0-blue-500 bg-clip-text text-transparent"> Get In Touch</span>
        </h1>
        <p className="text-center text-lg font-semibold text-grey-500">Send me an Email through the button below</p>
        <a href="mailto:hademolarahmon@gmail.com" className="text-nowrap rounded-lg border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lndigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-700">Contact</a>
         </div>
    </div>
  )
}

export default Contact
