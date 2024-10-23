
export default function Banner() {
  return ( 
    <div className=" bg-cover bg-no-repeat rounded-3xl w-full h-96 md:h-[600px] mb-10 bg-center"
    style={{
        backgroundImage: 'url(https://i.ibb.co.com/PtKR6bT/Rectangle-1.png)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
    }}
    >
        <div className=" flex items-center text-center flex-col w-9/12 mx-auto text-white space-y-5 md:space-y-16">
        <h1 className=" text-white text-4xl md:text-5xl text-center font-bold mt-5 md:mt-40">Discover an exceptional cooking class tailored for you</h1>
        <p className=" font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati cumque impedit beatae culpa labore, quaerat velit vel ducimus mollitia!.</p>
        </div>
        <div className=" mt-3 flex justify-center gap-5 md:mt-10">
        <button className=" text-white border-2 p-3 rounded-3xl hover:text-black hover:bg-green-500 font-bold hover:border-none">Explore Now</button>
        <button className=" text-white border-2 p-3 rounded-3xl hover:text-black hover:bg-green-500 font-bold hover:border-none">Our Feedback</button>
        </div>
    </div>
  )
}
