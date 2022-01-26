import http from "../http-common";

class UserDataServices{
    createUser(data){
        return http.post("/",data)
    }
    log(data){
        return http.post("/",data)
    }
}
export default new UserDataServices()