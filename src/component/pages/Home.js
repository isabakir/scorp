
import React from 'react';
import { withNamespaces } from 'react-i18next';
function Home({t}){

return(

    <div className="homeContainer">
        <div className="content">
            <h3>{t('home')}</h3>
            <p>{t('home_content')}</p>
        </div>
    </div>
);



}



export default withNamespaces()(Home);