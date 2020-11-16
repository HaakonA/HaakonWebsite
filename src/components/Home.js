import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const Header = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You pressed {count} times</p>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default Header;
