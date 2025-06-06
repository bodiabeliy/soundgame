import React, { useState } from 'react';
import MindARViewer from './widgets/mindar-viewer.jsx';
import Banner from './components/CategoriesTopicsList/CategoriesTopicsList.jsx';

import AppRouter from './utils/routes/index.jsx';
function App() {

  return (
    <div className="App bg-green"> 
   
        <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
         <AppRouter />
      </div>
    </div>
  );
}

export default App;
