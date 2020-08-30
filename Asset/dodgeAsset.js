var obj = {}
var dodgeObject = require('../pageObjects/dodgeObject')
module.exports = [
    //TEST 1
    hellcatColorArray1 = [
        { sel: '@tripleNickel2', color: 'Triple Nickel' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },],
    hellcatWheelArray1 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray1 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray1 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST2
    hellcatColorArray2 = [
        { sel: '@pitchBlack2', color: 'Pitch Black' },
        { sel: '@hellRaisin2', color: 'Hellraisin' },
        { sel: '@granite2', color: 'Granite' },
        { sel: '@tripleNickel2', color: 'Triple Nickel' },
        { sel: '@indiGoBlue2', color: 'IndiGo Blue' },
        { sel: '@frostBite2', color: 'Frostbite' },
        { sel: '@octaneRed2', color: 'Octane Red' },
        { sel: '@torRed2', color: 'TorRed' },
        { sel: '@goMango2', color: 'Go Mango' },
        { sel: '@sinnamonStick2', color: 'Sinamon Stick' },
        { sel: '@f8Green2', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },
        { sel: '@smokeShow2', color: 'Smoke Show' }],
    hellcatWheelArray2 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray2 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray2 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST 3
    hellcatColorArray3 = [
        { sel: '@pitchBlack2', color: 'Pitch Black' },
        { sel: '@hellRaisin2', color: 'Hellraisin' },
        { sel: '@granite2', color: 'Granite' },
        { sel: '@smokeShow2', color: 'Smoke Show' },
        { sel: '@indiGoBlue2', color: 'IndiGo Blue' },
        { sel: '@frostBite2', color: 'Frostbite' },
        { sel: '@octaneRed2', color: 'Octane Red' },
        { sel: '@torRed2', color: 'TorRed' },
        { sel: '@sinnamonStick2', color: 'Sinamon Stick' },
        { sel: '@f8Green2', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },],
    hellcatWheelArray3 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray3 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatStripeArray3 = [
        { sel: '@satinBlackPkg', stripe: 'Satin Black Graphics' },
        { sel: '@satinBlackHood', stripe: 'Satin Black Painted Hood' },
        { sel: '@satinBlackRoof', stripe: 'Satin Black Painted Roof' },],
    hellcatBrakeArray3 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST 4
    hellcatColorArray4 = [
        { sel: '@pitchBlack3', color: 'Pitch Black' },
        { sel: '@hellRaisin3', color: 'Hellraisin' },
        { sel: '@granite3', color: 'Granite' },
        { sel: '@smokeShow3', color: 'Smoke Show' },
        { sel: '@tripleNickel3', color: 'Triple Nickel' },
        { sel: '@indiGoBlue3', color: 'IndiGo Blue' },
        { sel: '@frostBite3', color: 'Frostbite' },
        { sel: '@octaneRed3', color: 'Octane Red' },
        { sel: '@torRed3', color: 'TorRed' },
        { sel: '@goMango3', color: 'Go Mango' },
        { sel: '@sinnamonStick3', color: 'Sinamon Stick' },
        { sel: '@f8Green3', color: 'F8 Green' },
        { sel: '@whiteKnuckle3', color: 'White Knuckle' },],
    hellcatWheelArray4 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray4 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray4 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST 5
    hellcatColorArray5 = [
        { sel: '@pitchBlack4', color: 'Pitch Black' },
        { sel: '@hellRaisin4', color: 'Hellraisin' },
        { sel: '@granite4', color: 'Granite' },
        { sel: '@smokeShow4', color: 'Smoke Show' },
        { sel: '@indiGoBlue4', color: 'IndiGo Blue' },
        { sel: '@frostBite4', color: 'Frostbite' },
        { sel: '@octaneRed4', color: 'Octane Red' },
        { sel: '@torRed4', color: 'TorRed' },
        { sel: '@sinnamonStick4', color: 'Sinamon Stick' },
        { sel: '@f8Green4', color: 'F8 Green' },
        { sel: '@whiteKnuckle4', color: 'White Knuckle' },],
    hellcatWheelArray5 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray5 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray5 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST 6
    hellcatColorArray6 = [
        { sel: '@pitchBlack5', color: 'Pitch Black' },
        { sel: '@granite5', color: 'Granite' },
        { sel: '@smokeShow5', color: 'Smoke Show' },
        { sel: '@tripleNickel5', color: 'Triple Nickel' },
        { sel: '@indiGoBlue5', color: 'IndiGo Blue' },
        { sel: '@whiteKnuckle5', color: 'White Knuckle' },],
    hellcatWheelArray6 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray6 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray6 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    //TEST 7
    hellcatColorArray7 = [
        { sel: '@pitchBlack2', color: 'Pitch Black' },
        { sel: '@hellRaisin2', color: 'Hellraisin' },
        { sel: '@granite2', color: 'Granite' },
        { sel: '@smokeShow2', color: 'Smoke Show' },
        { sel: '@indiGoBlue2', color: 'IndiGo Blue' },
        { sel: '@frostBite2', color: 'Frostbite' },
        { sel: '@octaneRed2', color: 'Octane Red' },
        { sel: '@torRed2', color: 'TorRed' },
        { sel: '@sinnamonStick2', color: 'Sinamon Stick' },
        { sel: '@f8Green2', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },],
    hellcatWheelArray7 = [
        { sel: '@lowGlossBlk', wheel: 'Low Gloss Black' },
        { sel: '@matteVapor', wheel: 'Matte Vapor' },
        { sel: '@machineGraniteLG', wheel: 'Machined w/Granite' },],
    hellcatTireArray7 = [
        { sel: '@zeroSummerSPW', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPW', tire: 'All-Season Performance' },],
    hellcatBrakeArray7 = [
        { sel: '@blackBrake', brake: 'Black Brake' },
        { sel: '@gunmetalBrake', brake: 'Gunmetal Gray Brake' },
        { sel: '@orangeBrake', brake: 'Orange Brake' },],
    hellcatWideWheelArray = [
        { sel: '@carbonBlk', wheel: 'Carbon Black Aluminum' },
        { sel: '@brasMonkeyLG', wheel: 'Brass Monkey Widebody' },
        { sel: '@warpSpeed', wheel: 'Warp Speed Granite' },],
    hellcatWideTireArray = [
        { sel: '@zeroSummerRT', tire: 'Zero Summer Tires' },
        { sel: '@allSeasonSPN', tire: 'All-Season Performance' },],
    //
    //
    //
    //SXT TEST 1
    sxtcolorArray1 = [
        { sel: '@pitchBlack', color: 'Pitch Black' },
        { sel: '@hellRaisin', color: 'Hellraisin' },
        { sel: '@granite', color: 'Granite' },
        { sel: '@tripleNickel', color: 'Triple Nickel' },
        { sel: '@indiGoBlue', color: 'IndiGo Blue' },
        { sel: '@frostBite', color: 'Frostbite' },
        { sel: '@octaneRed', color: 'Octane Red' },
        { sel: '@torRed', color: 'TorRed' },
        { sel: '@goMango', color: 'Go Mango' },
        { sel: '@sinnamonStick', color: 'Sinamon Stick' },
        { sel: '@f8Green', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },
        { sel: '@smokeShow', color: 'Smoke Show' }],
    sxtWheelArray1 = [
        { sel: '@carbonAlum', wheel: 'Satin Carbon Aluminum' },],
    sxtTireArray1 = [
        { sel: '@allSeasonSXT', tire: '235/55R' }],
    //SXT TEST 2
    sxtcolorArray2 = [
        { sel: '@pitchBlack', color: 'Pitch Black' },
        { sel: '@hellRaisin', color: 'Hellraisin' },
        { sel: '@granite', color: 'Granite' },
        { sel: '@tripleNickel', color: 'Triple Nickel' },
        { sel: '@indiGoBlue', color: 'IndiGo Blue' },
        { sel: '@frostBite', color: 'Frostbite' },
        { sel: '@octaneRed', color: 'Octane Red' },
        { sel: '@torRed', color: 'TorRed' },
        { sel: '@goMango', color: 'Go Mango' },
        { sel: '@sinnamonStick', color: 'Sinamon Stick' },
        { sel: '@f8Green', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },
        { sel: '@smokeShow', color: 'Smoke Show' }],
    sxtWheelArray2 = [
        { sel: '@blackNoise', wheel: 'Black Noise' },
        { sel: '@satinCarbon', wheel: 'Satin Carbon Painted' }],
    sxtTireArray2 = [
        { sel: '@bswSXT', tire: '245/45R' },],
    //SXT TEST 3
    sxtcolorArray3 = [
        { sel: '@pitchBlack', color: 'Pitch Black' },
        { sel: '@hellRaisin', color: 'Hellraisin' },
        { sel: '@granite', color: 'Granite' },
        { sel: '@tripleNickel', color: 'Triple Nickel' },
        { sel: '@indiGoBlue', color: 'IndiGo Blue' },
        { sel: '@frostBite', color: 'Frostbite' },
        { sel: '@octaneRed', color: 'Octane Red' },
        { sel: '@torRed', color: 'TorRed' },
        { sel: '@goMango', color: 'Go Mango' },
        { sel: '@sinnamonStick', color: 'Sinamon Stick' },
        { sel: '@f8Green', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },
        { sel: '@smokeShow', color: 'Smoke Show' }],
    sxtStripeArray3 = [
        { sel: '@blacktopStripe', stripe: 'Blacktop Stripe' }],
    sxtWheelArray3 = [
        { sel: '@blackNoise', wheel: 'Black Noise' },],
    sxtTireArray3 = [
        { sel: '@bswSXT', tire: '245/45R' },],
        //
        //
        //
        //SCATPACK WIDE
    scatWideColorArray1 = [
        { sel: '@pitchBlack', color: 'Pitch Black' },
        { sel: '@hellRaisin2', color: 'Hellraisin' },
        { sel: '@granite', color: 'Granite' },
        { sel: '@tripleNickel2', color: 'Triple Nickel' },
        { sel: '@indiGoBlue2', color: 'IndiGo Blue' },
        { sel: '@frostBite2', color: 'Frostbite' },
        { sel: '@octaneRed2', color: 'Octane Red' },
        { sel: '@torRed2', color: 'TorRed' },
        { sel: '@goMango2', color: 'Go Mango' },
        { sel: '@sinnamonStick2', color: 'Sinamon Stick' },
        { sel: '@f8Green2', color: 'F8 Green' },
        { sel: '@whiteKnuckle', color: 'White Knuckle' },
        { sel: '@smokeShow2', color: 'Smoke Show' },],
    scatWideWheelArray1 = [
        { sel: '@devilRim', wheel: 'Rim Forged' },
        { sel: '@carbonBlk', wheel: 'Carbon Black' },],
    scatWideTireArray1 = [
        { sel: '@allSeasonSPN', tire: '305/35ZR20 All-Season' },
        { sel: '@zeroSummerRT', tire: '305/35ZR20 P Zero' },],
]


