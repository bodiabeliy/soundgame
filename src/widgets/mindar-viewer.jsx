import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import { getChildrenByGroup, playAudioSound } from './../utils/helpers'; 

const MindARViewer = (props) => {
  const {children_AR_list, imageTargetTemplate} =props
  const sceneRef = useRef(null);

  let [targetFoundCounter,setTargetFoundCounter] = useState(0);

  


  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems?.["mindar-image-system"];

    // Start AR system when scene starts rendering
    sceneEl.addEventListener('loaded', () => {
      arSystem.start();
    });
    playAudioSound(sceneEl)
 
    return () => {
      arSystem.stop();
    }
  }, []);

   



  return (
    <>
    {
      <>
        <a-scene ref={sceneRef} mindar-image={`imageTargetSrc: ${imageTargetTemplate}; autoStart: false; `} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            {
              children_AR_list.map((item, index) => {
                return (
                    <audio key={index} id={item.itemName} src={item.audio} preload='auto'></audio>
                )
              })
            }
          </a-assets>
          
          <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>
          {
              children_AR_list.map((item, index) => {
                
                return (
                  <a-entity 
                    key={index}
                    mindar-image-target={`targetIndex: ${item.targetIndex}`}
                    geometry="primitive: plane" 
                    position=" 0 0 0" 
                    sound={`src:#${item.itemName}`} 
                  />
                )
              })
          }
        </a-scene>
      </>
    }
    </>
  )
}

export default MindARViewer;

