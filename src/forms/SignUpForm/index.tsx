import React from "react";
import { FormBuilder } from "../../components";
import { useDispatch } from "react-redux";
import { User } from "../../declerations";
import { form } from "./form";
import { registerUser } from "../../actions";

export const SignUpForm = () => {
	const dispatch = useDispatch();
	return (
		<FormBuilder<User>
			HTTPmethod="post"
			form={form}
			url="/api/auth/register"
			buttonLabel="Búa til aðgang"
			onSubmit={(user) => dispatch(registerUser(user))}
		/>
	);
};
