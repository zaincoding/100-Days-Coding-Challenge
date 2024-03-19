//Defined nested object contain programmer skills.
const programmer = {
language:['javascript','Python','java','c++','c#'],
tools: ['Sublime Text','Visual Studio','NetBeans','Notepad++'],
framework: ['Electron','Laravel','Next.js','Unity']
};
//Define another object 'specificSkill' to extract three specific skills from 'programmer' object
const specificSkills = {
   language: programmer.language[0],
   tools: programmer.tools[1],
   framework: programmer.framework[2]
}
//Output the result.
console.log(specificSkills);