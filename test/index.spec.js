var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect; 
const app = require('../app');

describe('TEST HOME PAGE ROUTE', () => {
    it('it should return a string', (done) => {
      chai.request('http://localhost:3000')
        .get('/')
        .end((err, res) => {
          expect(res.body.username).to.be.equal('Banka');
          done();
        });
    });
  });
