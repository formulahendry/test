var { getMessages } = require("../function_utils/test");

module.exports = function(input) {
    if (input !== "hello") {
        return getMessages();
    }
};
