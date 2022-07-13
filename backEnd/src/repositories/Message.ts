class Message extends Repository {
    sysId: String | undefined;
    readonly tableName: String | undefined = "t_message";
    constructor() {
        super();
    }

    getParams(): String {
        return "";
    }

}