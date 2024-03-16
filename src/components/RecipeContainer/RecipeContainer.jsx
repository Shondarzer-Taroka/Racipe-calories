import { useState } from "react";
import RecipeCart from "../RecipeCart/RecipeCart";
import Recipes from "../Recipes/Recipes";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const RecipeContainer = () => {
    // const notify = () => toast("Wow so easy !");
    const [selectRecipe, setSelectRecipe] = useState([])
    let [prepare, setPrepare] = useState([])
    function wantToCook(info) {
        // console.log(info);
        let alradyExist = selectRecipe.find(value => value.recipeId == info.recipeId)

        if (!alradyExist) {
            setSelectRecipe([...selectRecipe, info])
        }
        else {
            toast('alrady exist')
        }
    }

    function preparing(info) {

         setPrepare([...prepare,info])

         let alradyExist = prepare.find(value => value.recipeId == info.recipeId)

         if (!alradyExist) {
             setPrepare([...prepare, info])
         }

        //  console.log(prepare);
        //  console.log(info.recipeId);
        //  let id=info.recipeId
        // let stay= selectRecipe.filter(item=> item.recipeId != info.recipeId)
        // console.log(stay);
        // setSelectRecipe(stay)

        // selectRecipe.forEach(value=> {

        // if (value.recipeId == info.recipeId) {

        //   let idx= selectRecipe.indexOf(value)
        //   let i=selectRecipe.splice(idx,1)


        // }
        // console.log(arr);
        // })
        // console.log(selectRecipe.recipeId,info.recipeId);
        let filtering = selectRecipe.filter(value => value.recipeId != info.recipeId)
        // console.log(filtering);
        setSelectRecipe(filtering)
    }

    return (
        <section className="flex flex-col-reverse md:flex-row lg:flex-row justify-between">
            <aside>
                <Recipes wantToCook={wantToCook}></Recipes>
            </aside>
            {/*                side bar         */}
            <aside>
                <RecipeCart prepare={prepare} preparing={preparing} selectRecipe={selectRecipe}></RecipeCart>

            </aside>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default RecipeContainer;