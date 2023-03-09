import { Container, Navbar, Nav, NavDropdown, ListGroup, NavItem } from "react-bootstrap";
import './navbar_footer.css';

const URL = "#/myhomepage";

export default function NavBar() {
  return (
    <Navbar className="bar-main" variant="dark" >
      <Container style={{ maxWidth: "1000px", alignText: "center" }}>
        <Nav>
          <NavItem style={{fontSize:"16px"}}>Jarno Liedes - Programmer Portfolio</NavItem>
        </Nav>
        <Nav className="ms-auto" >
        <Navbar.Brand href={URL} >Home</Navbar.Brand>
          <Nav.Link href={URL+"#/aboutme"}>About me</Nav.Link>
          <Navbar.Toggle aria-controls="navbar-normal" />
          <Navbar.Collapse>
            <NavDropdown title={"Game Projects (Unity)"} >
              <ListGroup>
                <ListGroup.Item action href={URL+"#/residentevildbg"}>Resident Evil - Deck Building Online Game</ListGroup.Item>
                <ListGroup.Item action href={URL+"#/uglyunicorn"}>Ugly Unicorn</ListGroup.Item>
                <ListGroup.Item action href={URL+"#/racinggame"}>Racing Game</ListGroup.Item>
                <ListGroup.Item action href={URL+"#/doggoinspace"}>Doggo in Space</ListGroup.Item>
                <ListGroup.Item action href={URL+"#/tamram"}>TamRam - Battle Creatures</ListGroup.Item>
              </ListGroup>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );


}