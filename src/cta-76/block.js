import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import Edit from './edit';

export const attrs = {
        ...blockProps,
        // override from container
        containerPadding: {
            type: 'number',
            default: 58,
        },

        title: {
            type: 'string',
            default: __( 'Sign up to get 10% discount!', 'kenzap-blog' ),
        },
        terms: {
            type: 'string',
            default: __( 'I have read and agree to the terms & conditions', 'kenzap-blog' ),
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
            //default: '#fff',
        },
        textColor2: {
            type: 'string',
            //default: '#333',
        },
        txAlign: {
            type: 'string',
            default: 'left',
        },
        isFirstLoad: {
            type: 'boolean',
            default: true,
        },
		showSticky: {
			type: 'boolean',
			default: false
		},
		showCategory: {
			type: 'boolean',
			default: true
		},
		showDate: {
			type: 'boolean',
			default: true
		},
		showComments: {
			type: 'boolean',
			default: true
		},
		showTags: {
			type: 'boolean',
			default: true
        },
        postType: {
			type: 'string',
			default: ''
		},
        showExcerpt: {
			type: 'boolean',
			default: true
		},
        boxed: {
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
        per_page: {
			type: 'number',
			default: 6
		},
		pagination: {
			type: 'boolean',
			default: false
        }, 
        typography: {
            type: 'array',
            default: [],
		},
		searchText: {
			type: 'string',
			default: 'type to search',
		},
		searchText2: {
			type: 'string',
			default: 'Search Results for:',
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
        'font-size': 27,
        'font-weight': 6,
        'line-height': 32,
        'margin-top': 40,
        'margin-bottom': 15,
        'color': '#333333',
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 19,
        'font-weight': 5,
        'line-height': 32,
        'margin-top': 0,
        'margin-bottom': 10,
        'color': '#333333'
    },
    {
        'title': __( '- Meta', 'kenzap-cta' ),
        'font-size': 12,
        'font-weight': 4,
        'line-height': 20,
        'margin-right': 20,
        'margin-bottom': 5,
        'color': '#333333'
    },
    {
        'title': __( '- Search', 'kenzap-cta' ),
        'font-size': 19,
        'font-weight': 4,
        'line-height': 31,
        'margin-right': 0,
        'margin-bottom': 30,
        'color': '#333333'
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
registerBlockType( 'kenzap/cta-76', {
    title: __( 'Kenzap search results', 'kenzap-blog' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'blog 7', 'kenzap-blog' ),
        __( 'search result', 'kenzap-blog' ),
        __( 'kenzap cta 76', 'kenzap-blog' ),
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-76/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { containerPadding: 80, textColor: '#333333', textColor2: '#ffffff' } ); //backgroundColor: '#f8f9fa',
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
				<p>{ __( 'cta  1', 'kenzap-blog' ) }</p>
			</div>
        );
    },
} );
