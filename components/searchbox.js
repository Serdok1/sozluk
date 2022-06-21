
function SearchBox() {

  return (
    <div>
      <form className="flex flex-col" onSubmit="{submitContact}">
        <label className="relative block mb-4 h-16 w-24 sm:w-96 xl:w-searchbox">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gray">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-full border rounded-3xl py-2 pl-9 pr-3 shadow-lg focus:outline-none focus:ring-1 sm:text-sm" placeholder="Sözlük'te Ara..." type="text" name="gts" />
        </label>
      </form>
    </div>
  )
}

export default SearchBox;