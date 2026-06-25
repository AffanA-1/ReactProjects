import Markdown from 'react-markdown'
function ClaudeRecipe(props){
    return <section className="suggested-recipe-container">
                    <h2>Chef Claude Recommends:</h2>
                    <Markdown>
                    {props.recipeGenerated}
                    </Markdown>
                </section>
}


export default ClaudeRecipe