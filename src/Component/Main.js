import React,{Component} from 'react';
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu';
import Content from './ContentMenu';
import RightMenu from './RightMenu';

class Main extends Component{
    render(){
        return(
            <div className="middleContainer" >
{/* <iframe frameborder='0'  width='500' height='500'  title='Tamil Medium 1st Standard Environmental studies' src='http://online.pubhtml5.com/fjxl/wxvq/' type='text/html' allowfullscreen='true' scrolling='no' marginwidth='0' marginheight='0'></iframe>               */}
                  <TopMenu /> 
                    <LeftMenu />
                    <Content/>
                    <RightMenu/>
            </div>
        )}
}

export default Main;