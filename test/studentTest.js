/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

var Student = require('../Student'),
    Course = require('../Course'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;
describe("stu",function(){
    var sname = "k",
        g=5;
    it('should have info in the student when created',function(){
        var s = Student.create(sname,g);

        should.exist(s.name);
        s.name.should.equal(sname);

        should.exist(s.g);
        s.g.should.equal(g);

        should.exist(s.id);
    })
    it('add g plus 1',function() {
        var s = Student.create(sname, g);
        s.plusG();
        s.g.should.equal(g+1);
    })

    })
