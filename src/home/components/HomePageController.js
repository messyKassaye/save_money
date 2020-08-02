import React, {Component, Suspense} from 'react';
import Loading from "../../helpers/Loading";
import Home from "./Home";
import HomeDialog from "./HomeDialog";

class HomePageController extends Component {
    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <HomeDialog/>
                <Home/>
            </Suspense>
        );
    }
}

export default HomePageController;