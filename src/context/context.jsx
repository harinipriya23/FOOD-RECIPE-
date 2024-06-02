import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const GlobalContext = createContext(null);
export default function GlobalStateContext({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeData(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        console.log(recipeData);
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParams("");
    }
  }
  function handleAddToFavourites(currentItem) {
    console.log(currentItem);
    let cpyFavouritesList = [...favouritesList]
    const index = cpyFavouritesList.findIndex(item=> item.id === currentItem.id)

    if(index === -1) {
      cpyFavouritesList.push(currentItem)
    }
    else{
      cpyFavouritesList.splice(index)
    }
    setFavouritesList(cpyFavouritesList)
  }
  console.log(favouritesList)
  
  function handleClick (currentItem){
    console.log(currentItem);
    let cpyFavouritesList = [...favouritesList]
    const index = cpyFavouritesList.findIndex(item=> item.id === currentItem.id)

    if(index === -1) {
      cpyFavouritesList.push(currentItem)
    }
    else{
      cpyFavouritesList.splice(index)
    }
    setFavouritesList(cpyFavouritesList)
 
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        recipeData,
        loading,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavourites,
        favouritesList,
        setFavouritesList,
        handleClick
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
