export function greet(name?: string): string {
    return `Hello ${name ?? 'World'}!`
}

if (import.meta?.vitest) {
    const { it, expect } = import.meta.vitest
    it('has In-Source tests', () => {
        const greeting = greet('Jack')

        expect(greeting).toStrictEqual('Hello Jack!')
    })
}
