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

    // 0. Define the different arrays of doggos you will display
    var allPuppies = []; // filter allTheDoggos for just the puppies (< 2 years)

    var doggosWithPNames = []; // filter allTheDoggos for those whose names start with P 

    var doggosInSf = []; // filter allTheDoggos for those in SF

    var seniorDoggos = []; // filter allTheDoggos for those over 7 years old

    var californiaDoggos = []; // filter allTheDoggos for those in CA


    // 1. Figure out which div each array of doggos should be appended to in the index.html;
    // Then, iterate through each array and append the doggo's name and photo to that div
    allPuppies.forEach();

    doggosWithPNames.forEach();

    doggosInSf.forEach();

    seniorDoggos.forEach();

    californiaDoggos.forEach();


    // 2. Use Bootstrap cards to style these doggos;
    // Check out https://getbootstrap.com/docs/4.0/components/card/


    // 3. Map through allTheDoggos to get just their names and doggo ages (doggo age = human years * 7);
    // Then, iterate through this array and append the doggo's name and doggo age to the appropriate div
    var doggoNamesAndDoggoAges = [];
    doggoNamesAndDoggoAges.forEach();


    // BONUS: DRY up your code!
});