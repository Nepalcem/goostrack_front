// хук для отслеживания ширины экрана для изменения заголовков календаря
import { useEffect, useState } from 'react';

export const useResize = () => {
    const [width, setWidth] = useState(window.screen.width);
    useEffect(() => {
        const handleResize = event => {
            setWidth(event.target.screen.width);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // }, []);
    });
    return {
        width,
    };
};