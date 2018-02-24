const expect = chai.expect

  describe('events', function () {
    it('it should create an element in the local storage', function () {
      saveData("TEST_MOCHA", JSON.parse('{"id": "10"}'));
      expect(JSON.parse(loadData("TEST_MOCHA")).id).to.equal(JSON.parse('{"id": "10"}').id);
      deleteData("TEST_MOCHA");
    })
  })

  describe('events', function () {
    it('it should delete an element from the local storage', function () {
      saveData("TEST_MOCHA", JSON.parse('{"id": "10"}'));
      deleteData("TEST_MOCHA")
      expect(JSON.parse(loadData("TEST_MOCHA"))).to.equal(null);
    })
  })

  describe('loadFormData', function () {
    it('it should be a function', function () {
      expect(loadFormData).to.be.a('function')
    })
  })
