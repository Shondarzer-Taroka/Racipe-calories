import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({wantToCook}) => {
    let [recipe,setRecipe]=useState([])


    useEffect(()=>{
        fetch('/recipes.json')
        .then(res=> res.json())
        .then(data=> setRecipe(data))
    },[])
    return (
        <div className='grid  md:gap-1 lg:gap-5 md:justify-items-center md:justify-center md:grid-cols-2 lg:grid-cols-2 gap-2'>
            {recipe.map((value,indx)=> <Recipe wantToCook={wantToCook} key={indx} recipe={value}></Recipe>)}
        </div>
    );
};

export default Recipes;