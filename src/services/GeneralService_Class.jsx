import axios from "axios"; 

/*environment variables*/

//I have to check why process.env showing null ,
export const URL = {
  REACT_APP_BASEURL_GLOBAL: process.env.REACT_APP_BASEURL_GLOBAL,
  REACT_APP_BASEURL_CONFIG: process.env.REACT_APP_BASEURL_CONFIGURATION, 
};

// export const URL = {
// REACT_APP_BASEURL_GLOBAL : "https://localhost:44369/api/global/",
// REACT_APP_BASEURL_CONFIGURATION :"https://localhost:44387/api/configuration/", 
// }

//REQUEST Headers
const GetHeaders = {  
  "Content-Type": "application/json",
    "Authorization": `Bearer ${!!localStorage.getItem("PAccountsToken") ? localStorage.getItem("PAccountsToken") : "" }` 
}

const PostHeaders = {  
  //"Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${!!localStorage.getItem("PAccountsToken") ? localStorage.getItem("PAccountsToken") : "" }` 
}

const PostAnonymousHeaders = {  
  //"Accept": "application/json",
  "Content-Type": "application/json",
}


//REQUEST SERVICES

//it should be a simple JS object at the End , 
//I just Passed a string Action method, that why make a function and return object


// Configure Get Service   [Working OK]
export const  GetService = (ActionMethod,ProjectURL)=> {       
  const API_URL = ProjectURL + ActionMethod
  console.log("URL => ",API_URL)
  return   axios.get(API_URL,GetHeaders)
};
  



// Configure Post Service  [Working OK]
export const PostService =(ActionMethod,Body,ProjectURL)=> {
  const API_URL = ProjectURL + ActionMethod;
  console.log("URL => ",API_URL);  
  return axios.post(API_URL, Body ,PostHeaders)
}
    
// Configure Post Anonymous Service fot login , third Party Services,etcs [Working OK]
export const PostAnonymousService =(ActionMethod,Body,ProjectURL)=> {
  const API_URL = ProjectURL + ActionMethod;
  console.log("URL => ",API_URL);  
  return axios.post(API_URL, Body ,PostAnonymousHeaders)
}

// export  function PostService(ActionMethod ="", Data,ProjectURL="")  {       
//   return axios.post({ ProjectURL+ActionMethod,  
//      Data,
//     { 
//        "Accept": "application/json; charset=utf-8",
//        "Content-Type": "application/json"
//     } 
//  })
//  };
//export default {GetService()}
//1st  Way using create instance and then define in configure object   
//const GetService =(ActionMethod)=> axios.create(Configure_GetServic);
//2nd Way using direct Get instance
//const GetService =(ActionMethod )=> axios.get(ActionMethod,Configure_GetService);

 
// let Configure_GetServic_Copy =  {    
//    as:"",
//     Names : func(ActionMethod)={
//       return :{
//         method: 'get', // Method or Verb  
//         baseURL: URL+ActionMethod,
//           headers: {
//             //"Accept": "application/pdf",
//             "Content-Type": "application/json"
//             //'Authorization': `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
//           //Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//           }
//       } 
//     } 
// };    



/*get*/
// export function GetService(Method: string, URL?: string) {
//   return axios.get(URL + Method, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//     });
// }


// export function NetworkFile(method: string, body: any, URL?: string) {

//   if (body.length === 0) {
//     return;
//   }
//   const formData = new FormData();
//   // for (let i = 0; i < body.length; i++) {
//   //     formData.append('file', body[i]);
//   // }

//   formData.append('file', body.filename);

//   //debugger;
//   return this.http.post(URL, formData, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }`,
//                   reportProgress: true, 
//                   responseType: 'blob'
//                },
//     });
//     //{reportProgress: true, observe: 'events' }
// }

/*post*/
// export function PostService(Method: string, Body: any, URL?: string) {
//   //debugger
//   return axios.post(URL + Method, Body, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//     });
// }


// export function FileImport(Method: string, Body: any, URL: string) {
// var formData = new FormData()
// for (let i = 0; i < Body.length; i++) {
//   formData.append('file', Body[i]);
// }
// formData.append('Files',Body)
//   return axios.post(URL + Method, formData, 
//     {
//       headers: { "Content-Type": "multipart/form-data", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//     });
// }


/*delete*/
// const headers = {
//   Authorization: "***",
// };

// export function DeleteService(Method: string, data: any, URL?: string) {
//   return axios.delete(URL + Method, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//       data
//     });
// }
/*put*/
// export function PutService(Method: string, data: any, URL?: string) {
//   return axios.put(URL + Method, data, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//     });
// }

//for report viewer
// export function GetServiceReport(Method: string, URL?: string) {
//   return axios.get(URL + Method, 
//     {
//       headers: { Accept: "application/pdf",
//                  "Content-Type": "application/pdf", 
//                  Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//       responseType: "blob"
//     });
// }


