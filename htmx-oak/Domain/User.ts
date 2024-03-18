class User {
    private name:String;
    private pass:String;

    public User(name:String, pass:String){
        this.name = name;
        this.pass = pass;
    }
    public getName(){
        return this.name;
    }
    public getPass(){
        return this.pass;
    }
}

export default User;