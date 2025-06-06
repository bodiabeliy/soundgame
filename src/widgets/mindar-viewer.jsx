import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import { getChildrenByGroup } from './../utils/helpers'; 

const MindARViewer = ({children_AR_list}) => {
  
  const sceneRef = useRef(null);
  const sceneRefering= useRef([]);
  const [targetFound, setTargetFound] = useState("");

  let [targetFoundCounter,setTargetFoundCounter] = useState(0);
  const [groupedChildren, setGroupedChildren] = useState([]);

  useEffect(() => {
    setGroupedChildren(getChildrenByGroup(children_AR_list))
    
  }, []);


  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems?.["mindar-image-system"];
    
    const entity = document.querySelector('a-entity[sound]');
    let audioDataSet = null;
    // Start AR system when scene starts rendering
    sceneEl.addEventListener('loaded', () => {
      arSystem.start();
    });

    
    const soundEntities = sceneEl.querySelectorAll('[mindar-image-target][sound]');
      soundEntities.forEach((entity) => {
        entity.addEventListener('targetFound', () => {
          // console.log('🎯 Target found:', entity.components.sound.data.src);
          audioDataSet = new Audio(entity.components.sound.data.src);
          audioDataSet.play();

          // entity.components.sound?.playSound();
        });

        entity.addEventListener('targetLost', () => {
          console.log('🔇 Target lost');
          audioDataSet.pause();
          audioDataSet = null;
          
        });
      });

    return () => {
      arSystem.stop();
      entity?.components.sound.pause();
    }
  }, []);

   



  return (
    <>
    
    {
      
      
          <>
           <a-scene ref={sceneRef} mindar-image={`imageTargetSrc: http://localhost:5000/wild%20nature/wild_nature.mind; autoStart: false; uiLoading: true; uiError: true; uiScanning: true; maxTrack: 3`} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
              <a-assets>
                   <audio id="frog" src="http://localhost:5000/wild%20nature/frog/frog.mp3" preload='auto'></audio>
                   <audio id="eagle" src="http://localhost:5000/wild%20nature/eagle/eagle.mp3" preload='auto'></audio>
                   <audio id="snake" src="http://localhost:5000/wild%20nature/snake/snake.mp3" preload='auto'></audio>
                   <audio id="lion" src="http://localhost:5000/wild%20nature/lion/lion.mp3" preload='auto'></audio>
                   <audio id="owl" src="http://localhost:5000/wild%20nature/owl/owl.mp3" preload='auto'></audio>
              </a-assets>
              

              <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>

              <a-entity 
                  mindar-image-target="targetIndex: 0"
                  geometry="primitive: plane" 
                  position=" 0 0 0" 
                  sound="src:#frog;" 
                />
                <a-entity 
                  mindar-image-target="targetIndex: 1"
                  geometry="primitive: plane" 
                  position=" 0 0 0" 
                  sound="src:#eagle;" 
                />
                <a-entity 
                  mindar-image-target="targetIndex: 2"
                  geometry="primitive: plane" 
                  position=" 0 0 0" 
                  sound="src:#snake;" 
                />
                <a-entity 
                  mindar-image-target="targetIndex: 3"
                  geometry="primitive: plane" 
                  position=" 0 0 0" 
                  sound="src:#lion" 
                />
                <a-entity 
                  mindar-image-target="targetIndex: 4"
                  geometry="primitive: plane" 
                  position=" 0 0 0" 
                  sound="src:#owl" 
                />
            </a-scene>
          </>
     
    }
   
    
    </>
  )
}

export default MindARViewer;

