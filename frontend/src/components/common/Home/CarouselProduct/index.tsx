import React, { useRef } from "react";
import Product from "./Product";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"

interface CarouselType {
    title: string,
    detail: string
}

const products = [
    {
        id: 1, 
        title: "Nike Air Force 1 '07",
        category: "Men's Shoes",
        img: "https://i.imgur.com/RQL19O6.jpeg",
        price: 45.01
    },
    {
        id: 2,
        title: "Nike Air Force 1 '07",
        category: "Men's Shoes",
        img: "https://i.imgur.com/QEGACen.jpeg",
        price: 45.01
    },
    {
        id: 3,
        title: "Nike Air Force 1 '07",
        category: "Men's Shoes",
        img: "https://i.imgur.com/Dm2pPfd.jpeg",
        price: 45.01
    },
    {
        id: 4,
        title: "Nike Air Force 1 '07",
        category: "Men's Shoes",
        img: "https://i.imgur.com/aCDF0yh.jpeg",
        price: 45.01
    },
    {
        id: 5,
        title: "Nike Air Force 1 '07",
        category: "Men's Shoes",
        img: "https://i.imgur.com/G45P8tI.jpeg",
        price: 45.01
    }
]

const CarouselProduct: React.FC<CarouselType> = ({ detail }) => {

    const container = useRef<HTMLDivElement>(null);

    const scrollToDiv = (toLeft:boolean): void => {
        const element: HTMLDivElement | null = container.current;

        if (element) {
            let toMove: number = 0;

            if (toLeft) {
                toMove = element.scrollLeft + element.clientWidth;
            } else  {
                toMove = element.scrollLeft - element.clientWidth;
            }

            element.scrollTo({
                left: toMove,
                behavior: 'smooth'
            });
        }
    }

    return (
            <div className="relative py-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">{detail}</h2>
                <div ref={container}
                    className="mt-3 flex flex-nowrap overflow-hidden gap-x-6  ">

                    {products.map((product) => (
                        <Product data={product} key={product.id}></Product>
                    ))}

                </div>

                <div className="absolute w-full bottom-44 sm:bottom-52 md:bottom-60">
                    <button onClick={():void=> {scrollToDiv(false)}}
                            className="z-10  px-3 py-3 bg-gray-500 opacity-30 rounded-full">
                        <FaArrowLeft className="font-bold text-2xl text-white"></FaArrowLeft>
                    </button>
                    <button onClick={():void=> {scrollToDiv(true)}}
                            className="float-right  z-10  px-3 py-3 bg-gray-500 opacity-30 transpa rounded-full">
                        <FaArrowRight className="font-bold text-2xl text-white"></FaArrowRight>
                    </button>
                </div>

            </div>
    );
};

export default CarouselProduct;
