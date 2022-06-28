// call json test

fetch('./tests/testing_test_titles.json').then((response) => 
    response.json()).then((json) => {
        return ddata.json;
    }).catch((error) => {
        console.error(error);
    })
