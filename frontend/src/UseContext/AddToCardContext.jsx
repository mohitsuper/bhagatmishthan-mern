import { createContext, useState } from "react";

export const AddToCardVal = createContext()


export function AddToCardProdvider(props){
    const [count, setCount] = useState(0);
    return(
        <AddToCardVal.Provider value={{count,setCount}}>
            {props.children}
        </AddToCardVal.Provider>
    )
}