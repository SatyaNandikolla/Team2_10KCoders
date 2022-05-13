//rafc
import { UserContext1 } from "../App"
export const ComponentB=()=>{
    return(
        <div>
            <UserContext1.Consumer>
                {value=><div>{value}</div>}
            </UserContext1.Consumer>
        </div>
    )
}