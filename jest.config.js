export default {
    testEnvironment: 'node',
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleDirectories: ["node_modules", "src"],
    testMatch: ["<rootDir>/tests/*.(test|spec).js"],
};