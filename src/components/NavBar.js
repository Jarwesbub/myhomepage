import { Container, Navbar, Nav, NavDropdown, ListGroup, NavItem } from "react-bootstrap";
import './navbar_footer.css';

export default function NavBar() {
  const widthLimit = 800;
  const isMobileView = window.innerWidth < widthLimit;

  const gameProjects = [
    <>
      <ListGroup.Item action href={"#/residentevildbg"}>Resident Evil - Deck Building Online Game</ListGroup.Item>
      <ListGroup.Item action href={"#/uglyunicorn"}>Ugly Unicorn</ListGroup.Item>
      <ListGroup.Item action href={"#/racinggame"}>Racing Game</ListGroup.Item>
      <ListGroup.Item action href={"#/doggoinspace"}>Doggo in Space</ListGroup.Item>
      <ListGroup.Item action href={"#/tamram"}>TamRam - Battle Creatures</ListGroup.Item>
    </>
  ];

  const normalView = [
    <>
      <Navbar className="bar-main" variant='dark'>
        <Container style={{ maxWidth: "1000px", alignText: "center" }}>
          <NavItem style={{ fontSize: "16px" }}>Jarno Liedes - Programmer Portfolio</NavItem>
          <Nav className="ms-auto">
            <Navbar.Brand href={"#/"} >Home</Navbar.Brand>
            <Nav.Link href={"#/aboutme"}>About Me</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Toggle aria-controls="navbar-normal" />
            <Navbar.Collapse>
              <NavDropdown title={"Game Projects (Unity)"} style={isMobileView ? { color: 'black' } : { color: 'black' }}>
                <ListGroup>
                  {gameProjects}
                </ListGroup>
              </NavDropdown>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  ]

  const mobileView = [
    <>
      <Navbar className="bar-main" variant="dark" expand="lg">
        <Container style={{ maxWidth: "1000px", alignText: "center" }}>
          <Nav className="ml-auto">
            <Navbar.Brand href={"#/"} style={{ color: 'white' }} >Home</Navbar.Brand>
          </Nav>
          <Nav>
            <Navbar.Toggle aria-controls="navbar-normal" />
            <Navbar.Collapse>
            <Nav.Link href={"#/aboutme"}>About Me</Nav.Link>
              <NavDropdown title={"Game Projects (Unity)"} style={isMobileView ? { color: 'black' } : { color: 'black' }}>
                <ListGroup>
                  {gameProjects}
                </ListGroup>
              </NavDropdown>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  ]

  return (
    isMobileView ?
      mobileView
      : normalView
  );
}