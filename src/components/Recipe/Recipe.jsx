import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe,wantToCook}) => {
    let {recipeImage,recipeId,recipeName,description,ingredients,preparingTime,calories}=recipe
    // console.log(ingredients);
    return (
        // md:w-[330px] lg:w-[340px]
        // w-full   md:w-80 lg:w-80 xl:w-[350px] 

        <section>
            <div className="bg-base-100 rounded-2xl border-2 shadow-xl">
                <figure className="py-10 px-10 md:px-5 md:py-5 lg:px-5 lg:pt-5 xl:px-4 xl:py-4">
                    <img  src={recipeImage} alt="recipe" className="rounded-xl w-[400px] h-[200px]" />
                </figure>
                <div className="card-body items-left text-center">
                    <h2 className="card-title">{recipeName}</h2>
                    <p className='text-left'>{description}</p>
                    <hr className='bg-slate-600' />
                    <div id='ingredients' className='text-left h-36'>
                       
                       <h1 className="text-xl font-semibold hidden">Ingredients:  {ingredients.length} </h1>

                      {ingredients.map((value,indx)=><li className="pl-4 py-1" key={indx}>{value}</li>)}

                    </div>
                    <hr />
                    <div id='time-calories' className="flex gap-5">
                      <span className="flex gap-2 items-center"><MdOutlineWatchLater /> <span>{preparingTime} minutes</span> </span>
                      <span className="flex gap-2 items-center"><FaFire /> <span>{calories} calories</span> </span>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>wantToCook(recipe)} className="btn btn-info rounded-full px-5 bg-[#0BE58A] font-semibold">Want to Cook</button>
                         
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;