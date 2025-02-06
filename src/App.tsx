import  { useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { uploadData } from 'aws-amplify/storage';



//const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();
  const [file, setFile] = useState();

  const handleChange = (event: any) => {
    setFile(event.target.files?.[0]);
  };

  const handleClick = () => {
    if (!file) {
      return;
    }
    uploadData({
      path: `picture-submissions/${file.name}`,
      data: file,
    });
  };

  return (
    <main>
      <h1>Storage Test</h1>
      <button onClick={signOut}>Sign out</button>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Upload</button>
    </main>
  );
}

export default App;
