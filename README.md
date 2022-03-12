# 1. Create db 
    sudo docker run --name pgdb -e POSTGRES_PASSWORD=s -p 5432:5432 -d postgres:alpine 

# 2. Run migrations 
    npm run migrate

# 3. Run seeds
    npm run seed
