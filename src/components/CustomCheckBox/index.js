import BasicElement from "../BasicElement";

export class CustomCheckBox extends BasicElement {
    constructor (textDisplay) {
        super("input", textDisplay);
    }

    isChecked () {
        return this.element.checked;
    }

    check() {
        this.element.checked = true;
    }

    unCheck() {
        this.element.checked = false;
    }

    checkedAllCheckBoxWithName(groupName) {
        const subCheckBoxes = document.getElementsByName(groupName);
        for(let i = 0; i < subCheckBoxes.length; i++) {
            subCheckBoxes[i].checked = this.isChecked()
        }
    }
}