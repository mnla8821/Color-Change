import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
         const [colorInput, setColorInput] = useState(`#ffffff`);
         const [val, setVal] = useState();
         const [color, setColor] = useState(`#f4e1e1`);
         const [color1, setColor1] = useState(`#ffc2c2`);
         const [color2, setColor2] = useState(`#f5a3a3`);
         const [color3, setColor3] = useState(`#f99090`);
         const [color4, setColor4] = useState(`#f49494`);
         const [color5, setColor5] = useState(`#e28383`);
         const [color6, setColor6] = useState(`#d76565`);
         const [color7, setColor7] = useState(`#f86868`);
         const [color8, setColor8] = useState(`#e55252`);
         const [color9, setColor9] = useState(`#ff2424`);
         const [color10, setColor10] = useState(`#ff1f1f`);
         const [color11, setColor11] = useState(`#fa0000`);
         const notify = () => toast.success("Color Copied To clipboard");

         const handleSubmit = (e) => {
                  e.preventDefault();
                  const newColor11 = hexToColor(colorInput, 21);
                  const newColor10 = hexToColor(colorInput, 20);
                  const newColor9 = hexToColor(colorInput, 19);
                  const newColor8 = hexToColor(colorInput, 18);
                  const newColor7 = hexToColor(colorInput, 17);
                  const newColor6 = hexToColor(colorInput, 16);
                  const newColor5 = hexToColor(colorInput, 15);
                  const newColor4 = hexToColor(colorInput, 14);
                  const newColor3 = hexToColor(colorInput, 13);
                  const newColor2 = hexToColor(colorInput, 12);
                  const newColor1 = hexToColor(colorInput, 10.2);
                  const newColor = hexToColor(colorInput, 10);
                  setColor(newColor);
                  setColor1(newColor1);
                  setColor2(newColor2);
                  setColor3(newColor3);
                  setColor4(newColor4);
                  setColor5(newColor5);
                  setColor6(newColor6);
                  setColor7(newColor7);
                  setColor8(newColor8);
                  setColor9(newColor9);
                  setColor10(newColor10);
                  setColor11(newColor11);
                  console.log(colorInput);
         };

         function hexToColor(color, percentage) {
                  const decimal = parseInt(color.slice(1), 16);
                  // Convert Hexa to Decimal
                  const multipledDecimal = Math.round(
                           (decimal * percentage) / 100
                  );
                  // Decimal number * percentage
                  const newHexa = multipledDecimal
                           .toString(16)
                           .padStart(6, "0");
                  // convert decimal to hexa

                  return `#${newHexa}`;
         }

         const handleCopyToClipboard = (val) => {
                  const textArea = document.createElement("textarea");
                  textArea.value = val;
                  document.body.appendChild(textArea);
                  textArea.select();
                  textArea.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                  document.body.removeChild(textArea);
         };

         return (
                  <div className="App">
                           <ToastContainer />
                           <div className="container-fluid parent">
                                    <div className="row pick-color">
                                             <form
                                                      className="heads"
                                                      onSubmit={handleSubmit}
                                             >
                                                      <h1>Color Generator</h1>
                                                      <input
                                                               type="color"
                                                               className="inp-color"
                                                               value={
                                                                        colorInput
                                                               }
                                                               onChange={(e) =>
                                                                        setColorInput(
                                                                                 e
                                                                                          .target
                                                                                          .value
                                                                        )
                                                               }
                                                      />
                                                      <input
                                                               type="text"
                                                               value={
                                                                        colorInput
                                                               }
                                                               className="value-color"
                                                               placeholder="#ffffff"
                                                               onChange={(e) =>
                                                                        setColorInput(
                                                                                 e
                                                                                          .target
                                                                                          .value
                                                                        )
                                                               }
                                                      />
                                                      <button
                                                               style={{
                                                                        backgroundColor:
                                                                                 colorInput,
                                                               }}
                                                      >
                                                               Submit
                                                      </button>
                                             </form>
                                             <div className="boxes col-12">
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color,
                                                               }}
                                                      >
                                                               <p>10%</p>
                                                               {color}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color1
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color1,
                                                               }}
                                                      >
                                                               <p>30%</p>
                                                               {color1}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color2
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color2,
                                                               }}
                                                      >
                                                               <p>60%</p>
                                                               {color2}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color3
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color3,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color3}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color4
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color4,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color4}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color5
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color5,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color5}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color6
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color6,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color6}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color7
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color7,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color7}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color8
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color8,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color8}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color9
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color9,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color9}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color10
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color10,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color10}
                                                      </div>
                                                      <div
                                                               className="col-lg-3 col-md-6 col-sm-12 box"
                                                               onClick={(e) => {
                                                                        notify();
                                                                        handleCopyToClipboard(
                                                                                 color11
                                                                        );
                                                               }}
                                                               style={{
                                                                        backgroundColor:
                                                                                 color11,
                                                               }}
                                                      >
                                                               <p>90%</p>
                                                               {color11}
                                                      </div>
                                             </div>
                                    </div>
                           </div>
                  </div>
         );
}

export default App;
