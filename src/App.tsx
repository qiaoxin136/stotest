//import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

//const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <h1>Storage Test</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
