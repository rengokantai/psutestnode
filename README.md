####psutestnode
######mocha chai
should and expect  
xit = it.skip/xdescribe=describe.skip
describe.only
######sinon
isolate testing, only care about what you want to test  
using
```
 var spy = sinon.spy();   // not sinon.spy
 stu.dropClass(1,spy);
 spy.called.should.be.true;
 ```
 to avoid manual test
 ######stub
 wacth entire object.(more common to use stub than spy)
 ```
 var stub = sinon.stub(obj)
 ```
 sinon goes through every method in that object and replace it with a stub function
 