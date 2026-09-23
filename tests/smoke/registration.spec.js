import {test,expect} from '../../fixture/fixture.js'
import user from '../../testdata/registrationUser.json'

test(" Verify registration of new user",async ({page,loginPage,registrationPage})=>{

    await page.goto('/login')

    await loginPage.clickOnNewUserSignUpLink()
    
    await registrationPage.enterDetailsforNewUser(user.name,user.email,user.password,user.state,user.hobby)

    expect(await registrationPage.getSuccessfullRegistrationText()).toBe(user.successfullToastMessage)
})