import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is runnig in http://localhost:3003")
})

type Afazeres  = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let tarefas: Afazeres[] =[
    {
        userId: 1,
        id:1,
        title: "estudar oop",
        completed: false
    },
    {
        userId: 1,
        id:2,
        title: "dormir",
        completed: true
    },
    {
        userId: 2,
        id:3,
        title: "lavar roupa",
        completed: true
    },
    {
        userId: 2,
        id:4,
        title: "buscar cães",
        completed: false
    },
] 

app.get('/ping', (req:Request, res:Response) => {
    res.send("Pong! 🏓")
})

app.get('/feitos', (req:Request, res:Response) => {
    const showTarefas = tarefas.filter((tarefa) => {
        return tarefa.completed === true
    })
    res.send(showTarefas)
})
app.get('/andamento', (req:Request, res:Response) => {
    const showTarefas = tarefas.filter((tarefa) => {
        return tarefa.completed === false
    })
    res.send(showTarefas)
})

app.post("/tarefas", (req:Request, res:Response) => {
    const {userId, title, completed} = req.body
    tarefas.push({
        userId: userId,
        id: Date.now(),
        title: title,
        completed: completed
    })
    res.send(tarefas)
    
})

app.put("/tarefas/:tarefaId", (req:Request, res:Response) => {
    const tarefaId = req.params.tarefaId 
    const tarefa = tarefas.find((tarefa) => tarefa.id === Number(tarefaId))
    if(tarefa){
        tarefa.completed = !tarefa.completed
        res.send(tarefa)
    }else{
        res.status(400).send("Tarefa não encontrada")
    }
})

app.delete("/tarefas/:tarefaId", (req:Request, res:Response) => {
    const tarefaId = req.params.tarefaId 
    const tarefa = tarefas.find((tarefa) => tarefa.id === Number(tarefaId))
    if(tarefa === undefined){
        res.status(400).send("Tarefa não encontrada")
        return
    }else {
       tarefas = tarefas.filter((tarefa) => {
            return tarefa.id !== Number(tarefaId)
        })
        res.send(tarefas)
    }
})

app.get("/tarefas/:userId", (req:Request, res:Response) => {
    const userId = Number(req.params.userId)
    const tarefasUser = tarefas.filter((user) => {
        return user.userId === userId
    })
    const tarefasOthers = tarefas.filter((user) => {
        return user.userId !== userId
    })
    res.send({
        todos: [{Usuário: tarefasUser}, {Outros: tarefasOthers}]
    })
})