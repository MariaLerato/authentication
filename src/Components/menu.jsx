import React from 'react';
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import SignIn from './signIn';
import SignUp from './signUp';

const Menu = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path={'signIn'} element={<SignIn/>}/>
                <Route exact path={'/'} element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </div>

  );
};
export default Menu
