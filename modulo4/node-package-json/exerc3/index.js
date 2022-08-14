//3

const fs = require("fs")

const showTaskSave = fs.readFileSync(__dirname + "/save.json")
const tasks = JSON.parse(showTaskSave)

const addTask = (newTask) => {
    tasks.push(newTask)
    const taksString = JSON.stringify(tasks)
    fs.writeFileSync(__dirname + "/save.json", taksString)
    return (`Tarefa adiciona como sucesso`)
}

console.log(addTask(process.argv[2]))
console.log("Tarefas: ", tasks)