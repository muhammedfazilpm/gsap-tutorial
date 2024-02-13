import React from "react";
import { DefaultButton,PrimaryButton } from '@fluentui/react/lib/Button';
import { ImWindows8 } from "react-icons/im";
export default function Test() {

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
    
    <div style={{height:0,width:'20%',padding:'20%',background:'white'}} >
    <ImWindows8 style={{color:'black'}} />
    <br/>
    <DefaultButton className='btn'>
   Windows
  </DefaultButton>
  <PrimaryButton>
   Windows
  </PrimaryButton>
    
    </div>
     
    </div>
  );
}





