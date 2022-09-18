<template>
    <div class="app-container">
      <el-row style="width:100%; padding-right:20px;">
        <el-col :span="12">
          <div style="aling:right">
            <h2>Customers Pool</h2>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: right;">
            <el-button type="text">Export</el-button>
            <el-button type="text">Import</el-button>
            <el-button type="primary">Add</el-button>

          </div>
        </el-col>
      </el-row>
    
      <el-card class="box-card">
        <el-descriptions title="total: 100 customers">
         
         
        </el-descriptions>

        <el-tag
        style="margin-right:5px;"
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
      </el-tag>
      </el-card>

      <el-card class="box-card">
        <el-input placeholder="search" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>


        <div class="content_top">

          <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
          type="selection"
          width="55">
        </el-table-column>
          <el-table-column
            prop="date"
            label="Date"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Customer name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="Mobile">
          </el-table-column>
          <el-table-column
          prop="email"
          label="Email">
        </el-table-column>
        <el-table-column label="OP">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
        </el-table>
    
        </div>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>

      </el-card>
    

     
   


     
    
    </div>
  </template>
  
  <script>
   export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tags: [
          { name: 'tag1', type: '' },
          { name: 'tag2', type: 'success' },
          { name: 'tag4', type: 'info' },
          { name: 'tag5', type: 'warning' },
          { name: 'tag6', type: 'danger' }
        ],
        tableData: [{
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        }, {
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        }, {
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        },{
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        },{
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        },{
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        },{
          date: '2016-05-02',
          name: 'FullyFang',
          mobile: '17898989898',
          email: 'FullyFang@qiant.ai',
        }],
        input3: '',
        select: '',
      }
    }
  }
  </script>
  
  <style scoped>
  .line{
    text-align: center;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .content_top {
    margin-top: 20px;  
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .box-card {
    width: 100%;
    border-radius: 6px;
    margin-top:10px;
  }
  </style>
  
  