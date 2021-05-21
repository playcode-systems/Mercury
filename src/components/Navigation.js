import React, { Component} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
  } from 'reactstrap';
import { Link } from "react-router-dom";
import { Input } from 'bloomer/lib/elements/Form/Input';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import logo from '../statics/mercury.png'

export default class Navigation extends Component {

  constructor() {

    super();
    
    this.state = {
      abierto: true,
      name: '',
      collapsed: false,
      isOpen: true,
      buenas: '',
    };
  }


  isOpen = () => this.setState({isOpen: !this.state.isOpen});
  toggleNavbar = () => this.setState({collapsed: !this.state.collapsed});

  abrirModal=()=>{
    if (document.getElementById("name").value.trim() === ""){
      alert('campo requerido')
    }else{
      this.setState({abierto: !this.state.abierto});
      this.setState({name: document.getElementById("name").value})
      console.log(document.getElementById("name").value);
    }
  }

  componentDidMount(){
 
    const fecha = new Date(); 
    const hora = fecha.getHours();
   
    if(hora >= 0 && hora < 12){
      this.setState({buenas: "Buenos dias,"});

    }
   
    if(hora >= 12 && hora < 18){
      this.setState({buenas: "Buenas tardes,"});

    }
   
    if(hora >= 18 && hora < 24){

      this.setState({buenas: "Buenas noches,"});
    }    
  }

  logOut = () => {
    this.setState({abierto: !this.state.abierto});
    this.setState({name: ""})
  }
  
  
  render() {   
    return (
      <div className="container">
        <Modal isOpen={this.state.abierto}>
            <ModalHeader>
                Instroduzca su nombre para continuar
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                <Input type="text" id="name" placeholder="Nombre:"/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={this.abrirModal}>Continuar</Button>
            </ModalFooter>
        </Modal>
        <Navbar color="light" light expand="md">
          <img className="navbar-brand-img" src={logo} style={{width: 100, marginTop: -7}}/>
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/btc">
                <NavLink>Bitcoins</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link  to="/eth">
                <NavLink>Ethereum</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link  to="/dash">
                <NavLink>Dash</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <>
        <NavbarText id="txtsaludo">{this.state.buenas} {this.state.name}</NavbarText>
        </>
        <>
        <Link  to="/">
          <NavItem onClick={this.logOut}>Log out</NavItem>
        </Link>
        </>
      </div>
    )
  }
}