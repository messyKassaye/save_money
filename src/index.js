import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './themes/app_theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next';
import * as serviceWorker from './serviceWorker';
import {CssBaseline} from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./store";
import Interceptor from "./interceptors/Interceptor";
import AppProvider from "./context/AppProvider";
ReactDOM.render(
    <AppProvider>
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
                <CssBaseline>
                    <Interceptor/>
                    <App/>
                </CssBaseline>
            </I18nextProvider>
        </MuiThemeProvider>
    </Provider>
    </AppProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
