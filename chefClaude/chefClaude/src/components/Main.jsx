import "../css/Main.css"
import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../ai"

function Main() {

    const [ingredients, setIngredients] = useState([])
    const [ingredientInput, setIngredientInput] = useState()
    const [recipeGenerated, setRecipeGenerated] = useState('')

    // Adding useRef
    const recipeSectionRef = useRef()

    // With the Ref, we want to use useEffect as well, to see if the recipe is generated, we would scroll down to that page immediately
    useEffect(()=>{

        if(recipeGenerated !== ''){
            // make use of the ref to control it and move to that section
            recipeSectionRef.current.scrollIntoView({behavior: 'smooth'})
        }

        // the dependency is what makes the useEffect being called
    }, [recipeGenerated])

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

                {ingredients.length > 0 && <IngredientList sendRef={recipeSectionRef} ingredientListItems={ingredientListItems} recipeGenerate={handleRecipeShown}/>}
                {recipeGenerated &&  <ClaudeRecipe recipeGenerated={recipeGenerated}/>}
               

            </div>
        </main>
    </>)
}


export default Main