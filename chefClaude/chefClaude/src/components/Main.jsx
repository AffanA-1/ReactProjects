import "../css/Main.css"
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../ai"

function Main() {

    const [ingredients, setIngredients] = useState([])
    const [ingredientInput, setIngredientInput] = useState()
    const [recipeGenerated, setRecipeGenerated] = useState('')

    const ingredientListItems = ingredients.map((ing, index) =>
        <li className="list-items" key={`${ing}-${index}`}>{ing}</li>
    )

    async function handleRecipeShown(){
        setRecipeGenerated( await getRecipeFromMistral(ingredients))
    }



    // form itself doesnt has value, the input has the value, so onchange we are fetchingf that value
    function handleOnChange(e) {
        setIngredientInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (ingredientInput.trim() !== "") {
            setIngredients(prev => [...prev, ingredientInput]);
            setIngredientInput("");
        }
    }

    return (<>
        <main>
            <div className="content-container">
                <form onSubmit={handleSubmit} className="search-Form">

                    <input type="text" className="ingredient-input" placeholder="e.g Oregano" value={ingredientInput} onChange={handleOnChange} />
                    <button className="search-btn" >Add Ingredients</button>

                </form>

                {ingredients.length > 0 && <IngredientList ingredientListItems={ingredientListItems} recipeGenerate={handleRecipeShown}/>}
                {recipeGenerated &&  <ClaudeRecipe recipeGenerated={recipeGenerated}/>}
               

            </div>
        </main>
    </>)
}


export default Main