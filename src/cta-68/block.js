import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { blockProps } from '../commonComponents/container/container';
import Edit from './edit';

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
        '--iconlSize': `${ attributes.iconlSize }px`,
    };

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }
 
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
        'title': __( '- Menu', 'kenzap-plugin' ),
        'font-size': 12,
        'font-weight': 5,
        'line-height': 12,
        'margin-top': 0,
        'margin-bottom': 0,
        'padding-top': 25,
        'padding-right': 10,
        'padding-bottom': 25,
        'padding-left': 10,
        'color': '#ffffff',
        'text-align': '-',
        'text-shadow': '-',
    },
    {
        'title': __( '- Submenu', 'kenzap-plugin' ),
        'font-size': 12,
        'font-weight': 4,
        'line-height': 12,
        'margin-top': 0,
        'margin-bottom': 0,
        'padding-top': 7,
        'padding-bottom': 7,
        'text-align': '-',
        'text-shadow': '-',
        'color': '#ffffff',
    },
    {
        'title': __( '- Mobile menu', 'kenzap-plugin' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 16,
        'margin-top': 0,
        'margin-bottom': 0,
        'padding-top': 10,
        'padding-bottom': 10,
        'text-align': '-',
        'text-shadow': '-',
        'color': '#ffffff',
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
registerBlockType( 'kenzap/cta-68', {
    title: __( 'Navigation Menu', 'kenzap-plugin' ),
    description: __( 'Go to Appearence > Menu to populate menu items. Choose "Main Menu" as display location.', 'kenzap-plugin' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 68', 'kenzap-plugin' ),
        __( 'dropdown menu', 'kenzap-plugin' ),
        __( 'navigation menu bar', 'kenzap-plugin' ),
    ],
    anchor: true,
    html: true,
    multiple: false,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        layout: {
            type: 'string',
            default: 'left',
        },

        logo: {
            type: 'string',
            default: 'none',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        isSticky: {
            type: 'boolean',
            default: false,
        },

        isTrans: {
            type: 'boolean',
            default: false,
        },

        logoSize: {
            type: 'number',
            default: 40,
        },

        logoSizem: {
            type: 'number',
            default: 40,
        },

        textColor2:{
            type: 'string'
        },

        textColor3:{
            type: 'string'
        },

        //search
        isSearch: {
            type: 'boolean',
            default: false,
        },

        searchIcon: {
            type: 'string',
            default: 'none',
        },

        searchIconSize: {
            type: 'number',
            default: 20,
        },
        
        action: {
            type: 'string',
            default: '/search-results/',
        },

        searchText: {
            type: 'string',
            default: 'Type to search',
        },

        cartIconTop: {
            type: 'number',
            default: 4,
        },

        cartIconRight: {
            type: 'number',
            default: 20,
        },

        //cart
        isCart: {
            type: 'boolean',
            default: false,
        },

        cartIcon: {
            type: 'string',
            default: 'none',
        },

        cartIconSize: {
            type: 'number',
            default: 22,
        },
        
        cartIconSize2: {
            type: 'number',
            default: 18,
        },
        
        cartIconRatio: {
            type: 'number',
            default: 0.82,
        },
        
        cartAction: {
            type: 'string',
            default: '/cart/',
        },

        //cta
        isCTA: {
            type: 'boolean',
            default: false,
        },

        ctaIcon: {
            type: 'string',
            default: 'none',
        },

        ctaText: {
            type: 'string',
            default: 'Button',
        },

        ctaAction: {
            type: 'string',
            default: '/',
        },

        ctaIconSize: {
            type: 'number',
            default: 20,
        },
        
        ctaIconTop: {
            type: 'number',
            default: 20,
        },
        
        ctaIconRight: {
            type: 'number',
            default: 20,
        },
        
        ctaIconRatio: {
            type: 'number',
            default: 0.82,
        },

        ctaInverse: {
            type: 'boolean',
            default: false,
        },
        
        blockUniqId: {
            type: 'number',
            default: 0,
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
        randomValue: {
            type: 'string'
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-68/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){ props.setAttributes( { uniqueID: `k${ new Date().getTime() }`, isFirstLoad: false, textColor2: '#23282d', textColor3: '#23282d', backgroundColor: '#23282d', containerPadding: 0, searchIcon: window.kenzap_cta_path + "images/search-icon.svg", } ); }

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

        return (
            <div>
                <p>{ __( 'Menu 1', 'kenzap-plugin' ) }</p>
            </div>
        );
    },
} );
