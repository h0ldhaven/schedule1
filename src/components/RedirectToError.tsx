import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ErrorState } from '../interfaces/ErrorState';

export const RedirectToError: React.FC<ErrorState> = ({ errorStatus, errorMessage }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('*', {
            replace: true,
            state: { errorStatus, errorMessage }
        });
    }, [navigate, errorStatus, errorMessage]);

    return null;
};