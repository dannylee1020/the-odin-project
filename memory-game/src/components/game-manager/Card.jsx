import { useState, useEffect } from 'react'
import ImgData from '../game-manager/ImgData';
import uniqid from 'uniqid'

const Card = (props) => {
    const [clickedCards, setClickedCards] = useState([]);

    const shuffle = (arr) => {
        let i = arr.length;
        while (i--) {
            const ri = Math.floor(Math.random() * i);
            [arr[i], arr[ri]] = [arr[ri], arr[i]];
        }
    }

    // takes effect when component is changed and after initial render
    useEffect(() => {
        shuffle(ImgData)
    })



    function handleClick(e) {
        const currentId = e.currentTarget.id;
        // check score
        if (!clickedCards.includes(currentId)) {
            setClickedCards(prev => (
                [
                    ...prev,
                    currentId
                ]
            ))

           props.incrementScore();

        } else {
            props.compareScore();
            props.resetScore();
            setClickedCards([]);
        }
    }



    return (
        <div className='flex flex-wrap justify-center'>
            {ImgData.map((item) => {
                return (
                    <div className='bg-white w-[250px] m-12' key={uniqid()} id={item.id} onClick= {handleClick}>
                        <img src={item.src} style={{width:'250px', height:'300px'}}></img>
                        <div className='text-black text-center h-8 font-bold text-lg p-1'>{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card