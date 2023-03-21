import { createContext, ReactNode, useEffect, useState } from "react";
import { IProductProps } from "../@types/props";
interface ISearchContextProviderProps{
    children: ReactNode
}

interface verifyTokenContextType{
    filtredList: IProductProps[]
    handleSetFiltredList: (filtred:IProductProps[]) => void
}

export const SearchContext = createContext({} as verifyTokenContextType)

export function SearchContextProvider({children}:ISearchContextProviderProps){
    const [filtredList, setFiltredList] = useState([] as IProductProps[]) 

    function handleSetFiltredList(filtredData:IProductProps[]){
        setFiltredList(filtredData)
    }

    return(
        <SearchContext.Provider value={{filtredList, handleSetFiltredList}}>
            {children}
            
        </SearchContext.Provider>
    )
}