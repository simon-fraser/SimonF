import bg from '../../assets/DSC_0591_4k.jpg'
console.log(bg)

function Splash() {
  return (<figure aria-hidden="true" aria-description='Background image for web page' className="absolute bg-cover bg-top contrast-[1.1] inset-px z-0" style={{ backgroundImage: `url(${bg})` }} />)
}

export default Splash
