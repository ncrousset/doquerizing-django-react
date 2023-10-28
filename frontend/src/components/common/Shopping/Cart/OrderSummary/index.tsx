import React from "react";
import { Link } from "react-router-dom"

interface Props {
    button: boolean;
}

const OrderSummary: React.FC<Props> = ({ button }) => {
    return (
        <>
            <div className="mb-3 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex mb-3 justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Tax estimate</p>
                <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4"/>
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">$134.98</p>
                </div>
            </div>
            { button &&
                <Link to="/checkout">
                    <button className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                </Link>
            }
        </>
    )
}

export default OrderSummary;