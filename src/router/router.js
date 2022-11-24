import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { myRoutes } from './my-routes';
import Layout from '../layout/layout';
import { Page404, SignIn } from '../screens';
import { SplashScreen } from '../components';
import { storeUser } from '../store/reducer';

export default function Router() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const _isLogged = useSelector((state) => state.storeReducer.isLogged);

    React.useEffect(() => {
        setTimeout(() => {
            let user=localStorage.getItem('user');
            if(user){
                dispatch(storeUser());
            }
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {
                isLoading ?
                    <SplashScreen />
                    :
                    <>
                        <Routes>
                            <Route
                                path="/sign-in"
                                element={
                                    <CheckUser flag={_isLogged}>
                                        <SignIn />
                                    </CheckUser>
                                }
                            />
                            {myRoutes.map((_v, _i) => {
                                return (
                                    <Route
                                        key={_i}
                                        path={_v.path}
                                        exact
                                        element={
                                            <ProtectedRoute flag={_isLogged} layout={_v.layout}>
                                                {_v.element}
                                            </ProtectedRoute>
                                        }
                                    />
                                );
                            })}
                            <Route
                                path="*"
                                element={
                                    <Page404 />
                                }
                            />
                        </Routes>
                    </>
            }
        </>
    );
}

const ProtectedRoute = ({ flag, layout, children }) => {
    if (!flag) {
        return <Navigate to="/sign-in" replace />;
    }
    if (layout) {
        return (
            <Layout children={children} />
        );
    }
    return children;
};

const CheckUser = ({ flag, children }) => {
    if (flag) {
        return <Navigate to="/" replace />;
    }
    return children;
};