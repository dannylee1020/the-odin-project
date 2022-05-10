import { useState } from 'react'
import Header from  './components/layout/Header'
import Card from './components/game-manager/Card'

function App () {

    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const incrementScore = () => {
        setCurScore(curScore + 1)
    }

    const compareScore = () => {
        if (curScore > bestScore) {
            setBestScore(curScore)
        } else {
            return
        }
    }

    const resetScore = () => {
        setCurScore(0);
    }


    return (
        <div className='bg-[#10182A] h-full'>
            <Header curScore={curScore} bestScore={bestScore}></Header>
            <Card incrementScore = {incrementScore} compareScore = {compareScore} resetScore={resetScore}></Card>
        </div>
    )
}

export default App