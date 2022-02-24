export const getFormConfig = (
  warehouseList, warehouseId, classTree, warehouseTypeChange
) => {
  const formConfig =
  {
    batchSearch: {
      label: '批量搜索',
      type: 'batch',
      superSearch: true,
      value: [1, ''],
      options: [
        {
          id: 1,
          name: 'sku编码',
          placeholder:
            '多条记录，用“；”或“回车”分隔，最多输入2000个记录（可直接将Excel文件一列粘贴入框内）'
        }
      ],
      placeholder: ''
    },
    // title1: {
    //   label: '业务信息',
    //   type: 'title'
    // },
    // baseInfo: {
    //   label: '',
    //   type: 'select-input',
    //   inputValue: '',
    //   selectValue: 'specNo',
    //   options: [
    //     { id: 'specNo', name: 'SKU编码' },
    //     { id: 'specName', name: 'SKU名称' },
    //     { id: 'goodsNo', name: 'SPU编码' },
    //     { id: 'goodsName', name: 'SPU名称' }
    //   ]
    // },
    warehouseType: {
      label: '仓库类型',
      type: 'select',
      value: '',
      options: warehouseList,
      onChange: warehouseTypeChange
    },
    warehouseId: {
      label: '仓库名称',
      type: 'select',
      value: [],
      options: warehouseId
    },
    specNo: {
      label: 'SKU编码',
      type: 'select-input',
      value: [0, ''],
      mark: 16
    },
    specName: {
      label: 'SKU名称',
      type: 'select-input',
      value: [0, ''],
      mark: 8
    },
    goodsName: {
      label: 'SPU名称',
      type: 'select-input',
      value: [1, ''],
      mark: 2
    },
    goodsNo: {
      label: 'SPU编码',
      type: 'select-input',
      value: [1, ''],
      mark: 4
    },
    barcode: {
      label: '货品条码',
      type: 'select-input',
      value: [1, ''],
      mark: 1
    },
    defect: {
      label: '正残品显示',
      type: 'select',
      value: '',
      options: [
        { id: 0, name: '只显示正品' },
        { id: 1, name: '只显示残品' }
      ]
    },
    created: { // [createdBegin, createdEnd]
      label: '创建时间',
      type: 'daterange',
      value: []
    },
    classIds: {
      label: '分类',
      type: 'select-tree',
      value: [],
      options: classTree
    },
    // title2: {
    //   type: 'title',
    //   label: '库存信息'
    // },
    stockNum: {
      label: '库存数量',
      type: 'num-range',
      superSearch: true,
      value: []
    },
    avaliableNum: {
      label: '可发库存',
      type: 'num-range',
      value: []
    },
    salesNum: {
      label: '库存低于',
      type: 'select',
      superSearch: true,
      value: '',
      options: [
        { id: 1, name: '7天销量' },
        { id: 2, name: '14天销量' },
        { id: 3, name: '30天销量' }
      ]
    },
    oneWeekNum: {
      label: '7天销量',
      type: 'num-range',
      value: []
    },
    twoWeeksNum: {
      label: '14天销量',
      type: 'num-range',
      value: []
    },
    thirtyDaysNum: {
      label: '30天销量',
      type: 'num-range',
      value: []
    }
  }
  return formConfig
}
