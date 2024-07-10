// Typeof Guards in TypeScript:
var favHobbies = function (hobby) {
    // return hobby.map(()=>{});
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function (a) {
            console.log("a-->", a);
        });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
favHobbies(["coding", "gaming"]);
