import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <p
              style={{
                fontSize: "3rem",
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Check out our latest makeup tutorials
            </p>
          </li>
          <li>
            <div>
              <ReactPlayer url="https://www.youtube.com/watch?v=sobxgryl8qw" />
            </div>
          </li>
          <br />
          <li>
            <ReactPlayer url="https://www.youtube.com/watch?v=InnSv2ZRaH8" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Video;
