import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './RickAndMortyCells-styles.js';
import './list-component/listComponent.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<rick-and-morty-cells></rick-and-morty-cells>
```

##styling-doc

@customElement rick-and-morty-cells
*/
export class RickAndMortyCells extends LitElement {
  static get is() {
    return 'rick-and-morty-cells';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('rick-and-morty-cells-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <list-component></list-component>
    `;
  }
}
