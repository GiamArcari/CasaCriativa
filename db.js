const sqlite3 = require ('sqlite3').verbose()
//instanciando um objeto
const db = new sqlite3.Database('./ws.db')

//serialize permite usar uma função com diversos comando sql
db.serialize(function(){
    // Criar a tabela (usamos o run para passar os parametros)
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
/*
    // Inserir dado na tabela
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
   
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae,",
        "http://rocketseat.com.br"
    ]
    
    db.run(query,values, function(err){
        if (err) return console.log(err)
        
        console.log(this)
    })

    


 
     // Deletar um dado da tabela
    db.run(`DELETE FROM ideas WHERE id=?`, [1], function(err){
        if (err) return console.log(err)

        console.log("DELETEI", this)
    })
    
    // Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function(err,rows){
        if (err) return console.log(err)
        
        console.log(rows)
    })

 
*/
})


//exportando o banco de dados
module.exports = db