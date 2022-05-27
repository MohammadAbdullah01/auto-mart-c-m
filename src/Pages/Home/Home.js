import React from 'react';
import Banner from './Banner';
import Best from './Best';
import Offer from './Offer';
import Parts from './Parts';
import UserReviews from './UserReviews';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Parts></Parts>
            <Best></Best>
            <UserReviews></UserReviews>
            <Offer></Offer>
        </div>
    );
};

export default Home;