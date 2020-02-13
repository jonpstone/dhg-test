import React from 'react'

export default ({ type='checkbox', name, checked = false, onChange }) =>
	<input type={type} name={name} checked={checked} onChange={onChange} />
