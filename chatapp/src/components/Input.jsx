import "../css/Chat.css";
function Input({type,name,value,placeholder, onChange,onKeyPress}){
    return(
    <>  
        <div >
            <input type={type} 
            name={name}
             value={value} 
             placeholder={placeholder} 
             onChange={onChange}
              className="search-input"
              onKeyPress = {onKeyPress} /> 
        </div>
    </>
    );
} 
export default Input ;