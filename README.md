
https://blooming-plateau-67511.herokuapp.com/users - просмотр всех пользователей

Author     
https://blooming-plateau-67511.herokuapp.com/author

Get all users     
curl -X GET "https://blooming-plateau-67511.herokuapp.com/users"  

Get user by username     
curl -X GET "https://blooming-plateau-67511.herokuapp.com/users/Lola" - get 

Create a new user     
curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"xyz\",\"password\":\"xyz\"}" https://blooming-plateau-67511.herokuapp.com/users

Change user's password      
curl -H "Content-Type: application/json" -X PUT -d "{\"username\":\"xyz\",\"password\":\"\",\"new_password\":\"3333333\"}" 

https://blooming-plateau-67511.herokuapp.com/users 

Delete user        
curl -H "Content-Type: application/json" -X DELETE -d "{\"username\":\"xyz\",\"password\":\"3333333\"}" https://blooming-plateau-67511.herokuapp.com/users

Add function
https://blooming-plateau-67511.herokuapp.com/add/4/3

Subtract
https://blooming-plateau-67511.herokuapp.com/subtract/4/3

 Multiply
 https://blooming-plateau-67511.herokuapp.com/multiply/4/3
 
  Divide
  https://blooming-plateau-67511.herokuapp.com/divide/4/3
  
  Pow
  https://blooming-plateau-67511.herokuapp.com/pow/4/3
  
  Kramer
  https://blooming-plateau-67511.herokuapp.com/kramer/1/2/1/3/4/7
