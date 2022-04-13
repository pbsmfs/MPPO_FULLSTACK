# 1. Create db 
    docker run --name pgdb -e POSTGRES_PASSWORD=s -p 5432:5432 -d postgres:alpine 

# 2. Run migrations 
    npm run migrate

# 3. Run seeds
    npm run seed

# 4. Template requests
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