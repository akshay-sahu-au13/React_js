import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header />
            {children}
        </div>
    )
}

export default Layout;