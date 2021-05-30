import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 * @type {{title: string, icon: string, iconMediaId: string, iconMediaUrl: string, description: string}}
 */
export const defaultItem = {
    title: __( 'New feature' ),
    iconMediaId: '',
    iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1-2.svg'),
    description: '' +
    '<li>' + __( 'FULLY CUSTOMIZABLE', 'kenzap-features' ) + '</li>' +
    '<li>' + __( 'POWERFUL THEME OPTIONS', 'kenzap-features' ) + '</li>' +
    '<li>' + __( 'VISUAL COMPOSER', 'kenzap-features' ) + '</li>' +
    '<li>' + __( 'ELITE ADDONS', 'kenzap-features' ) + '</li>' +
    '<li>' + __( 'SLIDER REVOLUTION', 'kenzap-features' ) + '</li>' +
    '<li>' + __( 'FRIENDLY SUPPORT', 'kenzap-features' ) + '</li>',
    alt: 'image',
    link: '#',
    linkn: false,
    btn: 'Get Details',
};

export const defaultSubBlocks = JSON.stringify( [
    { ...defaultItem, title: __( 'EASY-TO-USE', 'kenzap-features' ), key: 'default1', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1-2.svg') },
    { ...defaultItem, title: __( 'WOOCOMMERCE', 'kenzap-features' ), key: 'default2', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-2-2.svg') },
    { ...defaultItem, title: __( 'SUPPORT', 'kenzap-features' ), key: 'default3', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-3-2.svg') },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const featuredImg = {
        height: `${ attributes.iconSize }px`,
    };

    const title = {
        fontSize: `${ attributes.titleSize }px`,
        lineHeight: `${ attributes.titleSize * 1.4 }px`,
    };

    const description = {
        fontSize: `${ attributes.descriptionSize }px`,
        lineHeight: `${ attributes.descriptionSize * 1.4 }px`,
    };

    const container = {
        '--icolor': attributes.iconColor,
        '--ihover': attributes.iconColorOnHover,
        '--tcolor': attributes.titleColor,
        '--thover': attributes.titleColorOnHover,
        '--dcolor': attributes.descriptionColor,
        '--dhover': attributes.descriptionColorOnHover,
        '--backgroundHover': attributes.backgroundColorOnHover,
    };

    return {
        featuredImg,
        title,
        description,
        container,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-steps' ),
        'font-size': 26,
        'font-weight': 6,
        'line-height': 32,
        'margin-top': 20,
        'margin-bottom': 15,
        'color': '#333333',
    },
    {
        'title': __( '- Description', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 15,
        'font-weight': 4,
        'color': '#333333',
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 24,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'color': '#ffffff',
        'background-color': '#000000',
        'hover-color': '#000000',
        'hover-background-color': '#ffffff'
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
registerBlockType( 'kenzap/cta-57', {
    title: __( 'Features Grid Block', 'kenzap-features' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 57', 'kenzap-features' ),
        __( 'feature list, services', 'kenzap-features' ),
        __( 'avantages', 'kenzap-features' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
        align: {
            type: 'string',
            default: 'full',
        },

        iconSize: {
            type: 'number',
            default: 40,
        },

        iconColor: {
            type: 'string',
            default: '#ff0000',
        },

        titleSize: {
            type: 'number',
            default: 32,
        },

        titleColor: {
            type: 'string',
            default: '#111',
        },

        descriptionSize: {
            type: 'number',
            default: 11,
        },

        descriptionColor: {
            type: 'string',
            default: '#555',
        },

        cta: {
            type: 'boolean',
            default: false,
        },

        isHoverEnabled: {
            type: 'boolean',
            default: true,
        },

        oic: {
            type: 'boolean',
            default: true,
        },

        backgroundColorOnHover: {
            type: 'string',
            default: '#1c1c1c',
        },

        iconColorOnHover: {
            type: 'string',
            default: '#fff',
        },

        titleColorOnHover: {
            type: 'string',
            default: '#fff',
        },

        descriptionColorOnHover: {
            type: 'string',
            default: '#fff',
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-57/preview.jpeg' }` } /> );

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
     * @param {Object} props - attributes
     * @returns {Node} rendered component
     */
    save: function( props ) {
        const {
            className,
            attributes,
        } = props;

        const {
            featuredImg,
            container,
        } = getStyles( attributes );

        return (
            <div
                className={ `kfl1 ${ attributes.isHoverEnabled ? 'hover-enabled' : '' } ${ className ? className : '' }` }
                style={ container }
            >
                { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                { attributes.items && attributes.items.map( item => (
                    <div
                        key={ item.key }
                        className="featured-box"
                    >
                        <div className="featured-img">
                            { item.iconMediaUrl &&

                                !attributes.oic ? 
                                ( <div
                                    className="kp-img"
                                    style={ {
                                        cursor: 'pointer',
                                        position: 'relative',
                                        zIndex: 10,
                                        //width: attributes.iconSize,
                                        height: attributes.iconSize,
                                        "--icon":"url(" + item.iconMediaUrl + ")",
                                    } }
                                    />
                                ):( <img
                                        src={ (item.iconMediaUrl) }
                                        alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                        style={ { ...featuredImg, cursor: 'pointer' } }
                                /> )
                            }

                        </div>
                        <RichText.Content
                            tagName="h3"
                            value={ item.title }
                            style={ getTypography( attributes, 0 ) }
                        />
                        <RichText.Content
                            tagName="ul"
                            value={ item.description }
                            style={ getTypography( attributes, 1 ) }
                        />
                        { item.btn && attributes.cta && <a 
                            target={ item.linkn ? '_blank':'_self' }
                            className="bt1"
                            style={ getTypography( attributes, 2 ) }
                            rel="noopener noreferrer"
                            href={ item.link } >{ item.btn }</a> 
                        }
                    </div>
                ) ) }
                { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
            </div>
        );
    },
} );
