import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteOrder, updateOrder } from "../../features/orders/orderSlice";
import { initialState } from "../../features/orders/orderSlice";
import { Modal } from "../../components";

import "./orders.scss";

const Orders = ({ orders }) => {
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(initialState);

	const onSelectOrder = order => {
		setIsOpen(true);
		setSelectedOrder(order);
	};

	const onDelete = (e, id) => {
		e.stopPropagation();
		dispatch(deleteOrder(id));
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			{isOpen && <Modal title={"Update Order"} order={selectedOrder} setOrder={setSelectedOrder} setIsOpen={setIsOpen} submitOrderActionType={updateOrder} />}

			<div className="orders">
				<table className="order-table">
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Customer Name</th>
							<th>Customer Email</th>
							<th>Product</th>
							<th>Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => {
							return (
								<tr key={order.id} onClick={() => onSelectOrder(order)}>
									<td>{order.id}</td>
									<td>{order.customer_name}</td>
									<td>{order.customer_email}</td>
									<td>{order.product}</td>
									<td>{order.quantity}</td>
									<td className="delete-cell">
										<button type="button" className="delete-btn" onClick={e => onDelete(e, order.id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Orders;
