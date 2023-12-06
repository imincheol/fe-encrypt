import { useState } from 'react'
import './App.css'
import useRSA from './useRSA'

function App() {
  const [plain, setPlain] = useState('')
  const [encrypted, setEncrypted] = useState('')
  const [decrypted, setDecrypted] = useState('')
  const {encrypt, decrypt} = useRSA()
  
    return (
    <div className="App">
      <div>
        <textarea onChange={(e) => {setPlain((e.currentTarget as HTMLTextAreaElement).value)}} />
      </div>
      <div>
      <button onClick={()=> {
              const encryptVal = encrypt(plain)
              setEncrypted(encryptVal)
              const decryptVal = decrypt(encryptVal)
              setDecrypted(decryptVal)
        }}>수행</button>
      </div>
      <div>
        <div>암호화 값</div>
        <textarea readOnly value={encrypted} />
      </div>
      <div>
        <div>복호화 값</div>
        <textarea readOnly value={decrypted} />
      </div>
    </div>
  );
}

export default App;
