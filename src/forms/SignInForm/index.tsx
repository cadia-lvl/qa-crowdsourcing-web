import React from "react";
import { FormBuilder } from "../../components";
import { useDispatch } from "react-redux";
import { User } from "../../declerations";
import { form } from "./form";
import { registerUser } from "../../actions";

export const SignInForm = () => {
	const dispatch = useDispatch();
	return (
		<FormBuilder<User>
			HTTPmethod="post"
			form={form}
			url="/api/auth/authenticate"
			buttonLabel="Skrá mig inn"
			onSubmit={(user) => dispatch(registerUser(user))}
		/>
	);
};
