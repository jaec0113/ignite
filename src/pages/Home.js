import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gameActions'
import Game from '../components/Game'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'


export default function Home() {
    //Fetch games
    const location = useLocation()
    const pathId = location.pathname.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch])
    //Extract data from state
    const { popular, newGames, upcoming} = useSelector((state) => state.games)
    return (
        <Gamelist>
            {pathId && <GameDetail />}
           <h2>Upcoming Games</h2>
            <Games>
                {upcoming && (upcoming.map((game) => (
                    <Game 
                        game={game}
                        key={game.id}
                    />
                )))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular && (popular.map((game) => (
                    <Game 
                        game={game}
                        key={game.id}
                    />
                )))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames && (newGames.map((game) => (
                    <Game 
                        game={game}
                        key={game.id}
                    />
                )))}
            </Games>
        </Gamelist>
    )
}

const Gamelist = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`