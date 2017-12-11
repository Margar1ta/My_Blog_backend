import {User} from '../../bd/mongoconn';
import bodyParser from 'body-parser';
import _ from 'lodash';

  /* см. другую реализацию в mongoconn */
export default class Router {

   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get(async r=>{
              const list = await User.find();
              r.res.json(
                list.map( x=> {
                     const {username, password} = x;
                     return {login: username, password};
                })
              )
              //r.res.json( list.map ( x=> ({  login: x.username  }) ) );
          })
          .post(async r=> {
             const {username, password} = r.body;
             const x  = await User.findOne({username, password});
             if (x) return r.res.send('User already exists! body:'+JSON.stringify(r.body)+" "+username+" "+ password);
             const newUser = new User( {username, password} );
             r.res.json( await newUser.save() );

          })
          .delete(async r=> {
            const {username, password} = r.body;
      const x  = await User.findOneAndRemove({username, password});
      if (x)   return r.res.json(x);
       r.res.json("Error");
             // удаление пользователя (см. r.body)
             // User.remove
          })
          .put(async r=> {

            const {username, password, new_password} = r.body;
      const x  = await User.findOne({username, password});
      if (x) {
         x.password = new_password;
         r.res.json( await x.save() );
      } else {
        r.res.json("Error");
      }
             // обновления пользователя (см. r.body)
             // User.update
          })
        ;
        r
          .route('/:username')
          .get(async r=>{
              const {username} = r.params;
              const result = await User.findOne({username});
              r.res.json( result  )
          })
        ;
        return r;
  }
}
