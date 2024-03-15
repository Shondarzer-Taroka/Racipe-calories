import RecipeCart from "../RecipeCart/RecipeCart";
import Recipes from "../Recipes/Recipes";


const RecipeContainer = () => {
    return (
        <section>
            <aside>
         <Recipes></Recipes>
            </aside>
 {/*                jhjhggkgj         */}
            <aside>
  <RecipeCart></RecipeCart>
            </aside>
        </section>
    );
};

export default RecipeContainer;