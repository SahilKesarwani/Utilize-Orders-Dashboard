import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	orders: await fetch("orders.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then(res => {
			return res.json();
		})
		.catch(err => {
			return [];
		}),
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addOrder: (state, action) => {
			state.orders = [action.payload, ...state.orders];
		},
		updateOrder: (state, action) => {
			state.orders = state.orders.map(order => {
				if (order.id === action.payload.id) {
					return action.payload;
				}
				return order;
			});
		},
		deleteOrder: (state, action) => {
			state.orders = state.orders.filter(order => order.id !== action.payload);
		},
	},
});

export const { addOrder, updateOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
