function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
;
var p = {
    firstName: 'John',
    lastName: 'Doe'
};
fullName(p);
