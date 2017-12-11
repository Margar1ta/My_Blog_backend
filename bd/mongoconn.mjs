import M from 'mongoose';
const URL = 'mongodb://userwriter:retirwresu@151.248.115.32/users';
  /* см. другую реализацию в routes/users */
var Post;
try{
Post = new class {
  constructor (url) {

    return m=> {
            m.Promise = global.Promise;
            this.conn = m.createConnection(url);
            this.PostSchema = new m.Schema({
                 "id": {
                   "type": "string"
                 },
                 "title": {
                   "type": "string"
                 },
                 "categories": {
                   "type": "string"
                 },
                 "content": {
                   "type": "string"
                 }
              }, {"collection": "userlist"}
            );
            return this.conn.model(null, this.PostSchema)
    }

  }
}(URL)(M);
} catch(errors) {
console.error(`Error: ${ error }\n${ error.stack }`);
}
export  {Post}
