<p align="center">
  <h3 align="center">
    DrivenPass  
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/Danilosrr/projeto19-drivenpass

$ cd projeto18-valex

$ npm install

$ npm run dev
```

## API:

```
- POST /signup
    - Route to create new user
    - body: {
        "email": "email@email.com",
        "password": "password123" 
    }
- POST /signin
    - Route to sign in
    - body: {
        "email": "email@email.com",
        "password": "password123"
    }
 ```
 ```
- POST /user/credential
    - Route where user can save a new credential
    - headers: {  "Authorization": "token"  }
    - body: {
        "name": "youtube",
        "url":"https://www.youtube.com/",
        "username":"username",
        "password": "password"
      }
      
- GET /user/credential/:id
    - Route where user can see credentials
    - query param: if given an id returns only specified object  
    - headers: {  "Authorization": "token"  }
    - body: {}
    
- DELETE /user/credential/:id
    - Route where user can delete credentials
    - query param: id of the specified object for deletion 
    - headers: {  "Authorization": "token"  }
    - body: {}
```
```
- POST /user/note
    - Route where user can save a new note
    - headers: {  "Authorization": "token"  }
    - body: {
        "title": "Note title",
        "note":"note content"
      }
      
- GET /user/note/:id
    - Route where user can see notes
    - query param: if given an id returns only specified object  
    - headers: {  "Authorization": "token"  }
    - body: {}
    
- DELETE /user/note/:id
    - Route where user can delete notes
    - query param: id of the specified object for deletion 
    - headers: {  "Authorization": "token"  }
    - body: {}
```
```
- POST /user/wifi
    - Route where user can save a new wifi
    - headers: {  "Authorization": "token"  }
    - body: {
        "name": "internet",
        "network":"network",
        "password": "0123456789"
      }
      
- GET /user/wifi/:id
    - Route where user can see wifi's
    - query param: if given an id returns only specified object  
    - headers: {  "Authorization": "token"  }
    - body: {}
    
- DELETE /user/wifi/:id
    - Route where user can delete wifi's
    - query param: id of the specified object for deletion 
    - headers: {  "Authorization": "token"  }
    - body: {}
```
```
- POST /user/card
    - Route where user can save a new card
    - headers: {  "Authorization": "token"  }
    - body: {
        "number": "1234 1234 1234 1234",
        "title": "card title",
        "securityCode": "123",
        "expirationDate": "12/22",
        "password": "1234",
        "isVirtual": true,
        "type": "debit"
      }
      
- GET /user/card/:id
    - Route where user can see cards
    - query param: if given an id returns only specified object  
    - headers: {  "Authorization": "token"  }
    - body: {}
    
- DELETE /user/card/:id
    - Route where user can delete cards
    - query param: id of the specified object for deletion 
    - headers: {  "Authorization": "token"  }
    - body: {}
```
```
- POST /user/doc
    - Route where user can save a new document
    - headers: {  "Authorization": "token"  }
    - body: {
        "number": "12312312312",
        "title": "document title",
        "completeName": "complete name",
        "issuingBody": "issuingBody",
        "expirationDate": "11/27",
        "emissionDate": "04/27",
        "type": "RG"
      }
      
- GET /user/doc/:id
    - Route where user can see documents
    - query param: if given an id returns only specified object  
    - headers: {  "Authorization": "token"  }
    - body: {}
    
- DELETE /user/doc/:id
    - Route where user can delete documents
    - query param: id of the specified object for deletion 
    - headers: {  "Authorization": "token"  }
    - body: {}
```
## Deploy
The API is deployed at the link: https://drivenpass-danilo.herokuapp.com/