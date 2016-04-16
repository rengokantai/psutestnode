/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
var chai = require('chai'),
    Promise = require('bluebird'),
    should = chai.should(),
    expect = chai.expect;

var stu = {name:"k",id:1}

var acc = {
    getStu:function(id){
        if(id==1){
            return Promise.resolve(stu);
        }else{
            return Promise.reject('reason');
        }
    }
};


describe("getStu",function(){
    it('use bluebird',function(d){
        acc.getStu(1).then(function(stu){
            stu.id.should.equal(1);
            d();
        })
    })
    //If promise resolved, return all passing tests
    it('fulfills',function() {
        return acc.getStu(1)
    })

})