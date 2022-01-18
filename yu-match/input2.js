import {
  deliveryTermList,
  largeTypeList,
  platFlagList,
  tradeTypeList,
  EBILL_STATUS_LIST,
  SYNC_STATUS_LIST,
  PLATEFORM_DELIVERY_LIST,
  CONTAIN_GIFT,
  TAX_LIST,
} from "@/data-map/order";

import { Message } from "element-ui";

import {
  getOverTimeValue,
  overTimeList,
  logisticsNoExpireDayList,
} from "@/data-map/time";
import { platformIdOnChange } from "../utils";
import { setTradeWaitProcessDeadline } from "@/api-new/order/pending/index.js";
import { getFlagIds } from "@/components/marks/utils";
export default {
  batchSearch: {
    label: "批量搜索",
    type: "batch",
    value: [1, ""],
    options: [
      {
        id: 1,
        name: "系统订单号",
        placeholder:
          "多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）",
      },
      {
        id: 2,
        name: "平台订单号",
        placeholder:
          "可以录入平台订单号或平台子单号，多条记录，用 “回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）",
      },
      {
        id: 3,
        name: "SKU编码",
        placeholder:
          "可以录入单品SKU编码或组合装SKU编码，多条记录，用 “回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）",
      },
    ],
    placeholder: "",
  },
  // timeTagConfig: {
  //   type: 'empty',
  //   resetType: true,
  //   value: '',
  //   tipText: '配置处理时间后，待处理页面仅展示今日该时间点之前下单的订单',
  //   onchange: async(value, that) => {
  //     console.log('居然触发了')
  //     await setTradeWaitProcessDeadline({ deadlineTime: value })
  //     if (value) {
  //       const timeValueArr = value.split(':')
  //       timeValueArr.pop()
  //       that.$message.success('保存成功，仅展示' + timeValueArr.join(':') + '前下单的订单！')
  //     } else {
  //       that.$message.success('重置成功，展示全部订单！')
  //     }
  //     that.$emit('searchData')
  //   }
  // },
  orderNo: {
    label: "业务单号",
    commonSearch: 3,
    type: "input",
    placeholder: "支持订单号、平台订单号、平台子单号",
    value: "",
  },
  platFlag: {
    label: "平台标识",
    type: "select",
    options: platFlagList,
    value: [],
  },
  platformId: {
    label: "平台",
    type: "select",
    options: [],
    commonSearch: 1,
    value: "",
    getValue: (params, formItem) => {
      params.platformId = formItem.value === "" ? -1 : formItem.value;
      return params;
    },
    onChange: platformIdOnChange,
  },

  shopId: {
    label: "店铺",
    commonSearch: 2,
    type: "select",
    options: [],
    value: [],
  },
  warehouseIds: {
    label: "仓库",
    type: "select",
    commonSearch: 6,
    options: [],
    value: [],
  },
  logisticsId: {
    label: "物流",
    type: "select",
    commonSearch: 5,
    options: [],
    value: [],
  },
  ebillStatus: {
    label: "运单获取状态",
    type: "select",
    value: "",
    options: EBILL_STATUS_LIST,
    getValue: (params, formItem) => {
      params.ebillStatus = formItem.value === "" ? -1 : formItem.value;
      return params;
    },
  },
  syncStatus: {
    label: "物流同步状态",
    type: "select",
    value: "",
    options: SYNC_STATUS_LIST,
    getValue: (params, formItem) => {
      params.syncStatus = formItem.value === "" ? -1 : formItem.value;
      return params;
    },
  },

  haveBuyerMessage: {
    label: "买家备注",
    type: "select",
    value: "",
    options: [
      { id: 1, name: "有备注" },
      { id: 0, name: "无备注" },
    ],
  },
  haveCustomerNote: {
    label: "客服备注",
    type: "select",
    value: "",
    options: [
      { id: 1, name: "有备注" },
      { id: 0, name: "无备注" },
    ],
  },
  haveOrderRemark: {
    label: "子单备注",
    type: "select",
    value: "",
    options: [
      { id: 1, name: "有备注" },
      { id: 0, name: "无备注" },
    ],
  },
  haveErpRemark: {
    label: "系统备注",
    type: "select",
    value: "",
    options: [
      { id: 1, name: "有备注" },
      { id: 0, name: "无备注" },
    ],
  },

  // domesticLogisticsId: {
  //   label: '国内物流',
  //   type: 'select',
  //   options: [],
  //   value: ''
  // },
  tradeType: {
    label: "订单类型",
    type: "select",
    options: tradeTypeList,
    value: "",
  },
  buyerMessageList: {
    label: "买家备注搜索",
    value: "",
    type: "textarea",
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : [];
      params.buyerMessageList = content
        .map((o) => o.trim())
        .filter((o) => o.length);
      return params;
    },
  },
  csRemarkList: {
    label: "客服备注搜索",
    value: "",
    type: "textarea",
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : [];
      params.csRemarkList = content
        .map((o) => o.trim())
        .filter((o) => o.length);
      return params;
    },
  },
  orderRemarkList: {
    label: "子单备注搜索",
    value: "",
    type: "textarea",
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : [];
      params.orderRemarkList = content
        .map((o) => o.trim())
        .filter((o) => o.length);
      return params;
    },
  },
  erpRemarkList: {
    label: "系统备注搜索",
    value: "",
    type: "textarea",
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : [];
      params.erpRemarkList = content
        .map((o) => o.trim())
        .filter((o) => o.length);
      return params;
    },
  },
  deliveryTerm: {
    label: "付款方式",
    type: "select",
    options: deliveryTermList,
    value: "",
  },
  amountReceivable: {
    // [amountReceivableStart, amountReceivableEnd]
    label: "应收金额",
    type: "num-range",
    value: [],
  },
  goodsAmount: {
    // [amountReceivableStart, amountReceivableEnd]
    label: "订单总货款",
    type: "num-range",
    value: [],
  },
  platformDelivery: {
    label: "平台发货状态",
    type: "select",
    value: "",
    options: PLATEFORM_DELIVERY_LIST,
    getValue: (params, formItem) => {
      params.platformDelivery = formItem.value === "" ? -1 : formItem.value;
      return params;
    },
  },
  flagIds: {
    label: "标记",
    type: "mark",
    commonSearch: 8,
    value: [],
    options: [],
    getValue: getFlagIds,
  },
  amountCurrency: {
    label: "币种",
    type: "select",
    options: [],
    value: "",
  },
  // 买家指定物流
  logisticsName: {
    label: "买家指定物流",
    type: "select-input",
    value: [1, ""],
    mark: 32,
  },
  freezeStatus: {
    label: "冻结状态",
    type: "select",
    value: "",
    options: [
      { id: 1, name: "冻结订单" },
      { id: 0, name: "非冻结订单" },
    ],
  },
  isTaxPaid: {
    label: "已税状态",
    type: "select",
    value: "",
    options: TAX_LIST,
    // getValue: (params, formItem) => {
    //   params.isTaxPaid = formItem.value === '' ? -1 : formItem.value
    //   return params
    // }
  },
  logisticsNoExpireDay: {
    label: "运单到期时间",
    type: "select",
    value: "",
    options: logisticsNoExpireDayList,
  },
  tradeDay: {
    label: "下单天数",
    type: "num-range",
    precision: 0,
    value: [],
  },
  revertReason: {
    label: "驳回原因",
    value: "",
    options: [],
    type: "select",
  },
  goodsWeight: {
    label: "预估重量",
    type: "num-range",
    precision: 4,
    value: [], // [goodsCountStart, goodsCountEnd]
  },
  specNo: {
    label: "SKU编码",
    commonSearch: 7,
    type: "select-input",
    value: [1, ""],
    mark: 8,
  },
  goodsNo: {
    label: "SPU编码",
    type: "select-input",
    value: [1, ""],
    mark: 2,
  },

  specName: {
    label: "SKU名称",
    type: "select-input",
    // commonSearch: 8,
    value: [1, ""],
    mark: 4,
  },

  goodsName: {
    label: "SPU名称",
    type: "select-input",
    value: [1, ""],
    mark: 1,
  },
  apiSpecNoInDeal: {
    label: "平台SKU编码",
    type: "select-input",
    value: [1, ""],
    mark: 256,
  },
  apiGoodsNoInDeal: {
    label: "平台SPU编码",
    type: "select-input",
    value: [1, ""],
    mark: 512,
  },
  apiGoodsId: {
    label: "平台商品ID",
    type: "select-input",
    commonSearch: 4,
    value: [1, ""],
    mark: 64,
  },
  apiSpecName: {
    label: "平台SKU名称",
    type: "select-input",
    value: [1, ""],
    mark: 16,
  },
  largeType: {
    label: "货品独立属性",
    type: "select",
    value: "",
    options: largeTypeList,
  },
  goodsBrand: {
    label: "货品品牌",
    type: "select",
    value: "",
    options: [],
  },
  goodsClass: {
    label: "货品分类",
    type: "select-tree",
    value: "",
    options: [],
  },
  goodsCount: {
    label: "SKU总数",
    type: "num-range",
    precision: 0,
    value: [], // [goodsCountStart, goodsCountEnd]
  },
  goodsTypeCount: {
    label: "SKU种类数",
    type: "num-range",
    precision: 0,
    value: [], // [goodsTypeCountStart, goodsTypeCountEnd]
  },
  overTimeType: {
    label: "最晚发货时间",
    type: "select",
    value: "",
    options: [
      { id: 0, name: "逾期" },
      { id: 1, name: "1天内" },
      { id: 2, name: "2天内" },
      { id: 3, name: "3天内" },
      { id: 4, name: "5天内" },
      { id: 5, name: "大于5天" },
    ],
  },
  // overTime: {
  //   label: '最晚发货时间',
  //   type: 'select',
  //   options: overTimeList,
  //   value: '', // [overTimeBegin, overTimeEnd]
  //   getValue: (params, formItem) => {
  //     const [overTimeBegin, overTimeEnd] = getOverTimeValue(formItem.value)

  //     params.overTimeBegin = overTimeBegin
  //     params.overTimeEnd = overTimeEnd
  //   }
  // },
  containGift: {
    label: "是否包含赠品",
    value: "",
    type: "select",
    options: CONTAIN_GIFT,
    getValue: (params, formItem) => {
      params.containGift = formItem.value === "" ? -1 : formItem.value;
      return params;
    },
  },

  propertyMask: {
    label: "货品特殊属性",
    type: "select",
    value: [],
    options: [],
  },
  payTimeInterval: {
    label: "付款时间天数",
    type: "num",
    min: 1,
    precision: 0,
    value: "",
    onChange: (val) => {
      if (val && !isNaN(val)) {
        Message.warning("不可以和付款时间重复使用");
      }
    },
  },

  tradeTime: {
    label: "下单时间",
    type: "datetimerange",
    value: [], // [tradeTimeBegin, tradeTimeEnd]
  },
  payTime: {
    label: "付款时间",
    type: "datetimerange",
    value: [], // [payTimeBegin, payTimeEnd]
  },
  logisticsSyncTime: {
    label: "物流同步时间",
    type: "datetimerange",
    value: [], // [logisticsSyncTimeBegin, logisticsSyncTimeEnd]
  },

  receiverCountry: {
    label: "国家",
    value: [],
    options: [],
    type: "select",
  },
  receiverProvince: {
    label: "省/州",
    type: "input",
    value: "",
  },
  receiverCity: {
    label: "市",
    type: "input",
    value: "",
  },
  receiverName: {
    label: "收件人",
    type: "input",
    value: "",
  },
  buyerNick: {
    label: "昵称",
    type: "input",
    value: "",
  },
  receiverMobile: {
    label: "联系方式",
    type: "input",
    placeholder: "支持手机；固话搜索",
    value: "",
  },
};
