import InfoBox from '../(atoms)/InfoBox'
import data from '../(data)/descSection.json'

function DescriptionSection () {
  return (
        <section className="flex flex-col items-center w-full justify-center gap-10 h-[calc(100vh/2)] bg-gray-50">
            <div className="">
              <h3 className="text-sky-500 text-4xl font-semibold">¿Cómo funciona?</h3>
            </div>
            <ul className="flex gap-5 list-none">
              {data.map((item, i) => (
              <InfoBox key={i} data={item} />
              ))}
            </ul>
        </section>
  )
}

export default DescriptionSection
