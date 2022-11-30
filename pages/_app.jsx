import '../styles/globals.css'
import {Layout} from "../components/layouts/Layout";
import {Provider} from "react-redux";
import store from "../redux/store";

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        </Layout>
    )
}


export default MyApp
