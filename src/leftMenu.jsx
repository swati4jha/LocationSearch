import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
let textInput = null;

export default class Example extends React.Component {
    constructor(){
        super();
        this.showMsg = this.showMsg.bind(this);
    }
    
    showMsg(self,message) {
        this.elementBox = self.getBoundingClientRect();
        var comp = React.createElement('div', {className:"bubble", style: {position:"absolute", zIndex:999, left: this.elementBox.x+70+"px", 
        top: this.elementBox.y-20+ window.scrollY+"px",padding: "5px",borderRadius:"10px",border:"1px solid",fontSize:12+"px"}},message)
        ReactDOM.render(comp, document.getElementById('test'));
        
    }
    render() {
        return (
        <div>
            <Nav vertical>
            {
                this.props.users.map((users,i) =>{
                return <NavItem key={users.id.toString()} className="center">
                <NavLink href="#"  ref={(input) => { this.textInput = input; }} className="circle" 
                onClick={() => this.showMsg(document.getElementById(users.id),users.message)}>
                {users.name}</NavLink>
            </NavItem>
            })
            }
            </Nav>
            
        </div>
    );
  }
}