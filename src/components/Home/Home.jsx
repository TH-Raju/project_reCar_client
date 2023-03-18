import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import CertifySection from './CertifySection';
import Choose from './Choose';
import Contact from './Contact';
import Gallery from './Gallery';
import InfoSection from './InfoSection';
import Offer from './Offer';
import Review from './Review';
import States from './States';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <InfoSection></InfoSection>
            <Gallery></Gallery>
            <Choose></Choose>

            <CertifySection></CertifySection>
            <States></States>
            <Offer></Offer>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;