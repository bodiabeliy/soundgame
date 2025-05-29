import React, { useState } from 'react';
import MindARViewer from './mindar-viewer.jsx';
import Banner from './components/CategoriesTopicsList/CategoriesTopicsList.jsx';

import AppRouter from './utils/routes/index.jsx';
function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="_blank">MindAR</a></h1>
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

        <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
         <AppRouter />
      </div>
    </div>
  );
}

export default App;
