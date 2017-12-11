import M from 'mongoose';
const URL = 'mongodb://userwriter:retirwresu@151.248.115.32/users';
  /* см. другую реализацию в routes/users */
var User;
try{
User = new class {
  constructor (url) {

    return m=> {
            m.Promise = global.Promise;
            this.conn = m.createConnection(url);
            this.UserSchema = new m.Schema({
                 "id": {
                   "type": "string"
                 },
                 "title": {
                   "type": "string"
                 }
              }, {"collection": "userlist"}
            );
            return this.conn.model(null, this.UserSchema)
    }

  }
}(URL)(M);
} catch(errors) {
console.error(`Error: ${ error }\n${ error.stack }`);
}
export  {User}
