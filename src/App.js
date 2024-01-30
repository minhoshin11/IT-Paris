import logo from './logo.svg';
import './App.css';
// import bg from './img/main-bg.jpg'
// import mdIphone from './img/md-iphone.jpg'
// import mdGalaxy from './img/md-galaxy.jpg'
// import mdIpad from './img/md-ipad.jpeg'
// import mdPc from './img/md-pc.jpg'


import {Button, Navbar, Container, Nav, Row , Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">IT Paris</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#allProduct">모든제품</Nav.Link>
            <Nav.Link href="#android">Android</Nav.Link>
            <Nav.Link href="#iphone">iPhone</Nav.Link>
            <Nav.Link href="#ipad">iPad</Nav.Link>
            <Nav.Link href="#desktop">Desktop</Nav.Link>
            <Nav.Link href="#mac">Mac</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg-container'>
      <img className='main-bg-image' src={process.env.PUBLIC_URL + '/img/main-bg.jpg'}  /> 
      <div className='main-bg-text1'>
      "합리적인 가격으로 당신의 지갑을 소매치기 합니다"
      </div>
    <div className='md-container'>
        <div className="md-item">
          <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-iphone.jpg'} />
          
          <h4></h4>
          <p></p>
        </div>
        <div className="md-item"></div>
        <div className="md-item"></div>
        <div className="md-item"></div>
        
      
    </div>
      
      </div>
    </div>
  );
}

export default App;
