import Mock from 'mockjs';
// 模拟用户信息接口
Mock.mock('/api/user', 'get', {
  code: 200,
  message: '成功',
  data: {
    id: '@guid',
    name: '@cname',
    age: '@integer(20, 50)',
  },
});

// 模拟文章列表接口
Mock.mock('/api/posts', 'get', {
  code: 200,
  message: '成功',
  'data|5': [
    {
      id: '@guid',
      title: '@ctitle(5, 10)',
      content: '@cparagraph(3, 5)',
      author: '@cname',
      createTime: '@datetime',
      // 时间
      date: '@date("HH:mm")',
    },
  ],
});

Mock.mock('/api/peoples', 'get', {
    code: 200,
    message: '成功',
    'list|5': [{
        'id|+1': 1,
        // 英文姓名
        'name': '@name',
        // 邮箱
        'email': '@email',
        // 时间
        'date': '@date("HH:mm")',
        // 手机号
        'phone': /^1[385][1-9]\d{8}/
      }]
  });


  Mock.mock('/api/mock/attendances', 'get', {
    code: 10000,
    message: '操作成功！',
    success: true,
    data: {
      total: 10,
      'rows|10': [
        {
          'departmentId|1000000000000000008-1999999999999999999': 1,
          'departmentName|1': ['总裁办', '行政部', '人事部', '财务部', '技术部'],
          id: '1063705989926227968',
          mobile: /^1[385][1-9]\d{8}/, // 手机号
          username: '@cname', // @cname 随机生成中文名
          'workNumber|1001-1999': 1,
          'attendanceRecord|5': [
            {
              'adtStatu|1-6': 1,
              'day|+1': 20200301,
              departmentId: '1175310929766055936',
              'id|1000000000000000008-1999999999999999999': 1,
              jobStatu: 0,
              userId: '1063705989926227968'
            }
          ]
        }
      ]
    }
  })