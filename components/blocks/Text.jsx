import React from 'react';

export default function Text({ title, body, h1 = false }) {
	return (
		<div>
			{h1 ? <h1>{title}</h1> : <h2>{title}</h2>}
			<div className="body">
				{body.map((text) => (
					<p>{text}</p>
				))}
			</div>
		</div>
	);
}
