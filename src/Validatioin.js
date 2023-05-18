import React from "react";
import { useFormik } from "formik";

const Validatioin = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit:values=>{
      console.log('form data',values);
    },
    validate:values=>{
      //values.name value.emmail values.channel 
      let errors={}
      if(!values.name){
        errors.name="Required"
      }
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if(!values.password){
        errors.password='Required'
      }else if( "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"){

      }
      errors.password='invalid password'
      return errors
    }
  });
  console.log('formvalues',formik.values);

  return (
    <div className="body">
      <h2 style={{ color: "white" }}>Login</h2>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlfor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlfor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlfor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Validatioin;
