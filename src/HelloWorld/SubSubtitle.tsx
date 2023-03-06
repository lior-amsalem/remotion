import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1, FONT_FAMILY} from './constants';
import AutoTyping from 'react-auto-typing';
import CodeAutoTyping from 'react-code-auto-typing';
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";
import './style.css';

const subsubtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 40,
	textAlign: 'center',
	position: 'absolute',
	top: 140,
	// bottom: 40,
	width: '100%',
};

const codeStyle: React.CSSProperties = {
	color: COLOR_1,
};

const snippet = 
`enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
  }
`;

export const SubSubtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subsubtitle, opacity}}>
			<div className="code-presentation">
				<CodeAutoTyping
				language="javascript"
				syntaxHighlighterProps={{ style: ocean }}
				>
				{snippet}
				</CodeAutoTyping>
			</div>
		{/* <AutoTyping
			active // <boolean>
			textRef='its hard to programtacitly create a video much more than editing one in a UI! LOl FML' // <string>
			writeSpeed={150} // <number>
			deleteSpeed={150} // <number>
			delayToWrite={1000} // <number>
			delayToDelete={2000} // <number>
			/> */}
		</div>
	);
};
