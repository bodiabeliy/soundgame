import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindARViewer = () => {
  const sceneRef = useRef(null);
  let [targetFoundCounter,setTargetFoundCounter] = useState(0);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    console.log({"arSystem":  sceneEl.systems});
    
    const entity = document.querySelector('a-entity[sound]');

    // Start AR system when scene starts rendering
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start();
    });

    // Handle target detection events
    sceneEl.addEventListener('targetFound', () => {
      setTargetFoundCounter(targetFoundCounter++)

      entity?.components.sound?.playSound();
    });

    sceneEl.addEventListener('targetLost', () => {
      entity?.components.sound?.pause();
    });

    return () => {
      arSystem.stop();
      entity?.components.sound.pause();
    }
  }, []);



  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png" />
        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
        {/* <audio id="myAudio" src="https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb4f1212a9.mp3?filename=ambient-piano-and-strings-10711.mp3"></audio> */}
        <a-entity id="river" geometry="primitive: plane" 
          position=" 0 0" sound="src: https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb4f1212a9.mp3?filename=ambient-piano-and-strings-10711.mp3;"></a-entity>

      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
      </a-entity>
     

    </a-scene>
  )
}

export default MindARViewer;

