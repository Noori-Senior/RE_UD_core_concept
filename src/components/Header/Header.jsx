export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1)); // Fix: `+1` to include max
  }

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className="bg-primary text-white py-2 mb-3">
      <div className="container text-center">
        <h1 className="display-4">React Essentials</h1>
        <p className="lead">
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </div>
    </header>
  );
}
