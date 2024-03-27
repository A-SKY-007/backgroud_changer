import './Background.css'

let Background =()=>{

    let body=document.querySelector('body');
    function violet(){  
        body.style.backgroundColor='violet';
    }
    function blue(){  
        body.style.backgroundColor='blue';
    }
    function yellow(){  
        body.style.backgroundColor='yellow';
    }
    function lavender(){  
        body.style.backgroundColor='lavender';
    }
    function green(){  
        body.style.backgroundColor='green';
    }
    function olive(){  
        body.style.backgroundColor='olive';
    }

    return(
        <>
        <h1>Background Changer</h1>
        <nav>
            <button id='violet' onClick={violet}>Violet</button>
            <button id='blue'onClick={blue}>Blue</button>
            <button id='yellow' onClick={yellow}>Yellow</button>
            <button id='lavender'onClick={lavender}>Lavender</button>
            <button id='green' onClick={green}>Green</button>
            <button id='olive'onClick={olive}>Olive</button>
        </nav>
        </>
    )
}

export default Background