import { useEffect, useState } from "react";
import RenderPosts from "./RenderPosts";

function Posts(props) {
   const [posts, setPosts] = useState([]);
   const [hasLiked, setHasLiked] = useState(true);

   const getPosts = async () => {
      const options = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      };
      const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/posts`, options);
      const data = await response.json();
      setPosts(data.posts);
   };

   const postsLike = async (postId) => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            postId: postId,
         }),
      };

      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post/like`, options);
         const data = await response.json();
         if (data.success) {
            if (hasLiked === false) {
               setHasLiked(true);
            } else {
               // future fonction pour retirer le like
               setHasLiked(false);
            }
            getPosts();
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   const postsComment = async (postId, content) => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            postId: postId,
            content: content,
         }),
      };

      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post/comment`, options);
         const data = await response.json();
         if (data.success) {
            getPosts();
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   useEffect(() => {
      getPosts();
   }, []);

   const renderPosts = () => {
      return posts
         ?.filter((element) => {
            return element.title.includes(props.type);
         })
         .map((element, index) => {
            return (
               <div key={index}>
                  <RenderPosts
                     firstname={element.firstname}
                     lastname={element.lastname}
                     title={element.title}
                     date={element.date}
                     content={element.content}
                     likes={element.likes.length}
                     btnLike={() => postsLike(element._id, index)}
                     inputComments={(content) => postsComment(element._id, content)}
                     comments={element.comments}
                     numberComments={element.comments.length}
                  />
               </div>
            );
         });
   };

   return (
      <>
         <div className="getPostsContainer">{renderPosts()}</div>
      </>
   );
}

export default Posts;
