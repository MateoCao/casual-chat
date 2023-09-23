function InfoBox ({ data }) {
  return (
    <li className='flex justify-center flex-col text-center bg-white shadow-lg rounded p-2 w-1/3 max-w-md  gap-2 h-72  '>
        <h5 className='text-2xl font-semibold text-sky-400'>{data.title}</h5>
        <p className='text-lg text-black'>{data.description}</p>
    </li>
  )
}

export default InfoBox
