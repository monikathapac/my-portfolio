import React, {useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";


import './ContactSection.css';


function ContactSection(){
               //current value, setter =useState("current value")
        const [name,setName] =useState("");//for changing state
        const [nameError, setNameError]= useState("")// for validation of name
        const [email, setEmail]=useState("");
        const [emailError, setEmailError]= useState("")// for validation of mail
        const [phone, setPhone]=useState("");
        const [phoneError, setPhoneError]=useState("");//phone number validation
        const [message, setMessage]=useState("");
        const [messageError, setMessageError]=useState("");


        //make function for submit click
        //here e is the actual typed value
        const handleSubmit=(e)=>{
             e.preventDefault(); //to prevent auto default refresh
             let valid=true; //assuming there is no error anf everything is valid


                   

                        

                        if (name.length< 3){
                    setNameError("first one reflect");
                    valid=false;
                   }else{setNameError ("");}


                    if (!email.includes("@")){
                        setEmailError("email should contain @");
                        valid=false;} 
                        else{setEmailError("");}
                    
                    if (phone.length< 10){
                    setPhoneError("mobile number should be of 10 digits");
                    valid=false;
                   }else{setPhoneError("");}


                   /*if(message.length < 20 ){
                        setMessageError("it should have more then 5 words");
                        valid=false; 
                    }else{
                            setMessageError("");
                   }*/




                            
                if (!valid) return;//stop if valid fails

//object for storing in local databse
const formData={
    name,email,phone,message
};
//to save
localStorage.setItem("formData",JSON.stringify(formData));

//retruns this prompt alert on submission , thi is just for check
                alert(`hi ${name} , your Email id is ${email} & phone number is ${phone}. Your message "${message}" is saved`);
                setName("");//to reset to empty box 
                setEmail("");
                setPhone("");
                setMessage("");
                }//for practise only

      //main return of the component      
    return(

        <div className="contact-container">
                <div className="left">
                    <h1 class="subtitle">Contact me</h1>   

                    <div className="my-contact">

                    <div>
                   <FontAwesomeIcon icon={faEnvelope}/> monikathapa007@gmail.com 
                    </div><br></br>

                    <div>
                     <FontAwesomeIcon icon={faPhone}/> +91 7085-306-197</div><br></br>

                    <div>
                    <a href="www.github.com" target="_blank">
                      <FontAwesomeIcon icon={ faGithub} /> Github</a></div><br></br>

                    <div>
                    <a href="mlinkedin.com" target="_blank">
                     <FontAwesomeIcon icon={faLinkedin} /> Linkedin </a></div></div>
                </div>









                <div className="your-contact">
                    <form onSubmit={handleSubmit} >


                        <input  
                        type="text" className="input-box" placeholder="Full name"
                        value={name} 
                    //event handler ={(evt obj i.e )=>{setter(set from this from this target )}}
                        onChange={(e)=>{setName(e.target.value);
                            if(e.target.value.length < 3 ){
                                setNameError("should be more then 2 char");}
                                else{
                                    setNameError("");
                                }}}/><span style={{color:"red " , fontSize: "12px"}}>{nameError}</span>

                        <br></br>



                            
                        <input  className="input-box" placeholder="Your email" 
                        value={email}
                         onChange={(e)=> {setEmail(e.target.value);
                            if (!e.target.value.includes("@") ){
                                setEmailError(" @ is missing");
                            }else{
                                    setEmailError("");
                                }
                            }}/><span style={{color:"red " , fontSize: "12px"}}>{emailError}</span>

                        <br></br>




                        <input type="text" className="input-box" placeholder="Mobile number" 
                       value={phone} onChange={(e) => {setPhone(e.target.value);
                        if(e.target.value.length < 10)
                        {
                            setPhoneError(" Phone number should only have digits and should not be less then 10 digits");}
                            else{
                                setPhoneError("");
                            }
                            }}/><span style={{color:"red " , fontSize: "12px"}}>{phoneError}</span>
                        <br></br>




                        <textarea type="text" className="message-box" rows="5" placeholder="message" 
                        value={message} 
                        onChange={(e)=>{
                            setMessage(e.target.value);
                        }}></textarea >
                        <br></br>
  
                        <button type="submit">Submit</button>
                        

                    </form>
                </div>


        </div>
   );

}
export default  ContactSection;