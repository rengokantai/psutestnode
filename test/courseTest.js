/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

var Student = require('../typings/Student'),
    Course = require('../typings/Course'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

describe('course',function(){
    var name = "name",
        cid="123",
        desc="this is",
        s;
    beforeEach(function(){
        s = Student.create("k",3);
    })
    it("basic test",function(){
        var c = Course.create(name,cid,desc);

        should.exist(c.name);
        should.exist(c.cid);
        should.exist(c.desc);
        should.exist(c.students);
        c.students.should.eql([]);    //equal only compare references. eql is deep comparison
        should.exist(c.times);
        c.times.should.eql([]);
    })
    describe('student registration',function() {
        it('test add student',function(){
            var c = Course.create(name,cid,desc);
            c.registerStu(s);
            c.students.length.should.equal(1);
            c.students[0].id.should.equal(s.id);
        })
    })
    describe('student unregistration for non exist student',function() {
        it('throw an error',function(){
            var c = Course.create(name,cid,desc);
            expect(function(){
                c.unregisterStu("nonexist");
            }).to.throw();
        })
    })

    describe('student unregistration for non exist student',function() {
        it('timedate',function(){
            var c = Course.create(name,cid,desc);
            var days =["M","T"],
                times=["10:00"];
           c.addTimes(days,times);
            c.times.length.should.equal(2);
            c.times[1].should.eql({day:"T",time:"10:00"})  //If ArrayOutOuBoundException, show TypeError: Cannot read property 'should' of undefined

        })

        it('wrong timedate',function() {
            var c = Course.create(name,cid,desc);
            var day ="wrong",time="1:00";
            expect(function(){
                c.addTimes(day,time);
            }).to.throw();
        })

    })


})

