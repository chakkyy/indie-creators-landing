const GradientWrapper = ({ children, ...props }) => (
  <div {...props} className={`relative ${props.className || ''}`}>
    <div
      className={`absolute m-auto blur-[160px] ${
        props.wrapperclassName || ''
      }`}
      style={{
        background:
          'linear-gradient(180deg, #D97706 0%, rgba(255, 196, 0, 0.984375) 0.01%, rgba(253, 216, 53, 0.2) 100%)',
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
