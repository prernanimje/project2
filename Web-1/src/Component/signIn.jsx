// import React from 'react'
// import Girl from '../assets/images/girl3.jpg'
// import '../Component/signIn.css'

// function signIn() {
//   return (
//     <>
//     <div className="left">
//     <div className="for">
//     <h1 >Log in</h1>
//     <br/>
//     <p style="margin-top: -21px;">Doesn't have an account yet? <a href="">Sign up</a></p>
//     <div>
//     <form action="" className="if">
//         <label for="Email"><b>Email Address</b></label><br/>
//         <FontAwesomeIcon nput type="text" name="Email" id="Email" placeholder="you@example.com"/><br/>
//         <label for="Password"><b>Password</b></label><br/>
//         <FontAwesomeIcon nput type="text" name="Password" id="Password" placeholder="Enter 6 charter or more "/><br/>
//         <FontAwesomeIcon nput type="checkbox" name="remember" id="remember"/>
//         <label for="remember">Remember me</label><br/><br>
//         <button id="log"><b>LOGIN</b> </button><br><br>
//         <p style="padding-left: 121px;">or</p>
//         <button id="go"><FontAwesomeIcon  icon="fa-brands fa-google"></i>&nbsp;&nbsp;&nbsp;Google</button> <button id="face"><FontAwesomeIcon  icon="fa-brands fa-facebook">&nbsp;&nbsp;&nbsp;</i>Facebook</button>
//     </form>
//     </div>
//     </div>
//    </div>
//    <div className="right">
//     <FontAwesomeIcon mg src={Girl} alt="working girl"/>
//    </div> 
//    </div>
//    </div>
//    </>
//   )
// }

// export default signIn
export default function signIn() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html className="h-full bg-white">
          <body className="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <FontAwesomeIcon mg
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <FontAwesomeIcon nput
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <FontAwesomeIcon nput
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  
