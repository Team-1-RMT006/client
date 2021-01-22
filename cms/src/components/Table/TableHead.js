function TableHead({organizerName}) {
  return (
    <thead>
      <tr>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-red-900 bg-red-300"></th>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-red-900 bg-red-300">{organizerName}</th>
        <th className="w-1/3 sticky top-0 px-6 py-3 text-red-900 bg-red-300"></th>
      </tr>
    </thead>
  )
}

export default TableHead