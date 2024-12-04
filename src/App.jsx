import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Technology from "./component/Technology"
import Projects from "./component/Projects"
import Contact from "./component/Contact"
function App(){
  return (
    <>
    <div class="relative h-full w-full bg-neutral-900"><div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-white' >
      <Navbar/>
      <Hero/>
      <Technology/>
      <Projects/>
      <Contact/>
    </main>
    </>
  )
}

export default App
