import React from 'react';

import Layout from '../components/Layout';

import Carousel from '../components/common/Home/Carousel';
import CarouselProduct from '../components/common/Home/CarouselProduct';

const Home: React.FC = () => { 
    return (
        <Layout>
             <div className="flex flex-col  flex-coljustify-center md:space-y-0">
                <Carousel></Carousel>
                <CarouselProduct title="recomendados" detail="recomendados"></CarouselProduct>
                 <CarouselProduct title="new" detail="Nuevos lanzamientos"></CarouselProduct>
             </div>
        </Layout>
    );
};

export default Home;