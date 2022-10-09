import {useRef, useEffect, useState} from 'react';
import styles from './scroll-story-1.module.css';
import { Scrollama, Step } from 'react-scrollama';
import PoemMachine from '../anna/poem-machine'
import poems from '../../../data/poems/anna-poems'

const ScrollStory1 = (props) => {
    return (
        <div className={styles.container}>
            <PoemMachine poem={poems[0].text} insights={poems[0].insights}/>
        </div> 
    )
}

export default ScrollStory1