import React from "react";
import { useForm } from 'react-hook-form'
export default function Reacthookform() {   //useForm is one hook.it is many destructing  method available.they are (1)register,(2)handlesubmit,(3)formState,(4)getvalue etc but we use mainly in it
    //(1)register - helps you register an input field into React Hook Form so that it is available for the validation, and its value can be tracked for changes
    //(2)handlesubmit-in react we use (e.target.value) replace the hookform we use handlesubmit and it pass argument in any fn. the function pass onsbmit(data) this data get the input field vakue taken and send to bankend  
    //formstste- mainly use in errors display .it is one destructing method. formstate:{errors} or const{errors}=formstate.

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({mode:'all',defaultValues:{age:21}})
    //formstate have many destructing method available.but mainly one use for errors.   normallly original form is, formstate:errors but all imput field show in message we restructure {errors}.
    //getvalues is one of object,it is not a validation property in input fiels set value then get the value
    //default value in input field have destructing method in set of useform.... and also mode:all set in useform 
    
    const onsubmit = (data) => {
        console.log(data);
    }

    const handleget=(e)=>{
      e.preventDefault()
      console.log(getValues());
    }
    return (
        <form>
            {console.log(errors)}
            <label>Name</label>
            <input type='text'
                placeholder="Enter ur name"
                {...register('Name', {
                    required: 'name is mandatory'
                })} />
            <p>{errors?.Name?.message}</p>
            <br />
            <label>email</label>
            <input type='text'
                placeholder="Enter ur email"
                {...register('email', {
                    required: 'email is mandatory',
                    pattern:{
                    value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:'email is invalid'
                    }
                })} />
            <p>{errors?.email?.message}</p>
            <br />
            <label>age</label>
            <input type='number'
                placeholder="Enter ur age"
                {...register('age', {
                    valueAsNumber:true,
                    required: 'age is mandatory',
                  
                })} />
            <p className="para">{errors?.age?.message}</p>
            <br />
            <label>password</label>
            <input type='password'
                placeholder="Enter ur password"
                {...register('password', {
                    required: 'password is mandatory',
                    // minLength:{
                    // value:4,
                    // message:'minimum 4 char'},
                    pattern:{
                value:/^(\S)(?=.[0-9])(?=.[A-Z])(?=.[a-z])(?=.[`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_â‚¹])[a-zA-Z0-9`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_â‚¹]{10,16}$/,
                        message:'Password should include at least one uppercase, one numeric value and one special character'
                    },
                 })} />
            <p>{errors?.password?.message}</p>
            <button onClick={handleSubmit(onsubmit)}>submit</button><br />
            <button onClick={(e)=>handleget(e)}>getdata</button>
      </form>
    )
}