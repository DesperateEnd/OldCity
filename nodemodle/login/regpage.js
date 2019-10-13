
 const getcode = require('../myapi/ramdcode')//生成随机密匙
 const moment = require('moment');//时间处理模块
 module.exports = regpage = function(req,res){
    // console.log(req.params,req.body.name,req.query)
    if(req.body&&(req.body.loginCode==''||req.body.loginCode==undefined||req.body.loginCode==null)){
        //没有用户名
        res.send({
            code:'101',
            data:'',
            msg:'请输入登录名'
        });
        return;
    }
    if(req.body&&(req.body.uname==''||req.body.uname==undefined||req.body.uname==null)){
        //没有用户名
        res.send({
            code:'101',
            data:'',
            msg:'请输入昵称'
        });
        return;
    }
    if(req.body&&(req.body.password==''||req.body.password==undefined||req.body.password==null)){
        //没有密码
        res.send({
            code:'101',
            data:'',
            msg:'请输入登录密码'
        });
        return;
    }
    /*链接数据库 */
    const mysql = require('mysql');
        var db ={};
        db.query = function sqlback(sqllan,fn){
        var connetion = mysql.createConnection({
            host:"localhost",       //   host表示mysql安装的地址，因为我是本地的数据库，所以直接使用localhost
            user:"root",            // user表示mysql的用户名
            password:"7777777",      // password表示mysql的密码
            database:'demo',       // database表示你要选择操作的具体的库的名字
            port:3306               // port表示端口，可不填，默认就是3306

        });
    connetion.connect(function(err){  //调用connection的connect方法判断连接是否成功，如果失败，则把错误信息打印出来，并且停止运行。
        if(err){
            console.log(err);
            return;
        }
    });
    var sql = sqllan;
    if(!sql)return;
    //调用connection的query方法来直接向数据库发送sql语句，
    //并且把用回调函数返回结果，其中回调函数中有三个参数，
    //第一参数是错误对象，如果操作失败，则会停止并打印错误信息，
    //第二参数是具体的返回的结果，正常情况下是一个数组，里面包含很多json,
    //第三个参数也是一个数组，里面包含着最每个数据的解释，比如当前数据属于哪个库，那张表等等。我们使用最多的自然是第二个参数了
    connetion.query(sql,function(err,rows,filds){ //给他赋值一个叫query的方法，这个方法接受两个参数，第一个参数是你查询数据时候的sql语句，第二个参数是获取查询结果的回调函数。
        if(err){
            console.log(err);   
            return
        }
        fn(rows);
    });
   
    connetion.end(function(err){
        if(err){
            return;
        }else{
            console.log('连接关闭');
        }
    });

}
/*查询注册用户是否存在（已被注册） */
db.query('select * from d_user_list where login_code="'+req.body.loginCode+'";',(data)=>{//回调方法
    if(data.length==0){//没有被注册
        let nowDate = moment(new Date(Date.now())).format('YYYY-MM-DD HH:mm:ss'); /*格式化当前时间 作为注册时间*/
        db.query('INSERT INTO d_user_list (login_code, password, uname, userInfo) VALUES ("'+req.body.loginCode+'","'+req.body.password+'","'+req.body.uname+'","'+nowDate+'");',(data)=>{
            let obj = {
                code:'100',
                data:data,
                msg:'注册成功'
            }   
            res.send(JSON.stringify(obj))
        })
    }else{//已被注册
        res.send({
            code:'101',
            data:'',
            msg:'该账号已被注册'
        });
        return;
    }
})
}



