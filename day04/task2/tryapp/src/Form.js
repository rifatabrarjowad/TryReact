import React from "react";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
    };
  }
  valid() {
    if (this.state.username.length < 5) {
      this.setState({
        usernameError: "Username must be at least 5 characters",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password must be at least 5 characters",
      });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      usernameError: "",
      passwordError: "",
    });
    if (this.valid()) {
      alert("Submit Successful");
      this.setState({
        username: "",
        password: "",
      });
    }
  }
  render() {
    return (
      <div className="">
        <div className="w-full m-auto max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-3xl font-bold ">Sign Up</h1>
            <div className="mb-4 mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="Username"
                placeholder=" Enter Your Username"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <p class="text-red-500 text-xs italic">
                {this.state.usernameError}
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <p class="text-red-500 text-xs italic">
                {this.state.passwordError}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => this.submit()}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
