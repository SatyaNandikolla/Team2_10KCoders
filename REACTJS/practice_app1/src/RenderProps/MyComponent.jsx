//rafc
export const MyComponent=(props)=>{
    return(
        <div>
            {props.render()}
            <p>{props.someInfo}</p>
        </div>
    )
}