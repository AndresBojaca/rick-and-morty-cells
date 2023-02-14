/* eslint-disable no-unused-vars */
import { css } from 'lit-element';

export default css`
	.card-character-container{
		max-width: 12rem;
	}
	.bbva-card-article{
		--_card-article-header-img-height: 12rem;
		height: 100%;
		cursor: pointer;
		text-align: center;
	}
	.character-title .character-status {
		width: .8rem;
		height: .8rem;
		margin: 0;
		display: inline-block;
		border-radius: 1rem;
	}
	.character-title .character-status.alive{
		background: green;
	}
	.character-title .character-status.dead{
		background: red;
	}
	.character-title .character-status.unknown{
		background: orange;
	}
	.character-title{
		font-size: 1rem;
		max-width: 12rem;
		color: var(--colorsPrimaryCore);
		font-weight: 500;
	}
	.character-detail-info{
		margin: 1rem 0;
	}
`;