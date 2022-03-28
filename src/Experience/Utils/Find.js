import Experience from "../Experience"
import { word } from '../../words'
import { includesMultipleLetters } from './Check'

class Find
{
    constructor()
    {
        this.experience = new Experience()

        this.greenWords = []
    }

    find()
    {
        this.greenWords = []
        this.getAllLetters()
        this.checkGreenLetters()
    }

    getAllLetters()
    {
        this.green1 = this.experience.greenInput1.value.toLowerCase()
        this.green2 = this.experience.greenInput2.value.toLowerCase()
        this.green3 = this.experience.greenInput3.value.toLowerCase()
        this.green4 = this.experience.greenInput4.value.toLowerCase()
        this.green5 = this.experience.greenInput5.value.toLowerCase()

        this.yellow = this.experience.yellowInput.value.toLowerCase()

        this.gray = this.experience.grayInput.value.toLowerCase()
    }

    checkGreenLetters()
    {
        for (let i = 0; i < word.length; i++)
        {
            if (this.g1L(i) == true && this.g2L(i) == true && this.g3L(i) == true && this.g4L(i) == true && this.g5L(i) == true)
            {
                this.greenWords.push(word[i])
            }
        }
        this.checkYellowLetters()
    }

    checkYellowLetters()
    {
        this.yellowWords = []
        if (this.yellow)
        {
            for (let i = 0; i < this.greenWords.length; i++)
            {
                if (includesMultipleLetters(`${this.greenWords[i]}`, `${this.yellow}`) == true)
                {
                    this.yellowWords.push(this.greenWords[i])
                }
            }
        } else {this.yellowWords = this.greenWords}
        this.checkGrayLetters()
    }

    checkGrayLetters()
    {
        this.grayWords = []
        if (this.gray)
        {
            for (let i = 0; i < this.yellowWords.length; i++)
            {
                if (includesMultipleLetters(`${this.yellowWords[i]}`, `${this.gray}`) == false)
                {
                    this.grayWords.push(this.yellowWords[i])
                }
            }
        } else {this.grayWords = this.yellowWords}
        this.experience.answerHTML.value = `${this.grayWords.toString().replaceAll(',', ', ')}`
    }

    g1L(i)
    {
        if (this.green1)
        {
            if (word[i][0] == this.green1) {return true} else {return false}
        } else {return true}
    }

    g2L(i)
    {
        if (this.green2)
        {
            if (word[i][1] == this.green2) {return true} else {return false}
        } else {return true}
    }

    g3L(i)
    {
        if (this.green3)
        {
            if (word[i][2] == this.green3) {return true} else {return false}
        } else {return true}
    }

    g4L(i)
    {
        if (this.green4)
        {
            if (word[i][3] == this.green4) {return true} else {return false}
        } else {return true}
    }

    g5L(i)
    {
        if (this.green5)
        {
            if (word[i][4] == this.green5) {return true} else {return false}
        } else {return true}
    }
}

export default Find