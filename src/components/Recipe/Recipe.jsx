import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe }) => {
    let {recipeImage,recipeId,recipeName,description,ingredients,preparingTime,calories}=recipe
    console.log(ingredients);
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipeImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-center">
                    <h2 className="card-title">{recipeName}</h2>
                    <p className='text-left'>{description}</p>
                    <hr className='bg-slate-600' />
                    <div id='ingredients' className='text-left'>
                      
                      {ingredients.map((value,indx)=><li key={indx}>{value}</li>)}

                    </div>
                    <hr />
                    <div id='time-calories' className="flex gap-5">
                      <span className="flex gap-2 items-center"><MdOutlineWatchLater /> <span>minutes</span> </span>
                      <span className="flex gap-2 items-center"><FaFire /> <span>calories</span> </span>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-info rounded-full px-5 bg-[#0BE58A] font-semibold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;