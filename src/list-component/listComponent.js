import { LitElement, html, } from 'lit-element';
import styles from './listComponent-styles.js';

import '@training-cells/rick-and-morty-dm/rick-and-morty-dm.js';
import '@training-cells/bbva-web-navigation-pagination/bbva-web-navigation-pagination.js';
import '@bbva-web-components/bbva-web-module-card-grid/bbva-web-module-card-grid.js'

import '../character-card-component/CharacterCard.js'
import '@bbva-web-components/bbva-web-navigation-pagination/bbva-web-navigation-pagination.js'
import '@bbva-web-components/bbva-web-form-search/bbva-web-form-search.js'

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<list-component></list-component>
```

##styling-doc

@customElement list-component
*/
export class ListComponent extends LitElement {
  static get is() {
    return 'list-component';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      filteredCharacters: { type: Array },
      Characters: { type: Array },
      host: { type: String },
      path: { type: String },
      method: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = 'https://rickandmortyapi.com';
    this.path = 'api/character';
    this.method = 'GET';
    this.Characters = [];
    this.filteredCharacters = [];
    this.allPages = 10;
    }

  static get styles() {
    return [
      styles
    ];
  }

  _handleSuccessRes(event){
    let data = event.detail.data;
    this.Characters = data.results;
    this.allPages = event.detail.data.info.pages;
    this.filteredCharacters = this.Characters;
  }
  _handlePage(event){
    this.path = `api/character?page=${event.detail}`;
  }
  _handleSearch(event){
    let query = event.detail.value
    this.filteredCharacters = this.Characters.filter(({name}) => name.toLowerCase().includes(query.toLowerCase()))
  }
  _handleSearchClear(){
    this.filteredCharacters = this.Characters
  }

  // Define a template
  render() {
    return html`
    <rick-and-morty-dm @success-response-api="${this._handleSuccessRes}" _host="${this.host}" _path="${this.path}" _method="${this.method}"></rick-and-morty-dm>
    
    <div class="search-container">
      <bbva-web-form-search @action-click="${this._handleSearch}" @input-clear="${this._handleSearchClear}"label="Search Character"></bbva-web-form-search>
    </div>
    
    <div class="character-grid">
    ${this.filteredCharacters.length === 0 ? html`<h3>No Records...</h3>` : ''}
    ${this.filteredCharacters.map((Character) => html`
      <character-card-component 
      name="${Character.name}" 
      image="${Character.image}" 
      gender="${Character.gender}" 
      species="${Character.species}"
      status="${Character.status}"
      location="${Character.location.name}"
      .episodes="${Character.episode}">
      </character-card-component>
    `)}
    </div>
    <div class="pagination-container">
      <bbva-web-navigation-pagination variant="center" current-page="1" 
        pages="${this.allPages}" 
        results="${this.allPages}" 
        visible-result="10" 
        visible-pages="10" 
        literalNext="→" literalBack="←" literalResults=''
        @number-click="${this._handlePage}"
        @next-click="${this._handlePage}"
        @back-click="${this._handlePage}"
      ></bbva-web-navigation-pagination>
    <div>`;
  }
}

customElements.define(ListComponent.is, ListComponent);
