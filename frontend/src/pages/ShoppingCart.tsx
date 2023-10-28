import '../components/common/Shopping/Shopping.css';
import Layout from "../components/Layout";
import Title from "../components/common/Title";
import ListCart from "../components/common/Shopping/Cart/ListCart";
import OrderSummary from "../components/common/Shopping/Cart/OrderSummary";


const ShoppingCart: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col  flex-coljustify-center md:space-y-0">

                <Title title="Shopping Cart"></Title>

                <div className=" justify-between  md:flex md:space-x-6 xl:px-0">
                    <div className="list-items rounded-lg md:w-2/3">
                        <ListCart></ListCart>
                    </div>
                    <div className="mt-6 h-full rounded-lg bg-gray-100 p-6 md:mt-0 md:w-1/3">
                        <OrderSummary button={true}></OrderSummary>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart;