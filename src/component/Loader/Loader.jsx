import { Grid } from "react-loader-spinner";
import { DIV } from "./Loader.styled";

const Loader = (params)  =>{
        return (
        <DIV>
            <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </DIV>
        
    )
    
};

export default Loader;