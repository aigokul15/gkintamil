import React,{Component} from 'react';

class Popup extends Component{
    render(){
        return(
            <div className="popupmenu" >
                <ul id="popupmenu_inner" className="popupmenu_inner" >
                    <li className="popupmenu_fl ">
                        <div >
                            <h2>India</h2>
                            <li className="popupmenu_border">History</li>
                        </div>
                    </li>                       
                    <li className="popupmenu_fl" > 
                        <div>
                            <h2>India</h2>
                            <li className="popupmenu_border">History</li>
                            <li>History</li>
                            <li>History</li>
                            <li>History</li>
                            <li>History</li>
                        </div>
                    </li>     
                    <li className="popupmenu_fl">
                        <div>
                            <h2>India</h2>
                            <li className="popupmenu_border">History</li>
                            <li>History</li>
                            <li>History</li>
                            <li>History</li>
                            <li>History</li>
                        </div>
                    </li>       
                </ul>
            </div>
        )}
}

export default Popup;