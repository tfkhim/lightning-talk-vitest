import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { compile } from 'handlebars'

main('./test_suite.spec.template', './jest/tests', 100, 20)

function main(templateFile: string, outDir: string, numSuits: number, numTests: number): void {
    const testNames: string[] = []
    for(let i = 0; i < numTests; i++) {
        testNames.push(`test ${i}`)
    }

    mkdirSync(outDir, {recursive: true})
    const template = compile(readFileSync(templateFile).toString('utf-8'))
    for(let i = 0; i < numSuits; i++) {
        writeFileSync(`${outDir}/test_${i}.spec.ts`, template({suiteCount: i, testNames}))
    }
}

