var dodgeAsset = require('../testAssests/dodgeAsset')
var sxtOptions = {
    fullSXTTest: function (browser, full) {
        this
            .setupSXT()
            .sxtTestStart2()
            .sxtTestStart1()
            .sxtTestStart3()
    },
    //TEST 1: Testing colors
    sxtTestStart1: function (browser, test) {
        this
        sxtTireArray1.forEach(brake => {
            this.sxtTireOption1(browser, brake)
        })
        return this
    },
    sxtTestStart2: function (browser, test) {
        this
        sxtTireArray2.forEach(brake => {
            this.sxtTireOption2(browser, brake)
        })
        return this
    },
    sxtTestStart3: function (browser, test) {
        this
        sxtTireArray3.forEach(brake => {
            this.sxtTireOption3(browser, brake)
        })
        return this
    },
    sxtTireOption1: function (browser, tire, sxt) {
        this
            .getLocationInView('@blacktopStripe')
            .pause(2000)
            .click(tire.sel)
            .pause(500)
        sxtWheelArray1.forEach(wheel => {
            this.sxtWheelOption1(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    sxtWheelOption1: function (browser, wheel) {
        this
            .useCss()
            .getLocationInView('@smokeShow')
            .waitForElementPresent(wheel.sel)
            .click(wheel.sel)
            .pause(1000)
            .getLocationInView('.main-nav-link')
        sxtcolorArray1.forEach(color => {
            this.sxtcolorOption1(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    sxtcolorOption1: function (browser, color) {
        this
            .useXpath()
            .click(color.sel)
            .pause(1000)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        return this
    },
    //TEST 2: Testing with special Tires
    sxtTireOption2: function (browser, tire) {
        this
            .getLocationInView('@blacktopStripe')
            .pause(2000)
            .click(tire.sel)
            .pause(500)
            .click('@popupChoose')
            .pause(1000)
            .click('@popupSelect')
            .pause(1000)
        sxtWheelArray2.forEach(wheel => {
            this.sxtWheelOption2(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    sxtWheelOption2: function (browser, wheel) {
        this
            .useCss()
            .getLocationInView('@smokeShow')
            .pause(2000)
            .click(wheel.sel)
            .pause(1000)
            .getLocationInView('.main-nav-link')
        sxtcolorArray2.forEach(color => {
            this.sxtcolorOption1(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
    },
    //TEST 3: Blacktop Stripes Test
    sxtTireOption3: function (browser, tire) {
        this
            .getLocationInView('@blacktopStripe')
            .pause(2000)
            .click(tire.sel)
            .pause(500)
            .click('@popupChoose')
            .pause(1000)
            .click('@popupSelect')
            .pause(1000)
        sxtWheelArray3.forEach(wheel => {
            this.sxtWheelOption3(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
            return this
        })
    },
    sxtWheelOption3: function (browser, wheel) {
        this
            .useCss()
            .getLocationInView('@smokeShow')
            .waitForElementPresent(wheel.sel)
            .click(wheel.sel)
            .pause(1000)
            .getLocationInView('.main-nav-link')
            .waitForElementPresent('@blacktopStripe')
            .click('@blacktopStripe')
            .pause(1000)
        sxtcolorArray3.forEach(color => {
            this.sxtcolorOption1(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
            this.verify.elementPresent('//*/span[contains(text(),"Blacktop Stripe")]')
        })
    },
}
var hellcatOptions = {
    fullHellCatTest: function (browser, full) {
        this

            .hellcatTestStart1()
            .hellcatTestStart2()
            .hellcatTestStart3()
            .hellcatTestStart4()
            .hellcatTestStart5()
            .hellcatTestStart6()
            .hellcatTestStart7()
        return this
    },
    //test w/ Blue Stripe
    hellcatTestStart1: function (browser, test) {
        this.click('@blueDualStripe')
        hellcatTireArray1.forEach(brake => {
            this.hellcatTireOption1(browser, brake)
        })
        return this
    },
    //testing colors
    hellcatTestStart2: function (browser, test) {

        hellcatTireArray2.forEach(brake => {
            this.hellcatTireOption2(browser, brake)
        })
        return this
    },
    //testing most stripes and decals
    hellcatTestStart3: function (browser, test) {

        hellcatTireArray3.forEach(brake => {
            this.hellcatTireOption3(browser, brake)
        })
        return this
    },
    //Test w/ Carbon Dual Stripe
    hellcatTestStart4: function (browser, test) {
        this.click('@carbonDualStripe')
        hellcatTireArray4.forEach(brake => {
            this.hellcatTireOption4(browser, brake)
        })
        return this
    },
    //Test w/ Silver Stripes
    hellcatTestStart5: function (browser, test) {
        this.click('@silverDualStripe')
        hellcatTireArray5.forEach(brake => {
            this.hellcatTireOption5(browser, brake)
        })
        return this
    },
    // test with Red Stripes
    hellcatTestStart6: function (browser, test) {
        this.click('@redDualStripe')
        hellcatTireArray6.forEach(brake => {
            this.hellcatTireOption6(browser, brake)
        })
        return this
    },
    // test w/Gunmetal stripes
    hellcatTestStart7: function (browser, test) {
        this.click('@gunmetalDualStripe')
        hellcatTireArray7.forEach(brake => {
            this.hellcatTireOption7(browser, brake)
        })
        return this
    },
    hellcatTireOption1: function (browser, tire) {
        this.useXpath()
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        this.pause(1000)
        hellcatBrakeArray1.forEach(brake => {
            this.hellcatBrakeOption1(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption1: function (browser, brake) {

        this.getLocationInView('@spoiler')
        this.waitForElementPresent(brake.sel)
        this.click(brake.sel)
        this.pause(500)
        hellcatWheelArray1.forEach(wheel => {
            this.hellcatWheelOption1(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })
        return this
    },
    hellcatWheelOption1: function (browser, wheel) {

        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatColorArray1.forEach(color => {
            this.hellcatColorOption1(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    hellcatColorOption1: function (browser, color) {

        this.useXpath()
        this.click(color.sel)
        // this.pause(1000)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        this.verify.elementPresent(`//*/span[contains(text(),"Blue Dual Stripe")]`)
        return this
    },
    hellcatTireOption2: function (browser, tire) {

        this.useXpath()
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        //this.pause(2000)
        hellcatBrakeArray2.forEach(brake => {
            this.hellcatBrakeOption2(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption2: function (browser, brake) {

        this.getLocationInView('@spoiler')
        this.waitForElementPresent(brake.sel)
        this.click(brake.sel)
        //this.pause(500)
        hellcatWheelArray2.forEach(wheel => {
            this.hellcatWheelOption2(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })
        return this


    },
    hellcatWheelOption2: function (browser, wheel) {

        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        //this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatColorArray2.forEach(color => {
            this.hellcatColorOption2(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    hellcatColorOption2: function (browser, color) {

        this.useXpath()
        this.click(color.sel)
        this.waitForElementPresent(color.sel)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)

        return this
    },
    hellcatTireOption3: function (browser, tire) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        //this.pause(2000)
        hellcatBrakeArray3.forEach(brake => {
            this.hellcatBrakeOption3(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption3: function (browser, brake) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(brake.sel)
        this.click(brake.sel)
        //this.pause(500)
        hellcatWheelArray3.forEach(wheel => {
            this.hellcatWheelOption3(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })
        return this

    },
    hellcatWheelOption3: function (browser, wheel) {
        this
        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        // this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatStripeArray3.forEach(stripe => {
            this.hellcatStripeOption3(browser, stripe)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    hellcatStripeOption3: function (browser, stripe) {
        this
        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.pause(2000)
        this.click(stripe.sel)
        //this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatColorArray3.forEach(color => {
            this.colorOption3(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${stripe.stripe}")]`)
        })
        return this
    },
    colorOption3: function (browser, color) {
        this
        this.useXpath()
        this.waitForElementPresent(color.sel)
        this.click(color.sel)
        //this.pause(1000)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        return this
    },
    hellcatTireOption4: function (browser, tire) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        this.pause(1000)
        hellcatBrakeArray4.forEach(brake => {
            this.hellcatBrakeOption4(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption4: function (browser, brake) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(brake.sel)
        this.click(brake.sel)
        this.pause(500)
        hellcatWheelArray4.forEach(wheel => {
            this.hellcatWheelOption4(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })


    },
    hellcatWheelOption4: function (browser, wheel) {
        this
        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatColorArray4.forEach(color => {
            this.colorOption4(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    colorOption4: function (browser, color) {
        this
        this.useXpath()
        this.click(color.sel)
        this.waitForElementPresent(color.sel)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        this.verify.elementPresent(`//*/span[contains(text(),"Dual Carbon Stripe")]`)
        return this
    },
    hellcatTireOption5: function (browser, tire) {
        this
            .getLocationInView('@spoiler')
            .pause(3000)
            .click(tire.sel)
            .pause(2000)
        hellcatBrakeArray5.forEach(brake => {
            this.hellcatBrakeOption5(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption5: function (browser, brake) {
        this
            .getLocationInView('@spoiler')
            .pause(2000)
            .click(brake.sel)
            .pause(500)
        hellcatWheelArray5.forEach(wheel => {
            this.hellcatWheelOption5(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })
        return this

    },
    hellcatWheelOption5: function (browser, wheel) {
        this
            .useCss()
            .getLocationInView('@silverDualStripe')
            .pause(3000)
            .click(wheel.sel)
            .pause(1000)
            .getLocationInView('.main-nav-link')
        hellcatColorArray5.forEach(color => {
            this.colorOption5(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    colorOption5: function (browser, color) {
        this
            .useXpath()
            .click(color.sel)
            .pause(1000)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        this.verify.elementPresent(`//*/span[contains(text(),"Dual Silver Stripe")]`)
        return this
    },
    hellcatTireOption6: function (browser, tire) {
        this
            .getLocationInView('@spoiler')
            .pause(3000)
            .click(tire.sel)
            .pause(2000)
        hellcatBrakeArray6.forEach(brake => {
            this.hellcatBrakeOption6(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption6: function (browser, brake) {
        this
            .getLocationInView('@spoiler')
            .pause(2000)
            .click(brake.sel)
            .pause(500)
        hellcatWheelArray1.forEach(wheel => {
            this.hellcatWheelOption6(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })
        return this

    },
    hellcatWheelOption6: function (browser, wheel) {
        this
            .useCss()
            .getLocationInView('@silverDualStripe')
            .pause(3000)
            .click(wheel.sel)
            .pause(1000)
            .getLocationInView('.main-nav-link')
        hellcatColorArray6.forEach(color => {
            this.hellcatColorOption6(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    hellcatColorOption6: function (browser, color) {
        this
            .useXpath()
            .click(color.sel)
            .pause(1000)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        this.verify.elementPresent(`//*/span[contains(text(),"Dual Red Stripe")]`)
        return this
    },
    hellcatTireOption7: function (browser, tire) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        this.pause(1000)
        hellcatBrakeArray7.forEach(brake => {
            this.hellcatBrakeOption7(browser, brake)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    hellcatBrakeOption7: function (browser, brake) {
        this
        this.getLocationInView('@spoiler')
        this.waitForElementPresent(brake.sel)
        this.click(brake.sel)
        this.pause(500)
        hellcatWheelArray7.forEach(wheel => {
            this.hellcatWheelOption7(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
        })


    },
    hellcatWheelOption7: function (browser, wheel) {
        this
        this.useCss()
        this.getLocationInView('@silverDualStripe')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        this.pause(1000)
        this.getLocationInView('.main-nav-link')
        hellcatColorArray7.forEach(color => {
            this.colorOption7(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
        return this
    },
    colorOption7: function (browser, color) {
        this
        this.useXpath()
        this.click(color.sel)
        this.waitForElementPresent(color.sel)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        this.verify.elementPresent(`//*/span[contains(text(),"Dual Gunmetal Stripe")]`)
        return this
    },
    // hellcatWideTire: function(browser, color) {
    //     this
    //     this.getLocationInView('@spoiler')
    //     this.waitForElementPresent(tire.sel)
    //     this.click(tire.sel)
    //     this.pause(1000)
    //     hellcatBrakeArray7.forEach(brake => {
    //         this.hellcatWideBrakeOption(browser, brake)
    //         this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
    //     })
    //     return this
    // },
    // hellcatWideWheel: function(browser, wheel){

    // },
    // hellcatWideBrakeOption: function (browser, brake) {
    //     this
    //     this.getLocationInView('@spoiler')
    //     this.waitForElementPresent(brake.sel)
    //     this.click(brake.sel)
    //     this.pause(500)
    //     hellcatWideWheel.forEach(wheel => {
    //         this.hellcatWideWheel(browser, wheel)
    //         this.verify.elementPresent(`//*/span[contains(text(),"${brake.brake}")]`)
    //     })


    // },
}
var scatpackWideOptions = {

    scatpackWideTest1: function (browser, test) {
        this
        scatWideTireArray1.forEach(brake => {
            this.scatWideTireOption1(browser, brake)
        })
        return this
    },
    scatpackWideTest2: function (browser, test) {
        this
        this.click('@bumbleBee')
        scatWideTireArray1.forEach(brake => {
            this.scatWideTireOption1(browser, brake)
        })
        return this
    },
    scatpackWideTest3: function (browser, test) {
        this
        this.click('@redBrake')
        scatWideTireArray1.forEach(brake => {
            this.scatWideTireOption1(browser, brake)
        })
        return this
    },
    scatWideTireOption1: function (browser, tire) {
        this.useXpath()
        this.getLocationInView('@devilRim')
        this.waitForElementPresent(tire.sel)
        this.click(tire.sel)
        this.pause(1000)
        scatWideWheelArray1.forEach(wheel => {
            this.scatWideWheelOption1(browser, wheel)
            this.verify.elementPresent(`//*/span[contains(text(),"${tire.tire}")]`)
        })
        return this
    },
    scatWideWheelOption1: function (browser, wheel) {
        this
        this.useCss()
        this.getLocationInView('@bumbleBee')
        this.waitForElementPresent(wheel.sel)
        this.click(wheel.sel)
        this.pause(1000)
        this.getLocationInView('.main-nav-link')
        scatWideColorArray1.forEach(color => {
            this.scatWideColorOption1(browser, color)
            this.verify.elementPresent(`//*/span[contains(text(),"${wheel.wheel}")]`)
        })
    },
    scatWideColorOption1: function (browser, color) {
        this.useXpath()
        // this.getLocationInView('@')
        this.waitForElementPresent(color.sel)
        this.click(color.sel)
        this.verify.elementPresent(`//*/span[contains(text(),"${color.color}")]`)
        return this
    }
}
var startup = {
    setupHellCat: function () {
        this
        this.click('@startBuild')
        this.pause(2000)
        this.click('@buildChallenger')
        this.pause(2000)
        this.click('@hellcat')
        this.pause(1000)
        return this
    },
    setupRedeye: function () {
        this
        this.click('@startBuild')
        this.pause(2000)
        this.click('@buildChallenger')
        this.pause(2000)
        this.click('@hellcatRedeye')
        this.pause(1000)
        return this
    },
    setupSXT: function () {
        this
            .click('@startBuild')
            .pause(1000)
            .click('@buildChallenger')
            .pause(1000)
            .click('@sxt')
        return this
    },
    setupHellcatWide: function () {
        this
        this.click('@startBuild')
        this.pause(2000)
        this.click('@buildChallenger')
        this.pause(2000)
        this.click('@hellcatWide')
        this.pause(1000)
        return this
    },
    setupScatPackWide: function () {
        this
        this.click('@startBuild')
        this.pause(2000)
        this.click('@buildChallenger')
        this.pause(2000)
        this.click('@rtScatWide')
        this.pause(1000)
        return this
    },
}
module.exports = {
    url: "https://www.dodge.com",
    commands: [startup, hellcatOptions, sxtOptions, scatpackWideOptions],
    elements: {
        startBuild: { selector: '//*/span[contains(text(), "BUILD & PRICE")]', locateStrategy: 'xpath' },
        buildChallenger: { selector: '//*[@class="sdp-vehicle-selector-tile__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"]'[2], locateStrategy: 'xpath' },
        //COLOR OPTIONS
        indiGoBlue: { selector: '(//label[@id="label-option-code-PBM_03"])', locateStrategy: 'xpath' },
        hellRaisin: { selector: '(//label[@id="label-option-code-PCD_01"])', locateStrategy: 'xpath' },
        granite: { selector: '(//label[@id="label-option-code-PAU_02"])', locateStrategy: 'xpath' },
        tripleNickel: { selector: '(//label[@id="label-option-code-PSE_01"])', locateStrategy: 'xpath' },
        pitchBlack: { selector: '(//label[@id="label-option-code-PX8_02"])', locateStrategy: 'xpath' },
        frostBite: { selector: '(//label[@id="label-option-code-PCA_01"])', locateStrategy: 'xpath' },
        octaneRed: { selector: '(//label[@id="label-option-code-PRV_03"])', locateStrategy: 'xpath' },
        torRed: { selector: '(//label[@id="label-option-code-PR3_01"])', locateStrategy: 'xpath' },
        goMango: { selector: '(//label[@id="label-option-code-PVP_01"])', locateStrategy: 'xpath' },
        sinnamonStick: { selector: '(//label[@id="label-option-code-PEC_01"])', locateStrategy: 'xpath' },
        f8Green: { selector: '(//label[@id="label-option-code-PFQ_02"])', locateStrategy: 'xpath' },
        whiteKnuckle: { selector: '(//label[@id="label-option-code-PW7_02"])', locateStrategy: 'xpath' },
        smokeShow: { selector: '(//label[@id="label-option-code-PAE_01"])', locateStrategy: 'xpath' },
        indiGoBlue2: { selector: '(//label[@id="label-option-code-PBM_01"])', locateStrategy: 'xpath' },
        hellRaisin2: { selector: '(//label[@id="label-option-code-PCD_02"])', locateStrategy: 'xpath' },
        granite2: { selector: '(//label[@id="label-option-code-PAU_01"])', locateStrategy: 'xpath' },
        tripleNickel2: { selector: '(//label[@id="label-option-code-PSE_02"])', locateStrategy: 'xpath' },
        pitchBlack2: { selector: '(//label[@id="label-option-code-PX8_01"])', locateStrategy: 'xpath' },
        frostBite2: { selector: '(//label[@id="label-option-code-PCA_02"])', locateStrategy: 'xpath' },
        octaneRed2: { selector: '(//label[@id="label-option-code-PRV_01"])', locateStrategy: 'xpath' },
        torRed2: { selector: '(//label[@id="label-option-code-PR3_02"])', locateStrategy: 'xpath' },
        goMango2: { selector: '(//label[@id="label-option-code-PVP_02"])', locateStrategy: 'xpath' },
        sinnamonStick2: { selector: '(//label[@id="label-option-code-PEC_02"])', locateStrategy: 'xpath' },
        f8Green2: { selector: '(//label[@id="label-option-code-PFQ_01"])', locateStrategy: 'xpath' },
        whiteKnuckle2: { selector: '(//label[@id="label-option-code-PW7_01"])', locateStrategy: 'xpath' },
        smokeShow2: { selector: '(//label[@id="label-option-code-PAE_02"])', locateStrategy: 'xpath' },
        goldRush: { selector: '(//label[@id="label-option-code-PJB_02"])', locateStrategy: 'xpath' },
        indiGoBlue3: { selector: '(//label[@id="label-option-code-PBM_04"])', locateStrategy: 'xpath' },
        hellRaisin3: { selector: '(//label[@id="label-option-code-PCD_04"])', locateStrategy: 'xpath' },
        granite3: { selector: '(//label[@id="label-option-code-PAU_04"])', locateStrategy: 'xpath' },
        tripleNickel3: { selector: '(//label[@id="label-option-code-PSE_03"])', locateStrategy: 'xpath' },
        pitchBlack3: { selector: '(//label[@id="label-option-code-PX8_04"])', locateStrategy: 'xpath' },
        frostBite3: { selector: '(//label[@id="label-option-code-PCA_04"])', locateStrategy: 'xpath' },
        octaneRed3: { selector: '(//label[@id="label-option-code-PRV_04"])', locateStrategy: 'xpath' },
        torRed3: { selector: '(//label[@id="label-option-code-PR3_04"])', locateStrategy: 'xpath' },
        goMango3: { selector: '(//label[@id="label-option-code-PVP_03"])', locateStrategy: 'xpath' },
        sinnamonStick3: { selector: '(//label[@id="label-option-code-PEC_04"])', locateStrategy: 'xpath' },
        f8Green3: { selector: '(//label[@id="label-option-code-PFQ_04"])', locateStrategy: 'xpath' },
        whiteKnuckle3: { selector: '(//label[@id="label-option-code-PW7_03"])', locateStrategy: 'xpath' },
        smokeShow3: { selector: '(//label[@id="label-option-code-PAE_04"])', locateStrategy: 'xpath' },
        indiGoBlue4: { selector: '(//label[@id="label-option-code-PBM_02"])', locateStrategy: 'xpath' },
        hellRaisin4: { selector: '(//label[@id="label-option-code-PCD_03"])', locateStrategy: 'xpath' },
        granite4: { selector: '(//label[@id="label-option-code-PAU_03"])', locateStrategy: 'xpath' },
        pitchBlack4: { selector: '(//label[@id="label-option-code-PX8_03"])', locateStrategy: 'xpath' },
        frostBite4: { selector: '(//label[@id="label-option-code-PCA_03"])', locateStrategy: 'xpath' },
        octaneRed4: { selector: '(//label[@id="label-option-code-PRV_02"])', locateStrategy: 'xpath' },
        torRed4: { selector: '(//label[@id="label-option-code-PR3_03"])', locateStrategy: 'xpath' },
        sinnamonStick4: { selector: '(//label[@id="label-option-code-PEC_03"])', locateStrategy: 'xpath' },
        f8Green4: { selector: '(//label[@id="label-option-code-PFQ_03"])', locateStrategy: 'xpath' },
        whiteKnuckle4: { selector: '(//label[@id="label-option-code-PW7_01"])', locateStrategy: 'xpath' },
        smokeShow4: { selector: '(//label[@id="label-option-code-PAE_03"])', locateStrategy: 'xpath' },
        smokeShow5: { selector: '(//label[@id="label-option-code-PAE_05"])', locateStrategy: 'xpath' },
        granite5: { selector: '(//label[@id="label-option-code-PAU_05"])', locateStrategy: 'xpath' },
        tripleNickel5: { selector: '(//label[@id="label-option-code-PSE_04"])', locateStrategy: 'xpath' },
        whiteKnuckle5: { selector: '(//label[@id="label-option-code-PW7_04"])', locateStrategy: 'xpath' },
        pitchBlack5: { selector: '(//label[@id="label-option-code-PX8_05"])', locateStrategy: 'xpath' },
        indiGoBlue5: { selector: '(//label[@id="label-option-code-PBM_05"])', locateStrategy: 'xpath' },
        //CAR MODEL
        sxt: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[1]', locateStrategy: 'xpath' },
        gt: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[2]', locateStrategy: 'xpath' },
        rt: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[3]', locateStrategy: 'xpath' },
        gt50: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[4]', locateStrategy: 'xpath' },
        rtScat: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[5]', locateStrategy: 'xpath' },
        rt50: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[6]', locateStrategy: 'xpath' },
        rtScat50: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[7]', locateStrategy: 'xpath' },
        rtScatWide: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[8]', locateStrategy: 'xpath' },
        rtScatWide50: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[9]', locateStrategy: 'xpath' },
        hellcat: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[10]', locateStrategy: 'xpath' },
        hellcatWide: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[11]', locateStrategy: 'xpath' },
        hellcatRedeye: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[12]', locateStrategy: 'xpath' },
        hellcatRedeyeWide: { selector: '(//*/div[@class="sdp-configurator-trim-selector-card__container-vehicle-btn gcss-button gcss-button-variable gcss-button-small"])[13]', locateStrategy: 'xpath' },
        //DECAL AND STRIPE OPTIONS
        blacktopStripe: { selector: '//label[@id="label-option-code-MZQ"]', locateStrategy: 'xpath' },
         blueDualStripe: { selector: '//label[@id="label-option-code-M93"]', locateStrategy: 'xpath' },
        carbonDualStripe: { selector: '//label[@id="label-option-code-M96"]', locateStrategy: 'xpath' },
        gunmetalDualStripe: { selector: '//label[@id="label-option-code-M2S"]', locateStrategy: 'xpath' },
        silverDualStripe: { selector: '//label[@id="label-option-code-M94"]', locateStrategy: 'xpath' },
        redDualStripe: { selector: '//label[@id="label-option-code-M98"]', locateStrategy: 'xpath' },
        satinBlackPkg: { selector: '//label[@id="label-option-code-MEH"]', locateStrategy: 'xpath' },
        satinBlackHood: { selector: '//label[@id="label-option-code-MYW"]', locateStrategy: 'xpath' },
        satinBlackRoof: { selector: '//label[@id="label-option-code-MXY"]', locateStrategy: 'xpath' },
        bodyStripe: { selector: '//label[@id="label-option-code-M28"]', locateStrategy: 'xpath' },
        blackSideStripe: { selector: '//label[@id="label-option-code-M2K"]', locateStrategy: 'xpath' },
        redSideStripe: { selector: '//label[@id="label-option-code-M2L"]', locateStrategy: 'xpath' },
        whiteSideStripe: { selector: '//label[@id="label-option-code-M2M"]', locateStrategy: 'xpath' },
        shakedownGraphic: { selector: '//label[@id="label-option-code-MPC"]', locateStrategy: 'xpath' },
        shakerGraphic: { selector: '//label[@id="label-option-code-MH3"]', locateStrategy: 'xpath' },
        stripeDelete: { selector: '//label[@id="label-option-code-MM7"]', locateStrategy: 'xpath' },
        bumbleBee: { selector: '//label[@id="label-option-code-M91"]', locateStrategy: 'xpath' },
        hoodPin: { selector: '//label[@id="label-option-code-MJL"]', locateStrategy: 'xpath' },
        //BRAKE OPTIONS
        blackBrake: { selector: '//label[@id="label-option-code-XS9"]', locateStrategy: 'xpath' },
        gunmetalBrake: { selector: '//label[@id="label-option-code-XTM"]', locateStrategy: 'xpath' },
        orangeBrake: { selector: '//label[@id="label-option-code-XTU"]', locateStrategy: 'xpath' },
        redBrake: { selector: '//label[@id="label-option-code-XSP"]', locateStrategy: 'xpath' },
        //WHEEL OPTIONS
        carbonAlum: { selector: '//label[@id="label-option-code-WK1"]', locateStrategy: 'xpath' },
        carbonAlumLG: { selector: '//label[@id="label-option-code-WHK"]', locateStrategy: 'xpath' },
        machineGranite: { selector: '//label[@id="label-option-code-WHH"]', locateStrategy: 'xpath' },
        machineGraniteLG: { selector: '//label[@id="label-option-code-WFC"]', locateStrategy: 'xpath' },
        brasMonkey: { selector: '//label[@id="label-option-code-WRJ"]', locateStrategy: 'xpath' },
        brasMonkeyLG: { selector: '//label[@id="label-option-code-WDF"]', locateStrategy: 'xpath' },
        anniver: { selector: '//label[@id="label-option-code-WPU"]', locateStrategy: 'xpath' },
        anniverLG: { selector: '//label[@id="label-option-code-WPV"]', locateStrategy: 'xpath' },
        anniverXLG: { selector: '//label[@id="label-option-code-WPE"]', locateStrategy: 'xpath' },
        lowGlossBlk: { selector: '//label[@id="label-option-code-WEB"]', locateStrategy: 'xpath' },
        lowGlossGranite: { selector: '//label[@id="label-option-code-WRP"]', locateStrategy: 'xpath' },
        devilRim: { selector: '//label[@id="label-option-code-WSC"]', locateStrategy: 'xpath' },
        carbonBlk: { selector: '//label[@id="label-option-code-WSG"]', locateStrategy: 'xpath' },
        forgeAlum: { selector: '//label[@id="label-option-code-WRV"]', locateStrategy: 'xpath' },
        matteVapor: { selector: '//label[@id="label-option-code-WSE"]', locateStrategy: 'xpath' },
        blackDrag: { selector: '//label[@id="label-option-code-WPJ"]', locateStrategy: 'xpath' },
        lightsOut: { selector: '//label[@id="label-option-code-WHF"]', locateStrategy: 'xpath' },
        warpSpeed: { selector: '//label[@id="label-option-code-WSS"]', locateStrategy: 'xpath' },
        satinCarbon: { selector: '//label[@id="label-option-code-WPZ"]', locateStrategy: 'xpath' },
        blackNoise: { selector: '//label[@id="label-option-code-WRE"]', locateStrategy: 'xpath' },
        //ENGINE
        hemiVVT: { selector: '//label[@id="label-option-code-EZC"]', locateStrategy: 'xpath' },
        hemiMDSVVT: { selector: '//label[@id="label-option-code-EZH"]', locateStrategy: 'xpath' },
        hemi392: { selector: '//label[@id="label-option-code-ESH"]', locateStrategy: 'xpath' },
        hemi392MDS: { selector: '//label[@id="label-option-code-ESG"]', locateStrategy: 'xpath' },
        //TRANSMISSION
        automatic: { selector: '//label[@id="label-option-code-DFK"]', locateStrategy: 'xpath' },
        manual: { selector: '//label[@id="label-option-code-DEC"]', locateStrategy: 'xpath' },
        //TIRES
        allSeasonSPW: { selector: '//label[@id="label-option-code-TW8"]', locateStrategy: 'xpath' },
        zeroSummerSPW: { selector: '//label[@id="label-option-code-TN2"]', locateStrategy: 'xpath' },
        allSeasonSXT: { selector: '//label[@id="label-option-code-TSG"]', locateStrategy: 'xpath' },
        bswSXT: { selector: '//label[@id="label-option-code-TVJ"]', locateStrategy: 'xpath' },
        allSeasonGT: { selector: '//label[@id="label-option-code-TR9"]', locateStrategy: 'xpath' },
        performanceGT: { selector: '//label[@id="label-option-code-TVH"]', locateStrategy: 'xpath' },
        zeroSummerRT: { selector: '//label[@id="label-option-code-TYN"]', locateStrategy: 'xpath' },
        dragSP: { selector: '//label[@id="label-option-code-TTH"]', locateStrategy: 'xpath' },
        allSeasonSPN: { selector: '//label[@id="label-option-code-TYS"]', locateStrategy: 'xpath' },
        lugNut: { selector: '//label[@id="label-option-code-XJC"]', locateStrategy: 'xpath' },
        //EXTRA 
        rar309: { selector: '//label[@id="label-option-code-DPM"]', locateStrategy: 'xpath' },
        rar307: { selector: '//label[@id="label-option-code-DMM"]', locateStrategy: 'xpath' },
        engineBlockHeater: { selector: '//input[@id="powertrain-other-option-content-transmission-in-media-column-option-code-NHK"]', locateStrategy: 'xpath' },
        frontStrut: { selector: '//label[@id="label-option-code-XG4"]', locateStrategy: 'xpath' },
        dampingSuspension: { selector: '//label[@id="label-powertrain-other-option-content-transmission-in-media-column-option-code-SMC"]', locateStrategy: 'xpath' },
        spoiler: { selector: '//label[@id="label-option-code-MXN"]', locateStrategy: 'xpath' },
        carCover: { selector: '//label[@id="label-option-code-CS6"]', locateStrategy: 'xpath' },
        //POPUP
        popupChoose: { selector: '//*/a[@data-cats-id="Choose"]', locateStrategy: 'xpath' },
        popupSelect: { selector: '(//span[text()="Select"])[1]', locateStrategy: 'xpath' }
    }
}