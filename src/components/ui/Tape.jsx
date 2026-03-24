import { tape } from '../../theme/shapes';

const Tape = ({ style, className }) => (
  <div
    style={{ ...tape, ...style }}
    className={className}
  />
);

export default Tape;
