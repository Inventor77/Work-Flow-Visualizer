import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deleteData } from "../../utils/utils";

function Card(props) {
	const { projectTitle, date, id, value } = props;
	return (
		<li className='main-content-grid'>
			<div className='project-info'>
				<div className='content'>
					<div className='title'>{projectTitle}</div>
					<div className='project-date'>Edited on {date}</div>
					<div className='user-info'>
						<span className='user-name'>User Name</span>
					</div>
				</div>
				<div className='action-container'>
					<div>
						<Link
							to={{
								pathname: "/edit",
								state: value,
								id: id,
								name: projectTitle,
							}}
							className='view-project-btn'>
							View Project
						</Link>
					</div>
					<div>
						<FaTrash
							onClick={() => {
								deleteData("file", id);
							}}
							className='project-delete'
						/>
					</div>
				</div>
			</div>
		</li>
	);
}

export default Card;
