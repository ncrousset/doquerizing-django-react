import Layout from "../components/Layout";
import {Login as LoginForm} from "../components/common/auth/Form/Login"

const Login: React.FC = () => {
    return (
        <Layout>
            <div className="relative md:mt-24 flex flex-col justify-center space-y-8  md:flex-row md:space-y-0">
                <div className="flex flex-col  p-8 md:p-14 ">
                    <span className="mb-3 text-2xl font-bold">
                        Login into account
                    </span>   
                    <span className="mb-3.text-xl text-gray-400 mb-8">
                        Use your credentials to access your account. 
                    </span>
                    <LoginForm></LoginForm>                   
                </div> 
            </div>   
        </Layout>
    )
}

export default Login;