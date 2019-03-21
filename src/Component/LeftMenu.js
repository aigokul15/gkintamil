import React,{Component} from 'react'

class LeftMenu extends Component{
    render(){
        return(
			<div className="leftContainer">
                <div id="leftPane" className="leftPane" >
                
                <ul >
                        <li><a href="#home">India</a></li>
                        <li><a href="#news">History</a></li>
                        <li><a href="#contact">Science</a></li>
                        <li><a href="#about">Quiz</a></li>
                </ul>
		           
                </div>
		 	</div>
        )}
}

export default LeftMenu