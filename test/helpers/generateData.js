const { faker } = require('@faker-js/faker');

function randomNumber() {
    const generateNumber = faker.number.int(100);
    return generateNumber;
}

function randomFormName() {
    const generateFormName = faker.company.buzzAdjective();
    return generateFormName;
}

function randomMessage() {
    const generateRandomMsg = faker.lorem.paragraph(2);
    return generateRandomMsg;
}

function randomProduct() {
    const generateProductName = faker.commerce.productName();
    return generateProductName;
}

function randomVendorName() {
    const generateVendorName = faker.commerce.department();
    return generateVendorName;
}

function randomEmail() {
    const generateRandomEmail = faker.internet.email();
    return generateRandomEmail;
}

function randomName() {
    const generateRandomName = faker.person.fullName();
    return generateRandomName;
}

function randomPhoneNumber() {
    const subscriberNumber = Math.floor(Math.random() * 90000000) + 10000000;

    return `011${subscriberNumber}`;
}

module.exports = {
    randomNumber,
    randomFormName,
    randomMessage,
    randomProduct,
    randomVendorName,
    randomEmail,
    randomName,
    randomPhoneNumber
}