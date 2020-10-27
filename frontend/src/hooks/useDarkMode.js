import { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = initalValue => {
    const [storedValue, setStoredValue] = useLocalStorage('darkModeToggler', initalValue);

    useState(()=>{
        if(storedValue === true){
            return( document.getElementById('container').classList.add('dark-mode'));
        } else {
            return( document.getElementById('container').classList.remove('dark-mode'));
        }
    }, [storedValue]);


    const setValue = e => {
        return setStoredValue(!storedValue)
    }

    return [storedValue, setValue]
}

