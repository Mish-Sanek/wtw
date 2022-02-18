import React from "react";

const CardVideo = React.forwardRef((props, ref) =>
  <video
   ref={ref}
   poster={props.poster}
   muted
   width="{280}"
   height="{175}"
  >
    <source src={props.videoUrl}/>
  </video>
)



export default CardVideo;
