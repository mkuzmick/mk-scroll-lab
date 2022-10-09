import poemData from '../../../data/poems/anna-poems'
import PoemMachine from '../../../src/components/anna/poem-machine'

const Spacer = () => {
  return (
    <div style={{height: "50vh"}}></div>
  )
}

export default function Page() {
  return (
    <>
      { poemData.map(thisPoem => {
          return (
            <div>
              <PoemMachine poem={thisPoem.text} insights={thisPoem.insights}/>
              <Spacer />
            </div>
          )
        })
      }
    </>
  )
}