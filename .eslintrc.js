/*
 * @Date: 2020-07-02 00:40:14
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-03 21:56:58
 * @FilePath: /spurv/ifoo/.eslintrc.js
 */
module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true,
        "test": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off"
    }
};
