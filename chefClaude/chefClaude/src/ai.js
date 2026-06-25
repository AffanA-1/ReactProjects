// import "dotenv/config"; 
import { Mistral } from "@mistralai/mistralai";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(import.meta.env.VITE_MISTRAL_API_KEY);
const client = new Mistral({
  apiKey: import.meta.env.VITE_MISTRAL_API_KEY,
});

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    // console.log(ingredientsString);

  try {
    const response = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
        }
      ]
    });
        console.log(response.choices[0].message.content);
    return response.choices[0].message.content
  } catch (err) {
     console.error(err.message)
     return "Sorry, An Error Occured."
  }
}


