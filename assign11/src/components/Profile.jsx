import { useParams } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    return(
        <>
            <h1 className="name" style={{
                margin: "10px auto",
                display: "flex",
                color: "white"
            }}>This Student ID of user is { id }</h1>
        </>
    );
}
export default Profile;