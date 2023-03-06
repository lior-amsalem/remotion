import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1, FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 40,
	textAlign: 'center',
	position: 'absolute',
	top: 200,
	left: '10%',
	width: '80%',
};

const codeStyle: React.CSSProperties = {
	color: COLOR_1,
};

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subtitle, opacity}}>
			Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

			Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
		</div>
	);
};
