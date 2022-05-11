import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import { Container, Header } from "semantic-ui-react";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 6000);
  });
  return (
    <Container>
      <Header size="huge" id="header">
        Employee List
      </Header>
      <input type="checkbox" name="" id="check_1" value="test" />
      <label htmlFor="check_1">test</label>
      <input type="checkbox" name="" id="check_2" value="test2" />
      <label htmlFor="check_2">test2</label>

      {showButton && (
        <button data-cy="btn" onClick={() => alert("You clicked me")}>
          Click me
        </button>
      )}
      <EmployeeList />
    </Container>
  );
};

export default App;
