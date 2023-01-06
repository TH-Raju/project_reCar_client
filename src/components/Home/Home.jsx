import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import CertifySection from './CertifySection';
import Choose from './Choose';
import Contact from './Contact';
import InfoSection from './InfoSection';
import Review from './Review';
import States from './States';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <InfoSection></InfoSection>
            <Choose></Choose>
            <CertifySection></CertifySection>
            <States></States>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;