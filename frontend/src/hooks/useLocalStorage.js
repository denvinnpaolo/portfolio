import { useState } from 'react';

export const useLocalStorage = (key, initalValue) => {
    //Gets item from local storage using key
    const item = JSON.parse(window.localStorage.getItem(key))


    // if there's an item with that key, it is then set to the stored value if not, initialValue variable
    // in the parameters is used
    const [storedValue, setStoredValue] = useState(item || initalValue);


    // This is where the key and value is stored in the local storage
    const setValue = value => {
        // saving in the local storage using 'key' variable as key
        window.localStorage.setItem(key, JSON.stringify(value));
        // this is the variable that will be returned to the component
        setStoredValue(value)
    }
    return [storedValue, setValue]
};