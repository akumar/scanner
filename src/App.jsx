import { useState } from 'react'

import BarcodeScannerComponent from './BarcodeScannerComponent'
function App() {
  const [data, setData] = useState("Not Found");

  console.log('render')
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  )
}

export default App
