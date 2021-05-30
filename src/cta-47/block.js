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
    title: __( 'Free Version', 'kenzap-pricing' ),
    currency: __( '$', 'kenzap-pricing' ),
    price: '0',
    subItems: [
        { option: __( 'Lorem Impusm', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ) },
        { option: __( 'Dolor', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ) },
        { option: __( 'Sit An', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ) },
        { option: __( 'Amet', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ) },
        { option: __( 'Ipsum', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ) },
        { option: __( 'Moreno', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ) },
    ],
    buttonText: 'Learn more',
    buttonUrl: window.location.origin + '/',
    buttonUrlTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Free Version', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '0',
        subItems: [
            { option: __( 'Lorem Impusm', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 1 },
            { option: __( 'Dolor', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 2 },
            { option: __( 'Sit An', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 3 },
            { option: __( 'Amet', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() + 4 },
            { option: __( 'Ipsum', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() + 5 },
            { option: __( 'Moreno', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() + 6 },
        ],
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'Entry Level', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '5',
        subItems: [
            { option: __( 'Lorem Impusm', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 1 },
            { option: __( 'Dolor', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 2 },
            { option: __( 'Sit An', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 3 },
            { option: __( 'Amet', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 4 },
            { option: __( 'Ipsum', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() + 5 },
            { option: __( 'Moreno', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() + 6 },
        ],
        buttonText: 'Learn more',
        buttonUrl: window.location.origin + '/',
        buttonUrlTarget: false,
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'Pro Level', 'kenzap-pricing' ),
        currency: __( '$', 'kenzap-pricing' ),
        price: '10',
        subItems: [
            { option: __( 'Lorem Impusm', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 1 },
            { option: __( 'Dolor', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 2 },
            { option: __( 'Sit An', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 3 },
            { option: __( 'Amet', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 4 },
            { option: __( 'Ipsum', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 5 },
            { option: __( 'Moreno', 'kenzap-pricing' ), availability: __( 'Yes', 'kenzap-pricing' ), key: new Date().getTime() + 6 },
        ],
        buttonText: 'Learn more',
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
        '--paddingsMin': `${ attributes.containerPadding / 4 }`,
        '--paddingsMinPx': `${ attributes.containerPadding / 4 }px`,
        '--textColor': `${ attributes.textColor }`,
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
        'font-size': 20,
        'font-weight': 6,
        'line-height': 28,
        'margin-bottom': 30,
        'color': '#850202',
    },
    {
        'title': __( '- Currency', 'kenzap-pricing' ),
        'font-size': 20,
        'font-weight': 5,
        'line-height': 20,
        'color': '#850202',
    },
    {
        'title': __( '- Price', 'kenzap-pricing' ),
        'font-size': 70,
        'font-weight': 3,
        'line-height': 87,
        'color': '#850202',
    },
    {
        'title': __( '- Features', 'kenzap-pricing' ),
        'font-size': 15,
        'font-weight': 3,
        'line-height': 26,
        'color': '#850202',
        'text-align': '-',
    },
    {
        'title': __( '- Button', 'kenzap-pricing' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
        'padding-top': 15,
        'padding-right': 10,
        'padding-bottom': 15,
        'padding-left': 10,
        'color': '#ffffff',
        'background-color': '#850202',
        'border-width': 2,
        'hover-color': '#850202',
        'hover-background-color': '#ffffff',
    },
    {
        'title': __( '- Ribbon', 'kenzap-pricing' ),
        'font-size': 15,
        'font-weight': 3,
        'line-height': 30,
        'padding-top': 5,
        'padding-right': 15,
        'padding-bottom': 5,
        'padding-left': 15,
        'background-color': '#850202',
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
registerBlockType( 'kenzap/cta-47', {
    title: __( 'Classical Pricing Table', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 47', 'kenzap-pricing' ),
        __( 'pricing table', 'kenzap-pricing' ),
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

        containerPadding: {
            type: 'number',
            default: 150,
        },

        textColor: {
            type: 'string',
            //default: '#850202',
        },

        tableColor: {
            type: 'string',
            //default: '#fff',
        },

        bestSellerBlock: {
            type: 'number',
            default: 2,
        },

        bestSellerBlockText: {
            type: 'string',
            default: 'Best',
        },

        cardBorderRadius: {
            type: 'number',
            default: 0,
        },

        buttonBorderRadius: {
            type: 'number',
            default: 0,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-47/preview.jpeg' }` } /> );
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                textColor: '#f0f0f0',
                tableColor: '#ffffff',
                containerMaxWidth: '1200',
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
                    className={ `kenzap-pricing-6 block-${ attributes.blockUniqId }` }
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
                                                background: attributes.tableColor,
                                            } }
                                        >
                                            { (attributes.bestSellerBlock === index + 1) && <RichText.Content
                                                tagName="span"
                                                className="ribbon"
                                                value={ attributes.bestSellerBlockText }
                                                style={ getTypography( attributes, 5 ) }
                                            /> }
                                            
                                            <RichText.Content
                                                tagName="h3"
                                                value={ item.title }
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                            <strong
                                                className="kp-price"
                                            >
                                                <sup style={ getTypography( attributes, 1 ) }>{ item.currency }</sup>
                                                <span style={ getTypography( attributes, 2 ) }>{ item.price }</span>
                                            </strong>

                                            <ul>
                                                { item.subItems.map( subItem => (
                                                    <li
                                                        key={ subItem.key }
                                                        style={ getTypography( attributes, 3 ) }
                                                    >
                                                        { subItem.option } <strong style={ { ...getTypography( attributes, 3, 'font-size' ), ...getTypography( attributes, 3, 'color' ) } }>{ subItem.availability }</strong>
                                                    </li>
                                                ) ) }
                                            </ul>

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
