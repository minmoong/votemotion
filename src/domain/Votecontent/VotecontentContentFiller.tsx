import styled from "styled-components";

const ProgressbarContainer = styled.span`
	position: absolute;
	border-radius: inherit;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;

	${ ({ isChecked }: { isChecked: boolean }) => (isChecked ? "border: 2px solid #0d6efd;" : "") }
`;

const VotecontentContentContainer = styled.div`
	position: relative;
	height: 50px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 15px;
	display: flex;
	align-items: center;
	padding: 20px;
	cursor: pointer;
`;

const Turnout = styled.span`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
`;

const ProgressbarLayer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${ ({ turnout }: { turnout: number }) => (turnout) }%;
	background: rgba(50, 115, 246, 0.3);
	border-radius: 15px;
`;

type Props = {
  title: string;
  turnout: number;
	isChecked: boolean;
}

function Filler(props: Props) {
	let turnout;
	let b = props.turnout.toFixed(1);
	if(b.split('.')[1] === '0') turnout = Math.floor(+b);
	else turnout = b;

  return (
		<VotecontentContentContainer>
			<span>{ props.title }</span>
			<Turnout>{ turnout + "%" }</Turnout>
			<ProgressbarContainer isChecked={ props.isChecked }>
				<ProgressbarLayer turnout={ props.turnout } />
			</ProgressbarContainer>
		</VotecontentContentContainer>
  );
}

export default Filler;