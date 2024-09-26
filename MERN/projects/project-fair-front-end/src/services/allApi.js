import {commonApi} from "./commonApi"
import {BASE_URL} from "./baseurl"

//register api
export const registerApi = async (userDetails) => {
  return await commonApi("POST",`${BASE_URL}/user/register`, userDetails,"")
}

//login api
export const loginApi = async (userDetails)=>{
  return await commonApi("POST",`${BASE_URL}/user/login`, userDetails,"")
}

// all api
export const addProjectApi = async (projectDetails, reqHeader)=>{
  return await commonApi('POST',`${BASE_URL}/project/addproject`,projectDetails,reqHeader);
}

//get home projects 
export const getHomeProjects = async ()=>{
  return await commonApi('GET', `${BASE_URL}/project/homeproject`,"","");
}

//get all projects 
export const getAllProjects = async (reqHeader)=>{
  return await commonApi('GET',`${BASE_URL}/project/allProjects`,"", reqHeader);
}

//get user projects 
export const getUserProjects = async (reqHeader)=>{
  return await commonApi('GET',`${BASE_URL}/project/userProjects`,"",reqHeader);
}
