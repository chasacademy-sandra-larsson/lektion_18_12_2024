// exempel på statiskt metod
// class Square {
//     constructor(side) {
//         this.side = side;
//     }
//     findPerimeter() {
//         return 4 * this.side;
//     }
    
//     static comparePerimeter(square1, square2) {
//         if (square1.side > square2.side) {
//             console.log("First square has more perimeter");
//         } else if (square1.side < square2.side) {
//             console.log("Second square has more perimeter");
//         } else {
//             console.log("Both have same perimeter");
//         }

//     }

// }

// let square1 = new Square(3);
// let square2 = new Square(7);
// Square.comparePerimeter(square1, square2);

//Ge mig exempel på en static metod

class MathUtils {
    // Static metod
    static add(a, b) {
        return a + b;
    }

    // Static metod
    static subtract(a, b) {
        return a - b;
    }

    // Static metod
    static multiply(a, b) {
        return a * b;
    }

    // Static metod
    static divide(a, b) {
        return a / b;
    }
}

console.log(MathUtils.add(1, 2)); // 3
console.log(MathUtils.subtract(1, 2)); // -1
console.log(MathUtils.multiply(1, 2)); // 2
console.log(MathUtils.divide(1, 2)); // 0.5
