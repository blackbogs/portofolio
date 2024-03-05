import About from '../about';
import Portofolio from '../portofolio';
import Contact from '../contact';

export default function Home() {

  return (
    <div class="w-screen h-screen bg-slate-600">
      <div class="flex flex row justify-around">

        <div class="w-screen h-screen pt-20 text-center">
            SECTION IMAGE
        </div>

        <div class="w-screen h-screen pt-20">
            <div class='mt-20 mr-20'>
                <p class='text-5xl font-Poppins text-white'>Hi, I'm Bogi.</p>
                <p class='text-end font-Poppins text-white mt-10'>Ingin membuat website idamanmu?</p>
                <p class='text-2xl text-end font-Poppins text-white'>Mari kita buat!!</p>
            </div>

            <div class='flex justify-around'>
            <button class="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10 hover:bg-white hover:text-black font-Poppins">Lets Go!</button>
            </div>
        </div>

      </div>
      <About/>
      <Portofolio/>
      <Contact/>
    </div>
    
  );
}
