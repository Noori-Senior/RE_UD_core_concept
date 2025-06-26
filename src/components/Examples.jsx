import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  let content = <p>Please select a topic to see the example.</p>;

  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];
    content = (
      <div id="example-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section
      title="Examples"
      id="examples"
      children={
        <Tabs
          buttoncontainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                label="Components"
                onClick={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                label="JSX"
                onClick={() => handleClick("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                label="Props"
                onClick={() => handleClick("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                label="State"
                onClick={() => handleClick("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          <div className="card shadow-sm p-4 border rounded bg-light">
            {content}
          </div>
        </Tabs>
      }
    />
  );
}
