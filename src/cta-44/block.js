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
    title: __( 'Beginner', 'kenzap-pricing' ),
    currency: __( '$', 'kenzap-pricing' ),
    price: '25',
    subDescription: '' +
    '<li>Lorem ipsum dolor sit ametv</li>' +
    '<li>Consectetur adipisicing elit</li>' +
    '<li>Incididunt ut labore et dolore</li>' +
    '<li>Sed do eiusmod tempor</li>',
    ctaText: 'View Offer',
    ctaUrl: window.location.origin + '/',
    ctaUrlTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Beginner', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '25',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit ametv</li>' +
        '<li>Consectetur adipisicing elit</li>' +
        '<li>Incididunt ut labore et dolore</li>' +
        '<li>Sed do eiusmod tempor</li>',
        ctaText: 'View Offer',
        ctaUrl: window.location.origin + '/',
        ctaUrlTarget: false,
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'Strater', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '60',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit ametv</li>' +
        '<li>Consectetur adipisicing elit</li>' +
        '<li>Incididunt ut labore et dolore</li>' +
        '<li>Sed do eiusmod tempor</li>',
        ctaText: 'View Offer',
        ctaUrl: window.location.origin + '/',
        ctaUrlTarget: false,
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'Professional', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '99',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit ametv</li>' +
        '<li>Consectetur adipisicing elit</li>' +
        '<li>Incididunt ut labore et dolore</li>' +
        '<li>Sed do eiusmod tempor</li>',
        ctaText: 'View Offer',
        ctaUrl: window.location.origin + '/',
        ctaUrlTarget: false,
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
        '--textColor': attributes.textColor,
        '--ctaTextColor': attributes.ctaTextColor,
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
        'title': __( '- Title', 'kenzap-pricing' ),
        'font-size': 25,
        'font-weight': 5,
        'line-height': 32,
        'margin-top': 20,
        'margin-bottom': 18,
        'color': '#313131',
    },
    {
        'title': __( '- Currency', 'kenzap-pricing' ),
        'font-size': 30,
        'font-weight': 5,
        'line-height': 30,
        'margin-bottom': 0,
        'color': '#313131',
    },
    {
        'title': __( '- Price', 'kenzap-pricing' ),
        'font-size': 50,
        'font-weight': 5,
        'line-height': 60,
        'margin-bottom': 18,
        'color': '#313131',
    },
    {
        'title': __( '- Features', 'kenzap-pricing' ),
        'font-size': 13,
        'font-weight': 4,
        'line-height': 26,
        'color': '#313131',
    },
    {
        'title': __( '- Link', 'kenzap-pricing' ),
        'font-size': 13,
        'font-weight': 5,
        'line-height': 26,
        'margin-bottom': 20,
        'color': '#282828',
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
registerBlockType( 'kenzap/cta-44', {
    title: __( 'Multi Color Pricing Table', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 44', 'kenzap-pricing' ),
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

        titleSize: {
            type: 'number',
            default: 25,
        },

        listDescriptionSize: {
            type: 'number',
            default: 13,
        },

        textColor: {
            type: 'string',
            default: '#313131',
        },

        ctaTextColor: {
            type: 'string',
            default: '#282828',
        },

        cardBorderRadius: {
            type: 'number',
            default: 50,
        },

        cardColor: {
            type: 'string',
            default: '#fcb900',
        },

        cardFeaturedColor: {
            type: 'string',
            default: '#8ed1fc',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-44/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                containerMaxWidth: '1200'
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
                    className={ `kenzap-pricing-2 block-${ attributes.blockUniqId }` }
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
                                            className="pricing-box"
                                            style={ {
                                                borderRadius: attributes.cardBorderRadius,
                                                background: ( index + 1 ) % 2 === 0 ? attributes.cardFeaturedColor : attributes.cardColor,
                                            } }
                                        >
                                            <RichText.Content
                                                tagName="h3"
                                                value={ item.title }
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                            <strong
                                                style={ {
                                                    lineHeight: 1.2,
                                                } }
                                                className="kp-price"
                                            >
                                                <sup 
                                                style={ getTypography( attributes, 1 ) }
                                                >{ item.currency }</sup>
                                                <span style={ getTypography( attributes, 2 ) }>{ item.price }</span>
                                            </strong>

                                            <RichText.Content
                                                tagName="ul"
                                                value={ item.subDescription }
                                                style={ getTypography( attributes, 3 ) }
                                            />
                                            <a
                                                href={ item.ctaUrl ? item.ctaUrl : 'javascript:;' }
                                                target={ item.ctaUrlTarget ? '_blank' : '_self' }
                                                style={ getTypography( attributes, 4 ) }
                                                className="kp-link"
                                                rel="noopener noreferrer"
                                            >
                                                { item.ctaText }
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
