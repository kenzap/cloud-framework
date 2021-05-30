import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import Edit from './edit';

export const attrs = {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        link: {
            type: 'string',
            default: '',
        },
        
        // override from container
        containerPadding: {
            type: 'number',
            default: 58,
        },

        title: {
            type: 'string',
            default: __( 'Sign up to get 10% discount!', 'kenzap-subscriptions' ),
        },

        terms: {
            type: 'string',
            default: __( 'I have read and agree to the terms & conditions', 'kenzap-subscriptions' ),
        },

        titleSize: {
            type: 'number',
            default: 28,
        },

        fontWeight: {
            type: 'number',
            default: 7,
        },

        textColor: {
            type: 'string',
            default: '#222',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        // serverSide: {
		// 	type: 'boolena',
		// 	default: false
        // },
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
        
        preview: {
            type: 'boolean',
            default: false,
        },
    };

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddingsMin': `${ attributes.containerPadding / 4 }`,
        '--paddingsMinPx': `${ attributes.containerPadding / 4 }px`,
    };

    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 32,
        'font-weight': 5,
        'line-height': 32,
        'padding-top': 25,
        'padding-bottom': 25,
        'margin-bottom': 30,
        'color': '#23282d',
        'text-align': '-',
    },
    {
        'title': __( '- Notice', 'kenzap-cta' ),
        'font-size': 12,
        'font-weight': 5,
        'line-height': 20,
        'padding-top': 6,
        'padding-right': 0,
        'padding-bottom': 6,
        'padding-left': 0,
        'color': '#23282d',
    },
]);

/**
 * Register: a Gutenberg Block.
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
registerBlockType( 'kenzap/cta-64', {
    title: __( 'Minimalistic Subscription Form', 'kenzap-subscriptions' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'email subscriptions', 'kenzap-subscriptions' ),
        __( 'kenzap cta 64', 'kenzap-subscriptions' ),
        __( 'mailchimp newsletter', 'kenzap-subscriptions' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: attrs,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-64/preview.jpeg' }` } /> );

        if ( props.attributes.isFirstLoad ){

            props.setAttributes( { backgroundColor: '#f8f9fa', containerPadding: 80 } );
            props.setAttributes( { isFirstLoad: false } );
        }

        return ( <Edit { ...props } /> );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     * @param {Object} props - attributes
     * @returns {Node} rendered component
     */
    save: function( props ) {
        const {
            className,
            attributes,
        } = props;

        Object.keys( attributes ).forEach( attr => {
            if ( typeof attributes[ attr ] === 'undefined' ) {
                attributes[ attr ] = attrs[ attr ].default;
            }
        } );

        return (
            <div>
				<p>{ __( 'Subscriptions  1', 'kenzap-subscriptions' ) }</p>
			</div>
        );
    },
} );
