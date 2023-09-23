function InfoList ({ data }) {
  return (
    <li className="w-5/12">
        <h4 className="text-xl text-sky-500 w-5/6 font-semibold">{data.number}. {data.title}</h4>
        <p className="w-5/6 ml-1 mt-1 text-gray-700">{data.description}</p>
    </li>
  )
}

export default InfoList
