/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
'use strict';

var chai = require('chai'),
expect = chai.expect;
chai.should();

function isEven(n){
    return n%2===0;
}
function add(n,m){
    return m+n;
}

describe('isEven',function(){
    var n;
    beforeEach(function(){
        n=5;
    })
    it('should return true',function(){
            isEven(4).should.be.true;
        });
    it('expect return true',function(){
            expect(isEven(4)).to.be.true;
        });
    it('should 5 to 5',function(){
        n = add(n,5);
        n.should.equal(10);
    })
    it('should 1 to 5',function(){
        expect(add(1,n)).equal(6);
    })
});