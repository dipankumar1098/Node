import fs from 'fs'
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    let users=json.parse(data)
    let male_users=[]
    let female_users=[]
    for (user of users){
        if(user.gender=='male')
        {
             male_users.Push(user)
        }
        if(user.gender=='female')
        {
            female_users.Push(user)
        }
                        }})

fs.writeFile('male.json',JSON.stringify(male_users),(err)=>{if(err) throw err; console.log("successful")})
fs.writeFile('female.json',JSON.stringify(female_users),(err)=>{if(err) throw err; console.log("successful")})

