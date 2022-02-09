import { platformIdOnChange } from '../utils'
import {
  platformStatusArr,
  refundStatusArr,
  refundTypeArr,
  systemStatusArr
} from '@/data-map/refund'

export const getFormConfig = (
  platformList,
  shopList,
  countryList
) => {
  const formConfig = {

    batchSearch: {
      label: '批量搜索',
      type: 'batch',
      value: [1, ''],
      options: [
        {
          id: 1,
          name: '平台退货订单号',
          placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）'
        },
        {
          id: 2,
          name: '平台订单号',
          placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）'
        },
        {
          id: 4,
          name: '平台退货子单号',
          placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）'
        },
        {
          id: 3,
          name: '平台子单号',
          placeholder: '多条记录，用“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）'
        }
      ],
      placeholder: ''
    },
    orderNo: {
      label: '业务单号',
      type: 'input',
      placeholder: '支持平台退货订单号、平台订单号、平台子单号、平台退货子单号',
      commonSearch: 3,
      value: ''
    },
    logisticsNo: {
      label: '物流单号',
      type: 'input',
      commonSearch: 4,
      value: ''
    },
    platformId: {
      label: '平台',
      type: 'select',
      options: platformList,
      commonSearch: 1,
      value: '',
      onChange: platformIdOnChange
    },
    shopId: {
      label: '店铺',
      commonSearch: 2,
      type: 'select',
      options: shopList,
      value: []
    },
    status: {
      label: '平台状态',
      commonSearch: 5,
      value: '',
      options: platformStatusArr,
      type: 'select'
    },
    processStatus: {
      label: '系统状态',
      commonSearch: 6,
      value: '',
      options: systemStatusArr,
      type: 'select'
    },
    type: {
      label: '退换类型',
      commonSearch: 7,
      type: 'select',
      value: '',
      options: refundTypeArr
    },
    csStatus: {
      label: '退换阶段',
      commonSearch: 8,
      type: 'select',
      value: '',
      options: refundStatusArr
    },
    reason: {
      label: '退货原因',
      value: '',
      type: 'input'
    },
    receiverCountry: {
      label: '国家',
      value: [],
      options: countryList,
      type: 'select'
    },
    specNo: {
      label: '平台SKU编码',
      type: 'select-input',
      value: [1, ''],
      mark: 32
    },
    specName: {
      label: '平台SKU名称',
      type: 'select-input',
      value: [1, ''],
      mark: 16
    },
    goodsNo: {
      label: '平台SPU编码',
      type: 'select-input',
      value: [1, ''],
      mark: 8
    },
    goodsName: {
      label: '平台SPU名称',
      type: 'select-input',
      value: [1, ''],
      mark: 4
    },
    goodsId: {
      label: '平台商品ID',
      type: 'select-input',
      value: [1, ''],
      mark: 2
    },
    specId: {
      label: '平台规格ID',
      type: 'select-input',
      value: [1, ''],
      mark: 1
    },
    created: { // [createdBegin, createdEnd]
      label: '创建时间',
      type: 'daterange',
      value: []
    },
    modified: { // // [modifiedBegin, modifiedEnd]
      label: '修改时间',
      type: 'daterange',
      value: []
    }
  }

  return formConfig
}
