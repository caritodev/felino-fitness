import React, { useState } from 'react';

let Context = React.createContext();

let { Provider } = Context;

function StateProvider({ children }) {
  const [test, setTest] = useState(null);
  
  return (
    <Provider
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </Provider>
  );
}

export { StateProvider, Context };
