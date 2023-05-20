import React from "react";

import { Home } from "./Components/Home";
import { Container, Row } from "react-bootstrap";
import { About } from "./Components/About";

function App() {

  return (
    <Row className="wrapper bg-dark ">
      <Container className="p-5 ">
        <Row className="p-5  wrapper text-center align-item-center d-flex">
          <Home />
        </Row>
      </Container>
      <About />
    </Row>
  );
};

export default App;

// import React from 'react';
// import { Home } from './Praticse/Home';
// import { CatSearch } from './Praticse/CatSearch';
// import { About } from './Praticse/About';

// export const App = () => {
//   return (
//     <>
//       <Home />
//       <CatSearch />
//       <About />
//     </>
//   );
// };
