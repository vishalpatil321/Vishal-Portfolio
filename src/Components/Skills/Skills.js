import { Footer } from "../Footer";
import { SkillContainer } from "../Skill-container";
import "./Skills.css";
import codeAlpha from '../../assets/codealpha.png';
import react from '../../assets/reactz.png';
import js from '../../assets/jsz.png';

export const Skills = () => {
    const skill = [
      {
         name : "DSA",
         text : "Relevant Coursework",
      },
         {
            name : "JavaScript",
            text : "Programming Language",
            
         },
         {
            name : "C++",
            text : "Programming Language",
            
         },
         {
            name : "React js.",
            text : "Js. Library",
         
         },
         {
            name : "Node js.",
            text : "Server Enviroment",
        
         },
         {
            name : "Mongo Db",
            text : "Database",
        
         },
         
         {
            name : "Git & Github",
            text : "Server Enviroment",
         },
         {
            name : "Postman",
            text : "Api Tester",
        
         },
         {
            name : "Ui-Design",
            text : "Frontend"
        
         },
         {
            name : "HTML",
            text : "Markup Language",
           
         },
         {
             name : "CSS",
             text : "Styling Language",
           
 
          },
          {
             name : "Bootstrap",
             text : "Css Framework",
         
          },
         

        
    ]

    const certifications = [
      {
         name:'Code Alpha',
         image:codeAlpha
      },
      {
         name:'Lets Upgrade',
         image:react
      },
      {
         name:'Lets Upgrade',
         image:js
      }
    ]
    
    return(
      <>
        <div className="t-heading h">
            <p>I Have Some</p>
            <h2>Technical Skills</h2>
         </div>
        <div className="container">
         <div className="skills">
            {skill.map((item) => <SkillContainer text={item.text} name={item.name} percentage={item.percentage}/>)}
         </div>
        </div>
       <br/>
      
       <div className="certifications">
         <h2>Certifications</h2>
       </div>
       <div className="certificates">
        <div className="certificate-container">
         {certifications.map((item) => (
            <div className="certificate-container2">
               <div className="certificate">
                  <img src={item.image} style={{width:"100%",height:"100%"}}></img>
               </div>
               <h4>{item.name}</h4>
            </div>
         ))}
        </div>
        </div>
        <hr/>
        <Footer/>
      </>
       )
};