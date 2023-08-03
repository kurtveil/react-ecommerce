import { ReactNode, createContext, useContext } from "react";

type ShoppingCartroviderProps = {
    children: ReactNode
}
const ShoppingCartContext = createContext({});

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    return (
    <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
