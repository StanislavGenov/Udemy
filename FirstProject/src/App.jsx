import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectTopic, setSelectedTopic] = useState('Please click a button');

  function selectHandler(selectedButton) {
   setSelectedTopic(selectedButton);
}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts"> 
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image= {CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => selectHandler('components')}>Components</TabButton>
          <TabButton onSelect={() => selectHandler('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => selectHandler('props')}>Props</TabButton>
          <TabButton onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code>

              </code>
            </pre>
            </div>
        </section>
      </main>
    </div>
  );
}


export default App;
