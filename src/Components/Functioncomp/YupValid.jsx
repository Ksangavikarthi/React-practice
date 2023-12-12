import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema=yup.object({
    name:yup.string().required('name is required'),
    email:yup.string().required('email is required').email('email in invalid'),
    age:yup.string().required('age is required')
})


export default function YupValid(){
    const{register,handleSubmit,formState:{errors}}=useForm(
        {
            resolver:yupResolver(schema),mode:'all'
        },
    );
        const onsubmit=(data)=>{
console.log(data);
    }
    return(
        <>{console.log(errors)}
        <label>name</label>
        <input type="text" placeholder="enter name" 
        {...register('name')}
        />
        <p>{errors?.name?.message}</p>
        <br />
        <label>email</label>
        <input type="email" placeholder="enter email"
        {...register('email')}
         />
         <p>{errors?.email?.message}</p>
        <br />
        <label>age</label>
        <input type="number" placeholder="enter age"
        {...register('age')}
        />
        <p>{errors?.age?.message}</p>
        <br /><br />
        <button onClick={handleSubmit(onsubmit)}>submit</button>
        </>

    )
}