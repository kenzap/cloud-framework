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
    title: __( 'Ceasar Salad', 'kenzap-pricing' ),
    description: __( 'with village chicken or bacon', 'kenzap-pricing' ),
    price: '3.30',
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Ceasar Salad', 'kenzap-pricing' ),
        description: __( '<em>with village chicken or bacon</em>', 'kenzap-pricing' ),
        price: '3.30',
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'Pizza Margarita', 'kenzap-pricing' ),
        description: __( '<em>with homemade tomatoe pasta</em>' ),
        price: '5.00',
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'Minestrone', 'kenzap-pricing' ),
        description: __( '<em>with homefries</em>' ),
        price: '4.20',
        key: new Date().getTime() + 3,
    },
    {
        title: __( 'Gnocchi', 'kenzap-pricing' ),
        description: __( '<em>with homefries</em>' ),
        price: '10.00',
        key: new Date().getTime() + 4,
    },
    {
        title: __( 'Eggplant Parmigianno', 'kenzap-pricing' ),
        description: __( '<em>with “soldiers”</em>' ),
        price: '12.50',
        key: new Date().getTime() + 5,
    },
    {
        title: __( 'Pasta Carbonara', 'kenzap-pricing' ),
        description: __( '<em>with “soldiers”</em>' ),
        price: '8.00',
        key: new Date().getTime() + 6,
    },
    {
        title: __( 'Pasto Bolognese', 'kenzap-pricing' ),
        description: __( '<em>with homefries & toast</em>' ),
        price: '9.00',
        key: new Date().getTime() + 7,
    },
    {
        title: __( 'Sunny Side up Eggs', 'kenzap-pricing' ),
        description: __( '<em>with fresh lettuce and avocado</em>' ),
        price: '12.00',
        key: new Date().getTime() + 8,
    },
    {
        title: __( 'Eggs Benedict', 'kenzap-pricing' ),
        description: __( '<em>with french fries</em>' ),
        price: '11.00',
        key: new Date().getTime() + 9,
    },
    {
        title: __( 'Fish & Chips', 'kenzap-pricing' ),
        description: __( '<em>with french fries</em>' ),
        price: '22.00',
        key: new Date().getTime() + 10,
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
    };

    if(attributes.titleColor) vars['--titleColor'] = `${ attributes.titleColor }`;
    if(attributes.backgroundColor) vars['--backgroundColor'] = `${ attributes.backgroundColor }`;

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
        'font-size': 29,
        'font-weight': 4,
        'line-height': 34,
        'margin-bottom': 0,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-pricing' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 25,
        'color': '#cbd7e3',
    },
    {
        'title': __( '- Price', 'kenzap-pricing' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 25,
        'color': '#cbd7e3',
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
registerBlockType( 'kenzap/cta-48', {
    title: __( 'Pricing Lists', 'kenzap-pricing' ),
    icon: 'tickets-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 48', 'kenzap-pricing' ),
        __( 'two column pricing tables', 'kenzap-pricing' ),
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
           // default: '#222023',
        },

        titleColor: {
            type: 'string',
           // default: '#222023',
        },

        titleSize: {
            type: 'number',
            default: 22,
        },

        descriptionSize: {
            type: 'number',
            default: 16,
        },

        isTwoColumn: {
            type: 'boolean',
            default: true,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-48/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                backgroundColor: '#23282d',
                titleColor: '#ccc',
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
                    className={ `kenzap-pricing-7 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="kp-pricing-table">
                            { attributes.isTwoColumn ? (
                                <div className="kenzap-row">
                                    { attributes.items && attributes.items.map( ( item, index ) => (
                                        <div
                                            key={ item.key }
                                            className="kenzap-col-6"
                                        >
                                            <div className="pricing-box">
                                                <RichText.Content
                                                    tagName="h3"
                                                    value={ item.title }
                                                    style={ getTypography( attributes, 0 ) }
                                                    // style={ {
                                                    //     color: attributes.titleColor,
                                                    //     fontSize: `${ attributes.titleSize }px`,
                                                    // } }
                                                />
                                                <p //style={ { color: attributes.textColor } }
                                                >
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={ item.description }
                                                        style={ getTypography( attributes, 1 ) }
                                                        // style={ {
                                                        //     color: attributes.textColor,
                                                        //     fontSize: `${ attributes.descriptionSize }px`,
                                                        //     backgroundColor: attributes.backgroundColor,
                                                        // } }
                                                    />
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={ item.price }
                                                        style={ getTypography( attributes, 2 ) }
                                                        // style={ {
                                                        //     color: attributes.textColor,
                                                        //     fontSize: `${ attributes.descriptionSize }px`,
                                                        //     backgroundColor: attributes.backgroundColor,
                                                        // } }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            ) : attributes.items && attributes.items.map( ( item, index ) => (
                                <div
                                    className="pricing-box"
                                    key={ item.key }
                                >
                                    <RichText.Content
                                        tagName="h3"
                                        value={ item.title }
                                        style={ getTypography( attributes, 0 ) }
                                        // style={ {
                                        //     color: attributes.titleColor,
                                        //     fontSize: `${ attributes.titleSize }px`,
                                        // } }
                                    />
                                    <p //style={ { color: attributes.textColor } }
                                    >
                                        <RichText.Content
                                            tagName="span"
                                            value={ item.description }
                                            style={ getTypography( attributes, 1 ) }
                                            // style={ {
                                            //     color: attributes.textColor,
                                            //     fontSize: `${ attributes.descriptionSize }px`,
                                            //     backgroundColor: attributes.backgroundColor,
                                            // } }
                                        />
                                        <RichText.Content
                                            tagName="span"
                                            value={ item.price }
                                            style={ getTypography( attributes, 2 ) }
                                            // style={ {
                                            //     color: attributes.textColor,
                                            //     fontSize: `${ attributes.descriptionSize }px`,
                                            //     backgroundColor: attributes.backgroundColor,
                                            // } }
                                        />
                                    </p>
                                </div>
                            ) )
                            }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
