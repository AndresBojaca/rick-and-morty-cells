/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}
.expandable-container{
  display: flex;
  gap: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.expandable-container--image{

}
.expandable-container--image img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pagination-container {
  display: flex;
  margin: 1rem auto;
  padding-top: 1rem;
  justify-content: center;
}
.detail-container h4{
  font-weight: normal;
  margin: 0;
}
`;