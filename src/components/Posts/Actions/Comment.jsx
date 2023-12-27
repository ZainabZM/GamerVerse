import "./comments.css";

function Comments(props) {
   return (
      <ul>
         <li>
            <div className="commentContainer">
               <p className="userComment">
                  {props.firstnameComment} {props.lastnameComment}
               </p>
               <p className="contentComment">{props.contentComment}</p>
            </div>
         </li>
      </ul>
   );
}

export default Comments;
