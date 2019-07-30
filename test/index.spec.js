import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../app";
import User from "../model/user";

chai.use(chaiHttp);

describe("TEST HOME PAGE ROUTE", () => {
    it("it should return Banka-lite", done => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                expect(res.body.Appname).to.be.equal("Banka-lite");
                done();
            });
    });
});

describe("TEST USERS PAGE ROUTE", () => {
    before(async () => {
       await User.create({
            firstname: "Bukola",
            lastname: "Odunayo"
        })
    })
    after(async () => {
        await User.deleteMany({})
    })
    it("it should return list of users", done => {
        chai.request(app)
            .get("/users")
            .end((err, res) => {
                expect(res.body).to.be.an("array");
                expect(res.body[0]).to.have.a.property('firstname')
                done();
            });
    });
});
