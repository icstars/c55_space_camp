// quick example function
// produce a full name for an employee

function createFullName(first_name, middle_name, last_name) {
    var full_name = "";

    full_name += first_name;

    full_name += ' ' + last_name;

    return full_name;
}

var full_name_result = createFullName("Ryan", "Jacob", "Magley");

console.log(full_name_result);