import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'PRICING A', 'kenzap-pricing' ),
    currency: __( '$', 'kenzap-pricing' ),
    price: '19.99',
    period: __( 'mo', 'kenzap-pricing' ),
    iconMediaId: '',
    iconMediaUrl: '',
    subDescription: '' +
    '<li>Lorem ipsum dolor sit</li>' +
    '<li>Consectetur adipisicing</li>' +
    '<li>Incididunt ut labore et\n</li>' +
    '<li>Sed do eiusmod tempor</li>' +
    '<li>24/7 support</li>',
    buttonText: 'Learn more',
    buttonUrl: window.location.origin + '/',
    buttonUrlTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'PRICING A', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '19.99',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-1.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'PRICING B', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '59.99',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-2.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'PRICING C', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '99.99',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-3.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 3,
    },
] );

export const defaultBusinessSubBlocks = JSON.stringify( [
    {
        title: __( 'PRICING A', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '29.99',
        period: __( 'Monthly', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-1.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 111,
    },
    {
        title: __( 'PRICING B', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '69.99',
        period: __( 'Monthly', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-2.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 333,
    },
    {
        title: __( 'PRICING C', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '209.99',
        period: __( 'Monthly', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-45/pricing-img-3.png',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit</li>' +
        '<li>Consectetur adipisicing</li>' +
        '<li>Incididunt ut labore et\n</li>' +
        '<li>Sed do eiusmod tempor</li>' +
        '<li>24/7 support</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 222,
    },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100vw' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--blueColor': attributes.blueColor,
        '--textColorBestSeller': attributes.textColorBestSeller,
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
        'title': __( '- Tabs', 'kenzap-pricing' ),
        'font-size': 16,
        'font-weight': 5,
        'line-height': 27,
        'padding-top': 8,
        'padding-right': 31,
        'padding-bottom': 8,
        'padding-left': 31,
        'color': '-',
    },
    {
        'title': __( '- Title', 'kenzap-pricing' ),
        'font-size': 24,
        'font-weight': 7,
        'line-height': 28,
        'margin-bottom': 25,
        'color': '-',
    },
    {
        'title': __( '- Currency', 'kenzap-pricing' ),
        'font-size': 32,
        'font-weight': 7,
        'color': '-',
    },
    {
        'title': __( '- Price', 'kenzap-pricing' ),
        'font-size': 48,
        'font-weight': 7,
        'line-height': 60,
        'color': '-',
    },
    {
        'title': __( '- Period', 'kenzap-pricing' ),
        'font-size': 21,
        'font-weight': 4,
        'line-height': 0,
        'color': '-',
    },
    {
        'title': __( '- Features', 'kenzap-pricing' ),
        'font-size': 18,
        'font-weight': 4,
        'line-height': 32,
        'color': '-',
    },
    {
        'title': __( '- Button', 'kenzap-pricing' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 55,
        'padding-top': 0,
        'padding-right': 51,
        'padding-bottom': 0,
        'padding-left': 51,
        'color': '-',
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
registerBlockType( 'kenzap/cta-45', {
    title: __( 'Tabbed Pricing Table', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 45', 'kenzap-pricing' ),
        __( 'pricing table', 'kenzap-pricing' ),
        __( 'compare prices', 'kenzap-pricing' ),
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
            default: 110,
        },

        titleSize: {
            type: 'number',
            default: 24,
        },

        listDescriptionSize: {
            type: 'number',
            default: 18,
        },

        textColor: {
            type: 'string',
        },

        textColorBestSeller: {
            type: 'string',
        },

        blueColor: {
            type: 'string',
            default: '#0c5adb',
        },

        bestSellerBlock: {
            type: 'number',
            default: 2,
        },

        bestSellerBusinessBlock: {
            type: 'number',
            default: 2,
        },

        cardBorderRadius: {
            type: 'number',
            default: 0,
        },

        buttonBorderRadius: {
            type: 'number',
            default: 30,
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
            type: 'array',
            default: [],
        },

        itemsBusiness: {
            type: 'array',
            default: [],
        },

        tableTypes: {
            type: 'object',
            default: {
                individual: __( 'Individual', 'kenzap-pricing' ),
                business: __( 'Business', 'kenzap-pricing' ),
            },
        },

        isFilterShow: {
            type: 'boolean',
            default: true,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-45/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                itemsBusiness: [ ...JSON.parse( defaultBusinessSubBlocks ) ],
                backgroundColor: '#f8fafe',
                textColor: '#192225',
                textColorBestSeller:'#ffffff',
                containerMaxWidth: '1200',
                isFirstLoad: false,
            } );
            props.attributes.items = JSON.parse( defaultSubBlocks );
            props.attributes.itemsBusiness = JSON.parse( defaultBusinessSubBlocks );
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

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        const getItems = ( itemsType, bestSellerBlock ) => (
            <div className="kenzap-row">
                { attributes[ itemsType ] && attributes[ itemsType ].map( ( item, index ) => (
                    <div
                        key={ item.key }
                        className="kenzap-col-4"
                    >
                        <div
                            className={ `pricing-box ${ bestSellerBlock === index + 1 ? 'best-seller' : '' }` }
                            style={ {
                                background: bestSellerBlock === index + 1 ? attributes.blueColor : '#fff',
                                borderRadius: attributes.cardBorderRadius,
                            } }
                        >
                            <RichText.Content
                                tagName="h3"
                                value={ item.title }
                                style={ {
                                    ...getTypography( attributes, 1 ), 
                                    color: bestSellerBlock === index + 1 ? attributes.textColorBestSeller : attributes.textColor,
                                } }
                            />
                            { attributes.iconSize > 0 &&
                            <img
                                src={ item.iconMediaUrl }
                                alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                style={ { height: `${ attributes.iconSize }px` } }
                            /> }
                            <strong
                                style={ {
                                    lineHeight: 1.2,
                                    color: bestSellerBlock === index + 1 ? attributes.textColorBestSeller : attributes.blueColor,
                                } }
                                className="kp-price"
                            >
                                <sup style={ { ...getTypography( attributes, 2 ), color: bestSellerBlock === index + 1 ? attributes.textColorBestSeller : attributes.blueColor } }>{ item.currency }</sup>
                                <span style={ { ...getTypography( attributes, 3 ) } } >{ item.price }</span>
                                <sub style={ { ...getTypography( attributes, 4 ), color: bestSellerBlock === index + 1 ? attributes.textColorBestSeller : attributes.blueColor } }>/{ item.period }</sub>
                            </strong>

                            <RichText.Content
                                tagName="ul"
                                value={ item.subDescription }
                                style={ {
                                    ...getTypography( attributes, 5 ),
                                    color: bestSellerBlock === index + 1 ? attributes.textColorBestSeller : attributes.textColor,
                                } }
                            />
                            <a
                                href={ item.buttonUrl ? item.buttonUrl : 'javascript:;' }
                                target={ item.buttonUrlTarget ? '_blank' : '_self' }
                                style={ {
                                    ...getTypography( attributes, 6 ),
                                    '--blueColor': attributes.blueColor,
                                    borderRadius: attributes.buttonBorderRadius,
                                } }
                                className={ ` kp-link ${ bestSellerBlock === index + 1 ? 'inverse' : attributes.blueColor }` }
                                rel="noopener noreferrer"
                            >
                                { item.buttonText }
                            </a>
                        </div>
                    </div>
                ) ) }
            </div>
        );

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-pricing-3 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kp-pricing-table">
                            { attributes.isFilterShow &&
                                <div className="tabs-nav" style={ { background: attributes.blueColor } }>
                                    <ul>
                                        <li className="active">
                                            <a href="#monthly">{ attributes.tableTypes.individual }</a>
                                        </li>
                                        <li className="">
                                            <a href="#yearly">{ attributes.tableTypes.business }</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                            <div className="tabs-content">
                                <div id="monthly" className="tab-content" style={ { display: 'block' } }>
                                    { getItems( 'items', attributes.bestSellerBlock ) }
                                </div>
                                <div id="yearly" className="tab-content">
                                    { getItems( 'itemsBusiness', attributes.bestSellerBusinessBlock ) }
                                </div>
                            </div>

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
