import { UserContext } from "../App"

//rafc
export  const ComponentC=()=>{
    return(
        <div>
            <UserContext.Consumer>
                {value=><div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}