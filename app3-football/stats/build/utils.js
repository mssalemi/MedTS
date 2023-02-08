"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const [day, month, year] = dateString
        .split("/")
        .map((numberString) => parseInt(numberString));
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
