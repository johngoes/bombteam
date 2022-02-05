import axios from "axios";

const baseUrl = 'https://api.bscscan.com/api';
const bheroContractAddress = '0x30Cc0553F6Fa1fAF6d7847891b9b36eb559dC618';
const apiToken = process.env.REACT_APP_BSCSCAN_API_KEY;

export const apiBsc = axios.create({
  baseURL: baseUrl
})

export const getHeroesByWallet = walletAddress => {
  return apiBsc.get('/', {
    params: {
      module: 'account',
      action: 'tokennfttx',
      contractaddress: bheroContractAddress,
      address: walletAddress,
      page: 1,
      offset: 50,
      startblock: 0,
      endblock: 999999999,
      sort: 'asc',
      apikey: apiToken
    }
  })
}

/*
{
   "status":"1",
   "message":"OK",
   "result":[
      {
         "blockNumber":"2657100",
         "timeStamp":"1606646313",
         "hash":"0x43485c443c235156777148dddcc1483a1c8f46cccf5ab185cfc4bd678f247b6b",
         "nonce":"6",
         "blockHash":"0x20b6e2e67e74badc19b225a0aa4febe2382569c99842e32bc9d5dc94631a349d",
         "from":"0x0000000000000000000000000000000000000000",
         "contractAddress":"0x5e74094cd416f55179dbd0e45b1a8ed030e396a1",
         "to":"0xcd4ee0a77e09afa8d5a6518f7cf8539bef684e6c",
         "tokenID":"384552",
         "tokenName":"Pancake Lottery Ticket",
         "tokenSymbol":"PLT",
         "tokenDecimal":"0",
         "transactionIndex":"2",
         "gas":"27000000",
         "gasPrice":"20000000000",
         "gasUsed":"22547256",
         "cumulativeGasUsed":"22947060",
         "input":"deprecated",
         "confirmations":"7819973"
      },
      ...
  ]
 }
*/