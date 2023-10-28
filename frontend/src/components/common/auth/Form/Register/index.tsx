import { Link } from "react-router-dom"

const Register: React.FC = () => {
    return (
        <>
            <div className="py-3"> 
                <label htmlFor="email" className="block text-gray-700">Nombre Completo</label>
                <input 
                    type="text" 
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none" 
                    name="name"
                    id="name" 
                    />
            </div>

            <div className="py-3"> 
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                     focus:border-blue-500 focus:bg-white focus:outline-none" 
                    name="email"
                    id="email" 
                    />
            </div>
            <div className="py-3">  
                <label htmlFor="password" className="block text-gray-700">
                Password
                </label>
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg
                    bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" 
                    name="password"
                    id="password" 
                    />
            </div>

            <div className="py-3">  
                <label htmlFor="password2" className="block text-gray-700">
                Repetir Password
                </label>
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg
                    bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" 
                    name="password2"
                    id="password2" 
                    />
            </div>

            <div className="flex mt-6  items-center justify-between">
                <button className="bg-red-500 hover:bg-red-700 text-white 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Registrarse
                </button>
                <Link to="/fotgot" className="inline-block align-baseline font-bold text-sm
                 text-gray-600 hover:text-gray-900">Fotgot Password?</Link>
            </div>

          
        </>
    );
};

export { Register };