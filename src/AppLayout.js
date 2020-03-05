import React from 'react';
import Auth from './Auth';

function AppLayout(props) {
  return (
    <div className="AppLayout">
        App layout

        <button onClick={
            () => {
                Auth.logout(()=>{
                    props.history.push("/");
                })
            }
        }>
            Logout
        </button>

    </div>
  );
}

export default AppLayout;
