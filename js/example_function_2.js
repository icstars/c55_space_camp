// quick example function
// produce a full name for an employee

function createFullName(first_name, middle_name, last_name) {
    var full_name = "";

    full_name += first_name;

    // if (middle_name == null) {

    // }

    // else {
    //     full_name += ' ' + middle_name;
    // }

    // if (middle_name == null) {
    //     // do nothing
    // }
    // else if (middle_name != '') {
    //     full_name += ' ' + middle_name;
    // }
    
    if (middle_name == null) {
        // do nothing
    }
    else if (middle_name == '') {
        // do nothing
    }
    else {
        full_name += ' ' + middle_name;
    }
    

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