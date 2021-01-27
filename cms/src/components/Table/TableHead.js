function TableHead({organizerName}) {
  return (
    <thead>
      <tr>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">{organizerName}</th>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
      </tr>
    </thead>
  )
}

export default TableHead