import { greet } from "."

describe('greet', () => {
    it('can greet a specific person', () => {
        const greeting = greet('Jack')

        expect(greeting).toStrictEqual('Hello Jack!')
    })
})
