const NodeEnviroment = require('jest-environment-node');
const {v4: uuid} = require("uuid")

class CustomEnviroment extends NodeEnviroment {
    constructor(config){
        super(config)
        this.schema = `piD_${uuid}`
        this.connectionsString = `${process.env.DATABASE_URL}${this.schema}`
    }
    
    setup(){
       process.env.DATABASE_URL = this.connectionsString;
       this.global.process.env.DATABASE_URL = this.connectionsString;

       
    }
}

module.exports = CustomEnviroment;