import React from "react";
import { Button, Card } from 'antd'
import { ExclamationCircleOutlined, } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers'
import { useState } from 'react'

function CreateAccount() {
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);
  const navigate = useNavigate();

  function generateWallet() {
   const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
   console.log(mnemonic);
  }
  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: '20px' }} />
          <div>
            Once you generate the seed phrase , save it securely in order to recover your wallet in the future.
          </div>
        </div>
        <Button
          className="frontPageButton"
          type="primary"
        onClick={() => generateWallet()}
        >
          Generate Seed Phrase
        </Button>
        <Card className="seedPhraseContainer"></Card>
        {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>}
        <Button
          className="frontPageButton"
          type="default"
        // onClick={() => setWalletAndMnemonic()}
        > 
        Open Your New Wallet 
        </Button>
        <p className="frontPageBottom" onClick={()=>navigate("/")}>Back Home</p>
      </div>
    </>
  );
}

export default CreateAccount;