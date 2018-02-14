import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Example from './leftMenu.jsx'
import Canvas from './canvas.jsx'
class App extends React.Component {
	constructor(){
		super();
		this.showMsg = this.showMsg.bind(this);
    }
	showMsg(e) {
		if(e.target.nodeName == 'BUTTON'){
			if(e.target.id != undefined && e.target.id != null){
				var clickeduser = this.props.users.filter(user => user.id == e.target.id);
				console.log(clickeduser[0].info);
				if(clickeduser != null && clickeduser != undefined){
					this.elementBox = e.target.getBoundingClientRect();
			        var comp = React.createElement('div', {className:"bubble", style: {position:"absolute", zIndex:999, left: this.elementBox.x+80+"px", 
			        top: this.elementBox.y-20+ window.scrollY+"px",padding: "5px",borderRadius:"10px",border:"1px solid",maxWidth: 200+"px",fontSize:12+"px"}},clickeduser[0].info)
			        ReactDOM.render(comp, document.getElementById('test'));
				}
			}
			
		} else{
			var comp = React.createElement('div');
			ReactDOM.render(comp, document.getElementById('test'));
		}
        
        console.log(e.target.nodeName);
        
    }
	render(){
		return (<div style={{height: 100+"%"}} onClick={(e) => (this.showMsg(e))}><div className="row" >{
			this.props.users.map((users,i) =>{
				var list = this.props.users.filter(user => user.table == i+1);
				if(list.length>0){
					return (<div className="col-sm-6" key={users.id.toString()}><Canvas   
					users={list} count={i}/></div>)
					}
				}
			)
		}
		</div></div>)
	}
}

const data=
            [   
                {name:"Swati",
                 id:"sjha",
                 message:"Hi, I am swati",
				 info:"Swati, I am a front end developer at Ahold.",
				 gender:"F",
				 table: 1   
                },
				{name:"Jake",
				 id:"jake",
				 message:"Hi, I am Jake",
				 info:"Jake, I am a business analyst with RBS, I love to restore vintage cars and motorcycles. I also love backpacking",
				 gender:"M",
				 table: 3      
				},
                {name:"Jazzy",
                    id:"jazzy",
                    message:"Hi, I am Jazzy",
					info:"Jazzy, I am a front end developer co-op at Ahold.",
					gender:"F",
					table: 1       
                   },
                   {name:"Shane",
                    id:"shane",
                    message:"Hi, I am Shane",
                    info:"Shane, I'm a former member of anonymous, full-time 4chan Meme Lord",
					gender:"M",
					table: 2        
                   },
                   {name:"Seth",
                    id:"seth",
                    message:"Hi, I am Seth",
					info:"Seth, I am from Georgia Southern University. I am a data engineer co-op at Ahold.",
					gender:"M",
					table: 3      
                   },
                   {name:"Musa",
                    id:"musa",
                    message:"Hi, I am Musa",
					info:"Musa, I am an emerging tech coop at Ahold. I love biryanis.",
					gender:"M",
					table: 4      
                   },
                   {name:"Ankita",
                    id:"ankita",
                    message:"Hi, I am Ankita",
					info:"Ankita, I am a front end developer at Ahold.",
					gender:"F",
					table: 2      
                   }
            ]
render(<App users={data} />, document.getElementById('app'));
render(<Example users={data} />, document.getElementById('left'));






