import Layout from "../components/Layout";
import { Register as RegisterForm } from "../components/common/auth/Form/Register"

const Register: React.FC = () => {
    return (
    <Layout>
        <div className="relative md:mt-24 flex flex-col justify-center space-y-8  md:flex-row md:space-y-0">
            <div className="flex flex-col  p-8 md:p-14 ">
                <span className="mb-3 text-2xl font-bold">
                    ¡Regístrate Ahora!
                </span>   
                <span className="mb-3.text-xl text-gray-400 mb-8">
                    Descubre ofertas exclusivas y novedades. ¡Únete rápidamente a NSD!"
                </span>
                <RegisterForm></RegisterForm>                   
            </div> 
        </div>   
    </Layout>
    );
};

export default Register;