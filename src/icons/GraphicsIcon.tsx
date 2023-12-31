interface IProps {
  w?: number;
  h?: number;
}

const GraphicsIcon = ({ w = 60, h = 60 }: IProps) => {
  return (
    <svg
      fill="#000000"
      width={`${w}px`}
      height={`${h}px`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
    </svg>
  );
};

export default GraphicsIcon;
