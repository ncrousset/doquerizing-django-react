import Header from "./Header";

type Props = {
    children: JSX.Element,
};

const Layout: React.FC<Props> = ({ children } : Props) => {
    return (
        <>
            <Header></Header>
            <div className=" bg-white justify-between items-center w-[92%] mx-auto">
                {children}
            </div>
        </>
    )
};

export default Layout;