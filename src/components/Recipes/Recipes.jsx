import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    let [recipe,setRecipe]=useState([])


    useEffect(()=>{
        fetch('/recipes.json')
        .then(res=> res.json())
        .then(data=> setRecipe(data))
    },[])
    return (
        <div>
            {recipe.map((value,indx)=> <Recipe key={indx} recipe={value}></Recipe>)}
        </div>
    );
};

export default Recipes;