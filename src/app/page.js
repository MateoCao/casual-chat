import ChatNow from './(components)/ChatNow'
import DescriptionSection from './(components)/DescriptionSection'
import GuideSection from './(components)/GuideSection'
import Hero from './(components)/Hero'

export default function Home () {
  return (
    <main className='w-full flex flex-col items-center'>
      <Hero />
      <DescriptionSection />
      <GuideSection />
      <ChatNow />
    </main>
  )
}
