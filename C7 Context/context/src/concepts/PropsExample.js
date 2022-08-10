



// user : {
//     avatarUrl
//     name
// }

// PROPS DRILLING 

function Avatar(props) {
    return <img src={props.user.avatarUrl} alt={props.user.name} />
}
function UserInfo(props) {
   return(
    <div>
    <Avatar user= {props.user} />
    <div>
        {props.user.name}
    </div>
</div>
   )
}
// text 
function Comment(props) {
    return(
        <div>
            <UserInfo user={props.author} />
            <div>
                {props.text}
            </div>
        </div>
        
    )
}
const comment = {
    text: "hello I hope you are enjoying raect!", 
    author: {
        name: "Utkarshini", 
        avatarUrl: "http://placekitten.com/g/64/64"
    }
}
function Example() {
    return (
        <Comment text={comment.text} author={comment.author} />
    )
}

export default Example; 





