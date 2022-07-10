import { greet } from "../src/greeter"

describe('Showcase', () => {
    it('has the same expect syntax as Jest', () => {
        const greeting = greet()

        expect(greeting).toStrictEqual('Hello World!')
    })

    it('supports Jest matcher extensions', () => {
        const greeting = greet()

        expect(greeting).toBeString()
    })
})
