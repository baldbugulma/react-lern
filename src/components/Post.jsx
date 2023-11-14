export function Post (props){
    const {name, id, cb} = props
    return <h2>{name} <button onClick = {() => cb(id)}>Delete</button></h2>
}