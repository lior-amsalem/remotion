import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {SubSubtitle} from './HelloWorld/SubSubtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 5,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -180]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame + 10,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

//    const testOp = interpolate()
	const opacityP2 = interpolate(
		frame + 50,
		[durationInFrames - 10, durationInFrames - 0],
		// [50, 80],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={0} durationInFrames={170}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={20} durationInFrames={150}>
					<Subtitle />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={170} durationInFrames={280}>
					<Title titleText={"Numeric enums"} titleColor={titleColor} />
					<SubSubtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
