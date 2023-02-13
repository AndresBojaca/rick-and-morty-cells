import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './RickandmortyDp-styles.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product';
import '@training-cells/rick-and-morty-dm/rick-and-morty-dm.js'
import '@bbva-web-components/bbva-expandable-accordion/bbva-expandable-accordion.js'
import '@training-cells/bbva-web-navigation-pagination/bbva-web-navigation-pagination.js'

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<rickandmorty-dp></rickandmorty-dp>
```

##styling-doc

@customElement rickandmorty-dp
*/
export class RickandmortyDp extends LitElement {
  static get is() {
    return 'rickandmorty-dp';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      Characters: { type: Array },
      host: { type: String },
      path: { type: String },
      method: { type: String },
      allPages: { type: Number },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = 'https://rickandmortyapi.com';
    this.path = 'api/character';
    this.method = 'GET';
    this.Characters = [];
    this.allPages = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('rickandmorty-dp-shared-styles')
    ];
  }

  _handleRequestData(event){
    console.log(event.detail)
    let data = event.detail.data;
    this.Characters = data.results;
    this.allPages = event.detail.data.info.pages;
  }
  _handleNextPage(event){
    this.path = `api/character?page=${event.detail}`;
  }
  _handlePrevPage(event){
    this.path = `api/character?page=${event.detail}`;
  }
  // Define a template
  render() {
    return html`<rick-and-morty-dm @success-response-api="${this._handleRequestData}" _host="${this.host}" _path="${this.path}" _method="${this.method}"></rick-and-morty-dm>
    ${this.Characters.map((Character) => html`
    <bbva-expandable-accordion row-title="${Character.name}" contact-name="${Character.name}" row-description="${Character.species} - ${Character.gender} - ${Character.status}">
      <div class="expandable-container">
        <div>
          <img src="${Character.image}"/>
        </div>
        <div class="detail-container">
          <h1>${Character.name}</h1>
          <h4><strong>Species: </strong>${Character.species}</h4>
          <h4><strong>Gender: </strong>${Character.gender}</h4>
          <h4><strong>Status: </strong>${Character.status}</h4>
        </div>
      </div>
    </bbva-expandable-accordion>
    `)}
    <div class="pagination-container">
      <bbva-web-navigation-pagination
        current-page="1"
        pages="42"
        results="42"
        visible-result="10"
        visible-pages="10"
        literalNext="→"
        literalBack="←"
        literalResults=''
        @next-click="${this._handleNextPage}"
        @back-click="${this._handlePrevPage}"
      ></bbva-web-navigation-pagination>
    <div>
    
    `;
  }
}