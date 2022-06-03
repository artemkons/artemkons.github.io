import Swiper from './Swiper'
import useDocumentDimensions from './hooks/useDocumentDimensions'

import "./App.sass"

function App () {
  useDocumentDimensions()

  return (
    <div className="App">
      <Swiper />
    </div>
  );
}

export default App;
