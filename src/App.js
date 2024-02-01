import logo from './logo.svg';
import './App.css';

import {Button, Navbar, Container, Nav, Row , Col} from 'react-bootstrap';
//순서 정하기
//1.홍보문구 , 2.상품명, 3.누르면 해당정보 알려주기..?
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
          <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-newiPhone.jpg'} />
          
          <h4>iPhone</h4>
          <p>마치 새폰 같은 iPhone을 저렴하게</p>
        </div>
        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-ipad.jpeg'} />
          <h4>iPad</h4>
          <p>당신에게 최고의 선택</p>
        </div>

        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-galaxy.jpg'} />
        <h4>Galaxy</h4>
        <p>세련된, 그리고 절제된</p>
        </div>

        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-pc.jpg'} />
        <h4>PC</h4>
        <p>Desktop부터 iMac까지</p>
        </div>
        
      
    </div>
      
      </div>
    </div>
  );
}

export default App;
