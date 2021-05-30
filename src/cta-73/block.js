import './style.scss';
import './editor.scss';
import Edit from './edit';
import { blockProps, ContainerSave } from '../commonComponents/container/container';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-cta' ),
        //'type': 'title',
        'font-size': 18,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 0,
        'color': '#23282d',
	},
	{
        'title': __( '- Text', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 23,
        'margin-bottom': 20,
        'color': '#23282d'
    },
    {
        'title': __( '- Meta', 'kenzap-cta' ),
        'font-size': 10,
        'font-weight': 5,
        'line-height': 18,
        'margin-bottom': 0,
        'color': '#23282d'
    },
    {
        'title': __( '- Author', 'kenzap-cta' ),
        'font-size': 10,
        'font-weight': 5,
        'line-height': 20,
        'text-transform': 'A',
        'margin-bottom': 0,
        'color': '#23282d'
    },
]);

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
registerBlockType( 'kenzap/cta-73', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Blog with Right Texts', 'kenzap-blog' ), // Block title.
	icon: 'images-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'kenzap cta 73', 'kenzap-blog' ),
		__( 'blog Posts', 'kenzap-blog' ),
		__( 'News', 'kenzap-blog' ),
	],
	supports: {
        align: [ 'full', 'wide' ],
    },
	attributes: {
		...blockProps,

		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		displayType: {
			type: 'string',
			default: 'kp-horizontal',
		},
		columns: {
			type: 'string',
			default: '4',
		},
		ignoreNoImage: {
			type: 'boolean',
			default: false
		},
		ignoreSticky: {
			type: 'boolean',
			default: false
		},
		showCategory: {
			type: 'boolean',
			default: false
		},
		showDate: {
			type: 'boolean',
			default: true
		},
		showComments: {
			type: 'boolean',
			default: false
		},
		showTags: {
			type: 'boolean',
			default: false
		},
		category: {
			type: 'string',
			default: ''
		}, 
		per_page: {
			type: 'number',
			default: 4
		}, 
		mainColor: {
			type: 'string',
			default: '#007cba'
		},
		orderby: {
			type: 'orderby',
			default: 'date/desc'
		},
		pagination: {
			type: 'boolean',
			default: false
		}, 
        typography: {
            type: 'array',
            default: [],
		},
		t0: {
			type: 'string',
		},
		t1: {
			type: 'string',
		},
		t2: {
			type: 'string',
		},
		t3: {
			type: 'string',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-73/preview.jpeg' }` } /> );
 
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
		return (
			<div>
				<p>{ __( 'Blog Listing 4', 'kenzap-blog' ) }</p>
			</div>
		);
	},
} );
