import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import MindARViewer from '../../widgets/mindar-viewer';

import { categoryTopicsList } from "../../utils/db";

const TopicItem = () => {
  
    const location = useLocation();
    const { topic } = location.state || {};
    const [started, setStarted] = useState(null);
    const [childrenItems, setChildrenItems] = useState([]);
    const [imageTemplate, setImageTemplate] = useState("");
    
  useEffect(() => {    
     if (categoryTopicsList.length > 0) {
        const AR_children = [];

        categoryTopicsList?.map(item => {
          
            item.topicItems?.map(topicItem => {
                if (topicItem.parentTopic === topic) {
                    AR_children.push(topicItem);
                    setImageTemplate(item?.imageTemplate);
                    
                    return topicItem;
                }
                return AR_children
            }
            
          )
        });
        
          
        if (AR_children.length > 0) {          
            setChildrenItems(AR_children);
        }
     }
    }, [categoryTopicsList, imageTemplate]);

    useEffect(() => {
      setStarted('aframe');

      return () => {
        setStarted(null);
      }
    }, [])

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
          <MindARViewer children_AR_list={childrenItems} imageTargetTemplate={imageTemplate}/>
        </div>
      )}

        </>
    )
}
export default TopicItem;