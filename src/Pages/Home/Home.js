import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Info from './Info/Info';
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div></div>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;