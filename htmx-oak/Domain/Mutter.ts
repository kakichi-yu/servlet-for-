class Mutter{
    private userName:String;
    private text:String;

    public Mutter(userName:String, text:String){
        this.userName = userName;
        this.text = text;
    }

    public getUserName(){
        return this.userName;
    }

    public getText(){
        return this.text;
    }
}