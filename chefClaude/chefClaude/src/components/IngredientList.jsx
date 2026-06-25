function IngredientList(props){
    return <>
         <section>
                    <div className="ingredient-section">
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredients-list" aria-live="polite">{props.ingredientListItems}</ul>
                    </div>
                    <div className="get-recipe-container">
                        {/* attached the Ref Succesfully through the State */}
                        <div ref={props.sendRef} className="recipe-confirm">
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.recipeGenerate}>Get a recipe</button>
                    </div>
                </section>
    </>
}

export default IngredientList