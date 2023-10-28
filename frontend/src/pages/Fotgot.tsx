import Layout from "../components/Layout";
import {Fotgot as FotgotForm} from "../components/common/auth/Form/Fotgot"

const Login: React.FC = () => {
    return (
        <Layout>
            <div className="relative md:mt-24 flex flex-col justify-center space-y-8  md:flex-row md:space-y-0">
                <div className="flex flex-col  p-8 md:p-14 ">
                    <span className="mb-3 text-2xl font-bold">
                    Recuperar Contraseña
                    </span>   
                    <span className="mb-3.text-xl text-gray-400 mb-8">
                    Ingresa tu dirección de correo electrónico a continuación. Te enviaremos un enlace para restablecer tu contraseña.
                    </span>
                    <FotgotForm></FotgotForm>                   
                </div> 
            </div>   
        </Layout>
    )
}

export default Login;