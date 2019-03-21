import React,{Component} from 'react'
import Popup from './popupmenu';


class Menuitem extends Component{
    
    constructor(){
        super()
        this.state = {showMore: false};
        this.showPopup = this.showPopup.bind(this);
    }
    showPopup(){
        console.log("popup " + this.state.showMore);
        this.setState({
            showMore: !this.state.showMore
        })
    }
    render(){
       var showMoreMenu;

        if(!this.state.showMore){
            console.log("popup 1 " + this.state.showMore);

          showMoreMenu = <div className="popup_triangle"><span  onClick={this.showPopup}>
                            <svg role="img" aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 10 10">
                             <path fill="currentColor" d="M5,6L0,0L10,0"></path>
                            </svg>
                        </span></div>
        }
        else{
            console.log("popup 2 " + this.state.showMore);

            showMoreMenu = <div className="popup_triangle"> <span onClick={this.showPopup}>
                            <svg role="img" aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 10 10">
                             <path fill="currentColor" d="M5,0L10,6L0,6"></path>

                            </svg>
                        </span>
                        <Popup /></div>
        }
        console.log(showMoreMenu);
        return(
            <div  className="menuItem" >
            <div id="menuItem">
                <ul >
                        <li><a href="#home">India</a></li>
                        <li><a href="#news">History</a></li>
                        <li><a href="#contact">Science</a></li>
                        <li><a href="#about">Quiz</a></li>
                </ul>
		    </div>
           
            {showMoreMenu}
            </div>
  

        )}
}

export default Menuitem;