import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";


const LinkResult = ({ inputValue }) => {
    console.log(inputValue);
    const [shortenLink, setShortenLink] = useState('');
    console.log(shortenLink);
    const [copied , setCopied] = useState(false);
    const [loading, setLoadign] = useState(false);

    const fetchData = async() => {
        try{
            setLoadign(true);
            const res = axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data);
        } catch(err){

        }finally{

        }
    }


    useEffect(()=> {
        if(inputValue.length){
            fetchData();
        }
    })
    useEffect(() => {
        const timer = setTimeout(() =>{
            setCopied(false);
        
        },1000);
        return()=>clearTimeout(timer);
    }, [copied]);
  return (
    <div className="result">
    {/* <p>{shortenLink}</p> */}
    <CopyToClipboard 
    text="{shortentLink}
    onCopy={() => setCopied(true)}">
    <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
    </CopyToClipboard>
    
    </div>
  )
}

export default LinkResult