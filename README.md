1. create db \
`sudo docker run --name pgdb -e POSTGRES_PASSWORD=s -p 5432:5432 -d postgres:alpine `

2. run migrations \
`npm run migrate`

3. run seed \
`npm run seed`