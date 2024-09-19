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
