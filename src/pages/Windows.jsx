import React from "react";
import { DefaultButton,PrimaryButton } from '@fluentui/react/lib/Button';
export default function Test() {

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
    <div style={{height:0,width:'20%',padding:'20%',background:'Cyan'}} >
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
