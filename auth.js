import knex from "./db/knex.js";

export default async function auth(login, pw) {
    let checked = await knex.select('login', 'pw').where('login', login).from('users')
    if (checked == []) {
        checked = false
    }
    if (checked != false) {
        if (checked[0].pw == pw) {
            return 'ok'
        }          
    }}