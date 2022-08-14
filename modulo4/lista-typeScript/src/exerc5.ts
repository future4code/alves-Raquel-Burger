type Usuario = {
    name: string,
    email: string,
    role: string
}

const emailAdmins = (usuarios: Usuario[]): string[] => {
    return usuarios.filter((usuario: Usuario) => {
        return usuario.role === "admin"
    }).map((usuario: Usuario) => {
        return usuario.email
    })
}

const arrayUsuarios =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

console.log(emailAdmins(arrayUsuarios))