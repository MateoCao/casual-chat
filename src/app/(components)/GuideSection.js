import Image from 'next/image'
import InfoList from '../(atoms)/InfoList'
import data from '../(data)/guideSection.json'
import img from '../(assets)/(imgs)/56557.jpg'

function GuideSection () {
  return (
        <section className="flex justify-center h-[calc(100vh/2)] items-center gap-4 w-4/6">
            <ul className="flex flex-wrap basis w-2/3 gap-3 list-none">
                {data.map((item, i) => (
                    <InfoList key={i} data={item} />
                ))}
            </ul>
            <div>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt=''
                />
            </div>
        </section>
  )
}

export default GuideSection
