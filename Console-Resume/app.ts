let myFirstName: string = "Ethan Delcambre";
let career = "Web Developer";
let desc = "I don't know anything";
let interests = ["Cooking", "Coffee", "Vinyl", "Gaming", "Reading"];
let experience = [
  {
    company: "TruFund Financial Services",
    title: "Marketing Intern",
    jobdescription: "Research local small business' financial needs",
  },
  {
    company: "Chicken Salad Chick",
    title: "Team Member",
    jobdescription: "Cashier, line cook, and prep team",
  },
  {
    company: "Alabama Broadcasters' Association",
    title: "Intern",
    jobdescription: "Created Marketing Material and organized convention",
  },
];
let skills = [
  {skill: "HTML",
    cool: false},
  {skill: "Photoshop",
   cool: true},
  {skill: "CSS",
    cool: false},
  {skill: "JavaScript",
    cool: false},
  {skill: "Excel",
    cool: false},
  {skill: "Customer Service",
    cool: false},
  {skill: "Boolin'",
    cool: true}
];
console.log("Name: " + name.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + desc);
console.log(" ");
console.log("My Interests:");
function displayInterests() {
  for (let i = 0; i < interests.length; i++) {
    console.log("*" + " " + interests[i]);
  };
};
function displayPosition() {
    for (let i = 0; i < experience.length; i++) {
        console.log(
            experience[i].title +
            " for " +
            experience[i].company +
            " - " +
            experience[i].jobdescription
            ); // listing out job info on one line
        };
    };
function displaySkills(skillName, cool) {
    if (cool == true) {
        console.log("* " + "BAM: " + skillName);
    } else {
        console.log("* " + skillName)
    };
};
displayInterests();
displayPosition();
for (let i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].cool)
};