<template>
  <div class="comment">
    <el-form :model="form" label-width="90px" width="60%">
      <el-col :span="10">
        <el-form-item label="昵称(可选)">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="个人主页">
          <el-input v-model="form.site"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="21">
        <el-form-item label="评论：">
          <el-input type="textarea" v-model="form.comment" placeholder="在此输入新的评论"></el-input>
        </el-form-item>
      </el-col>
      <el-col :offset="7">
          <el-form-item>
            <el-button type="text">提交评论</el-button>
          </el-form-item>
      </el-col>
    </el-form>
    <el-col>
      <div v-if="comments_num === 0">
        <p class="no_comments">没有评论</p>
      </div>
      <el-table v-else :data="comments" max-height="250">
        <el-table-tree-column
            width="420px"
            label="评论" >
          <template slot-scope="props">
                {{ props.row.nickname }}说：
                {{ props.row.comment }}
            </el-row>
          </template>
        </el-table-tree-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      comments_num: 2,
      comments: [{
        id: 1,
        parent_id: null,
        comment: "tester",
        depth: 0,
        user:{
          id: 1
          nickname: 'tester'
        },
        child_num: 1,
        children:[{
          id:2,
          comment: "slider",
          depth:1,
          user:{
            id: 1
            nickname: 'tester'
          },
          parent_id:1,
          expanded: true
        }]
      }],
      form: {
        nickname: null,
        site: null,
        comment: null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
