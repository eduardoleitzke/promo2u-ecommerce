import { SearchInput } from "./styles";
import {MagnifyingGlass} from 'phosphor-react'
import { useState, useContext, FormEvent } from "react";

import { useRouter } from 'next/router'
export default function Search(){
    const router = useRouter()
    const [searchValue, setSearchValue] = useState('')

    function handleSearchList(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        router.push(`/busca/${searchValue}`)
    }
    return (
        <form onSubmit={(e)=>handleSearchList(e)}>
            <SearchInput  >
                <input type="text" onChange={(e)=>setSearchValue(e.target.value)} placeholder="Busque pelo acessório" />
                <MagnifyingGlass size={24}/>
            </SearchInput>
        </form>
    )
}