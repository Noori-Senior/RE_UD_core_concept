export default function Tabs({
  buttons,
  children,
  buttoncontainer: ButtonContainer = "div", // default to div if not provided
  className = "",
}) {
  return (
    <section>
      <ButtonContainer className={`mb-3 ${className}`}>
        {buttons}
      </ButtonContainer>
      <div>{children}</div>
    </section>
  );
}
