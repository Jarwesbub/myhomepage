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
        <Navbar.Brand href={"/"} >Home</Navbar.Brand>
          <Nav.Link href={"/aboutme"}>About me</Nav.Link>
          <Navbar.Toggle aria-controls="navbar-normal" />
          <Navbar.Collapse>
            <NavDropdown title={"Game Projects (Unity)"} >
              <ListGroup>
                <ListGroup.Item action href={"#/residentevildbg"}>Resident Evil - Deck Building Online Game</ListGroup.Item>
                <ListGroup.Item action href={"#/uglyunicorn"}>Ugly Unicorn</ListGroup.Item>
                <ListGroup.Item action href={"#/racinggame"}>Racing Game</ListGroup.Item>
                <ListGroup.Item action href={"#/doggoinspace"}>Doggo in Space</ListGroup.Item>
                <ListGroup.Item action href={"#/tamram"}>TamRam - Battle Creatures</ListGroup.Item>
              </ListGroup>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );


}