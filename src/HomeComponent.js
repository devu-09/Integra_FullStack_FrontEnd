import React from 'react';
import LoginComponent from './LoginComponent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductComponent from './ProductComponent';
function HomeComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LoginComponent}></Route>
                        <Route exact path="/Books" component={ProductComponent}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}

export default HomeComponent;