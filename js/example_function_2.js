// quick example function
// produce a full name for an employee

function createFullName(first_name, middle_name, last_name) {
    var full_name = "";

    full_name += first_name;
    // what can we do here now?
    full_name += ' ' + last_name;

    return full_name;
}

var full_name_result = createFullName("Ryan", "Jacob", "Magley");

console.log(full_name_result);

var full_name_result = createFullName("Alex", "Brian", "Lastname");

console.log(full_name_result);

var full_name_result = createFullName("Charlie", "", "Smith");

console.log(full_name_result);

var full_name_result = createFullName("Devin", null, "Jones");

console.log(full_name_result);