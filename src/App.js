import React from 'react';
import Circle from './Component/Circle';
import MultipleCircles from './Component/MulticolorCircle';

function App() {
  return (
    <>
      <h1>Multicolor Circle with React</h1>
      {MultipleCircles.map((colour) => <Circle color={colour} />)}

    </>
  );

}


export default App;
