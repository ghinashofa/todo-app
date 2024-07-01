import { CiLogout } from "react-icons/ci";

const NavigationBar = () => {
    return (
        <>
            <nav  
                style={{
                    display:"flex", 
                    justifyContent:"space-around", 
                    alignItems:"center",
                    marginTop:"48px",
                    
                }}>

                <h1>TODO APP</h1>
                <CiLogout style={{fontSize:"28px"}}/>
            </nav>
        </>
    );
};
export default NavigationBar;
