// Global
import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Export function
function User({ name, submitUser }) {
	// form entry validation
	const { register, errors, handleSubmit } = useForm({
		mode: "onBlur",
	});

	return (
		<div>
			<Form name={name} onSubmit={handleSubmit(submitUser)}>
				<Form.Group controlId="formEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						placeholder="enter email"
						ref={register({
							required: true,
							pattern: /\S+@\S+\.\S+/,
						})}
					/>
					{errors.email && (
						<Form.Text className="text-danger">
							please enter a valid email address
						</Form.Text>
					)}
				</Form.Group>
				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						placeholder="password"
						ref={register({ required: true, minLength: 3, maxLength: 12 })}
					/>
					{errors.password && (
						<Form.Text className="text-danger">
							please enter a password 3-12 characters in length
						</Form.Text>
					)}
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default User;
