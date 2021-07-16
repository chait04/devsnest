import { useState } from "react";

const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);
    
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = () => setState(state => !state)
    
    return [state, toggle]
}

export default useToggle