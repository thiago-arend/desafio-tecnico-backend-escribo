module.exports = {
    testEnvironment: 'jest-environment-node',
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleDirectories: ["node_modules", "src"],
    testMatch: ["<rootDir>/tests/*.(test|spec).js"],
};