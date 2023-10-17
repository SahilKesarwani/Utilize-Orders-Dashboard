import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { Navbar, Orders } from "../../components";

import "./homePage.scss";

const HomePage = () => {
	const orders = useSelector(state => state.order.orders);

	const [orderOffset, setOrderOffset] = useState(0);
	const ordersPerPage = 100;
	const endOffset = orderOffset + ordersPerPage;
	const currentOrders = orders.slice(orderOffset, endOffset);
	const pageCount = Math.ceil(orders.length / ordersPerPage);

	const handlePageClick = event => {
		const newOffset = (event.selected * ordersPerPage) % orders.length;
		setOrderOffset(newOffset);
	};

	return (
		<div className="home-page">
			<Navbar />
			<Orders orders={currentOrders} />
			<ReactPaginate nextLabel=">" onPageChange={handlePageClick} pageRangeDisplayed={5} marginPagesDisplayed={2} pageCount={pageCount} previousLabel="<" pageClassName="page-item" pageLinkClassName="page-link" previousClassName="page-item" previousLinkClassName="page-link" nextClassName="page-item" nextLinkClassName="page-link" breakLabel="..." breakClassName="page-item" breakLinkClassName="page-link" containerClassName="pagination" activeClassName="active" renderOnZeroPageCount={null} />
		</div>
	);
};

export default HomePage;
