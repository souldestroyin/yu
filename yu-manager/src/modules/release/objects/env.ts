import { SellerType } from './seller';


const FAKE_DATA1 = [
    {
        "envId": 1,
        "envName": "环境A",
        "env": "envA",
        "fallbackMsg": "回退所需信息",
        "updateMsg": "升级所需信息",
        "version": '1.0',
        "sidList": [	//卖家列表
            {
                "sid": "java_dev",  //卖家信息
                "operateTime": "fgrgterwtg",
                "operator": "gtertgerwyg"
            },
            {
                "sid": "test",
                "operateTime": "gregterg",
                "operator": "regyewrygw"
            }
        ],
    }
]

const FAKE_DATA2 = [
    {
        "envId": 2,
        "envName": "环境A22222",
        "env": "envA",
        "fallbackMsg": "回退所需信息",
        "updateMsg": "升级所需信息",
        "version": '1.0',
        "sidList": [	//卖家列表
            {
                "sid": "java_dev2222",  //卖家信息
                "operateTime": "12343141324132",
                "operator": "ferdfgasdgf"
            },
            {
                "sid": "test2222",
                "operateTime": "432432",
                "operator": "grsagrasg"
            }
        ],
    },
    {
        "envId": 3,
        "envName": "环境A333",
        "env": "envA33",
        "fallbackMsg": "回退所需信息33",
        "updateMsg": "升级所需信息333",
        "version": '1.0.3',
        "sidList": [	//卖家列表
            {
                "sid": "java_dev2223332",  //卖家信息
                "operateTime": "123431413241323333",
                "operator": "ferdfgasdgf333"
            },
            {
                "sid": "test2222333",
                "operateTime": "432432333",
                "operator": "grsagrasg33333"
            }
        ],
    }
]

export class Env {
    envId: number
    envName: string
    env: string
    fallbackMsg: string
    updateMsg: string
    version: string
    sidList: SellerType[]


    constructor(envId: number,
        envName: string,
        env: string,
        fallbackMsg: string, // 回退所需信息
        updateMsg: string, // 升级所需信息
        version: string,
        sidList: SellerType[] //卖家列表
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

export class EnvList {
    moduleId: number
    list: Array<Env> = []

    constructor(moduleId: number) {
        this.moduleId = moduleId
    }

    fetchList() {
        const FAKE_DATA = this.moduleId === 1 ? FAKE_DATA1 : FAKE_DATA2
        this.list = FAKE_DATA.map(({ envId,
            envName, env, fallbackMsg, updateMsg,
            version, sidList
        }) => {

            return new Env(envId,
                envName, env, fallbackMsg, updateMsg, version, sidList
            )
        })
    }
}