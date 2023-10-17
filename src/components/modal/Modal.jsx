import React from "react";
import { useDispatch } from "react-redux";

import "./modal.scss";

const Modal = ({ title, order, setOrder, setIsOpen, submitOrderActionType }) => {
	const dispatch = useDispatch();

	const onInputChange = e => {
		setOrder(prevState => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const onFormSubmit = e => {
		e.preventDefault();
		dispatch(submitOrderActionType(order));
		setIsOpen(false);
		setOrder({});
	};

	return (
		<div className="modal">
			<div className="modal-container">
				<form onSubmit={onFormSubmit}>
					<div className="modal-header">
						<h3>{title}</h3>
					</div>
					<hr />
					<div className="modal-body">
						<div className="input-field">
							<label htmlFor="customer_name">Customer Name*</label>
							<input type="name" name="customer_name" id="customer_name" value={order.customer_name} onChange={onInputChange} required />
						</div>
						<div className="input-field">
							<label htmlFor="customer_email">Customer Email*</label>
							<input type="email" name="customer_email" id="customer_email" value={order.customer_email} onChange={onInputChange} required />
						</div>
						<div className="input-field">
							<label htmlFor="product">Product*</label>
							<input type="text" name="product" id="product" value={order.product} onChange={onInputChange} required />
						</div>
						<div className="input-field">
							<label htmlFor="quantity">Quantity*</label>
							<input type="number" name="quantity" id="quantity" value={order.quantity} onChange={onInputChange} required />
						</div>
					</div>
					<hr />
					<div className="modal-footer">
						<button type="button" className="cancel-btn" onClick={() => setIsOpen(false)}>
							Cancel
						</button>
						<button type="submit" className="submit-btn">
							{title}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
