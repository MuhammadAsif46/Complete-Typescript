// Typeof Guards in TypeScript:

const favHobbies = (hobby: string | string[]) => {
  // return hobby.map(()=>{});
  if (typeof hobby === "object" && Array.isArray(hobby)) {
    return hobby.map((a:string ) => {
        console.log("a-->",a);
        
    });
  } else { 
    console.log(hobby);
  }
};

favHobbies("coding");
favHobbies(["coding", "gaming"]);
