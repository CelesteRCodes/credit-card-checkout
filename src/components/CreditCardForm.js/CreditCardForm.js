import React from 'react';
import classes from './CreditCardForm.module.css';

const CreditCardForm = () => {

  const handleClick = (event) => {
    console.log('Hello');
    event.preventDefault();
  };

  return (
    <form className={classes.form}>
      <h1 className={classes.title}>Payment</h1>
      <div className={classes.userText}>
        < >Full Name</>
        <input 
          className={classes.inputText}
          type="text"
          id="name"
          placeholder="Full Name"
        ></input>
        <>Credit Card #</>
        <input 
          className={classes.inputText}
          type="text"
          id="credit"
          placeholder="4744-1111-1111-1111"
        ></input>
        <>Expiration Month</>
        <input 
          className={classes.inputText}
          type="text"
          id="exmonth"
          placeholder="May"
        ></input>
      </div>
      <br></br>

      <div className={classes.separator}></div>
      <br></br>
      
      <div className={classes["row"]}>
        <div className={classes["col-50"]}>
          <>Expiration Year</>
          <input 
            className={classes.expireYear}
            type="text"
            id="exyear"
            placeholder="2024"
          ></input>
        </div>
        <div className={classes["col-50"]}>
          <>CVV</>
          <input 
            className={classes.cvv}
            type="text"
            id="cvv"
            placeholder="333"
          ></input>
        </div>
        <div className={classes["col-50"]}>
          <>Zip Code</>
          <input 
            className={classes.zipCode}
            type="text"
            id="zip"
            placeholder="48224"
          ></input>
        </div>
      </div>
 
      <br></br>

      <div className={classes.btnDiv}>
        <button 
        className={classes.button}
        onClick={handleClick}
        >
          Submit Payment
        </button>
        <button 
        className={classes.button}
        onClick={handleClick}
        >
          Cancel
        </button>
      </div>
    </form>
  )
};

export default CreditCardForm; 