import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onLogout } from "../../features/user/userSlice";

import { addOrder } from "../../features/orders/orderSlice";
import { initialState } from "../../features/orders/orderSlice";
import { Modal } from "../../components";
import "./navbar.scss";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(state => state.user);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(initialState);

	const generateRandomId = () => {
		const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
		const randomValue = Math.random().toString(16).slice(2, 7);
		const incrementingCounter = Math.random().toString(16).slice(2, 5);

		return timestamp + randomValue + incrementingCounter;
	};

	useEffect(() => {
		if (!user.isLoggedIn) {
			navigate("/login");
		}
	}, [user, navigate]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			setSelectedOrder(prevState => {
				return { ...prevState, id: generateRandomId() };
			});
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			{isOpen && <Modal title={"Create New Order"} order={selectedOrder} setOrder={setSelectedOrder} setIsOpen={setIsOpen} submitOrderActionType={addOrder} />}

			<div className="navbar">
				<div className="user-details">
					<img src={user.picture} alt="Profile" />
					<p>{user.name}</p>
				</div>
				<div className="btn-container">
					<button className="add-order" onClick={() => setIsOpen(true)}>
						Create New Order
					</button>
					<button className="logout-btn" onClick={() => dispatch(onLogout())}>
						Logout
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
