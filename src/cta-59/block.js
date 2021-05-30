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
    iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1.png'),
    description: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus leo sit amet.', 'kenzap-features' ),
};

export const defaultSubBlocks = JSON.stringify( [
    { ...defaultItem, title: __( 'PURE DRINK', 'kenzap-features' ), key: 'default1', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1.png') },
    { ...defaultItem, title: __( 'PURE AIR', 'kenzap-features' ), key: 'default2', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-2.png') },
    { ...defaultItem, title: __( 'EXQUISITE SPACE', 'kenzap-features' ), key: 'default3', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-3.png') },
    { ...defaultItem, title: __( 'HANDY MATERIAL', 'kenzap-features' ), key: 'default4', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-4.png') },
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

    const kenzapContanerStyles = {};

    if ( attributes.width100 ) {
        kenzapContanerStyles.width = '100%';
        kenzapContanerStyles[ '--maxWidth' ] = '2000';
    } else {
        kenzapContanerStyles.maxWidth = `${ attributes.containerMaxWidth }px`;
        kenzapContanerStyles[ '--maxWidth' ] = `${ attributes.containerMaxWidth } `;
    }

    let additionalClassForKenzapContainer = 'kenzap-lg';
    
    if ( attributes.containerMaxWidth < 992 ) {
        additionalClassForKenzapContainer = 'kenzap-md';
    }

    if ( attributes.containerMaxWidth < 768 ) {
        additionalClassForKenzapContainer = 'kenzap-sm';
    }

    if ( attributes.containerMaxWidth < 480 ) {
        additionalClassForKenzapContainer = 'kenzap-xs';
    }

    if ( attributes.width100 ) {
        additionalClassForKenzapContainer = 'kenzap-lg';
    }

    return {
        featuredImg,
        vars,
        kenzapContanerStyles,
        additionalClassForKenzapContainer,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-steps' ),
        'font-size': 20,
        'font-weight': 6,
        'line-height': 36,
        'margin-bottom': 12,
        'color': '#333333',
    },
    {
        'title': __( '- Description', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 15,
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
registerBlockType( 'kenzap/cta-59', {
    title: __( '4 Column Feature List', 'kenzap-features' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 59', 'kenzap-features' ),
        __( 'features, info block', 'kenzap-features' ),
        __( 'features, how it works', 'kenzap-features' ),
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
            default: 'full',
        },

        iconSize: {
            type: 'number',
            default: 80,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-59/preview.jpeg' }` } /> );

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
                    className={ `kfl3 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className={ `kenzap-container ${ additionalClassForKenzapContainer }` } style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kenzap-row">
                            { attributes.items && attributes.items.map( item => (
                                <div
                                    key={ item.key }
                                    className="kenzap-col-3"
                                >
                                    <div className="featured-box">
                                        <img
                                            src={ (item.iconMediaUrl) }
                                            alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                            style={ featuredImg }
                                        />
                                        <RichText.Content
                                            tagName="h3"
                                            value={ item.title }
                                            style={ getTypography( attributes, 0 ) }
                                        />
                                        <RichText.Content
                                            tagName="p"
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
