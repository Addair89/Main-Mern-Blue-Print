import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      // Baby step!
      console.log(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="flex flex-col items-center gap-5 border-2 border-[#6930C3] p-5 rounded-lg bg-black/50 w-full shadow-lg">
        <h1 className="mb-10 text-8xl text-white">Sign Up</h1>
        <form
          className="flex flex-col items-center gap-4 w-full"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            className="bg-black/10 border-2 border-[#6930C3] text-white text-4xl rounded-md p-2 placeholder:text-[white] focus:outline-none focus:bg-black/60"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name..."
            required
          />
          <input
            className="bg-black/10 border-2 border-[#6930C3] text-white text-4xl rounded-md p-2 placeholder:text-[white] focus:outline-none focus:bg-black/60"
            type="email"
            name="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            className="bg-black/10 border-2 border-[#6930C3] text-white text-4xl rounded-md p-2 placeholder:text-[white] focus:outline-none focus:bg-black/60"
            type="password"
            name="password"
            placeholder="Password..."
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            className="bg-black/10 border-2 border-[#6930C3] text-white text-4xl rounded-md p-2 placeholder:text-[white] focus:outline-none focus:bg-black/60"
            type="password"
            name="confirm"
            placeholder="Confirm Password..."
            value={this.state.confirm}
            onChange={this.handleChange}
            required
          />
          <button
            className="text-1xl p-4 bg-[#7400B8] rounded-full m-4 text-white hover:bg-[#48BFE3] hover:text-[#7400B8] transition-all duration-300 ease-in-out"
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
