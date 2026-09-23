import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {


    constructor(page) {

        super(page)
        this.page = page

        this.nameField = page.getByPlaceholder('Name')

        this.emailField = page.getByPlaceholder('Email')

        this.passwordField = page.getByPlaceholder('Password')

        this.newUrlSignUpLink = page.getByText("New user? Signup", { exact: true })

        this.interestsCheckbox = page.locator("//label[contains(text(),'JAVA')]")

        this.genderRadioOption = page.locator("//input[@id='gender1']")

        this.stateDropDown = page.locator("//select[@id='state']")

        this.multiselectHobbies = page.locator("//select[@id='hobbies']")

        this.signupBtn = page.locator(".submit-btn")

        this.successfullRegistrationToast = page.locator(".Toastify__toast-body")

    }


    async getSuccessfullRegistrationText() {

        return await this.getText(this.successfullRegistrationToast)
    }

    async enterDetailsforNewUser(name, email, password, state, hobby) {

        await this.type(this.nameField, name)
        await this.type(this.emailField, email)
        await this.type(this.passwordField, password)

        await this.click(this.interestsCheckbox)
        await this.click(this.genderRadioOption)

        await this.handleDropdown(this.stateDropDown, state)
        await this.handleDropdown(this.multiselectHobbies, hobby)

        await this.click(this.signupBtn)

    }


}