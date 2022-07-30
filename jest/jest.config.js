module.exports = {
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest'
    },
    setupFilesAfterEnv: ['jest-extended/all']
}
