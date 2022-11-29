import '../styles/globals.css'
import {Layout} from "../components/layouts/Layout";
import {Provider} from "react-redux";
import store from "../redux/store";

function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

const MainApp = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default MainApp
