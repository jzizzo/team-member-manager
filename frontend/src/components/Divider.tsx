const Divider: React.FC<{ styles?: React.CSSProperties }> = ({ styles }) => (
  <hr
    style={{
      borderRadius: 300,
      borderTop: "1px solid lightgrey",
      width: "100%",
      ...styles,
    }}
  ></hr>
);

export default Divider;
