const Pagination = () => {
  return (
    <div className="flex justify-between">
        <button disabled className="disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 text-sm rounded-lg px-2 py-2 bg-slate-100 disabled">
                Prev
        </button>
        <div className="flex items-center gap-2">
            <button className="px-2 rounded-md bg-lamaSky text-sm text-gray-500">1</button>
            <button className="px-2 rounded-md text-sm text-gray-500">2</button>
            <button className="px-2 rounded-md text-sm text-gray-500">3</button>
            ...
            <button className="px-2 rounded-md text-sm text-gray-500">10</button>
        </div>
        <button className="text-gray-600 text-sm rounded-lg px-2 py-2 bg-slate-100 disabled">
                Next
        </button>
    </div>
  )
}

export default Pagination