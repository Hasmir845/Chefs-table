

export default function Header() {
  return (
    
    <div className=" text-center md:flex justify-between items-center p-10 space-y-8 mb-16">
      <div>
        <h1 className="text-5xl font-bold">Chef&apos;s Table</h1>
      </div>
      <div>
        <ul className=" flex gap-4 text-2xl font-semibold justify-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Search</a></li>
        </ul>
      </div>
      <div>
        <div className=" flex items-center justify-center gap-3">
            <input  type="text" placeholder="search" className=" bg-gray-200 p-3 rounded-3xl placeholder-gray-600 placeholder:font-bold"  />
            <p><i className="fa-regular fa-user bg-green-600 w-10 h-10 flex items-center justify-center rounded-full"></i></p>
        </div>
      </div>
    </div>
  )
}
