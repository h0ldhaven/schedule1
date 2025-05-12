import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { RedirectToError } from './components/RedirectToError';

const App: React.FC = () => {
    return(
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path='/' element={<RedirectToError errorStatus={503} errorMessage='Cette page est en cours de construction, revenez plus tard'/>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;