import './style.scss';
import './editor.scss';

import Edit from './edit';
import Save from './save';
import { blockProps } from '../commonComponents/container/container';
const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks;

/**
 * Provides the initial data for new block
 * @type {{title: string, icon: string, iconMediaId: string, iconMediaUrl: string, description: string}}
 */
export const defaultItem = {
    title: __( 'Kenzap brands blocks', 'kenzap-brands' ),
    iconMediaId: '',
    iconMediaUrl: window.kenzap_cta_path + 'images/client-7.png',
    ilv: false,
    link: '',
    linknew: false
};

export const defaultSubBlocks = JSON.stringify( [
    { ...defaultItem, key: 'default1', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-1.png' },
    { ...defaultItem, key: 'default2', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-2.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-3.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-4.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-5.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-6.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-7.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-8.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-9.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-10.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-11.png' },
    { ...defaultItem, key: 'default3', 'link': '#', iconMediaUrl: window.kenzap_cta_path + 'images/client-12.png' },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kenzap/cta-62', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Brands Grid Block', 'kenzap-brands' ), // Block title.
	icon: 'shield', // Block icon from Dashicons ??? https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category ??? Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'kenzap cta 62', 'kenzap-brands' ),
		__( 'clients', 'kenzap-brands' ),
		__( 'companies', 'kenzap-brands' ),
	],
	anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
		...blockProps,

        align: {
            type: 'string',
            default: "full",
        },

        iconSize: {
            type: 'number',
            default: 165,
        },

        iconSpace: {
            type: 'number',
            default: 0,
        },

        items: {
            type: 'array',
            default: [],
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        preview: {
            type: 'boolean',
            default: false,
        },
    },

    example: { attributes: { preview: true } },
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: ( props ) => {

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-62/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );

            props.attributes.items = JSON.parse( defaultSubBlocks );
            if ( ! props.attributes.blockUniqId ) {
                props.setAttributes( {
                    blockUniqId: new Date().getTime(),
                } );
            }
        }
        
		return ( <Edit { ...props } /> );
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

        return ( <Save { ...props } /> );
	},
} );
