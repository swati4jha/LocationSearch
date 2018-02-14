import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
var preventDefault = require('react-prevent-default');
function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillStyle="#dddddd";
    ctx.fillRect(x, y, width, height);
    
}

class Canvas extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);
        if(this.props.count%2!=0){
            rect({ctx, x: 70, y: 30, width: 300, height: 100});
        } else{
            rect({ctx, x: 30, y: 30, width: 300, height: 100});
        }
        
    }
    
    render() {
        return (
            <div className={"canvas-wrap " + (this.props.count%2==0 ? 'leftTable' : 'rightTable')}>
            <canvas ref="canvas" width="400" height="100"></canvas>
            <div className="overlay">
            <div className="row abc"> {
                this.props.users.map((users,i) =>{
                   return (<div key={users.id.toString()}  className="col-sm-6" style={{textAlign: "center"}}>
					    <button className="profileM" style={{backgroundImage:"url(src/images/"+users.id+".png)"}}
						id={users.id}></button><img src="src/note.jpg" className="noteImg" width="50" height="50"></img>
						
					  </div>)
					
					}
				)
			}
			</div></div></div>
			)
      }
    
}
export default Canvas