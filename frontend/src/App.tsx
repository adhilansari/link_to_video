
function App() {

  return (
    <>

      <main className="flex items-center justify-center mx-auto h-dvh px-4 gap-4 ">
        <div className="flex items-center justify-center flex-col gap-4">

          <h1 className="text-6xl font-extrabold bg-gradient-to-br from-emerald-400 to-sky-300 bg-clip-text text-transparent">URL to Video</h1>

          <form className="flex flex-col gap-4">
           
          <div className="m-4 p-1 rounded-full max-w-72 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <input className="p-3 w-full rounded-full focus:outline-none" type="text" id="name" placeholder="Enter Your Name"/>
</div>

            <button type="submit" className="m-4 p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
              <span className="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Generate</span>
            </button>
          </form>
        </div>

        <div className="p-8 bg-slate- flex items-center justify-center">
          <div className="bg-gray-200 w-[30rem] rounded-2xl p-4 h-[35rem]">right</div>

        </div>
      </main>

    </>
  )
}

export default App
