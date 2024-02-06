'use client'
import React, { useEffect, useState } from 'react'
import { ModeParamsType, cardType, lastCard } from '@/types/types'

const easyMode = ({ setScore,restart,setRestart,mode }: ModeParamsType) => {
    const [images, setImages] = useState<cardType[]>([])
    const [lastImage, setLastImage] = useState<lastCard | undefined>()
    const [maxClick, setMaxClick] = useState(false)

    useEffect(() => {
        if(restart){
            getImages()
            setRestart(false)
        }
    },[restart])

    useEffect(()=>{
        getImages()
    },[mode])


    const getImages = () => {
        const img=()=>{
            if(mode==='easy'){
                return [1, 1, 2, 2, 3, 3]
            }
            else if(mode==='medium'){
               return [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
            }
            else{
                return [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
            }
        }
        const images = img().map((item) =>
        (
            {
                unico: Math.random() * 1000,
                id: item,
                state: 'down'
            }
        ))
        images.sort(() => Math.random() - 0.5)
        setImages(images)
    }

    const handleOnClickCard = (item: cardType, index: number) => {
        if (!maxClick && lastImage?.unico !== item.unico && item.state==='down') {
            const newImages = images
            newImages[index] = { ...newImages[index], state: 'up' }
            setImages([...newImages])

            if (lastImage) {
                setMaxClick(true)
                if (!checkCards(item.id)) {
                    setTimeout(() => {
                        newImages[lastImage?.index] = { id: lastImage.id, unico: lastImage.unico, state: 'down' }
                        newImages[index] = { ...newImages[index], state: 'down' }
                        setImages(newImages)
                        setMaxClick(false)
                    }, 1500);
                }
                else {
                    setTimeout(() => {
                        setMaxClick(false)
                    }, 500);
                }

                setLastImage(undefined)
            }
            else {
                setLastImage({ ...item, index })
            }
        }
    }
    function checkCards(id: number) {
        if (id === lastImage?.id) {
            setScore((prevState) =>  (prevState+1))
            return true
        }
        return false
    }


    return (
        <div className={`grid grid-cols-3 md:grid-rows-2  ${mode==='easy'?'md:grid-cols-3':'md:grid-cols-6'} gap-5 min-h-full`}>
            {images.map((item, index) =>
                item.state == 'up' ?
                    <div className='bg-bgGray rounded-xl flex justify-center items-center cursor-pointer ' onClick={() => handleOnClickCard(item, index)} key={item.unico}>
                        <img src={`/imgs/${item.id}.png`} alt='image' />
                    </div>
                    :
                    <div className='bg-bgRed h-full p-10 md:p-16 flex justify-center items-center rounded-xl cursor-pointer hover:scale-105 duration-300 border border-textYellow' onClick={() => handleOnClickCard(item, index)} key={item.unico}>
                        <h1 className='text-5xl text-textYellow'>?</h1>
                    </div>
            )}
        </div>
    )
}

export default easyMode