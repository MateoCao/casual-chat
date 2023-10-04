import ChatNow from './(components)/ChatNow'
import DescriptionSection from './(components)/DescriptionSection'
import Footer from './(components)/Footer'
import GuideSection from './(components)/GuideSection'
import Hero from './(components)/Hero'
import Navbar from './(components)/Navbar'

export default function Home () {
  return (
    <div>
      <Navbar />
      <main className='w-full flex flex-col items-center'>
        <Hero />
        <DescriptionSection />
        <GuideSection />
        <ChatNow />
      </main>
      <Footer />
    </div>

  )
}
