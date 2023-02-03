import { ReactNode } from "react"

export type childrenProps = {
    children: ReactNode
}

export interface ContextProps {
    JogadorA: string;
    setJogadorA: ((nome: string) => void);

    jogadorB: string
    setJogadorB: ((nome: string) => void);
    
    JogadorC: string
    setJogadorC: ((nome: string) => void);
    
    jogadorD: string
    setJogadorD:((nome: string) => void);
}