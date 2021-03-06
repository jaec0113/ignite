import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

export default function Game({ game }) {

    const { 
        name, 
        released, 
        background_image, 
        id, 
        clip, 
        short_screenshots 
    } = game
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden"
        dispatch(loadDetail(id, short_screenshots))
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={background_image} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`
