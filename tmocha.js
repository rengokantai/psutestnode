/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

//var chai = require('chai'),
//expect = chai.expect;
//chai.should();

function isEven(n){
    return n%2===0;
}

describe('isEven',function(){
    if('should return true',function(){
            isEven(4).should.be.true;
        });
});