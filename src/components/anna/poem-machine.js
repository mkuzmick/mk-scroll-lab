import {useRef, useEffect, useState, Fragment} from 'react';
import styles from './poem-machine.module.css';
import { Scrollama, Step } from 'react-scrollama';

const PoemWithHighlighting = ({poem, keyterm}) => {
    if (!keyterm) {
        return (
            <div>
                <p>{poem}</p>
            </div>
        )
    } else {
        let parts = poem.split(keyterm)
        return (
            parts.map((part, i) => {
                if ((i+1) < parts.length) {
                    return (
                        <Fragment key={i}>
                            <span>{part}</span><span className={styles.highlight}>{keyterm}</span>
                        </Fragment>
                    )
                } else {
                    return (
                        <span key = {i}>{part}</span>
                    )
                }
                
            })
        )
    } 
}

const PoemMachine = ({poem, title, author, insights}) => {
    const [ currentStepIndex, setCurrentStepIndex ] = useState(null)
    const [ keyterm, setKeyterm ] = useState(null)
    const onStepEnter = ( {data} ) => {
        console.log(data)
        setCurrentStepIndex(data.index)
        setKeyterm(data.term)
    }
    return (
        <div className={styles.container}>
            <div className={styles.scrollStory1} >
                <div className={styles.spacer}></div>
                <div className={styles.article}>
                <Scrollama onStepEnter={onStepEnter} offset={0.55}>
                    <Step data={{ term: "intro",  index: -1}} key={-1} >
                        <div className={styles.step} style={{height: "75vh"}}>
                        </div>    
                    </Step>                   
                    {
                        // map the insights array to steps
                        insights.map((insight, i) => {
                            let stepData = { term: insight.word,  index: i}
                            return (
                                <Step data={stepData} key={i} >
                                    <div className={ keyterm == insight.word ? styles.currentStep : styles.step }>
                                        <h3 className={styles.keyterm}>{insight.word}</h3>
                                        <p className={styles.note}>{insight.note}</p>
                                    </div>    
                                </Step>
                            )
                        })
                    }
                    <Step data={{ term: "outro",  index: 999}} key={999} >
                        <div className={styles.step} style={{height: "75vh"}}></div>    
                    </Step>
                </Scrollama>
                </div>
                <div className={styles.stickyThing}>
                    <h3 className={styles.poemTitle}>{title}</h3>
                    <PoemWithHighlighting poem={poem} keyterm={keyterm}/>
                    <p><i>- {author}</i></p>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </div>
        
    )
}

export default PoemMachine