import fs from 'fs'
/* let content=fs.readFileSync('a.txt','utf-8') */
fs.readFile('a.txt', 'utf-8',(err,data)=>{
    if(err) 
        throw err
    console.log(data)
})