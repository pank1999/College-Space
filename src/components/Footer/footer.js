import styled from "styled-components";
import {Facebook,Twitter,Instagram,LinkedIn ,Apartment,LocalPhone} from "@material-ui/icons";


const Container=styled.div`
     display:flex;
     width:100%;
     justify-content:space-between;
     background-color:rgb(235, 234, 234);
     
   `;
const Left=styled.div`
    flex:1;
    padding:20px;

`;
const Title=styled.h2`
   margin-top:10px;
`;
const Desc=styled.p`
 margin-top:20px;
`;
const Center=styled.div`
 flex:1;
  padding:20px;
  justify-content:center;
  align-items:center;

 `;

 const UsefulLinks=styled.ul`
    margin-bottom:20px;
 `;
 const Link=styled.li`
    padding:5px;
 `;

const Right=styled.div`
 flex:1;
 padding:20px;
 `;

 const Contact=styled.div`
    margin:20px 0px;
    
     `;

 const Icons=styled.div`
    
 `;

function Footer(){
    
    
    return(
         <Container>
                <Left>
                     <Title>College Space</Title>
                     <Desc>It is student oriented online platform to get information about their academics.which provides valuable information at one place any time any where.</Desc>
                </Left>
                <Center>
                     <UsefulLinks>
                           <h3>UsefulLinks</h3>
                          <Link>Home</Link>
                          <Link>Career</Link>
                          <Link>About</Link>
                          <Link>Teachers</Link>
                          <Link>Academics</Link>
                     </UsefulLinks>
                </Center>
                <Right>
                       <h3>Follow Us</h3>
                        <Contact>
                            <LocalPhone /> <span>+91 8630211986</span> <br/>
                            <Apartment /> <span>Gram Dhankher,Satna M.P. 485441</span>
                        </Contact>
                        

                        <Icons>
                           <Facebook  style={{marginRight:'10px',color:'blue',fontSize:'30px',cursor:'pointer'}}/>
                           <Instagram  style={{marginRight:'10px',color:'pink',fontSize:'30px',cursor:'pointer'}} />
                           <Twitter   style={{marginRight:'10px',color:'skyblue',fontSize:'30px',cursor:'pointer'}}/>
                           <LinkedIn  style={{marginRight:'10px',color:'lightblue',fontSize:'30px',cursor:'pointer'}}/>
                        </Icons>
                       
                </Right>
         </Container>
    );

}

export default Footer;