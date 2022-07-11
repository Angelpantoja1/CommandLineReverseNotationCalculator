import { Validate, endLoop, notValidNumber, checkOperator, evaluate } from "./functions";

describe("Testing Validate Funciton", () => {

    test("Should be true if a string with a single number is entered", () => {
        expect(Validate("2")).toBeTruthy();
        expect(Validate("100")).not.toBeFalsy()
    })

    test("Should be true if a string consisting of numbers seperated by spaces is entered", () => {
        expect(Validate("1 2 3 4 5 6 7 8 9")).toBeTruthy();
    })

    test("Should be true if a string consisting of numbers and one of the four operation are entered", () => {
        expect(Validate(" 1 2 3 + ")).toBeTruthy();
    })

    test("Should be true if you enter any amount of numbers or any amount of the four operators", () => {
        expect(Validate(" 1 2 + 3 *")).toBeTruthy();
        expect(Validate(" 1 2 4 5 6 + + + + +")).toBeTruthy();
    })

    test("Should be true if any of the four operators are entered", () => {
        expect(Validate("+")).toBeTruthy()
        expect(Validate("-")).toBeTruthy()
        expect(Validate("*")).toBeTruthy()
        expect(Validate("/")).toBeTruthy()
    })

    test("Should be true if any decimals are entered", () => {
        expect(Validate("1.1 1.1")).toBeTruthy();
    })

    test("Should be false if a space is entered", () => {
        expect(Validate(" ")).toBeFalsy();
        expect(Validate("")).toBeFalsy();
    })

    test("Should be false if a . is entered", () => {
        expect(Validate(".")).toBeFalsy();
    })

    test("Should be false if any letters are entered expect q or Q", () => {
        expect(Validate("Hello World")).toBeFalsy();
        expect(Validate("A")).toBeFalsy();
        expect(Validate("B")).toBeFalsy();
        expect(Validate("C")).toBeFalsy();
        expect(Validate("D")).toBeFalsy();
        expect(Validate("E")).toBeFalsy();
        expect(Validate("F")).toBeFalsy();
        expect(Validate("G")).toBeFalsy();
        expect(Validate("H")).toBeFalsy();
        expect(Validate("I")).toBeFalsy();
        expect(Validate("J")).toBeFalsy();
        expect(Validate("K")).toBeFalsy();
        expect(Validate("L")).toBeFalsy();
        expect(Validate("M")).toBeFalsy();
        expect(Validate("O")).toBeFalsy();
        expect(Validate("P")).toBeFalsy();
        expect(Validate("r")).toBeFalsy();
        expect(Validate("s")).toBeFalsy();
        expect(Validate("t")).toBeFalsy();
        expect(Validate("u")).toBeFalsy();
        expect(Validate("v")).toBeFalsy();
        expect(Validate("w")).toBeFalsy();
        expect(Validate("x")).toBeFalsy();
        expect(Validate("y")).toBeFalsy();
        expect(Validate("z")).toBeFalsy();
    })

    test("Should be false if any special charaters are entered expect for the operators", () => {
        expect(Validate("!")).toBeFalsy();
        expect(Validate("@")).toBeFalsy();
        expect(Validate("#")).toBeFalsy();
        expect(Validate("$")).toBeFalsy();
        expect(Validate("%")).toBeFalsy();
        expect(Validate("^")).toBeFalsy();
        expect(Validate("&")).toBeFalsy();
        expect(Validate("(")).toBeFalsy();
        expect(Validate(")")).toBeFalsy();
        expect(Validate("_")).toBeFalsy();
        expect(Validate("=")).toBeFalsy();
        expect(Validate("{")).toBeFalsy();
        expect(Validate("}")).toBeFalsy();
        expect(Validate("[")).toBeFalsy();
        expect(Validate("]")).toBeFalsy();
        expect(Validate("|")).toBeFalsy();
        expect(Validate(":")).toBeFalsy();
        expect(Validate(";")).toBeFalsy();
        expect(Validate(`"`)).toBeFalsy();
        expect(Validate("'")).toBeFalsy();
        expect(Validate("<")).toBeFalsy();
        expect(Validate(">")).toBeFalsy();
        expect(Validate(",")).toBeFalsy();
        expect(Validate(".")).toBeFalsy();
        expect(Validate("?")).toBeFalsy();
    })

    test("Should be false if you enter a number and operator without any spaces", () => {
        expect(Validate("/4")).toBeFalsy();
    })

    test("only numbers, operators, q || Q  are true", () => {
        expect(Validate(" 1 2 3 4 5 6 7 8 9 10 - + / * q")).toBeTruthy();
    })

    test("anything other than numbers, operators, q || Q  are false", () => {
        expect(Validate("! @ # $ 12")).toBeFalsy()
    })

})

