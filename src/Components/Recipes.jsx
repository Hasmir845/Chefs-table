import { useEffect, useState } from "react";

export default function Recipes({handleCook}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('./recipies.json')
        .then(res=> res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div className=" lg:w-2/3">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            recipes.map(recipe=>(
                <div className=" card bg-base-100 w-96 border-2" key={recipe.recipe_name}>
  <figure className=" px-8 pt-6">
    <img className=" w-full h-52 rounded-2xl"
      src={recipe.recipe_image}
      alt="images" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl text-gray-700 font-medium">{recipe.recipe_name}</h2>
    <p className=" text-gray-500 text-base">{recipe.short_description}</p>
    <h3 className=" text-lg text-gray-700 font-medium">Ingredients: {recipe.ingredients.length}</h3>
    <ul className=" ml-8">
                {
                    recipe.ingredients.map((item, idx)=><li key={idx} className=" list-disc text-gray-500">{item}</li>)
                }
    </ul>
    <div className=" flex gap-4">
        <div className=" flex items-center gap-2"><i className="fa-regular fa-clock text-2xl"></i>
        <p>{recipe.preparing_time} Min</p>
        </div>
        <div className=" flex items-center gap-2"><i className="fa-solid fa-fire-flame-curved text-2xl"></i>
        <p>{recipe.calories} Calories</p>
        </div>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleCook(recipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-700 mt-5 font-medium">Want To Cook</button>
    </div>
  </div>
</div>
            ))
        }
      </div>
    </div>
  )
}
