/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;
chai.should();
describe('sinon',function(){
    var stu,sche;
    beforeEach(function(){
        stu = {
            dropClass:function(id,cb){
                if(!!cb.dropClass){
                    cb.dropClass();
                }
                else{cb();}
            }
        };
        sche ={
            dropClass:function(){
                console.log('dropped');
            }
        }
    });

    describe('dropclass',function(){
        it('call callback',function(){
            //var called = false;
            //function callback(){
            //    called = true;
            //}
            //stu.dropClass(1,callback);
            //expect(called).to.be.true;
            var spy = sinon.spy();
            stu.dropClass(1,spy);
            spy.called.should.be.true;
        })

        it('log in console first',function(){
            function logInConsole(){
                console.log('first')
            }
            var spy = sinon.spy(logInConsole);
            stu.dropClass(1,spy);
            spy.called.should.be.true;
        })
        it('call callback with function in obj',function(){
            sinon.spy(sche,'dropClass');
            stu.dropClass(1,sche);
            sche.dropClass.called.should.be.true;
        })
    })
})