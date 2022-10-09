import {useRef, useEffect, useState} from 'react';
import styles from './scroll-story-1.module.css';
import { Scrollama, Step } from 'react-scrollama';
import { poem, insights } from './poem-and-insights.js'

const ScrollStory1 = (props) => {
    const [ currentStepIndex, setCurrentStepIndex ] = useState(null)
    const onStepEnter = ( {data} ) => {
        console.log(data)
        setCurrentStepIndex(data.index)
    }
    return (
        <div className={styles.container}>
            <div className={styles.scrollStory1} >
                <div className={styles.spacer}></div>
                <div className={styles.article}>
                <Scrollama onStepEnter={onStepEnter} offset={0.6}>
                    <Step data={{ term: "placeholder",  index: -1}} key={-1} >
                        <div className={styles.step} style={{height: "75vh"}}>
                            <h3></h3>
                            <p className={styles.note}></p>
                        </div>    
                    </Step>
                    {
                        insights.map((insight, i) => {
                            let stepData = { term: insight.word,  index: i}
                            return (
                                <Step data={stepData} key={i} >
                                    <div className={styles.step}>
                                        <h3>{insight.word}</h3>
                                        <p className={styles.note}>{insight.note}</p>
                                    </div>    
                                </Step>
                            )
                        })
                    }
                </Scrollama>
                </div>
                <div className={styles.stickyThing}>
                    <p>{poem}</p>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </div>
        
    )
}

export default ScrollStory1