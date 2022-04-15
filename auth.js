const knex =  require("./db/knex.js").default;

exports.default = async function auth(login, pw, admincheck = 0) {
        let checked = await knex.select('login', 'pw', 'isadmin').where('login', login).from('users')
        if (checked == []) {
            checked = false
        }
        if (checked != false) {
            if (admincheck) {
                if (checked[0].pw == pw) {
                    if (checked[0].isadmin == true) {
                        return 'ok'
                    }
                        
                }          
        }
            else {
                if (checked[0].pw == pw) {
                    return 'ok'
                }  
            }
    }
    }
    