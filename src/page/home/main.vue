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
  </section>
</template>

<script lang="ts" setup>
import io from '@/io/main.ts'
type MessageItem = {
  id: string,
  isRead: boolean,
  messageCode: string,
  messageContent: string,
  messageType: number
}
type MessageApiType = {
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
</script>

<style lang="less" scoped></style>