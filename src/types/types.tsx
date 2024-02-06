import { Dispatch, SetStateAction } from 'react';

export type cardType = {
    unico: number,
    id: number,
    state: string
}
export type lastCard = {
    unico: number,
    id: number,
    state: string,
    index: number,
}

export type winParams = {
    restartGame:()=>void

}
export type ModeParamsType = {
    setScore: Dispatch<SetStateAction<number>>,
    restart: boolean,
    setRestart:Dispatch<SetStateAction<boolean>>,
    mode:string
}