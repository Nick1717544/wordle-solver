import Experience from "../Experience"

class Letters
{
    constructor()
    {
        // Experience
        this.experience = new Experience
        this.add(this.experience.greenInput1)
        this.add(this.experience.greenInput2)
        this.add(this.experience.greenInput3)
        this.add(this.experience.greenInput4)
        this.add(this.experience.greenInput5)

        this.add(this.experience.yellowInput)

        this.add(this.experience.grayInput)
    }

    add(dom)
    {
        dom.addEventListener('keydown', (keyPress) =>
        {
            if (keyPress.keyCode > 64 && keyPress.keyCode < 91 || keyPress.keyCode == 8) {} else
            {
                keyPress.preventDefault()
            }
        })
    }
}

export default Letters