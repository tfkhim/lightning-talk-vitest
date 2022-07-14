module.exports = {
    // We need to add '../src' to the list of roots due to
    // the directory layout of this repository. Otherwise
    // the watch mode doesn't pick up changes in the source
    // files. Normally you do not need this because the
    // Jest configuration is located in the project root.
    roots: ['.', '../src'],
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest'
    },
    setupFilesAfterEnv: ['jest-extended/all']
}
