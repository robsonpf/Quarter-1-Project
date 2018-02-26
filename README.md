# Quarter-1-Project
TDD intructions
Getting Started with Mocha in the Q1 Project
This repository is designed to get you started with running Mocha tests in the browser.

Installation
Then run the following:

npm install
Setup
You can create a browser test setup by doing the following:

npm run mocha init ./test
This command will do the following:

Create a test/ folder
Add an index.html, mocha.css, mocha.js, and a tests.js file where you can put your test.
Add the following line to the index.html file that was created:

<!-- Add this line below the line that requires the mocha.js script -->
<script src="../node_modules/chai/chai.js" charset="utf-8"></script>
Open up the index.html file in your browser and you should see in the top right-hand corner some text. You now have Mocha running tests!

Add the following to the tests.js file.

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
Go back to your page and refresh. You should now see three failing tests. You're now running your tests with Chai!

Finally, we will want to start writing some code to make everything pass. 

<!-- Add this line below the line that you required earlier -->
<script src="../src/frontend.js" charset="utf-8"></script>
Go back to the page where your tests are running and refresh. You should have a single passing test now!

Instructions
To finish this project, get the two failing #add tests to pass. Then, add a new describe block for a #subtract method. Add your own tests and get those to pass.


Instructions how to add img to the README.md file

With Chrome web store install extensions to get image of the page.

ADD that to the page 
![alt text](q1project.surge.sh.png)

![alt text](q1project.surge.sh/events.html.png)






