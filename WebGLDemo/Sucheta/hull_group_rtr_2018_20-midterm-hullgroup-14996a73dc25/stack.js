class Stack {
    constructor() {
        this.data = new Array(10);
        this.sp = -1;
    }

    push(d) {
        if (this.sp < 9) {
            this.sp++;
            let a = mat4.create();
            Object.assign(a, d);
            this.data[this.sp] = a;
        }
    }

    pop() {
        if (this.sp > -1) {
            this.sp--;
            return this.data[this.sp + 1];
        }
    }

    peek() {
        let a = mat4.create();
        Object.assign(a, this.data[this.sp])
        return a;
    }

    reset() {
        this.sp = -1;
        this.data = new Array(10);
    }
}
