import axios from 'axios'
const baseURL = "https://viacep.com.br/ws"

const getAddressInfo = async (cep: string, bairroPessoa: string): Promise<string> => {
    try {

        // Aqui chamamos nosso axios com axios.get
        const res = await axios.get(`${baseURL}/${cep}/json`);

        //Aqui com a informação do nosso get vindo do axios, fazemos uma string destruturada utilizando res.data
        const {logradouro, bairro, localidade, uf} = res.data
        
        // Aqui fazemos uma const Andress ele é uma const que vai ter todas nossas informações de  endereço em uma string apenas.
        const address = `${logradouro}, ${bairro ? bairro : bairroPessoa} - ${localidade} / ${uf}`
        // console.log(address)
        return address
    } catch (error) {
        throw new Error();
    }
}

export default getAddressInfo;