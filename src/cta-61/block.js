import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import Edit from './edit';
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';

/**
 * Provides the initial data for new block
 * @type {{title: string, icon: string, iconMediaId: string, iconMediaUrl: string, description: string}}
 */
export const defaultItem = {
    title: __( 'New feature', 'kenzap-features' ),
    iconMediaId: '',
    iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg'),
    description: __( 'Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'kenzap-features' ),
};

export const defaultSubBlocks = JSON.stringify( [
    { ...defaultItem, title: __( 'Easy Drag & Drop', 'kenzap-features' ), key: 'default1', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Mobile Optimized', 'kenzap-features' ), key: 'default2', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( '100s of Templates', 'kenzap-features' ), key: 'default3', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Google Analytics', 'kenzap-features' ), key: 'default4', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Customizable Menus', 'kenzap-features' ), key: 'default5', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'ShoutOut Email Marketing', 'kenzap-features' ), key: 'default6', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Commission Free Ordering', 'kenzap-features' ), key: 'default7', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Search Engine Friendly', 'kenzap-features' ), key: 'default8', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Free Reservations', 'kenzap-features' ), key: 'default9', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Secure Cloud', 'kenzap-features' ), key: 'default10', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( 'Quick Service', 'kenzap-features' ), key: 'default11', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
    { ...defaultItem, title: __( '24/7 Support', 'kenzap-features' ), key: 'defaul12', iconMediaUrl: (window.kenzap_cta_path + 'images/check-icon.svg') },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const featuredImg = {
        height: `${ attributes.iconSize }px`,
        width: `auto`,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    if ( attributes.width100 ) {
        kenzapContanerStyles.width = '100%';
        kenzapContanerStyles[ '--maxWidth' ] = '2000';
    } else {
        kenzapContanerStyles.maxWidth = `${ attributes.containerMaxWidth }px`;
        kenzapContanerStyles[ '--maxWidth' ] = `${ attributes.containerMaxWidth } `;
    }

    return {
        featuredImg,
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-steps' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
        'margin-bottom': 0,
        'color': '#333333',
    },
    {
        'title': __( '- Description', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 14,
        'font-weight': 4,
        'line-height': 25,
        'margin-bottom': 15,
        'color': '#333333',
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
registerBlockType( 'kenzap/cta-61', {
    title: __( 'Advantages Grid', 'kenzap-features' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 61', 'kenzap-features' ),
        __( 'icon grid', 'kenzap-features' ),
        __( 'features list, services', 'kenzap-features' ),
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
            default: 'wide',
        },
        
        iconSize: {
            type: 'number',
            default: 30,
        },

        vis: {
            type: 'boolean',
            default: false,
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

        if(props.attributes.preview) return ( <img src={ `${ window.kenzap_cta_path + 'cta-61/preview.jpeg' }` } /> );

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
            vars,
            kenzapContanerStyles,
            additionalClassForKenzapContainer,
        } = getStyles( attributes );

        return (
            <div className={ `kenzap ${ className ? className : '' }` }>
                <ContainerSave
                    className={ `kp-featured-1 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className={ `kenzap-container` } style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kp-content">
                            { attributes.items && attributes.items.map( item => (

                            <div 
                                key={ item.key }
                                className="kp-box">
                                <div className="kp-wrapper">
        
                                    <div 
                                        className="kp-img"
                                        style={ {
                                            cursor: 'pointer',
                                            position: 'relative',
                                            zIndex: 10,
                                            width: attributes.iconSize,
                                            height: attributes.iconSize,
                                            "mask-size": attributes.iconSize+"px "+attributes.iconSize+"px ",
                                            "--icon":"url(" + item.iconMediaUrl + ")",
                                        } }
                                        />

                                    <RichText.Content
                                        tagName="h3"
                                        className="kp-a"
                                        value={ item.title }
                                        style={ { ...getTypography( attributes, 0 ) } }
                                    />

                                    <RichText.Content
                                        tagName="p"
                                        className={ attributes.vis?"vis":"" }
                                        value={ item.description }
                                        style={ getTypography( attributes, 1 ) }
                                    />

                                </div>
                            </div>

                            ) ) }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
