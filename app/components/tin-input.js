import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
    tinStack: [],

    didInsertElement() {

        document.getElementById('tin').addEventListener('select', function () {
            this.selectionStart = this.selectionEnd;
        }, false);

        // $("#tin").select(function(e) {
        //     console.log('select')
        //     e.preventDefault();
        // });

        let self = this;

        document.getElementById('tin').onkeydown = function (event) {
            console.log('event', event.key);
            console.log('value', this.value);
            console.log('select start', this.selectionStart);
            console.log('select end', this.selectionEnd);

            let allowedKeys = [];

            let onlyNumber = (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105);
            let preventFrom = !onlyNumber && !allowedKeys.includes(event.key);

            

            if (event.key === 'Backspace' || event.KeyCode == 8) {
                self.detectRemove(this.selectionStart);
            } else if (preventFrom) {
                event.preventDefault();
            }


            if (self.tinStack.length <= 8) {
                // let eValue = event.target.value;
                if (onlyNumber) {
                    self.tinStack.insertAt(this.selectionStart, event.key);
                    console.log(self.tinStack);

                };
            }
            if(!allowedKeys.includes(event.key)) {
                event.preventDefault();
                this.value = self.formateEIN();
            }

        }

    },


    formateEIN(param = null) {
        let value = [];
        (param || this.tinStack).forEach((c, index) => {
            if (index === 1) {
                value.push('X');
            } else if (index > 4) {
                value.push(c);
            } else {
                value.push('X');
            }
        });

        return value.toString().replace(/,/g, '');
    },


    detectRemove(index) {
        this.tinStack.removeAt(index - 1);
        console.log(this.tinStack);
    },


    actions: {


    }
});
