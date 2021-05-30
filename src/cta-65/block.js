import './style.scss';
import './editor.scss';
import Edit from './edit';
import { blockProps } from '../commonComponents/container/container';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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

        btnInv: {
            type: 'boolean',
            default: false,
        },

        btnRound: {
            type: 'boolean',
            default: false,
        },

        titleSize: {
            type: 'number',
            default: 28,
        },

        fontWeight: {
            type: 'number',
            default: 6,
        },

        textColor: {
            type: 'string',
            default: '#23282d',
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
        'font-size': 40,
        'font-size-t': 32,
        'font-size-m': 30,
        'font-weight': 7,
        'line-height': 40,
        'margin-bottom': 30,
        'color': '#23282d',
    },
    {
        'title': __( '- Notice', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 21,
        'margin-bottom': 0,
        'color': '#23282d'
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
registerBlockType( 'kenzap/cta-65', {
    title: __( 'Classic Subscription Form', 'kenzap-subscriptions' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'email subscriptions', 'kenzap-subscriptions' ),
        __( 'kenzap cta 65', 'kenzap-subscriptions' ),
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-65/preview.jpeg' }` } /> );

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
