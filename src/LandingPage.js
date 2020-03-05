import React from 'react';
import Auth from './Auth';

function LandingPage(props) {
  return (
    <div className="LandingPage">
        Landing Page here!!
      
        <button onClick={
            () => {
                Auth.login(()=>{
                    props.history.push("/app");
                })
            }
        }>
            Login
        </button>

    </div>
  );
}

export default LandingPage;
