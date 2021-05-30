import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { blockProps } from '../commonComponents/container/container';
import Edit from './edit';


export const attrs = {
        ...blockProps,

        align: {
            type: 'string',
            default: 'wide',
        },

        // override from container
        containerPadding: {
            type: 'number',
            default: 58,
        },

        title: {
            type: 'string',
            default: __( 'Sign up to get 10% discount!', 'kenzap-cta' ),
        },

        terms: {
            type: 'string',
            default: __( 'I have read and agree to the terms & conditions', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: '',
        },

        borderRadius: {
            type: 'number',
            default: 0,
        },

        fontWeight: {
            type: 'number',
            default: 6,
        },

        textColor: {
            type: 'string',
            default: '#fff',
        },

        textColor2: {
            type: 'string',
            default: '#333',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        boxed: {
            type: 'boolean',
            default: false,
        },

        btnInv: {
            type: 'boolean',
            default: false,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        serverSide: {
			type: 'boolena',
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
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--br': `${ attributes.borderRadius }px`,
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
        'title': __( '- Labels', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 23,
        'margin-top': 40,
        'margin-bottom': 20,
        'color': '#bababa',
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,
        'margin-top': 0,
        'margin-bottom': 10,
        'color': '#ffffff'
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
registerBlockType( 'kenzap/cta-24', {
    title: __( 'Ninja Contact Form', 'kenzap-cta' ),
    description: __( 'Changes for this block can be previewed on frontend only.', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 24', 'kenzap-cta' ),
        __( 'contacts form', 'kenzap-cta' ),
        __( 'ninja form', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-24/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { containerPadding: 80 } ); //backgroundColor: '#f8f9fa',
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
            if ( typeof attributes[ attr ] === 'undefined' && typeof attrs[ attr ] !== 'undefined' ) {
                attributes[ attr ] = attrs[ attr ].default;
            }
        } );

        return (
            <div>
				<p>{ __( 'cta  1', 'kenzap-cta' ) }</p>
			</div>
        );
    },
} );
