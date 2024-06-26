// quick example function
// produce a full name for an employee

function createFullName(first_name, middle_name, last_name) {
    var full_name = "";

    full_name += first_name;
    // we're not quite sure about how to handle the middle name yet -
    // we know it needs to be present, but we also know that not all people
    // have a last name. some thought is required here
    full_name += ' ' + last_name;

    return full_name;
}

var full_name_result = createFullName("Ryan", "Jacob", "Magley");

console.log(full_name_result);