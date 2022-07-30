import { greet } from "."

vi.mock('./index')

describe('Showcase', () => {
    afterEach(() => {
        vi.useRealTimers()
    })

    it('has the same expect syntax as Jest', () => {
        const greeting = greet()

        expect(greeting).toStrictEqual('Hello World!')
    })

    it('supports Jest matcher extensions', () => {
        const greeting = greet()

        expect(greeting).toBeString()
    })

    it('has mocks for functions', () => {
        const mock = vi.fn<[string], undefined>()

        mock('Hello World!')

        expect(mock).toHaveBeenCalledWith('Hello World!')
    })

    it('can spy on methods', () => {
        const obj = {
            method() {}
        }
        vi.spyOn(obj, 'method')

        obj.method()

        expect(obj.method).toHaveBeenCalledOnce()
    })

    it('can mock timers', async () => {
        vi.useFakeTimers()

        const sleep = new Promise((resolve) => setTimeout(resolve, 60000))

        vi.advanceTimersByTime(61000)

        await expect(sleep).toResolve()
    })

    it('can mock modules', async () => {
        greet()

        expect(greet).toHaveBeenCalledOnce()
    })
})
