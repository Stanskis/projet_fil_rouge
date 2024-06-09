export default class Account{

    static #_id = 0;

    constructor(props){
        const { id, username, email, password} = props;
        this.id = id || ++Account.#_id;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    static get _id(){
        return this.#_id;
    }
    static set _id(value){
        this.#_id = value;
    }
    
    get username(){
        return this._username;
    }
    set username(value){
        this._username = value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return this._password;
    }
    set password(value) {
        this._password = value;
    }

}

