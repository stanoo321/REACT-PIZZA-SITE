import React from "react";
import {FeatureContainer, FeatureButton} from "./FeaturedElements";




const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Stan Favorite</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
};

export default Feature;