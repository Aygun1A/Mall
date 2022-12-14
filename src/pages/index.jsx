import './style.css';

import 'antd/dist/reset.css';
import { Button, Result} from 'antd';


import {BrowserRouter,Routes,Route,Navigate,Outlet,Link} from 'react-router-dom';

import Home from './Home';
import Cabinet from './Cabinet';
import SignUp from './SignUp';

const App =()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path='cabinet' element={<Cabinet/>}/>
                    <Route path='signup' element={<SignUp/>}/>

                    <Route path='*' element={<Navigate to='/404'/>} />

                    </Route>

                    <Route path='*' element={<Navigate to='/404'/>} />

                <Route path='404'element={<Result
                    status="404"
                    title="ERROR 404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to='/'><Button type="primary">Back Home</Button></Link>}
                />} />
                
            </Routes>

        </BrowserRouter>
    )
}
export default App;