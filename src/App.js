import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      console.log("fetching data");
      fetch('/api/message?name=world')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json.msg)
        });
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
