export default x=>{
  const rtr = x.Router();

  rtr
    .route('/first')
    .get(r=>r.res.end('You sent GET first') )
    .post(r=>r.res.end('You sent POST first') )
  ;
  rtr
    .route('/second')
    .get(r=>r.res.end('You sent GET second') )
    .post(r=>r.res.end('You sent POST second') )
  ;
  return rtr;
}
