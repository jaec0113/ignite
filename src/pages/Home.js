import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gameActions'
import Game from '../components/Game'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Home() {
    //Fetch games
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch])
    //Extract data from state
    const { popular, newGames, upcoming} = useSelector((state) => state.games)
    return (
        <Gamelist>
           <h2>Upcoming Games</h2>
            <Games>
                {upcoming && (upcoming.map((game) => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
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