import React,{Component} from 'react'

class RightMenu extends Component{
    render(){
        return(
            
			<div className="rightMenu">
                <div className="youtubeMenu" >
                    <div className="utHeader">
                        <h2>திருக்குறள்</h2>
                    </div>
                    <iframe className="utFrame"  src="https://www.youtube.com/embed/fPs6kuv5JLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="youtubeMenu" >
                    <div className="utHeader">
                        <h2>முதலமைச்சர்கள்</h2>
                    </div>
                    <iframe className="utFrame"  src="https://www.youtube.com/embed/zs48FrKLoWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="youtubeMenu" >
                    <div className="utHeader">
                        <h2>மெசபடோமியா </h2>
                    </div>
                    <iframe className="utFrame"  src="https://www.youtube.com/embed/E9AOlhNM2rQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
             </div>

               
        )}
}

export default RightMenu