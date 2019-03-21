import React,{Component} from 'react';
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu';
import Content from './ContentMenu';
import RightMenu from './RightMenu';

class Main extends Component{
    render(){
        return(
            <div className="middleContainer" >
                <TopMenu /> 
                    <LeftMenu />
                    <Content/>
                    <RightMenu/>
            </div>
        )}
}

export default Main;