import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import MindARViewer from '../../widgets/mindar-viewer';


const TopicItem = () => {
    const location = useLocation();
    const { topic, children } = location.state || {};
    const [started, setStarted] = useState(null);

    return (
        <>
        <h1>Topic Page <b>{topic}</b></h1>
        <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
        {/* {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>} */}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container">
          <MindARViewer/>
        </div>
      )}

        </>
    )
}
export default TopicItem;