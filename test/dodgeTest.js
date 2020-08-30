var obj = {}

var dodgeAsset = require('../testAssests/dodgeAsset')
var dodgeObject = require('../pageObjects/dodgeObject')



module.exports = {
    beforeEach: browser => {
        obj = browser.page.dodgeObject()
        obj.navigate()
        browser.maximizeWindow();
    },
    afterEach: browser => {
        obj
            .end()
    },
//  //fullHellCatTest is a Total of 7 Different Tests
//  //If you want to test individually, comment out "fullHellCatTest", 
//  //and un-comment one of the 7 tests
// "full HellCat Test": browser=>{
//         obj
//         .setupHellCat()
//         .fullHellCatTest()
//         //TEST 1: Testing 'Blue Stripe' Option
//         .hellcatTestStart1()

//         //TEST 2: Testing Colors
//         .hellcatTestStart2()

//         //TEST 3: Testing All Decals (THIS IS A VERY LONG TEST)
//         .hellcatTestStart3()

//         //TEST 4: Testing 'Dual Carbon' Stripe Option 
//         .hellcatTestStart4()

//         //TEST 5: Testing 'Silver'Stripe Option 
//         .hellcatTestStart5()

//         //TEST 6: Testing 'Red' Stripe Option
//         .hellcatTestStart6()

//         //TEST 7:Testing 'Gunmetal' Stripe Option
//         .hellcatTestStart7()
// },

// // The Hellcat Redeye can run all of the tests above
// // make sure to leave "setupRedeye"
// "full HellCat Redeye test": browser=>{
//         obj
//         .setupRedeye()
//         .fullHellCatTest()     
// },

// // The SXT Test has 3 different Tests, but the full test only takes 2 minutes to run
// 'sxtTest': browser=>{
//         obj
//         .fullSXTTest()
// },
// ScatPack wide test
"Scatpack wide testing":browser=>{
    obj
    .setupScatPackWide()
    .scatpackWideTest1()
},
}