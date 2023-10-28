import React from "react";
import { Link } from 'react-router-dom';

const CheckoutForm: React.FC  = () => {
    return (
        <>
            <div className="py-3">
                <label htmlFor="email" className="block text-gray-700">Email address</label>
                <input
                    type="text"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                    name="name"
                    id="name"
                />
            </div>
            <div className="py-3">
                <label htmlFor="name-card" className="block text-gray-700">Name on card</label>
                <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full px-4 py-3 rounded-lg  mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                    name="name"
                    id="name"
                />
            </div>
            <div className="py-3">
                <label htmlFor="Card number" className="block text-gray-700">Card number</label>
                <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full px-4 py-3 rounded-lg  mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                    name="name"
                    id="name"
                />
            </div>

            <div className="py-3 flex gap-4 justify-between">
                <div className="w-2/3">
                    <label htmlFor="expiration-date" className="block text-gray-700">Expiration date (MM/YY)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                        name="expiration-date"
                        id="expiration-date"
                    />
                </div>
                <div className="w-1/3">
                    <label htmlFor="cvc" className="block text-gray-700">CVC</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                        name="name"
                        id="name"
                    />
                </div>
            </div>

            <div className="py-3">
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none"
                    name="address"
                    id="address"
                />
            </div>

            <div className="py-3 flex gap-2  ">
                    <input type="checkbox" name="is_same_billing_address"/>
                    <span className="font-semibold ">Billing address is the same as shipping address</span>
            </div>

            <div className="py-3">
                <Link to="/order-summaries">
                    <button className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-700"> Pay $300.00</button>
                </Link>

            </div>

        </>
    );
}

export default CheckoutForm;