describe("Testing End Loop Function", () => {
    test("Should Return True if 'q' is passed in", () => {
        expect(endLoop("q")).toBeTruthy();
    })
    test("Should Return True if 'Q' is passed in", () => {
        expect(endLoop("Q")).toBeTruthy();
    })
    test("Should Return True if 'eof' is passed in", () => {
        expect(endLoop("eof")).toBeTruthy();
    })
    test("Should Return True if 'EOF' is passed in", () => {
        expect(endLoop("EOF")).toBeTruthy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('w')).toBeFalsy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('1')).toBeFalsy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('!')).toBeFalsy();
    })
})

describe("Testing notValidNumber Function", () => {

    test("Should return false if a single number is entered not multiple numbers", () => {
        expect(notValidNumber("1")).toBeFalsy();
    })
    test("Should return true if a special character is entered", () => {
        expect(notValidNumber("!")).toBeTruthy();
    })
    test("Should return true if a letter is entered except q ", () => {
        expect(notValidNumber("w")).toBeTruthy();
    })
    test("Should return false if q is entered", () => {
        expect(notValidNumber("q")).toBeFalsy();
    })
    test("Should return false if decimal number is entered", () => {
        expect(notValidNumber("1.1")).toBeFalsy();
    })
    test("Should return true if . is entered", () => {
        expect(notValidNumber(".")).toBeTruthy();
    })
})

describe("Testing checkOperator Function", () => {

    test("Should return true if single operation (+) is ented", () => {
        expect(checkOperator("+")).toBeTruthy();
    })
    test("Should return true if single operation (-) is ented", () => {
        expect(checkOperator("-")).toBeTruthy();
    })
    test("Should return true if single operation (/) is ented", () => {
        expect(checkOperator("/")).toBeTruthy();
    })
    test("Should return true if single operation (*) is ented", () => {
        expect(checkOperator("*")).toBeTruthy();
    })
    test("Should return false if a letter of the alphabet is entered", () => {
        expect(checkOperator("a")).toBeFalsy();
    })
    test("Should return false if a number is entered", () => {
        expect(checkOperator("a")).toBeFalsy();
    })
    test("Should return false if a special character is entered", () => {
        expect(checkOperator("$")).toBeFalsy();
    })
})

describe("Testing evaluate Function", () => {

    test("Should return an empty array when there are only two numbers in the number array as well as the sum of adding the two numbers together", () => {
        expect(evaluate("+", [1, 1])).toEqual(
            expect.objectContaining({
                numbArr: expect.arrayContaining([]),
                sum: expect.any(Number)
            })
        )
    })

    test("Should return an array with at least one number if there 3 numbers in the number array as well as the solution to the operation being passed", () => {
        expect(evaluate("*", [1, 2, 4])).toEqual(
            expect.objectContaining(
                {
                    numbArr: expect.arrayContaining([expect.any(Number)]),
                    sum: expect.any(Number)
                }
            )
        )
    })

    test("The length of the array should be 1 if only 3 numbers are in the number array", () => {
        expect(evaluate("*", [1, 2, 4]).numbArr.length).toBe(1)
    })

    test("Should return an array with 2 numbers if there are 4 numbers in the number array as well as the solution to the operation being passed", () => {
        expect(evaluate("*", [1, 2, 4, 4])).toEqual(
            expect.objectContaining(
                {
                    numbArr: expect.arrayContaining([expect.any(Number)]),
                    sum: expect.any(Number)
                }
            )
        )
    })
    test("The length of the array should be 2 if 4 numbers are in the number array", () => {
        expect(evaluate("*", [1, 2, 4, 4]).numbArr.length).toBe(2)
    })
})