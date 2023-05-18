import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Validatioin = () => {


  const initialValues={
    
      name: "",
      email: "",
      password: "",
    
  }
  const   onSubmit =values=>{
    console.log('form data',values);
  }
  const  validationSchema=Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().email('invalid email format').required('Required!'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required!")
  })
  // const validate=values=>{
  //   //values.name values  .email values.channel 
  //   let errors={}
  //   if(!values.name){
  //     errors.name="Required"
  //   }
  //   if (!values.email) {
  //     errors.email = 'Required'
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address'
  //   }
  //   if(!values.password){
  //     errors.password='Required'
  //   }else if( !/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8}$/.test(values.password)
  //   ){
  //     errors.password='invalid password'
  //   }
   
  //   return errors
  // }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  console.log('formvalues',formik.values);
  console.log('errors',formik.errors); 
  console.log("visited fields",formik.touched);
  return (
    <div className="body">
      <h2 style={{ color: "white" }}>Login</h2>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          { formik.touched.name && formik.errors.name?(
          <div className="error">{formik.errors.name}</div>
          ):null}
          
          </div>
          <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
                    {formik.errors.email?(
          <div className="error">{ formik.touched.email&&formik.errors.email}</div>
          ):null}
          </div>
          <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          </div>
          {formik.errors.password?(
          <div className="error">{ formik.touched.password && formik.errors.password}</div>
          ):null}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Validatioin;
