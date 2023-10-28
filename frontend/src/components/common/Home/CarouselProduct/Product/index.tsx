interface DataProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
}

interface Props {
    data: DataProduct;
}

const Product: React.FC<Props> = ({ data }) => {
    return (
        <div className="group relative w-1/2  md:w-1/4 flex-none">
            <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={data.img} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {data.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{data.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${data.price}</p>
            </div>
        </div>
    );
};

export default Product;