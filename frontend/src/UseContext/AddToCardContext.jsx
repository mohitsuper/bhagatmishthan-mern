import { createContext, useState } from "react";

export const AddToCardVal = createContext()


export function AddToCardProdvider(props){
    const [count, setCount] = useState(0);
    const [AddCardData,setAddCardData] = useState([])
    const [addCardOpen, setAddCardOpen] = useState(false);
    
    return(
        <AddToCardVal.Provider value={{count,setCount,AddCardData,setAddCardData,addCardOpen, setAddCardOpen}}>
            {props.children}
        </AddToCardVal.Provider>
    )
}