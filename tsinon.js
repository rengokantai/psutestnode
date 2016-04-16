/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;
chai.should();
describe('sinon',function(){
    var stu;
    beforeEach(function(){
        stu = {
            dropClass:function(id,cb){
                cb();
            }
        };
    });

    describe('dropclass',function(){
        it('call callback',function(){
            var spy = sinon.spy;
            var called = false;
            function callback(){
                called = true;
            }
            stu.dropClass(1,callback);
            expect(called).to.be.true;
        })
    })
})