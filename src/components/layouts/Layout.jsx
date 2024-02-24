import Footer from "./Footer"
import Header from "./Header"


const layout = ({children}) => {
  return (
    <>
    <Header />
    <div>{children}</div>
    <Footer/>
    
    </>
  )
}

export default layout