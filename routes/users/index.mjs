import {Post} from '../../bd/mongoconn';
import {User} from '../../bd/mongoconn_user';

import bodyParser from 'body-parser';
import _ from 'lodash';

  /* см. другую реализацию в mongoconn */
export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/ooo') ////   /(\/\?key=ooo$)/    ///////////
          .get(async r=>{
              const list = await Post.find();
              r.res.json(
                list.map( x=> {
                     const {id, title, categories, content} = x;
                     return {id, title, categories, content};
                })
              )

              r.res.set( {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE','Content-Type': 'application/json; charset=utf-8'  } );
              //r.res.json( list.map ( x=> ({  login: x.username  }) ) );
          })
          .post(async r=> {
             const {id, title, categories, content} = r.body;
             const x  = await Post.findOne({id, title, categories, content});
             if (x) return r.res.send('Post already exists! body:'+JSON.stringify(r.body)+" "+title+" "+ content);
             const newPost = new Post( {id, title, categories, content} );
             r.res.set( {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE','Content-Type': 'application/json; charset=utf-8'  } );
             r.res.json( await newPost.save() );

          })
        ;
        r
          .route('/:id/ooo')
          .get(async r=>{
              const {id} = r.params;
              const result = await Post.findOne({id});
              r.res.set( {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE','Content-Type': 'application/json; charset=utf-8'  } );
              r.res.json( result  )
          })
          .delete(async r=> {
            const {id} = r.params;
      const result  = await Post.findOneAndRemove({id});
      //Post.remove({}).exec();
      if (result)   return r.res.json(result);
      r.res.set( {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE','Content-Type': 'application/json; charset=utf-8'  } );
       r.res.json("Error");
             // удаление пользователя (см. r.body)
             // User.remove
          })
        ;
        return r;
  }
}
