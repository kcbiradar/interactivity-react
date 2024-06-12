import {useState} from 'react';

import {data} from './data.js'

function App() {
    const[state,setState] = useState({
      index : 0,
      showMore : false,
    });

    const hasNext = state.index < data.length - 1;

    function handleNextClick() {
        if(hasNext) {
          setState({
            ...state,
            index : state.index + 1
          })
        } else {
          setState({
            ...state,
            index : 0
          })
        }
    }

    function handleMoreClick() {
          setState({
            ...state,
            showMore : !state.showMore
          })
    }

    let currentData = data[state.index];
    return(
      <>
          <button onClick={handleNextClick}>Next</button>
          <h2>
            <i>{currentData.name}</i>
            by {currentData.artist}
          </h2>
          <h3>
            ({state.index + 1} of {data.length})
          </h3>
          <button onClick={handleMoreClick}>
              {state.showMore ? 'Hide' : 'Show'} details
          </button>

          {state.showMore && <p>{currentData.description}</p>}
          <img src={currentData.url} alt={currentData.alt}/>
      </>
    );

}

export default App;