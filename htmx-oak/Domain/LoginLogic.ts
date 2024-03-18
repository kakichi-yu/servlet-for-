import User from "./user";

class LoginLogic {
    public validate(user:User){
        return user.getPass() === "1234";
    }
}