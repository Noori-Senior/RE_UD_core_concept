export default function TabButton({ children, isSelected, className = "", ...props }) {
  const classes = `btn btn-outline-primary me-2 ${isSelected ? "active" : ""} ${className}`.trim();

  return (
    <li className="d-inline">
      <button {...props} className={classes}>
        {children}
      </button>
    </li>
  );
}
