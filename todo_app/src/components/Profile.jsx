import "./Profile.css";
import profilePic from "../assets/Jay.JPG"
function Profile (){
    return(
        <div className="layout">
            <img src={profilePic} alt="profile"/>
            <h1 classname="name">Jay Thawatchai</h1>
            <hr></hr>
        </div>
    )
}
export default Profile;