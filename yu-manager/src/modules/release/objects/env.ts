import { SellerList } from "./seller"


export class Env {
    envId: number
    envName: string
    env: string
    fallbackMsg: string
    updateMsg: string
    version: string
    sidList: SellerList


    constructor(envId: number,
        envName: string,
        env: string,
        fallbackMsg: string,
        updateMsg: string,
        version: string,
        sidList: SellerList
    ) {
        this.envId = envId
        this.envName = envName
        this.env = env
        this.fallbackMsg = fallbackMsg
        this.updateMsg = updateMsg
        this.version = version
        this.sidList = sidList
    }
}