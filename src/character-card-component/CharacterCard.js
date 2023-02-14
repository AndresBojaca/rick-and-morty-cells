import { LitElement, html, } from 'lit-element';
import styles from './CharacterCard-styles.js';

import '../character-card-component/CharacterCard-styles.js'
import '@bbva-web-components/bbva-card-article/bbva-card-article.js'
import '@bbva-web-components/bbva-web-template-modal/bbva-web-template-modal.js'

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<character-card-component></character-card-component>
```

##styling-doc

@customElement character-card-component
*/
export class CharacterCard extends LitElement {
  static get is() {
    return 'character-card-component';
  }

  // Declare properties
  static get properties() {
    return {
      isLoading: { type: Boolean },
      name: { type: String },
      image: { type: String },
      gender: { type: String },
      species: { type: String },
      status: { type: String },
      location: { type: String },
      episodes: { type: Array }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.isLoading = false;
    this.name = '';
    this.image = '';
    this.gender = '';
    this.species = '';
    this.status = '';
    this.location = '';
    this.episodes = [];
  }

  static get styles() {
    return [
      styles
    ];
  }
  _handleClickCard() {
    let modal = this.shadowRoot.querySelector('bbva-web-template-modal');
    modal.open()
  }

  // Define a template
  render() {
    return html`
    <div class="card-character-container">
      ${this.isLoading ? 'loading=""' : ''}
      <bbva-card-article class="bbva-card-article" image="${this.image}"  image-accesibility-text="${this.name}"  loading-img-type="lazy"  badge-type="neutral"  content-title=""  language="es-ES"  principal-category-text="" description=""  description-medium=""  principal-category="" @card-article-expand-click="${this._handleClickCard}">
        <span class="character-title">
        <p class="character-status ${this.status.toLocaleLowerCase()}"></p>
        ${this.name}
        ${this.gender === 'Male' ? '♂️' : '♀️'}
        </span>
      </bbva-card-article>
    </div>
    <bbva-web-template-modal size="s" heading="${this.name}" veil-close="">
      <div class="character-detail">
        <div class="character-detail-image">
          <img src="${this.image}" />
        </div>
        <div class="character-detail-info">
          <span><strong>Gender:</strong> ${this.gender} ${this.gender === 'Male' ? '♂️' : '♀️'}</span>
          <br>
          <span><strong>Species:</strong> ${this.species}</span>
          <br>
          <span><strong>Location:</strong> ${this.location}</span>
          <br>
          <span><strong>Total Episodes:</strong> ${this.episodes.length}</span>
        </div>
      </div>
    </bbva-web-template-modal>
    `;
  }
}
/* <rick-and-morty-dm @success-response-api="${this._handleSuccessRes}" _host="" _path="" _method="${this.method}"></rick-and-morty-dm> */

customElements.define(CharacterCard.is, CharacterCard);
