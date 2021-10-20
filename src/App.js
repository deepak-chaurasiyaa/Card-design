import { Image,H2,Button,H4 } from "./components/Image"
//import "./App.css"
function App() {
 
  return (
     
      <div className="center" id="center">
        <div>
        <Image url={"https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"}></Image>
        <h1>Pizza</h1>
        <h3>Premium Pepporeni and cheese is made with real Mozarrela on original hand tossed-crust</h3>
        <div className = "flesx" id="fle">
          <H4 data = {"265 Cal"}></H4>
          <H4 data = {"P/F/C 20/10/2021"}></H4>
          <H4 data={"53.8 C"}></H4>
        </div>
          <div className = "flesx" id = "flesx">
            <H2 data={"$23.90"}></H2>
            <H2 data={"29.90"}></H2>
            <Button data={"order"}></Button>
          </div>
        </div>
        <div>
        <Image url={"data:image/jpeg;base64,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"}></Image>
        <h1>Indian Food</h1>
        <h3>Premium Pepporeni and cheese is made with real Mozarrela on original hand tossed-crust</h3>
        <div className = "flesx" id="fle">
          <H4 data = {"265 Cal"}></H4>
          <H4 data = {"P/F/C 20/10/2021"}></H4>
          <H4 data={"53.8 C"}></H4>
        </div>
          <div className = "flesx" id = "flesx">
            <H2 data={"$23.90"}></H2>
            <H2 data={"29.90"}></H2>
            <Button data={"order"}></Button>
          </div>
        </div>
        <div>
        <Image url={"data:image/jpeg;base64,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"}></Image>
        <h1>Biryani</h1>
        <h3>Premium Pepporeni and cheese is made with real Mozarrela on original hand tossed-crust</h3>
        <div className = "flesx" id="fle">
          <H4 data = {"265 Cal"}></H4>
          <H4 data = {"P/F/C 20/10/2021"}></H4>
          <H4 data={"53.8 C"}></H4>
        </div>
          <div className = "flesx" id = "flesx">
            <H2 data={"$23.90"}></H2>
            <H2 data={"29.90"}></H2>
            <Button data={"order"}></Button>
          </div>
        </div>
    </div>
    
  )
}

export default App