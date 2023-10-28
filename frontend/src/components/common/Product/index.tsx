import React from "react";

interface DataProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string
    };
    images: Array<string>;
}

interface Props {
    data: DataProduct;
}

const Product: React.FC<Props> = ({data}) => {
    return (
        <a key={data.id} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={data.images[0]}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{data.price}</p>
        </a>
    );
}

export default Product