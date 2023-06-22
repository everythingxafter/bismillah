import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavbarStatus = () => {
    return (

        <Nav variant="underline" defaultActiveKey="/home" style={{ backgroundColor: '#3a444d' }}>
            <Container className='d-flex'>
                <Container className='d-flex gap-3'>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Budget</Nav.Link>
                    </Nav.Item>
                </Container>
                <Container className='d-flex' style={{ justifyContent: 'flex-end', gap: '0.5em' }}>
                    <h2 style={{ color: 'green', margin: '0' }}>&#8226;</h2>
                    <Nav.Link className='justify-content-end'>John Doe (Manager)</Nav.Link>
                </Container>
            </Container>
        </Nav>
    )
}

export default NavbarStatus