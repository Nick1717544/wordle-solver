import Letters from './Utils/Letters'
import Find from './Utils/Find'

class Experience
{
    constructor()
    {
        if(Experience.instance)
        {
            return Experience.instance
        }
        Experience.instance = this

        // Getting HTML Elements
        this.greenInput1 = document.getElementById('green-input-1')
        this.greenInput2 = document.getElementById('green-input-2')
        this.greenInput3 = document.getElementById('green-input-3')
        this.greenInput4 = document.getElementById('green-input-4')
        this.greenInput5 = document.getElementById('green-input-5')

        this.yellowInput = document.getElementById('yellow-input')

        this.grayInput = document.getElementById('gray-input')

        this.answerHTML = document.getElementById('Answer')

        this.clearButton = document.getElementById('clear-button')
        this.findButton = document.getElementById('find-button')

        // Other Classes
        this.letters = new Letters()
        this.find = new Find()

        // Onclicks
        this.buttons()
    }

    buttons()
    {
        this.clearButton.onclick = () => {}
        this.findButton.onclick = () => {this.find.find()}
    }
}

export default Experience