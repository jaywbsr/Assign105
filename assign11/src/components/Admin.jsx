import { useNavigate } from "react-router-dom";
import me from "../assets/IMG_2851.JPG"

function Admin() {
    const navigate = useNavigate();
    return (
        <>
            <img src={me} alt="lost img" style={{
                margin: "15px auto"}}></img>
            <h1 className="name" style={{
                margin: "10px auto",
                display: "flex",
                color: "white"
            }}>This is Admin page</h1>
            <button style={{
                margin: "20px auto",
                display: "flex",
                backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
                color: "white",
                padding: "10px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                fontSize: "13px",
                width: "auto",
                alignItems: "center",
                justifyContent: "center",
            }} onClick={() => navigate("/")}>Log out</button>
        </>
    );
  }
  
  export default Admin;