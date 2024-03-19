//User choice for skill labels.
const label1 = "languages";
const label2 = "tools";
const label3 = "frameworks";
//Define the list with flexible object key
const skills = {
  [label1]: ["javascript", "Python", "java", "c++", "c#"],
  [label2]: ["Subline Text", "Visual Studio", "Netbeans", "Notepad++"],
  [label3]: ["Electron", "Larvel", "Next.js", "Unity"],
};
//Accessing the object using dynamic keys.
console.log(skills[label1]);
console.log(skills[label2]);
console.log(skills[label3]);
