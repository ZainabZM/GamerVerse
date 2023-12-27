import * as React from "react";
import { Avatar, Box, IconButton, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox, TextField, Tooltip } from "@mui/material";
import { Favorite, Share, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import Comments from "./actions/Comment";
import NeedConnexionAlert from "../Alerts/NeedConnexionAlert";
import SendIcon from "@mui/icons-material/Send";
import "./renderPosts.css";

function RenderPosts(props) {
   const [content, setContent] = useState("");
   const [showCommentBox, setShowCommentBox] = useState(false);
   const [isButtonClicked, setIsButtonClicked] = useState(false);
   const [token, setToken] = useState(localStorage.getItem("@TokenUser"));

   const handleButtonClick = () => {
      setIsButtonClicked(true);
   };

   const handleCommentChange = (e) => {
      setContent(e.target.value);
   };

   const submitComment = () => {
      props.inputComments(content);
      setContent("");
   };

   const toggleCommentBox = () => {
      setShowCommentBox(!showCommentBox);
   };

   return (
      <>
         <div className="infosPosts"></div>
         <Box flex={4} p={2}>
            <Card>
               <CardHeader
                  avatar={
                     <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        {props.firstname.charAt(0).toUpperCase()}
                        {props.lastname.charAt(0).toUpperCase()}
                     </Avatar>
                  }
                  action={
                     <IconButton aria-label="settings">
                        <Tooltip title="Suppression/Modification (prochaine version)">
                           <MoreVert />
                        </Tooltip>
                     </IconButton>
                  }
                  title={props.title}
                  subheader={new Date(props.date).toLocaleDateString("fr", { day: "numeric", month: "long", year: "numeric" }) + " | " + new Date(props.date).toLocaleTimeString("fr", { hour: "numeric", minute: "numeric" })}
               />
               <CardMedia component="img" height="10%" image="/images/Fond_post.png" alt="Image par default" />
               <CardContent>
                  <Typography variant="body2" color="text.secondary">
                     {props.content}
                  </Typography>
               </CardContent>
               <CardActions disableSpacing>
                  {!token ? (
                     <>
                        <IconButton aria-label="add to favorites" onClick={handleButtonClick}>
                           <FavoriteBorder sx={{ fontSize: 30 }} />
                           {props.likes}
                        </IconButton>
                        {isButtonClicked && <NeedConnexionAlert />}
                     </>
                  ) : (
                     <IconButton aria-label="add to favorites" onClick={props.btnLike}>
                        <Checkbox icon={<FavoriteBorder sx={{ fontSize: 30 }} />} checkedIcon={<Favorite sx={{ color: "#ff1744" }} />} />
                        {props.likes}
                     </IconButton>
                  )}

                  <IconButton aria-label="Comments" onClick={toggleCommentBox}>
                     <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 30 }} />
                     {props.numberComments}
                  </IconButton>
                  <IconButton aria-label="share">
                     <Share sx={{ fontSize: 30 }} />
                  </IconButton>
               </CardActions>
               {showCommentBox && (
                  <div>
                     {!token ? (
                        <>
                           <div className="sendComment">
                              <TextField value={content} onChange={handleCommentChange} id="outlined-basic" label="Envoyer un commentaire" variant="outlined" />
                              <IconButton onClick={handleButtonClick} aria-label="send">
                                 <SendIcon sx={{ fontSize: 40 }} />
                              </IconButton>
                           </div>

                           <div className="scrollComments">
                              {props.comments.map((items, index) => {
                                 return (
                                    <div key={index}>
                                       <Comments contentComment={items.content} firstnameComment={items.firstname} lastnameComment={items.lastname} />
                                    </div>
                                 );
                              })}
                           </div>
                        </>
                     ) : (
                        <>
                           <div className="sendComment">
                              <TextField value={content} onChange={handleCommentChange} id="outlined-basic" label="Envoyer un commentaire" variant="outlined" sx={{ width: 550 }} />
                              <IconButton onClick={submitComment} aria-label="send">
                                 <SendIcon sx={{ fontSize: 40 }} />
                              </IconButton>
                           </div>

                           <div className="scrollComments">
                              {props.comments.map((items, index) => {
                                 return (
                                    <div key={index}>
                                       <Comments contentComment={items.content} firstnameComment={items.firstname} lastnameComment={items.lastname} />
                                    </div>
                                 );
                              })}
                           </div>
                        </>
                     )}
                  </div>
               )}
            </Card>
         </Box>
      </>
   );
}
export default RenderPosts;
