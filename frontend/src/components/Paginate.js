import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
	MDBPagination,
	MDBPageItem,
	MDBPageNav,
	MDBCol,
	MDBRow,
} from "mdbreact";

export const Paginate = ({ page, pages, section, keyword }) => {
	const renderPageNumber = (pageNumber) => {
		const renderedPages = [];

		if (pageNumber <= 3) {
			for (let i = 1; i <= 5; i++) {
				renderedPages.push(
					<LinkContainer
						key={i}
						to={
							keyword
								? `/home?page=${i}&keyword=${keyword}`
								: `/home?page=${i}&section=${section}`
						}>
						<MDBPageItem
							className={i === pageNumber ? "active" : ""}>
							<MDBPageNav className='page-link'>{i}</MDBPageNav>
						</MDBPageItem>
					</LinkContainer>
				);
			}
		} else if (pageNumber >= pages - 2) {
			for (let i = pages - 4; i <= pages; i++) {
				renderedPages.push(
					<LinkContainer
						key={i}
						to={
							keyword
								? `/home?page=${i}&keyword=${keyword}`
								: `/home?page=${i}&section=${section}`
						}>
						<MDBPageItem
							className={i === pageNumber ? "active" : ""}>
							<MDBPageNav className='page-link'>{i}</MDBPageNav>
						</MDBPageItem>
					</LinkContainer>
				);
			}
		} else {
			for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
				renderedPages.push(
					<LinkContainer
						key={i}
						to={
							keyword
								? `/home?page=${i}&keyword=${keyword}`
								: `/home?page=${i}&section=${section}`
						}>
						<MDBPageItem
							className={i === pageNumber ? "active" : ""}>
							<MDBPageNav className='page-link'>{i}</MDBPageNav>
						</MDBPageItem>
					</LinkContainer>
				);
			}
		}

		return renderedPages;
	};

	return (
		pages > 1 && (
			<MDBRow>
				<MDBCol className='d-flex justify-content-center'>
					<MDBPagination circle>
						<MDBPageItem className={page === 1 ? "disabled" : ""}>
							<LinkContainer
								to={
									keyword
										? `/home?page=1&keyword=${keyword}`
										: `/home?page=1&section=${section}`
								}>
								<MDBPageNav className='page-link'>
									<span>First</span>
								</MDBPageNav>
							</LinkContainer>
						</MDBPageItem>

						<MDBPageItem className={page === 1 ? "disabled" : ""}>
							<LinkContainer
								to={
									keyword
										? `/home?page=${
												page - 1
										  }&keyword=${keyword}`
										: `/home?page=${
												page - 1
										  }&section=${section}`
								}>
								<MDBPageNav className='page-link'>
									&laquo;
								</MDBPageNav>
							</LinkContainer>
						</MDBPageItem>

						{renderPageNumber(page)}

						<MDBPageItem
							className={page === pages ? "disabled" : ""}>
							<LinkContainer
								to={
									keyword
										? `/home?page=${
												page + 1
										  }&keyword=${keyword}`
										: `/home?page=${
												page + 1
										  }&section=${section}`
								}>
								<MDBPageNav className='page-link'>
									&raquo;
								</MDBPageNav>
							</LinkContainer>
						</MDBPageItem>

						<MDBPageItem
							className={page === pages ? "disabled" : ""}>
							<LinkContainer
								to={
									keyword
										? `/home?page=${pages}&keyword=${keyword}`
										: `/home?page=${pages}&section=${section}`
								}>
								<MDBPageNav className='page-link'>
									Last
								</MDBPageNav>
							</LinkContainer>
						</MDBPageItem>
					</MDBPagination>
				</MDBCol>
			</MDBRow>
		)
	);
};

export default Paginate;
