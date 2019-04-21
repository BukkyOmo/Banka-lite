import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const {expect} = chai;
const app = require('../app');

describe('TEST HOME PAGE ROUTE', () => {
  it('it should return a string', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body.Appname).to.be.equal('Banka-lite');
        done();
      });
  });
});
