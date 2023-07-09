import React, { useState } from "react";
import "./Calculator.css";
function Calculator() {
  const [result, setResult] = useState("");

  const display = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      // Using eval can be potentially unsafe, so be cautious when using it
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <h1>Calculator App</h1>
      <h3>Developed by: Sajid Bhatti</h3>
      <h5>
        Github: <a href="https://github.com/SajidBhatti786">SajidBhatti</a>
      </h5>
      <div className="calculator-container">
        <table className="calculator" style={{ backgroundColor: "black" }}>
          <tr>
            <td colSpan="3">
              <input
                className="display-box"
                type="text"
                id="result"
                value={result}
                disabled
              />
            </td>
            <td>
              <input type="button" value="C" onClick={clearScreen} id="btn" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1" onClick={() => display("1")} />
            </td>
            <td>
              <input type="button" value="2" onClick={() => display("2")} />
            </td>
            <td>
              <input type="button" value="3" onClick={() => display("3")} />
            </td>
            <td>
              <input type="button" value="/" onClick={() => display("/")} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" onClick={() => display("4")} />
            </td>
            <td>
              <input type="button" value="5" onClick={() => display("5")} />
            </td>
            <td>
              <input type="button" value="6" onClick={() => display("6")} />
            </td>
            <td>
              <input type="button" value="-" onClick={() => display("-")} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" onClick={() => display("7")} />
            </td>
            <td>
              <input type="button" value="8" onClick={() => display("8")} />
            </td>
            <td>
              <input type="button" value="9" onClick={() => display("9")} />
            </td>
            <td>
              <input type="button" value="+" onClick={() => display("+")} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="." onClick={() => display(".")} />
            </td>
            <td>
              <input type="button" value="0" onClick={() => display("0")} />
            </td>
            <td>
              <input type="button" value="=" onClick={calculate} id="btn" />
            </td>
            <td>
              <input type="button" value="*" onClick={() => display("*")} />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Calculator;
