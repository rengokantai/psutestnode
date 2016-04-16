/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
var fs = require('fs'),p;

function DataLoader(){

}

p  = DataLoader.prototype;

p.getStu = function(id,cb){
    var fp = id+".json";
    fs.readFile(fp,function(err,data){
        if(err) {
            if (err.code && "ENOENT" == err.code) {
                throw new Error(id + "not exist");
            }
            throw err;
        }
            cb(JSON.parse(data));   //need to parse to obj
    });
};

p.getStuSync = function(id){
    var fp = id+".json";
    return JSON.parse(fs.readFileSync(fp));
}

p.getCourseSync = function(){};
p.saveCourseSync = function(){};
module.exports = DataLoader;