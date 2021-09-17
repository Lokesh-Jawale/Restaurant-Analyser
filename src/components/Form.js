import React, { useState, useEffect } from 'react';
import './Form.css';
import ReactFlagsSelect from 'react-flags-select';

function Form() {
    const [selected, setSelected] = useState('IN');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rating, setRating] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [feedbackError, setFeedbackError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [ratingError, setRatingError] = useState('');

    function isValid() {
        const errorMessage = 'Error: This is mandatory field';
        var ok= true;

        if(!name) {
            ok= false;
            setNameError(errorMessage);
        }
        else setNameError('');

        if(email?.length <= 10 || !(email?.includes('@gmail.com') || email?.includes('@yahoo.com'))){
            ok=false;
            if(!email) setEmailError(errorMessage);
            else setEmailError("Please enter the email id in proper format. example: abc@gmail.com || abc@yahoo.com");
        }
        else setEmailError('');

        if(!feedback){
            ok=false;
            setFeedbackError(errorMessage);
        }
        else setFeedbackError('');

        if(Number(phoneNumber?.trim()) < 7000000000 
            || Number(phoneNumber?.trim()[0]) < 7
            || isNaN(Number(phoneNumber?.trim()))){
            ok=false;
            if(!phoneNumber) setPhoneNumberError(errorMessage)
            else setPhoneNumberError("Please enter the Phone number in proper format. example: 9786312456");
        }
        else setPhoneNumberError('');

        if(!rating){
            ok=false;
            setRatingError(errorMessage);
        }
        else setRatingError('');

        return ok;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid()){
            alert("Form Submitted Successfully");
            var data = [];
            try {
                var temp= JSON.parse(localStorage.getItem('feedback-data-list'));
                if(temp?.length) data = temp;
            } catch (error) {
                alert(error.errorMessage);
            }
            let newData = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                feedback: feedback,
                rating: rating,
            }
            data?.push(newData);
            localStorage.setItem('feedback-data-list', JSON.stringify(data));
        }
    }

    return (
        <div className="form">
            <div className="form__info">
                <p className="form__header">Aromatic Bar</p>
                <p className="form__description">We are committed to providing you with the best
                    dining experience possible, so we welcome your comments. Please fill
                    out this questionnaire. Thank you.
                </p>
            </div>

            <form className="form__container">

                <div className="form__container__col">
                    <div className="form__inputs">
                        <label htmlFor="customer__name">Customer's Name</label>
                        <input 
                            type="text" 
                            maxLength="50" 
                            name="customer__name"
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                        />
                        <p className="form__error">{nameError}</p>
                    </div>
                    <div className="form__inputs">
                        <label htmlFor="customer__number">Mobile Number</label>
                        <div className="form__customer__number">
                            <ReactFlagsSelect
                                className="form__container__flag"
                                selected={selected}
                                onSelect={code => setSelected(code)}
                                showSelectedLabel={false}
                                showOptionLabel={false}
                            />
                            <input 
                                type="tel" 
                                pattern="[7-9]{1}[0-9]{9}" 
                                name="customer__number"
                                value={phoneNumber}
                                required
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <p className="form__error">{phoneNumberError}</p>
                    </div>

                    <div className="form__inputs">
                        <label htmlFor="customer__feedback__text">Customer's Feedback</label>
                        <textarea 
                            required
                            className="customer__feedback__text"
                            type="text" 
                            maxLength= "250"
                            name="customer__feedback__text"
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                        />
                        <p className="form__error">{feedbackError}</p>
                    </div>

                </div>
                <div className="form__container__col">
                    <div className="form__inputs">
                        <label htmlFor="customer__email__id">Customer's Email Id</label>
                        <input 
                            type="email"
                            name="customer__email__id"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <p className="form__error">{emailError}</p>
                    </div>

                    <p className="form__rate__our__food">Rate our Food</p>
                    <div className="form__rating">

                        <div>
                            <input 
                                type="radio" 
                                name="rate3"
                                value="Excellent"
                                checked={rating==="Excellent"}
                                onClick={e => setRating("Excellent")}
                            />
                            <label htmlFor="rate3">Excellent</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="rate2"
                                value="Good"
                                checked={rating==="Good"}
                                onClick={e => setRating("Good")}
                            />
                            <label htmlFor="rate2">Good</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="rate1"
                                value="Fair"
                                checked={rating==="Fair"}
                                onClick={e => setRating("Fair")}
                            />
                            <label htmlFor="rate1">Fair</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="rate0"
                                value="Bad"
                                checked={rating==="Bad"}
                                onClick={e => setRating("Bad")}
                            />
                            <label htmlFor="rate0">Bad</label>
                        </div>
                    </div>
                    {(rating) 
                        ? 
                        <div className="emoji">
                            {rating}
                            {(rating === "Excellent") ? <span> &#128523;</span> : ""}
                            {(rating === "Good") ? <span> &#128515;</span> : ""}
                            {(rating === "Fair") ? <span> &#128578;</span> : ""}
                            {(rating === "Bad") ? <span> &#128533;</span> : ""}
                        </div>
                        : ""
                    }
                    <p className="form__error">{ratingError}</p>
                </div>

                <button className="form__submit" type="button" onClick={handleSubmit}>
                    Submit
                </button>

            </form>

        </div>
    )
}

export default Form;
