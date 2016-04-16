/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
var DataLoader = require('../DataLoader'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    dataloader = new DataLoader()

describe('dataloader test',function(){
    it('sync',function(){
        var s = dataloader.getStuSync(1);
        should.exist(s);
        s.name.should.equal('k');
    })
    it('async',function(d) {
        dataloader.getStu(1, function (s) {
            should.exist(s.name);
            s.name.should.equal('k');
            d();
        })
    })
})
