import { Link } from "react-router-dom";

const Carousel: React.FC = () => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ]

    const backgroundStyle: React.CSSProperties = {
        background: `url("${slides[0].url}")`,
        backgroundPosition:'50% 50%',
        backgroundSize: 'cover',
      };
    

    return (
        <div  
            className="max-w-[1400px] h-[400px] w-full m-auto relative" >  
            <div style={backgroundStyle} 
                className="w-full h-full bg-center  bg-cover duration-500">
            </div>
            <Link to="/s/trends" className="relative bottom-10 left-[78%]  md:left-[92%] 
            bg-black text-white px-3 py-2 rounded-full">Shop</Link>
        </div>
    );
};

export default Carousel;