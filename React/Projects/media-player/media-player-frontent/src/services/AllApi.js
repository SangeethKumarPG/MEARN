import { commonAPI } from "./commonAPI";
import { downloadServerURL, serverURL } from "./serverUrl";
import { downloadAPI, videoDetailsAPI } from "./downloadAPI";

export const uploadVideo = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/videos`, reqBody);
};

export const getAllVideos = async () => {
  return await commonAPI("GET", `${serverURL}/videos`, "");
};

export const downloadVideo = async (videoId) => {
  // return await downloadAPI('GET',`${downloadServerURL}/downloadVideo?id=${videoId}`,"");

  const blob = await downloadAPI(
    "GET",
    `${downloadServerURL}/downloadVideo?id=${videoId}`,
    ""
  );
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${videoId}.mp4`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const downloadAudio = async (videoId) => {
  const blob = await downloadAPI(
    "GET",
    `${downloadServerURL}/downloadAudio?id=${videoId}`,
    ""
  );
  
  if (blob) {
   const url = window.URL.createObjectURL(blob);
   const link = document.createElement("a");
   link.href = url;
   link.setAttribute("download", `${videoId}.mp3`);
   document.body.appendChild(link);
   link.click();
   link.remove();
  }else{
   console.log("failed to start download")
  }
  
  
};

export const getVideoDetails = async (videoId)=>{
   const response = await videoDetailsAPI("GET",`${downloadServerURL}/getVideoDetails?id=${videoId}`,
    "");
    if(response){
      // console.log(response);
      return response;
    }
}
