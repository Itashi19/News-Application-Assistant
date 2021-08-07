import { Container } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
const Navv = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar className="mt-2">News Application Assistant</Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default Navv;
