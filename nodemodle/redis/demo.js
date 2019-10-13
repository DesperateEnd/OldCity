
/* redis 的demo  */
const redis = require('redis');// 引入redis 
const client = redis.createClient(6379, '127.0.0.1',{
  auth_pass:7777777//密码   在redis windows.config  文件里面设置
});//初始化redis
module.exports = myRedis = ()=>{
    /* 键值对 */
    // client.on('error', function (err) {
    //     console.log('Error ' + err);
    //   });
      
    //   // 1 键值对
    //   client.set('color', 'red', redis.print);
    //   client.get('color', function(err, value) {
    //     if (err) throw err;
    //     console.log('Got: ' + value)
    //     client.quit();//退出
    //   });
      /*哈希表 */
    //   client.hmset('kitty', {//存入 kitty 表
    //     'age': '2-year-old',
    //     'sex': 'male'
    //   }, redis.print);
    //   client.hget('kitty', 'age', function(err, value) {// 获取kitty 表下 age 字段
    //     if (err) throw err;
    //     console.log('kitty is ' + value);
    //   });
      
    //   client.hkeys('kitty', function(err, keys) {// 获取kitty 的key
    //     if (err) throw err;
    //     keys.forEach(function(key, i) {//遍历获取 key  和下标
    //       console.log(key, i);
    //     });
    //     client.quit();// 退出
    //   });
    /* 链表 */
        // client.lpush('tasks', 'Paint the house red.', redis.print);//添加值
        // client.lpush('tasks', 'Paint the house green.', redis.print);//添加值
        // client.lrange('tasks', 0, -1, function(err, items) {//查询值
        // if (err) throw err;
        // items.forEach(function(item, i) {//遍历查询结果
        //     console.log(' ' + item);
        // });
        // client.quit();//退出
        // });
     /* 集合 */
        client.sadd('ip', '192.168.3.7', redis.print);//添加
        client.sadd('ip', '192.168.3.7', redis.print);// 同样的 插入失败
        client.sadd('ip', '192.168.3.9', redis.print);
        client.smembers('ip', function(err, members) {//查询
        if (err) throw err;
        console.log(members);
        client.quit();// 退出   
        });
}