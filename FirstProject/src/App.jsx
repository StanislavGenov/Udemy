import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
   setSelectedTopic(selectedButton);
}
let tabContent = <p>Please select a topic.</p> 

if (selectTopic) {
  tabContent = (<div id="tab-content">
  <h3>{EXAMPLES[selectTopic].title}</h3>
  <p>{EXAMPLES[selectTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectTopic].code}
    </code>
  </pre>
  </div>);
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts"> 
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept key={conceptItem.title} {...conceptItem} />))} 
          
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectTopic === 'components'} onSelect={() => selectHandler('components')}>Components</TabButton>
          <TabButton isSelected={selectTopic === 'jsx'}  onSelect={() => selectHandler('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectTopic === 'props'}  onSelect={() => selectHandler('props')}>Props</TabButton>
          <TabButton isSelected={selectTopic === 'state'}  onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}


export default App;
