import { winParams } from '@/types/types'
import React from 'react'

const win = ({restartGame}:winParams) => {


  return (
    <div className='w-[100vw] h-[100vh] z-10 bg-[#0e10156f] absolute flex items-center justify-center'>
        <div className=' flex flex-col items-center md:w-1/5 p-5 mx-5 bg-[#15181F] rounded-2xl gap-5'>
        <h1 className='text-5xl text-textYellow'>BUUH!!</h1>
        <h2 className='font-openS text-white font-thin'>Parabens, voce terminou esse jogo da memoria. Experimente jogar uma outra dificuldade ou jogue na mesma novamente.</h2>
        <button className='bg-bgRed rounded-md border border-textOrange text-white font-openS w-full p-2' onClick={restartGame}>Jogar Novamente</button>
        </div>
    </div>
  )
}

export default win