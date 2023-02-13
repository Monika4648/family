import React from 'react'
import LeftComponent from './components/LeftComponent';
import RightComponents from './components/RightComponents';

function App() {
   return (
    <div style={{
      display: "flex", justifyContent: "center",
      width: "100%", padding: 20
    }}>
      <LeftComponent />
      <RightComponents />
    </div>
  )
}

export default App