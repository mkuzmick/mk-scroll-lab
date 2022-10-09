import ReactCompareImage from 'react-compare-image';

const ReactCompareDemo = () => {
  return (
    <div>
      <h1>image comparison</h1>
      <ReactCompareImage leftImage="/images/bb-sample.mp4-still-0005.png" rightImage="/images/bb-sample.mp4-still-0010.png" />
    </div>
  )
}

export default ReactCompareDemo;