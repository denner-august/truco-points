import { createContext, useState } from "react";
import { ContextProps, childrenProps } from "../types/contextProps";

export const Context = createContext({} as ContextProps)

export function ContextProvider({ children }: childrenProps) {

    const [JogadorA, setJogadorA] = useState("Denner")
    const [jogadorB, setJogadorB] = useState("marco")

    const [JogadorC, setJogadorC] = useState("marisa")
    const [jogadorD, setJogadorD] = useState("mayara")

    const [placarTimeA, setPlacarTimeA] = useState(0)
    const [placarTimeB, setPlacarTimeB] = useState(0)

    function verifyPlayers() {
        if (JogadorA !== "" && jogadorB !== "" && JogadorC !== "" && jogadorD !== "") {
            return true
        }

        false
    }

    return (
        <Context.Provider value={{ JogadorA, setJogadorA, jogadorB, setJogadorB, JogadorC, setJogadorC, jogadorD, setJogadorD, placarTimeA, setPlacarTimeA, placarTimeB, setPlacarTimeB, verifyPlayers }}>
            {children}
        </Context.Provider>
    )
}