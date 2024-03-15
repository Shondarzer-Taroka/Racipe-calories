import React from 'react';
import Header from '../Header/Header';
import Hero from '../Header/Hero/Hero';
import RecipesText from '../RecipesText/RecipesText';

const Container = () => {
    return (
        <section>
        
        <Header></Header>
        <Hero></Hero>
        <RecipesText></RecipesText>
        </section>
    );
};

export default Container;