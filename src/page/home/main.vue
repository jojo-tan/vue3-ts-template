<!-- 首页 -->
<template>
  <section class="page-home">
    <el-button 
      type="primary" 
      size="small"
      @click="getMessageData(0)"
    >
      Primary
    </el-button>
    <el-button 
      type="primary" 
      size="small"
      @click="clearSelection"
    >
      清空用户选择
    </el-button>

    <el-button 
      type="primary" 
      size="small"
      @click="navMode = 'horizontal'"
    >
      horizontal
    </el-button>
    <el-button 
      type="primary" 
      size="small"
      @click="navMode = 'vertical'"
    >
      vertical
    </el-button>

    <el-table
      ref="table"
      :data="tableData"
      :height="400"
    >
      <el-table-column type="selection" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { navMode } from '@/components/global-nav-cp.ts'
import { ElButton, ElTable, ElTableColumn } from 'element-plus'
import io from '@/io/main.ts'
// 消息类型
interface MessageItem {
  id: string,
  isRead: boolean,
  messageCode: string,
  messageContent: string,
  messageType: number
}
interface MessageApiType {
  current: string,
  pages: string,
  size: string,
  total: string,
  records: MessageItem[]
}
// 获取消息数据
const getMessageData = (messageType: number):void => {
  io.post<MessageApiType>('messageOverview/queryToDoMessageList', {
    flag: 0,
    messageType,
    pageNo: 1,
    size: 20,
    userIds: ['8274564314103808']
  })
    .then((response) => {
      response.data.records.forEach((item) => console.log(JSON.parse(item.messageContent)))
    })
}
// 表格数据类型
interface TableDataItem {
  date: string,
  name: string,
  address: string
}
// 表格数据
const tableData: TableDataItem[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
// 表格组件
const table = ref<InstanceType<typeof ElTable>>()
// 清空用户选择
const clearSelection = ():void => table.value?.clearSelection()
</script>

<style lang="less" scoped></style>