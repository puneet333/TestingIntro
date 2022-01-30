

const {generateText,checkAndGenerate} = require('./util');
const puppeteer = require('puppeteer'); //for end to end test.



//this is  for unit test...
//unit test is the test when we tested some piece of code like a specific function for example..
test('should output name and age', ()=>{

     const text=generateText('Max',29);
     expect(text).toBe('Max (29 years old)');
});


//This is for integration testing...
// Integration testing is useful when a function call some other functions inside it.... 
test('should generate a valid test output', ()=>{
    const text=generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
})
/*
test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo:80,
        args:['--window-size=1920,1080']
    });
    const page= await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');

});
*/
test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 80,
      // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');
  }, 10000);

