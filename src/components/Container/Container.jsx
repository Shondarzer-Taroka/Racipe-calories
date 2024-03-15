import React from 'react';
import Header from '../Header/Header';
import Hero from '../Header/Hero/Hero';
import RecipesText from '../RecipesText/RecipesText';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

const Container = () => {
    return (
        <section>
        
        <Header></Header>
        <Hero></Hero>
        <RecipesText></RecipesText>
        <RecipeContainer></RecipeContainer>
        </section>
    );
};

export default Container;