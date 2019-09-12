import styled from "styled-components";

export const Table = styled.table`
	align-self: center;
	width: 100%
	border-collapse: collapse;
	
`;

export const TableRow = styled.tr`
	// :nth-of-type(add) {
	// 	background: #707070;
	// }
`;
export const TableHeader = styled.th`
	background: #333;
	color: white;
	font-weight: bold;
	padding: 6px;
	border: 1px solid #ccc;
	text-align: center;
`;

export const TableData = styled.td`
	border: 1px solid #ccc;
	text-align: center;
`;

export const LinkButton = styled.button`
	border: 1px solid #111111
	cursor: pointer;
	padding: 5px;
	margin: 2px 2px;
	background: rgb(56, 205, 240);
	color: #fff;
	@media (max-width: 485px) {
		font-size: 8px;
		padding: 2px;
		border: 0px;
		
	}
`;

export const Select = styled.select`
	height: 28px;
	width: 20%;
	border: 1px solid #111111;
	background: white;
	color: gray;
	font-size: 14px;
	option {
		color: black;
		background: white;
		display: flex;
		white-space: pre;
		padding: 0px 2px 1px;
	}
	@media (max-width: 485px) {
		font-size: 10px;
	}
`;

export const FilterDiv = styled.div`
	margin-top: 1.5em;
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-content: center;
`;

export const RadioLabel = styled.label``;

export const RadioButton = styled.input``;