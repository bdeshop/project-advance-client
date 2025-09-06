import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import AllGames from '../../components/AllGames/AllGames';
import AllGames2 from '../../components/AllGames2/AllGames2';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <AllGames2></AllGames2>
           <AllGames></AllGames>
        </div>
    );
};

export default Home;