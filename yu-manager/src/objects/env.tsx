import { SellerType } from "./seller";

const FAKE_DATA1 = [
  {
    envId: 1,
    envName: "环境A",
    env: "envA",
    fallbackMsg: "回退所需信息",
    updateMsg: "升级所需信息",
    version: "1.0",
    isDefault: true,
    sidList: [
      //卖家列表
      {
        sid: "java_dev", //卖家信息
        operateTime: "fgrgterwtg",
        operator: "gtertgerwyg",
      },
      {
        sid: "test",
        operateTime: "gregterg",
        operator: "regyewrygw",
      },
    ],
  },
];

const FAKE_DATA2 = [
  {
    envId: 2,
    envName: "环境A22222",
    env: "envA",
    fallbackMsg: "回退所需信息",
    updateMsg: "升级所需信息",
    version: "1.0",
    isDefault: true,
    sidList: [
      //卖家列表
      {
        sid: "java_dev2222", //卖家信息
        operateTime: "12343141324132",
        operator: "ferdfgasdgf",
      },
      {
        sid: "test2222",
        operateTime: "432432",
        operator: "grsagrasg",
      },
    ],
  },
  {
    envId: 3,
    envName: "环境A333",
    env: "envA33",
    fallbackMsg: "回退所需信息33",
    updateMsg: "升级所需信息333",
    version: "1.0.3",
    isDefault: false,
    sidList: [
      //卖家列表
      {
        sid: "java_dev2223332", //卖家信息
        operateTime: "123431413241323333",
        operator: "ferdfgasdgf333",
      },
      {
        sid: "test2222333",
        operateTime: "432432333",
        operator: "grsagrasg33333",
      },
    ],
  },
];

export type EnvBaseType = {
  envId?: number;
  envName: string; //环境名称
  env: string; //环境标识
  fallbackMsg: string; // 回退所需信息
  updateMsg: string; // 升级所需信息
  version: string;
};

// export type EnvEditType = EnvAddType & { envId: number };

export type EnvType = EnvBaseType & {
  envId: number;
  isDefault: boolean;
  sidList: SellerType[];
};

export class EnvList {
  moduleId: number;
  list: Array<EnvType> = [];

  constructor(moduleId: number) {
    this.moduleId = moduleId;
  }

  changeModuleId(moduleId: number) {
    this.moduleId = moduleId;
  }

  fetchList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const FAKE_DATA = this.moduleId === 1 ? FAKE_DATA1 : FAKE_DATA2;
        this.list = [...FAKE_DATA];
        resolve("");
      }, 1000);
    });
  }

  create({ envName, env, fallbackMsg, updateMsg, version }: EnvBaseType) {
    const item = {
      envId: this.list[this.list.length - 1].envId++,
      envName,
      env,
      fallbackMsg,
      updateMsg,
      version,
      sidList: [],
      isDefault: false,
    };

    this.list.push(item);
  }

  update(
    envId: number,
    { envName, env, fallbackMsg, updateMsg, version }: EnvBaseType
  ) {
    const index = this.list.findIndex((o) => o.envId === envId);

    if (index > -1) {
      const item = this.list[index];
      this.list.splice(index, 1, {
        ...item,
        envId,
        envName,
        env,
        fallbackMsg,
        updateMsg,
        version,
      });
    }
  }
  setDefault(env: EnvType) {
    env.isDefault = true;
  }

  delete(env: EnvType) {}
}
