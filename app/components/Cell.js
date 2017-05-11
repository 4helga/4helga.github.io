import React from 'react'

const Cell = ({id, value, isCurrent}) => {
	const currentCellClass = isCurrent ? ' current-cell' : '';
	return (
		<div className={'cell ' + currentCellClass}>
			<input
				type="text"
				id={id}
			/>
		</div>
	)
}

export default Cell