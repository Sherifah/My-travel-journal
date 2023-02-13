import React from 'react'

function SignUpForm() {

    const [formData, SetFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    })

    function handleChange(event) {
        return(
            SetFormData((prevFormData) => {
                const {name, value, type, checked} = event.target
                return {
                    ...prevFormData,
                    [name] : type === "checkbox" ? checked : value
                }
            })
        )
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("passwords do not match")
            return
        }
        
        formData.newsletter && console.log('Thanks for signing up for our newsletter')
    }

    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name='email'
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name='password'
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name='newsletter'
                        checked={formData.newsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;
