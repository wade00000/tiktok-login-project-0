import './App.css'
function App() {

  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <div>
      
     <img src="/tiktok-logo.png"  alt="TikTok logo"  style={{   position: 'absolute',  top: '10px',  left: '10px', width: '120px'  }}/>

     <p id = "top-right">
      <a href="#Help"> Feedback and Help</a>
     </p>

      <h1>Log in to TikTok</h1>

      <p>Manage your account, check notifications, comment on videos, and more.</p>

        <button onClick={()=>handleClick("QR button clicked")}>Use QR code</button>
        <button onClick={()=>handleClick("Phone/email button clicked")}>Use phone/email/username</button>
        <button onClick={()=>handleClick("Facebook button clicked")}>Continue with Facebook</button>
        <button onClick={()=>handleClick("Google button clicked")}>Continue with Google</button>
        <button onClick={()=>handleClick("Apple button clicked")}>Continue with Apple</button>

      <p>
        By continuing with an account located in Kenya, you agree to our <a href="ToS">Terms of Service</a>&nbsp; 
         and acknowledge that you have read our <a href = "Privacy Policy">Privacy Policy.</a>.
      </p>
      <hr></hr>

      <footer>
        <p>Don't have an account? <a href="#signup">Sign up</a></p>
        <p><a href="#forgot-password">Forgot password?</a></p>
      </footer>
    </div>
    
  )
}

export default App;
