import Experience from "../Experience";

class Clear
{
    constructor()
    {
        this.experience = new Experience()
    }

    clear()
    {
        this.experience.greenInput1.value = null
        this.experience.greenInput2.value = null
        this.experience.greenInput3.value = null
        this.experience.greenInput4.value = null
        this.experience.greenInput5.value = null

        this.experience.yellowInput.value = null

        this.experience.grayInput.value = null

        this.experience.answerHTML.value = 'Answer'
    }
}

export default Clear