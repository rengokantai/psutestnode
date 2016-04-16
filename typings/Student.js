/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
var uuid = require('uuid');

function Student(){}

Student.create = function(name,g){
    var stu = new Student();
    stu.name = name;
    stu.g =g;
    stu.id = uuid.v4;
    return stu;
}

var p = Student.prototype;
p.plusG = function(){
    this.g++;
}
p.toString = function(){
    return this.id +"\t"+this.name;
};

module.exports = Student;