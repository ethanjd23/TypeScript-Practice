let myName: string = "Ethan Delcambre";
let career = "Web Developer";
let desc = "I don't know anything";
let interests: string[] = ["Cooking", "Coffee", "Vinyl", "Gaming", "Reading"];
let experience: { company: string; title: string; jobDescription: string}[] = [
  {
    company: "TruFund Financial Services",
    title: "Marketing Intern",
    jobDescription: "Research local small business' financial needs",
  },
  {
    company: "Chicken Salad Chick",
    title: "Team Member",
    jobDescription: "Cashier, line cook, and prep team",
  },
  {
    company: "Alabama Broadcasters' Association",
    title: "Intern",
    jobDescription: "Created Marketing Material and organized convention",
  },
];
let skills: {skill: string; cool: boolean}[] = [
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
console.log("Name: " + myName.toUpperCase());
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
            experience[i].jobDescription
            ); // listing out job info on one line
        };
    };
function displaySkills(skillName: string, cool: boolean) {
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