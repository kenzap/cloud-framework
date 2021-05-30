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
    title: __( 'BASIC', 'kenzap-pricing' ),
    description: __( 'Start hosting right now without installation fee.', 'kenzap-pricing' ),
    currency: __( '$', 'kenzap-pricing' ),
    price: '100',
    period: __( 'mo', 'kenzap-pricing' ),
    iconMediaId: '',
    iconMediaUrl: '',
    subDescription: '' +
    '<li>Free Installation</li>' +
    '<li>20 WordPress Themes Included</li>' +
    '<li>1 Month of Kenzap Cloud</li>' +
    '<li>1 Month of Free Support</li>' +
    '<li>Search Engine Optimization</li>',
    buttonText: 'Read more',
    buttonUrl: window.location.origin + '/',
    buttonUrlTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'BASIC', 'kenzap-pricing' ),
        description: __( 'Start hosting right now without installation fee.', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '100',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-43/pricing-img-1.png',
        subDescription: '' +
        '<li>Free Installation</li>' +
        '<li>20 WordPress Themes Included</li>' +
        '<li>1 Month of Kenzap Cloud</li>' +
        '<li>1 Month of Free Support</li>' +
        '<li>Search Engine Optimization</li>',
        buttonText: 'Read more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'AGENCY', 'kenzap-pricing' ),
        description: __( 'Start hosting right now without installation fee.', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '125',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-43/pricing-img-2.png',
        subDescription: '' +
        '<li>Free Installation</li>' +
        '<li>50 WordPress Themes Included</li>' +
        '<li>2 Month of Kenzap Cloud</li>' +
        '<li>2 Month of Free Support</li>' +
        '<li>Search Engine Optimization</li>',
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'ADVANCED', 'kenzap-pricing' ),
        description: __( 'Start hosting right now without installation fee.', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '230',
        period: __( 'mo', 'kenzap-pricing' ),
        iconMediaId: '',
        iconMediaUrl: window.kenzap_cta_path + 'cta-43/pricing-img-3.png',
        subDescription: '' +
        '<li>Free Installation</li>' +
        '<li>200 WordPress Themes Included</li>' +
        '<li>5 Month of Kenzap Cloud</li>' +
        '<li>5 Month of Free Support</li>' +
        '<li>Search Engine Optimization</li>',
        buttonText: 'Read more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 3,
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
        // '--paddingsMin': `${ attributes.containerPadding / 4 }`,
        // '--paddingsMinPx': `${ attributes.containerPadding / 4 }px`,
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
        'title': __( '- Title', 'kenzap-timeline' ),
        'font-size': 22,
        'font-weight': 6,
        'line-height': 24,
        'margin-bottom': 12,
        'color': '-',
    },
    {
        'title': __( '- Description', 'kenzap-timeline' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 26,
        'margin-bottom': 15,
        'padding-left': 60,
        'padding-right': 60,
    },
    {
        'title': __( '- Price', 'kenzap-timeline' ),
        'font-size': 55,
        'font-weight': 4,
        'line-height': 66,
        'margin-top': 22,
        'margin-bottom': 22,
        'padding-top': 30,
        'padding-bottom': 30,
    },
    {
        'title': __( '- List', 'kenzap-timeline' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 26,
        'padding-bottom': 30,
    },
    {
        'title': __( '- Button', 'kenzap-timeline' ),
        'type': 'button',
        'font-size': 15,
        'font-weight': 5,
        'line-height': 24,
        'padding-top': 15,
        'padding-right': 35,
        'padding-bottom': 15,
        'padding-left': 35,
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
registerBlockType( 'kenzap/cta-43', {
    title: __( 'Full Width Pricing Table', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 43', 'kenzap-pricing' ),
        __( 'pricing', 'kenzap-pricing' ),
        __( 'price table', 'kenzap-pricing' ),
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

        backgroundColor: {
            type: 'string',
            default: '#23282d',
        },

        iconSize: {
            type: 'number',
            default: 100,
        },

        cardBorderRadius: {
            type: 'number',
            default: 0,
        },

        bestSellerBlock: {
            type: 'number',
            default: 2,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-43/preview.jpeg' }` } /> );

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

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-pricing-1 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kp-pricing-table">
                            <div className="kenzap-row">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className="kenzap-col-4"
                                    >
                                        <div
                                            className={ `pricing-box ${ attributes.bestSellerBlock === index + 1 ? 'best-seller' : '' }` }
                                            style={ {
                                                borderRadius: attributes.cardBorderRadius,
                                            } }
                                        >
                                            { attributes.iconSize > 0 && 
                                            <img
                                                src={ item.iconMediaUrl }
                                                alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                                style={ { height: attributes.iconSize } }
                                            /> }
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
                                            <strong
                                                style={ getTypography( attributes, 2 ) }
                                                className="kp-price"
                                            >
                                                <sup >{ item.currency }</sup>
                                                { item.price }
                                                <sub >/{ item.period }</sub>
                                            </strong>

                                            <RichText.Content
                                                tagName="ul"
                                                value={ item.subDescription }
                                                style={ getTypography( attributes, 3 ) }
                                            />
                                            <a
                                                href={ item.buttonUrl ? item.buttonUrl : 'javascript:;' }
                                                target={ item.buttonUrlTarget ? '_blank' : '_self' }
                                                style={ getTypography( attributes, 4 ) }
                                                className="kp-link"
                                                rel="noopener noreferrer"
                                            >
                                                <RichText.Content
                                                    value={ item.buttonText }
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
