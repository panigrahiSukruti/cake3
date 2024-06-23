import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Layout=({children})=> {
  return (
    <>
       <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>Cake Store</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ marginTop: '70px' }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
