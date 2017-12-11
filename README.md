
https://pure-refuge-32982.herokuapp.com/posts/ooo - просмотр всех постов

Author     
https://pure-refuge-32982.herokuapp.com/author

Get all posts     
curl -X GET "https://blooming-plateau-67511.herokuapp.com/users"  

Get post by id     
curl -X GET "https://pure-refuge-32982.herokuapp.com/posts/xyz/ooo" - 

Create a new post    
curl -H "Content-Type: application/json" -X POST -d "{\"id\":\"xyz2\",\"title\":\"xyz2\",\"categories\":\"xyz2\",\"content\":\"xyz2\"}" https://pure-refuge-32982.herokuapp.com/posts/ooo


Delete post      
curl -H "Content-Type: application/json" -X DELETE -d "{\"id\":\"xyz1\",\"title\":\"xyz1\",\"categories\":\"xyz1\",\"content\":\"xyz1\"}" https://pure-refuge-32982.herokuapp.com/posts/xyz1/ooo

Add function
https://pure-refuge-32982.herokuapp.com/add/4/3

Subtract
https://pure-refuge-32982.herokuapp.com/subtract/4/3

 Multiply
 https://pure-refuge-32982.herokuapp.com/multiply/4/3
 
  Divide
  https://pure-refuge-32982.herokuapp.com/divide/4/3
  
  Pow
  https://pure-refuge-32982.herokuapp.com/pow/4/3
  
  Kramer
  https://pure-refuge-32982.herokuapp.com/kramer/1/2/1/3/4/7
