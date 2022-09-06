import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";
import axios from 'axios'
import { BASE_URL } from "./url";

// 1
// a) https://labenews.herokuapp.com/subscribers
// b) Promise<any[]>

// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${BASE_URL}/subscribers`)
//     return response.data
// }

//2
// a) na arrow, o async vem depois e na function o async vem primeiro

//3

type User = {
    id: string,
	name: string,
	email: string
}

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`)
    return response.data.map((res:any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

// 4
// a) void

const postCreateNews = async ( 
    title: string,
    content: string,
    date: number
    ): Promise<void> => {
        await axios.put(`${BASE_URL}/news`, {
            title: title,
            content: content, 
            date: date
          })
}

const postSendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
  
    try {
        const promises = users.map(user =>{
            return axios.post(`${BASE_URL}/notifications`, {
              subscriberId: user.id,
              message: message,
            })
          })
          await Promise.all(promises);
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  }

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
        const createNews = await postCreateNews("TituloRaquel", "ContentRaquel", 29/8/22)
        console.log(createNews)
        const sendNotifications = await postSendNotifications(subscribers, "Uma notificação para o usuário")
        console.log(sendNotifications)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()