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
       
        else{ 
            
            return toast('alrady exist')
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
    //    flex gap-3 flex-col-reverse md:flex-col-reverse lg:flex-row justify-between
        <section className="grid gap-5 grid-cols-1 lg:grid-cols-[_60%_1fr]">
            {/*  lg:w-[60%]*/}
            <aside className="w-full ">
                <Recipes wantToCook={wantToCook}></Recipes>
            </aside>
            {/*                side bar         */}
            <aside className="row-start-1 row-end-2 ... lg:col-start-2 lg:col-end-3">
                {/*  lg:w-[38%]*/}
                <RecipeCart prepare={prepare} preparing={preparing} selectRecipe={selectRecipe}></RecipeCart>

            </aside>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default RecipeContainer;