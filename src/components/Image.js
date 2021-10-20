import "./Image.css"
function Image({url}){
    return <img src={url} alt=""></img>
}
function H2({data}){
    return <h2>{data}</h2>
}
function H4({data}){
    return <h4>{data}</h4>
}
function Button({data}){
    return <button>{data}</button>
}
export  {Image,H2,Button,H4}