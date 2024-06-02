import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../home/recipe-item";

export default function Favourites () {
    const { favouritesList } = useContext(GlobalContext);
   return (
    <div>
      <div className="flex justify-center flex-wrap">
        {favouritesList && favouritesList.length > 0 ? (
          favouritesList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <h1 className="text-xl m-10 text-slate-600 lg:text-3xl font-extrabold font-prompt capitalize text-center">
              no favourite recipe items found..
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}