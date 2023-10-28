import React from "react";
import Layout from "../components/Layout";
import Title from "../components/common/Title";

const OrderSummaries: React.FC = () => {
    return (
        <Layout>
            <>
            
            <div className="flex flex-col flex-coljustify-center pb-10 md:space-y-0 ">
                <Title title="Order Details"></Title>
                <div className="flex justify-between flex-row">
                    <div className="flex  flex-col md:flex-row">
                        <span>Order number W086438695 </span>
                        <span className="hidden md:block mx-2">-</span>
                        <span>Date March 22, 2021</span>
                    </div>
                    <span className="hidden md:block">View invoice →</span>
                </div>
            </div>
            <hr/>
            {/*componente de detaills*/}
            <div className="flex flex-col md:flex-row justify-between w-full gap-6">
                <div className="w-full md:w-1/3 p-5 pl-0">
                    <img className="rounded-md w-32  md:w-full" src="https://i.imgur.com/OLKMwgP.jpeg" alt=""/>
                </div>
                <div className="w-2/3 h-auto">
                    <div className="h-2/3 flex flex-col gap-5 pt-5 justify-between">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Rainfall Artwork Tee</span>
                            <span className="font-semibold text-gray-700 ">$36.00</span>
                        </div>

                        <div className="flex flex-col my-5">
                            <span className="font-semibold text-gray-700 mb-3">Delivery address</span>
                            <span className="text-gray-600">Floyd Miles</span>
                            <span>7363 Cynthia Pass</span>
                            <span>Toronto, ON N3Y 4H8</span>
                        </div>
                    </div>

                    <div className="h-1/3 flex flex-col mt-10 ">
                        Shippend on March 23, 2021
                        <span className="md:hidden"><b>State now:</b> Shipped</span>

                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 hidden md:block">
                            <div className="bg-red-600 hidden md:block h-2.5 rounded-full w-3/4"></div>
                            <div className="flex justify-between mt-2 ">
                                <div className="text-center font-bold text-red-600 w-1/4">Order placed</div>
                                <div className="text-center font-bold text-red-600 w-1/4">Processing</div>
                                <div className="text-center font-bold text-red-600 w-1/4">Shipped</div>
                                <div className="text-center w-1/4">Delivered</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </>
        </Layout>
    );
}

export default OrderSummaries