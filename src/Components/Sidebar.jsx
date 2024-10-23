

export default function Sidebar({cook, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) {
  return (
    <div className=" mb-10 w-96 md:w-full lg:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      
      {/* want to cook table */}
      <div className="">
        <h2 className=" border-b-2 mx-auto font-semibold text-2xl text-gray-700 text-center p-2"> Want To Cook : {cook.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        cook.map((recipe, idx) => (
            <tr key={idx} className="hover">
        <th>{idx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=> {
            handleRemove(recipe.recipe_id)
            calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
            }
        } className=" btn bg-green-400 rounded-full px-2 md:px-6 text-gray-700 font-medium">Preparing</button></td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>


        {/* currently cooking table */}
        <div className="">
        <h2 className=" border-b-2 mx-auto font-semibold text-2xl text-gray-700 text-center p-2"> Currently Cooking : {preparedRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
        preparedRecipe.map((recipe, idx) => (
            <tr key={idx} className="hover">
        <th>{idx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>
        ))
      }
      <tr className=" border-none">
      <th></th>
        <td></td>
        <td>Total Time = {totalTime}</td>
        <td>Total Calories = {totalCalories}</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}
