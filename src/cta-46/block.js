import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'INDIVIDUAL', 'kenzap-pricing' ),
        period: __( 'Yearly', 'kenzap-pricing' ),
        price: '$86',
        cents: '.99',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit ametv</li>' +
        '<li>Consectetur adipisicing elit</li>' +
        '<li>Incididunt ut labore et dolore</li>' +
        '<li>Sed do eiusmod tempor</li>',
        ctaText: 'GET NOW',
        ctaUrl: window.location.origin + '/',
        ctaUrlTarget: false,
        key: new Date().getTime() + 1,
        id: 'monthly',
    },
    {
        title: __( 'BUSINESS', 'kenzap-pricing' ),
        period: __( 'Yearly', 'kenzap-pricing' ),
        price: '$280',
        cents: '.99',
        subDescription: '' +
        '<li>Lorem ipsum dolor sit ametv</li>' +
        '<li>Consectetur adipisicing elit</li>' +
        '<li>Incididunt ut labore et dolore</li>' +
        '<li>Sed do eiusmod tempor</li>',
        ctaText: 'GET NOW',
        ctaUrl: window.location.origin + '/',
        ctaUrlTarget: false,
        key: new Date().getTime() + 2,
        id: 'yearly',
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
        'title': __( '- Note', 'kenzap-pricing' ),
        'font-size': 18,
        'font-weight': 4,
        'line-height': 18,
        'margin-bottom': 22,
        'text-align': 'left',
        'color':'#a2a4a5'
    },
    {
        'title': __( '- Title', 'kenzap-pricing' ),
        'type': 'title',
        'font-size': 60,
        'font-size-t': 45,
        'font-size-m': 30,
        'font-weight': 6,
        'line-height': 64,
        'margin-top': 54,
        'margin-bottom': 28,
        'text-align': 'left',
        'color':'#23282d'
    },
    {
        'title': __( '- Description', 'kenzap-pricing' ),
        'font-size': 17,
        'font-weight': 4,
        'line-height': 32,
        'margin-bottom': 30,
        'text-align': 'left',
        'color':'#666666'
    },
    {
        'title': __( '- Button', 'kenzap-pricing' ),
        'type': 'button',
        'font-size': 18,
        'font-weight': 4,
        'line-height': 55,
        'border-radius': 4,
        'margin-bottom': 0,
        'color':'#23282d',
        'background-color':'#ffffff',
        'hover-color':'#ffffff',
        'hover-background-color':'#007cba',
    },
    {
        'title': __( '- Table title', 'kenzap-pricing' ),
        'font-size': 18,
        'font-weight': 4,
        'line-height': 18,
        'margin-bottom': 0,
        'color':'#23282d'
    },
    {
        'title': __( '- Table subtitle', 'kenzap-pricing' ),
        'font-size': 17,
        'font-weight': 4,
        'line-height': 32,
        'margin-top': 10,
        'margin-bottom': 10,
        'color':'#b1b1b1'
    },
    {
        'title': __( '- Table price 1', 'kenzap-pricing' ),
        'font-size': 60,
        'font-weight': 6,
        'line-height': 72,
        'margin-top': 0,
        'margin-bottom': 30,
        'color':'#282828'
    },
    {
        'title': __( '- Table price 2', 'kenzap-pricing' ),
        'font-size': 40,
        'font-weight': 5,
        'line-height': 52,
        'margin-top': 0,
        'margin-bottom': 0,
        'color':'#282828'
    },
    {
        'title': __( '- Table text', 'kenzap-pricing' ),
        'font-size': 17,
        'font-weight': 4,
        'line-height': 34,
        'margin-top': 0,
        'padding-bottom': 45,
        'color':'#282828'
    },
    {
        'title': __( '- Table button', 'kenzap-pricing' ),
        'type': 'button',
        'font-size': 15,
        'font-weight': 6,
        'line-height': 41,
        'margin-top': 0,
        'border-radius': 50,
        'padding-bottom': 0,
        'color':'#23282d'
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
registerBlockType( 'kenzap/cta-46', {
    title: __( 'Animated Pricing Table', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 46', 'kenzap-pricing' ),
        __( 'pricing', 'kenzap-pricing' ),
        __( 'corporate pricing table', 'kenzap-pricing' ),
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

        title: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit ametv lorem ipsum dolor', 'kenzap-pricin' ),
        },

        organization: {
            type: 'string',
            default: __( 'Kenzap Cloud', 'kenzap-pricing' ),
        },

        description: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit ametv lorem ipsum dolor sit ametv lorem ipsum dolor sit ametv.', 'kenzap-pricing' ),
        },

        cardBackgroundColor: {
            type: 'string',
            ///default: '#fff',
        },

        cardBorderRadius: {
            type: 'number',
            default: 0,
        },

        gradientColor: {
            type: 'string',
            //default: '#0c5adb',
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-46/preview.jpeg' }` } /> );
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                backgroundColor: '#f9fcfe',
                gradientColor: '#0c5adb',
                containerMaxWidth: '1200',
                cardBackgroundColor: '#ffffff'
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
                    className={ `kenzap-pricing-4 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kp-pricing-table">
                            <div className="kenzap-row">
                                <div className="kenzap-col-6">
                                    <h2 style={ { ...getTypography( attributes, 1, "margin-top" ), ...getTypography( attributes, 1, "margin-bottom" ) } }>
                                        <RichText.Content
                                            tagName="div"
                                            className="organization"
                                            value={ attributes.organization }
                                            style={ getTypography( attributes, 0 ) }
                                        />
                                        <RichText.Content
                                            tagName="span"
                                            value={ attributes.title }
                                            style={ getTypography( attributes, 1 ) }
                                        />
                                    </h2>
                                    <RichText.Content
                                        tagName="p"
                                        value={ attributes.description }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                    { attributes.isFilterShow &&
                                        <div className="tabs-nav">
                                            <ul>
                                                <li className="active">
                                                    <a href="#monthly" style={ getTypography( attributes, 3 ) }>{ attributes.tableTypes.individual }</a>
                                                </li>
                                                <li className="">
                                                    <a href="#yearly" style={ getTypography( attributes, 3 ) }>{ attributes.tableTypes.business }</a>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                                <div className="kenzap-col-6">
                                    <div className="tabs-content">
                                        { attributes.items && attributes.items.map( ( item, index ) => (
                                            <div
                                                id={ item.id }
                                                key={ item.key }
                                                className={ 'tab-content' }
                                            >
                                                <div
                                                    className="pricing-box"
                                                    style={ {
                                                        background: attributes.cardBackgroundColor,
                                                        borderRadius: attributes.cardBorderRadius,
                                                    } }
                                                >
                                                    <h3>
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={ item.title }
                                                            style={ getTypography( attributes, 4 ) }
                                                        />
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={ item.period }
                                                            className="period"
                                                            style={ getTypography( attributes, 5 ) }
                                                        />
                                                    </h3>

                                                    <strong
                                                        style={ getTypography( attributes, 6 ) }
                                                        className="kp-price"
                                                    >
                                                        { item.price }
                                                        <sup style={ getTypography( attributes, 7 ) }>{ item.cents }</sup>
                                                    </strong>

                                                    <RichText.Content
                                                        tagName="ul"
                                                        value={ item.subDescription }
                                                        style={ getTypography( attributes, 8 ) }
                                                    />
                                                    <a
                                                        href={ item.ctaUrl ? item.ctaUrl : 'javascript:;' }
                                                        target={ item.ctaUrlTarget ? '_blank' : '_self' }
                                                        className="kp-link"
                                                        style={ getTypography( attributes, 9 ) }
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span>{ item.ctaText }</span>
                                                    </a>
                                                </div>
                                            </div>
                                        ) ) }
                                    </div>
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
