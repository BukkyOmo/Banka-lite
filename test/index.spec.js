import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../app';

chai.use(chaiHttp);

describe('TEST HOME PAGE ROUTE', () => {
  it('it should return Banka-lite', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body.Appname).to.be.equal('Banka-lite');
        done();
      });
  });
});
