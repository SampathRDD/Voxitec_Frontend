import React from 'react';

/*import components*/
import Navbar from './Navbar';

/*import css*/
import './Body.css';
import Slide from './Slide';

/* import images */
import line from '../images/line.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import facebook from '../images/facebook.svg';
import profile from '../images/profile.png';
import Down from '../images/down.gif';
/*import Logo from '../images/logo.svg'*/




function Body() {
  return (
    <div className='' >
        <div class="section-1 box">
            <Navbar/>
            <div>
                {/*<a href="#" ><img src={Logo} className='logo-image'/></a>*/)
                <img src={line} className='line-image'/>
                <a href="#" ><button className='btn2'>Let's Talk</button></a>
                <a href="#" ><button className='btn3'>Projects</button></a>
                <a href="#" ><button className='btn3'>Industries</button></a>
                <a href="#" ><button className='btn3'>Technologies</button></a>
                <a href="#" ><button className='btn3'>Service</button></a>
                <a href="#" ><button className='btn3'>About</button></a>    
                <a href="#" ><img src={twitter} className='line-icon' style={{top:'22.53vw',right:'4%'}}/></a>
                      
                <a href="#" ><img src={linkedin} className='line-icon' style={{top:'29.04vw',right:'4%'}}/></a>
                      
                <a href="#" ><img src={facebook} className='line-icon'style={{width:'2.5vw',top:'35.55vw',right:'4%'}}/></a>

                <div className='profile'>

                    <h6 style={{fontFamily:'Inter',fontSize:'1.1vw',textAlign:'left',msTextAutospace:'ideograph-alpha'}}>Published on Feb 02, 2022</h6>

                    <div style={{fontFamily:'Inter',fontSize:'4.17vw',textAlign:'justify',fontWeight:'800'}}>The Future of Big Data
                    </div><br/>
                    <div style={{height:'6vw',width:'20vw',marginTop:'2vw'}}>
                      <img src={profile} style={{width:'4.56vw',borderRadius: '50%',float:'left'}}/>
                      <div>
                      <h5 style={{fontFamily:'Inter',fontSize:'1.24vw',float:'left',margin:'1.2vw 0 0 1.2vw '}}>James Smith</h5><br/>
                      <h5 style={{fontFamily:'Inter',fontSize:'0.91vw',float:'left',margin:'1.2vw'}}>Big Data Engineer @ Voxitech</h5>
                      </div>
                      
                    </div>
                </div>
            </div>
            <img src={Down} style={{width:'5vw',top:'42vw',position:'absolute',left:'50vw'}}/>
        </div>

        <div class="section-2 box">
        <a href="#" ><button className='btn'>Technologies</button></a>
        <a href="#" ><button className='btn'>Big Data</button></a>
        <br/><br/><br/><br/><br/><br/><br/>
                    
            <p style={{fontSize:'1.95vw',fontFamily:'Ribeye',fontWeight:'400'}}>
                <b>“ </b><i>Hiding within those mounds of data is knowledge that could change the life of a patient, or change the world"</i>
            </p><br/>

            <div className="text-2">What is Big Data ? 
            </div><br/><br/>

            <div className="text-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
            </div><br/><br/>
                        
            <div className="text-2">Advantage 
            </div><br/><br/>
                        
            <div className="text-1">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                         veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                         ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                          , adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
                          veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                           nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla 
                            pariatur?    
            </div><br/><br/>

            <div className="text-1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?   
            </div>
            <center><br/><br/>
                <span class="dot"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="dot"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="dot"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="dot"></span>&nbsp;
            </center>

            <div class="section-3 box" style={{height:'10vw'}}>
            <Slide/>
        </div>
        </div>
        
    </div>
  );
}

export default Body;