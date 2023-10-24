import Character from "../types.js";



 const getCharacters = async (): Promise<Character> => {
const apiUrl = "https://swapi.dev/api/people/"
const response = await fetch(apiUrl);
const characterData = (await response.json()) as Character;

return characterData
}

export default getCharacters;

console.log(getCharacters)
