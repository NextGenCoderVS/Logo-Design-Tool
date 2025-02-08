import React, { useState } from 'react';
import { Fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState(null);

  const initCanvas = () => {
    const canvas = new Fabric.Canvas('logo-canvas');
    setCanvas(canvas);
  };

  const addText = () => {
    const text = new Fabric.Text('Your Text', {
      left: 100,
      top: 100,
      fill: '#000',
      fontFamily: 'Roboto',
      fontSize: 24,
    });
    canvas.add(text);
  };

  return (
    <div>
      <h1>Logo Design Tool</h1>
      <canvas id="logo-canvas" width="800" height="600"></canvas>
      <button onClick={addText}>Add Text</button>
    </div>
  );
};

export default App;
