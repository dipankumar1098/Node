/* import fs from 'fs'
let data=fs.readFileSync('a.txt','utf-8')
fs.writeFileSync('b.txt',data)
console.log("new file Created!"); */

import fs from 'fs'
fs.readFile('a.txt','utf-8',(err,data)=>{if(err) 
                                                    throw err 
fs.writeFile('b.txt','utf-8',data,(err)=>{if(err) 
                                                    throw err 
                                                        console.log("new file Created");
 }) }) 
