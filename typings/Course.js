/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
function Course(){}

Course.create = function(name,cid,desc){
    var course = new Course();
    course.name = name;
    course.cid = cid;
    course.desc = desc;
    course.students = [];
    course.times = [];
    return course;
}

var c = Course.prototype;
c.registerStu = function(stu){
    this.students.push(stu);
}

c.unregisterStu = function(sid){
    var me = this;

    if(!this.students.some(function(stu,i){
            if(stu.id===sid){
                me.students.splice(i,1);
                return true;
            }
        })){
        throw new Error('error');
    };
};

c.addTimes = function(d,t){
    var me = this;
    if(!Array.isArray(d)){
        day=[d]
    }

    if(!Array.isArray(t)){
        time=[t]
    }

    day.forEach(function(d){
        time.forEach(function(t){
            me.times.push({
                "day":d,
                "time":t
            })
        })
    })
}

c.showSche = function(){
    var sheStr = "",first=true;

    this.times.forEach(function(time){
        if(!first){
            sheStr+="\n";
        }
        first=false;
        sheStr+=time.day+" at "+time.time;
    })

    return sheStr;
}

c.showStu = function(){
    var stuStr = "",first = true;
    this.stu.forEach(function(stu){
        if(!first){
            stuStr+='\n';
        }
        first=false;
        stuStr+=stu.toString();
    })
    return stuStr;
}

module.exports = Course;