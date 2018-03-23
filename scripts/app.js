$(document).ready(function() {
    var allTheDoggos = [
        {
            name: 'Petunia', 
            age: 1,
            photo: 'https://fortunedotcom.files.wordpress.com/2017/08/512536165-e1510081190643.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Boris', 
            age: 2,
            photo: 'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Millie', 
            age: 1,
            photo: 'https://www.babble.com/wp-content/uploads/2013/09/puppy5-624x398.jpg',
            city: 'LA',
            state: 'CA'
        },
        {
            name: 'Panda', 
            age: 3,
            photo: 'https://tailandfur.com/wp-content/uploads/2016/11/40-Fluffy-Pictures-of-Puppies-that-Looks-like-Pandas-3.jpg',
            city: 'SD',
            state: 'CA'
        },
        {
            name: 'Phoebe', 
            age: 4,
            photo: 'http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Ian', 
            age: 8,
            photo: 'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg',
            city: 'SF',
            state: 'CA'
        }
    ];

    // STEP 0: Define the different arrays of doggos you will display

    // Filter allTheDoggos for just the puppies (< 2 years)
    var allPuppies = allTheDoggos.filter(function(doggo) {
        return doggo.age < 2
    });

    // Filter allTheDoggos for those whose names start with P 
    var doggosWithPNames = allTheDoggos.filter(function(doggo) {
        return doggo.name[0] === 'P'
    });

    // Filter allTheDoggos for those in SF
    var doggosInSf = allTheDoggos.filter(function(doggo) {
        return doggo.city === 'SF'
    });

    // Filter allTheDoggos for those over 7 years old
    var seniorDoggos = allTheDoggos.filter(function(doggo) {
        return doggo.age > 7
    });

    // Filter allTheDoggos for those in CA
    var californiaDoggos = allTheDoggos.filter(function(doggo) {
        return doggo.state === 'CA'
    });



    // STEP 1: Figure out which div each array of doggos should be appended to in the index.html;
    // Then, iterate through each array and append the doggo's name and photo to that div
    allPuppies.forEach(function(doggo) {
        appendDoggoCardToDiv(doggo, '#puppies');
    });

    doggosWithPNames.forEach(function(doggo) {
        appendDoggoCardToDiv(doggo, '#p-name');
    });

    doggosInSf.forEach(function(doggo) {
        appendDoggoCardToDiv(doggo, '#sf');
    });

    seniorDoggos.forEach(function(doggo) {
        appendDoggoCardToDiv(doggo, '#senior');
    });

    californiaDoggos.forEach(function(doggo) {
        appendDoggoCardToDiv(doggo, '#ca');
    });



    // STEP 2: Use Bootstrap cards to style these doggos;
    // Check out https://getbootstrap.com/docs/4.0/components/card/



    // STEP 3: .map() through allTheDoggos to return an array of doggo Objects with names and doggo ages (doggo age = human years * 7);
    // e.g. [{ name: Petunia, doggoAge: 7 }, etc.]
    // Then, iterate through this array and append the doggo's name and doggo age to the <ul></ul> inside <div id="doggo-ages"></div>
    var doggoNamesAndDoggoAges = allTheDoggos.map(function(doggo) {
        return {
            name: doggo.name, 
            doggoAge: doggo.age * 7
        }
    });

    doggoNamesAndDoggoAges.forEach(function(doggo) {
        $('#doggo-ages ul').append(`
            <li>
              ${ doggo.name } - ${ doggo.doggoAge } doggo years old
            </li>
        `)
    });



    // BONUS: DRY up your code!
    function appendDoggoCardToDiv(doggo, selector) {
        $(selector).append(`
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${ doggo.photo }" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${ doggo.name }</h5>
              </div>
            </div>
        `);
    }
});