function Hero () {
  return (
    <section
    className="w-full h-[calc(100vh-48px)] bg-hero-img"
  >
    <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="flex flex-col gap-16 w-2/3 text-white">
        <h4 className="text-center text-6xl font-semibold">Encuentra nuevos amigos</h4>
        <p className="text-2xl text-center">Texto de relleno lorem ipsum dolor asiodwqiasd jiwq asi djwqo das dwq iod asijdowq kas jdiwq asdas k  asokdsaokdasodsao as das dsa sa sadsadkod wq dasod sa dopwq dkasd kowq ds</p>
        <button className="bg-sky-500 p-3 text-xl w-fit self-center rounded hover:bg-sky-600 duration-200">Get started</button>
      </div>
    </div>

  </section>

  )
}

export default Hero
