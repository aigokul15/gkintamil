import React,{Component} from 'react'
import logo from '../images/Logo.png'
import Search from './Search'
import SocialMenu from './SocialMenu'
import Menuitem from './Menuitem'

class TopMenu extends Component{
    render(){
        return(
            <div className="topMenu">
			<div  className="logoDisplay">
			     <a href="#" className="logoStyle" ><img src={logo} alt="logo"/></a>
			</div>
            {/* <Menuitem />		 */}
           <Search />
           <SocialMenu />
           </div>
        )}
}

export default TopMenu