### 聚合明星-MapReduce(P143!!!)

### 1.MapReduce非常强大和灵活,能够表达任意复杂的逻辑,但是非常慢,所以不应该用于实时数据分析中。
MapReduce能够在多台服务器之间并行运行,它将一个大问题分解成许多小问题,发送到集群上完成,等到所有机器都完成时,再将结果收集起来得到完整的解决方案。


db.runCommand(  
 { mapreduce : 要做apreduce的集合名,  
   map : 函数  
   reduce : 函数  
   [, query : 文档，发往map函数前先给过渡文档]  
   [, sort : 文档，发往map函数前先给文档排序]  
   [, limit : 整数，发往map函数的文档数量上限]  
   [, out : 字符串，统计结果保存的集合]  
   [, keeptemp: 布尔值，链接关闭时临时结果集合是否保存]  
   [, finalize : 函数，将reduce的结果送给这个函数，做最后的处理]  
   [, scope : 文档,js代码中要用到的变量]  
   [, jsMode : 布尔值，是否减少执行过程中BSON和JS的转换，默认true]  
   [, verbose : 布尔值，是否产生更加详细的服务器日志，默认true]  
 }  
);   

##### 例1:找出user集合中的所有键
```
db.runCommand({  
    mapreduce:'user',  
    map:function(){  
        for(var key in this){  
            emit(key,key);  
        }  
    },  
    reduce:function(k,emits){  
        var keys=[];  
        for(var key in emits){  
            if(keys.indexOf(key)===-1){  
               keys.push(key);  
            }  
        }  
        return {'keys':keys};  
    },  
    out:'mr1_result'  
})  
db['mr1_result'].find()  
```


### 2.聚合命令:为基本聚合任务提供的一些命令,复杂的group仍然要使用javascript
1. `count()`
db.user.find().count()

2. `distinct`: 找出给定键的所有不同值,使用时必须指定集合和键
db.runCommand({distinct:'user',key:'name'})

3. `group`:根据指定的键进行分组,再对各个分组内的文档进行聚合操作,最后得到结果文档(类似关系型数据库sql中的group by)   P150!!!
```
db.runCommand({  
    group:{  
        ns:'user',    //要操作的集合   
        key:'name',   //指定键  
        initial:{count:0},   //初始值  
        '$reduce':function(doc,prev){   //$reduce函数,参数为:当前文档和累加器文档  
            prev.count++;  
        }  
    }  
}) 
```


