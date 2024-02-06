'use client'
import { useEffect, useState } from "react";
import Mode from "./components/Mode";
import Win from "./modal/win";

export default function Home() {
  const [score, setScore] = useState(0)
  const [restart, setRestart] = useState(false)
  const [mode, setMode] = useState('easy')
  const [message, setMessage] = useState(3)

  const restartGame = () => {
    setScore(0)
    setRestart(true)
  }

  useEffect(() => {
    if (mode === 'easy') {
      setMessage(3)
    }
    else if (mode === 'medium') {
      setMessage(6)
    }
    else {
      setMessage(9)
    }

  })

  return (
    <main className="bg-main min-h-[100vh] flex flex-col items-center bg-black bg-cover p-4 md:px-64">
      {score === message && <Win restartGame={restartGame} />}
      <h1 className="text-[2em] md:text-[5em] m-2 text-textYellow tracking-wide text-center">Jogo da Memoria</h1>
      <div className="w-full flex justify-center relative ">
        <select className="bg-bgRed text-textOrange w-[50%] md:w-[15%] font-openS px-3 py-2 mb-5 rounded border border-textOrange " value={mode} onChange={(e) => setMode(e.target.value)}>
          <option className="font-openS" value={'easy'}>Nivel Fácil</option>
          <option className="font-openS" value={'medium'}>Nivel Médio</option>
          <option className="font-openS" value={'hard'}>Nivel Difícil</option>
        </select>
        <h2 className="text-textYellow absolute right-0 mr-5 text-2xl tracking-widest">{score}/{message}</h2>
      </div>

      <Mode setScore={setScore} restart={restart} setRestart={setRestart} mode={mode} />
    </main>
  );
}
