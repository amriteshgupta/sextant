// App.js

import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddressDisplay from './AddressDisplay';
import PylonConnector from './PylonConnector';

const App = () => {
  const siteTitle = "Sextant";

  return (
    
  
    <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                  <AddressDisplay url='https://api64.ipify.org?format=json'/>
                    </Exhibit>
                    <Exhibit name="Pylon Packet Latency">
                    <PylonConnector/>
                </Exhibit>
                </div>
                
  );
};

export default App;