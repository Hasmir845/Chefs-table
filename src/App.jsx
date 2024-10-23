import { useState } from "react"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import OurRecipies from "./Components/OurRecipies"
import Recipes from "./Components/Recipes"
import Sidebar from "./Components/Sidebar"


function App() {

  const [cook, setCook] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleCook = (recipe) =>{
    const isExist = cook.find(
      previousRecipe =>  previousRecipe.recipe_id ===recipe.recipe_id
    )
    if(!isExist){
      setCook([...cook,recipe]);
    }
    else{
      alert('Recipe Already Added');
    }
  }

  const handleRemove = (id)=>{
    const deletedRecipe = cook.find(recipe => recipe.recipe_id === id)

    const updated = cook.filter(recipe => recipe.recipe_id !== id)
    setCook(updated);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  }

  const calculateTimeAndCalories = (time, calories) =>{
      setTotalTime(totalTime+time);
      setTotalCalories(totalCalories+calories);
  }

  return (
    <>
      <div className="w-11/12 mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipies></OurRecipies>
      <section className=" flex flex-col lg:flex-row gap-6">
        <Recipes handleCook ={handleCook}></Recipes>
        <Sidebar handleRemove ={handleRemove} cook = {cook} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Sidebar>
      </section>
      </div>
    </>
  )
}

export default App
