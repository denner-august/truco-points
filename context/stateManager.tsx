import { createContext, useState } from "react";
import { ContextProps, childrenProps } from "../types/contextProps";

export const Context = createContext({} as ContextProps)

export function ContextProvider({ children }: childrenProps) {

    const [JogadorA, setJogadorA] = useState("")
    const [jogadorB, setJogadorB] = useState("")

    const [JogadorC, setJogadorC] = useState("")
    const [jogadorD, setJogadorD] = useState("")

    return (
        <Context.Provider value={{ JogadorA, setJogadorA, jogadorB, setJogadorB, JogadorC, setJogadorC, jogadorD, setJogadorD }}>
            {children}
        </Context.Provider>
    )
}