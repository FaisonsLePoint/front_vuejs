/** Import des modules nécessaires */
import Axios from './caller.service'


let getAllCocktails = () => {
    return Axios.get('/cocktails')
}

let getCocktail = (cid) => {
    return Axios.get('/cocktails/'+cid)
}

let updateCocktail = (cocktail) => {
    return Axios.patch('/cocktails/'+cocktail.id, cocktail)
}

let createCocktail = (cocktail) => {
    return Axios.put('/cocktails', cocktail)
}

let deleteCocktail = (cid) => {
    return Axios.delete('/cocktails/'+cid)
}

export const cocktailService = {
    getAllCocktails,
    getCocktail,
    updateCocktail,
    createCocktail,
    deleteCocktail,
}