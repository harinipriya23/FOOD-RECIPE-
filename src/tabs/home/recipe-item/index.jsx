import {Link} from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";
import { useContext } from 'react';
import { GlobalContext } from '../../../context/context';

export default function RecipeItem({ item }) {
  const {handleClick,recipeDetails} = useContext(GlobalContext)
  return (
    <div className=" p-5 m-3 shadow-xl rounded-3xl w-80 lg:w-1/4 
    overflow-hidden md:m-10 border-2 border-slate-200">
      <div className=" h-52 w-full flex justify-center rounded-lg items-center
       overflow-hidden">
        <img className="block w-full h-full" src={item?.image_url} alt={item.title} />
      </div>
      <div className="m-2 font-prompt">
        <span className=" text-slate-600 font-medium text-sm ">{item?.publisher}</span>
        <h4 className="text-black truncate font-semibold text-lg">{item?.title}</h4>
        <div className='flex justify-between'><Link to={`/recipe-item/${item?.id}`}
        className=' bg-slate-800 shadow-lg mt-2 uppercase text-sm
         tracking-wider inline-block p-2 rounded-md hover:bg-slate-700
          text-white ' > recipe details</Link>
          <span className='mt-3' ><FaHeart onClick={()=>handleClick(item)}
          className='w-10 h-6 text-white hover:text-red-500 '  /></span></div>
      </div>
    </div>
  );
}
