import { getPlatformShopList } from '@/api-new/shop'
import { getFlagIds } from '@/components/marks/utils'
import {
  deliveryTermList,
  largeTypeList,
  platFlagList,
  tradeTypeList,
  PLATEFORM_DELIVERY_LIST,
  CONTAIN_GIFT,
  TAX_LIST,
  logisticsSyncStatus
} from '@/data-map/order'

import {
  getOverTimeValue,
  overTimeList,
  logisticsNoExpireDayList
} from '@/data-map/time'
export default {
  batchSearch: {
    label: '批量搜索',
    type: 'batch',
    inputValue: '', // batchSearchContent
    selectValue: 1, // batchSearchType
    options: [
      { id: 1, name: '系统订单号', placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）' },
      { id: 2, name: '平台订单号', placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）' },
      { id: 3, name: 'SKU编码', placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）' },
      { id: 4, name: '物流单号', placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）' },
      { id: 5, name: '外部仓单号', placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）' }],
    placeholder: ''
  },
  title1: {
    label: '业务信息',
    type: 'title'
  },
  orderNo: {
    label: '业务单号',
    commonSearch: 3,
    type: 'input',
    placeholder: '支持订单号、平台订单号、平台子单号、外部仓单号、推送单号',
    value: ''
  },
  logisticsNo: {
    label: '物流单号',
    commonSearch: 4,
    type: 'input',
    placeholder: '支持物流单号、跟踪单号',
    value: ''
  },
  platformId: {
    label: '平台',
    type: 'select',
    options: [],
    commonSearch: 1,
    value: '',
    async onChange(val, formConfig) {
      formConfig.shopId.value = []

      const { data } = await getPlatformShopList({ deleted: 1, platformId: val })
      formConfig.shopId.options = data
    }
    // getValue: (params, formItem) => {
    //   params.platformId = formItem.value === '' ? -1 : formItem.value
    //   return params
    // }
  },
  shopId: {
    label: '店铺',
    commonSearch: 2,
    type: 'select',
    placeholder: '请选择',
    value: [],
    options: []
  },
  warehouseIds: {
    label: '仓库',
    type: 'select',
    commonSearch: 6,
    options: [],
    value: []
  },
  haveCustomerNote: {
    label: '客服备注',
    type: 'select',
    value: '',
    options: [{ id: 1, name: '有备注' }, { id: 0, name: '无备注' }]
  },
  logisticsId: {
    label: '物流',
    commonSearch: 5,
    type: 'select',
    placeholder: '请选择',
    value: [],
    options: []
  },
  syncStatus: {
    label: '物流同步状态',
    type: 'select',
    placeholder: '请选择',
    value: '',
    options: logisticsSyncStatus
  },
  buyerMessageList: {
    label: '买家备注搜索',
    value: '',
    type: 'textarea',
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : []
      params.buyerMessageList = content.map(o => o.trim()).filter(o => o.length)
      return params
    }
  },
  csRemarkContent: {
    label: '客服备注搜索',
    value: '',
    type: 'textarea'
  },
  haveBuyerMessage: {
    label: '买家备注',
    type: 'select',
    value: '',
    options: [{ id: 1, name: '有备注' }, { id: 0, name: '无备注' }]
  },
  haveErpRemark: {
    label: '系统备注',
    type: 'select',
    value: '',
    options: [{ id: 1, name: '有备注' }, { id: 0, name: '无备注' }]
  },
  erpRemarkList: {
    label: '系统备注搜索',
    value: '',
    type: 'textarea',
    getValue(params, { value }) {
      var content = value ? value.split(/\r|\n|;|；/) : []
      params.erpRemarkList = content.map(o => o.trim()).filter(o => o.length)
      return params
    }
  },
  tradeType: {
    label: '订单类型',
    type: 'select',
    options: tradeTypeList,
    value: ''
  },
  platFlag: {
    label: '平台标识',
    type: 'select',
    options: platFlagList,
    value: []
  },

  isTaxPaid: {
    label: '已税状态',
    type: 'select',
    value: '',
    options: TAX_LIST
    // getValue: (params, formItem) => {
    //   params.isTaxPaid = formItem.value === '' ? -1 : formItem.value
    //   return params
    // }
  },

  deliveryTerm: {
    label: '付款方式',
    type: 'select',
    options: deliveryTermList,
    value: ''
  },
  amountReceivable: {
    label: '应收金额',
    type: 'numrange',
    value: []
  },
  // domesticLogisticsId: {
  //   label: '国内物流',
  //   type: 'select',
  //   options: [],
  //   value: ''
  // },
  // domesticLogisticNo: {
  //   label: '国内运单号',
  //   type: 'input',
  //   value: ''
  // },
  platformDelivery: {
    label: '平台发货状态',
    type: 'select',
    value: '',
    options: PLATEFORM_DELIVERY_LIST,
    getValue: (params, formItem) => {
      params.platformDelivery = formItem.value === '' ? -1 : formItem.value
      return params
    }
  },

  flagIds: {
    label: '标记',
    type: 'mark',
    commonSearch: 8,
    value: [],
    options: [],
    getValue: getFlagIds
  },
  logisticsNoExpireDay: {
    label: '运单到期时间',
    type: 'select',
    value: '',
    options: logisticsNoExpireDayList
  },
  logisticsName: {
    label: '买家指定物流',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  title2: {
    label: '货品信息',
    type: 'title'
  },
  specNo: {
    label: 'SKU编码',
    commonSearch: 7,
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  goodsNo: {
    label: 'SPU编码',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },

  specName: {
    label: 'SKU名称',
    type: 'selectinput',
    // commonSearch: 8,
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },

  goodsName: {
    label: 'SPU名称',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  apiSpecNoInDeal: {
    label: '平台SKU编码',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  apiGoodsNoInDeal: {
    label: '平台SPU编码',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  apiGoodsId: {
    label: '平台商品ID',
    type: 'selectinput',
    inputvalue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  apiSpecName: {
    label: '平台SKU名称',
    type: 'selectinput',
    inputValue: '',
    selectValue: 1,
    options: [
      { id: 0, name: '模糊' },
      { id: 1, name: '精确' }
    ]
  },
  largeType: {
    label: '货品独立属性',
    type: 'select',
    value: '',
    options: largeTypeList
  },
  goodsBrandId: {
    label: '货品品牌',
    type: 'select',
    value: '',
    options: []
  },
  goodsClassId: {
    label: '货品分类',
    type: 'select-tree',
    value: '',
    options: []
  },
  goodsCount: {
    label: 'SKU总数',
    type: 'numrange',
    precision: 0,
    value: [] // [goodsCountStart, goodsCountEnd]
  },
  goodsTypeCount: {
    label: 'SKU种类数',
    type: 'numrange',
    precision: 0,
    value: [] // [goodsTypeCountStart, goodsTypeCountEnd]
  },

  overTime: {
    label: '最晚发货时间',
    type: 'select',
    options: overTimeList,
    value: '', // [overTimeBegin, overTimeEnd]
    getValue: (params, formItem) => {
      const [overTimeBegin, overTimeEnd] = getOverTimeValue(formItem.value)

      params.overTimeBegin = overTimeBegin
      params.overTimeEnd = overTimeEnd
    }
  },
  containGift: {
    label: '是否包含赠品',
    value: '',
    type: 'select',
    options: CONTAIN_GIFT,
    getValue: (params, formItem) => {
      params.containGift = formItem.value === '' ? -1 : formItem.value
      return params
    }
  },

  tradeTime: {
    label: '下单时间',
    type: 'date-time-range',
    value: [] // [tradeTimeBegin, tradeTimeEnd]
  },
  payTime: {
    label: '付款时间',
    type: 'date-time-range',
    value: [] // [payTimeBegin, payTimeEnd]
  },
  checkTime: {
    label: '移入配货时间',
    type: 'quick-date-range',
    selectValue: '',
    value: [] // [logisticsSyncTimeBegin, logisticsSyncTimeEnd]
  },
  title3: {
    type: 'title',
    label: '收件信息'
  },
  receiverCountry: {
    label: '国家',
    value: [],
    options: [],
    type: 'select'
  },
  receiverName: {
    label: '收件人',
    type: 'input',
    value: ''
  },
  buyerNick: {
    label: '昵称',
    type: 'input',
    value: ''
  },
  receiverMobile: {
    label: '联系方式',
    type: 'input',
    placeholder: '支持手机；固话搜索',
    value: ''
  }

}