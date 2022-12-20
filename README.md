# How to start using docker-compose
    docker-compose build .
    docker-compose up

# How to start on bare metal (requires pg to be started manually)
    npm i
    npm start
    npm run migrate
    npm run seed
    
# Template requests

###  GET:
    1.  http://localhost/getsensors/1607560643
        headers: 'login': 'testuser', 'pw': 123
    2.  http://localhost/getaccessed
        headers: 'login': 'testuser', 'pw': 123
### POST:
    1.  http://localhost/useraccess
        headers: 'login': 'testuser', 'pw': 123
        body: 'user_id': 2, 'data_id': [1607560642]
    2.  http://localhost/createuser
        headers: 'login': 'testuser', 'pw': 123
        body: 'login': new_user, 'pw': 'newuserpw'
### DELETE:
    1.  http://localhost/useraccess
        headers: 'login': 'testuser', 'pw': 123
        body: 'user_id': 2, 'data_id': [1607560642]
