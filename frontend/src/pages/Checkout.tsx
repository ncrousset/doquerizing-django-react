import Layout from "../components/Layout";
import Title from "../components/common/Title";
import OrderSummary from "../components/common/Shopping/Cart/OrderSummary";
import ListCart from "../components/common/Shopping/Cart/ListCart";

import CheckoutForm from "../components/common/Form/CheckoutForm";


const Checkout: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col flex-coljustify-center pb-10 md:space-y-0 ">
                <Title title="Checkout"></Title>
                <div className="flex flex-col-reverse md:flex-row ">
                    <div className="flex flex-col pr-5 w-full md:w-1/3 lg:w-1/2">
                        <CheckoutForm></CheckoutForm>
                    </div>
                    <div className="flex w-full md:w-2/3 flex-col lg:w-1/2 bg-gray-100 rounded">
                        <div className="px-5">
                            <ListCart></ListCart>
                        </div>
                        <div className="px-5 py-5" >
                            <OrderSummary button={false}></OrderSummary>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Checkout;