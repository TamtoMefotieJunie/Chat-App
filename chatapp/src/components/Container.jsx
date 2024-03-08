import "../css/Chat.css";
import NavBar from "./NavBar";
import SideBar from "./SideBAr";
import Input from "./Input";
import ContainerLeft from "./ContainerLeft";
import ContainerRight from "./ContainerRight";


function MainContainer(){
    return(
    <>  
   <div className="container">
   <ContainerLeft/>
   <ContainerRight/>
       
   </div>
    </>
    );
} 
export default MainContainer;

