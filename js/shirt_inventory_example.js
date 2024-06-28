// size is an integer - 0 is small, 1 is medium, 2 is large, 3 is XL, 4 is XXL
var sample_shirt_data_one = {
    'size': 3,
    'color': 'black',
    'material': 'cotton'
}

var sample_shirt_data_two = {
    'size': 2,
    'color': 'black',
    'material': 'cotton'
}

var sample_shirt_data_three = {
    'size': 2,
    'color': 'white',
    'material': 'cotton'
}

var sample_shirt_data_four = {
    'size': 4,
    'color': 'white',
    'material': 'polyester'
}

var sample_shirt_data_five = {
    'size': 2,
    'color': 'black',
    'material': 'polyester'
}

var shirt_data = [
    sample_shirt_data_one,
    sample_shirt_data_two,
    sample_shirt_data_three,
    sample_shirt_data_four,
    sample_shirt_data_five
]

// console.log(shirt_data)

for (var i = 0; i < shirt_data.length; i++) {
    var shirt = shirt_data[i];
    if (shirt.material === 'cotton') {
        console.log(shirt);
    }
}