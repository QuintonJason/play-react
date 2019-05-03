import React from 'react';

import Button from "./Button";

// Stateless React Component
const Main = (props) => {
  console.log(props);
  return  (
    <main className="dy-main">
      This is my main
      <Button
        buttonText="Quinton"
        isDisabled={true}
      />
      <Button  buttonText="Button 2" />
    </main>
  )
}

export default Main;