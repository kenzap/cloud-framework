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
    title: __( 'New Step', 'kenzap-steps' ),
    description: __( 'Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu', 'kenzap-steps' ),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'AWESOME COLLAGES', 'kenzap-steps' ),
        description: __( 'Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu', 'kenzap-steps' ),
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'CREATIVE TEAM', 'kenzap-steps' ),
        description: __( 'Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu', 'kenzap-steps' ),
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'CONCEPTUAL ART', 'kenzap-steps' ),
        description: __( 'Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu', 'kenzap-steps' ),
        key: new Date().getTime() + 3,
    },
    {
        title: __( 'PRINT & DIGITAL', 'kenzap-steps' ),
        description: __( 'Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu', 'kenzap-steps' ),
        key: new Date().getTime() + 4,
    },
] );

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-steps' ),
        'font-size': 24,
        'font-weight': 7,
        'line-height': 31,
        'margin-bottom': 15,
        'color': '#23282d',
    },
    {
        'title': __( '- Description', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 15,
        'font-weight': 4,
        'line-height': 25,
        'letter-spacing': 100,
        'color': '#23282d',
    },
]);

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
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    if( typeof(attributes.stepStrokeNumberColor) !== 'undefined' ) vars['--stepStrokeNumberColor'] = `${ attributes.stepStrokeNumberColor }`;

    return {
        vars,
        kenzapContanerStyles,
    };
};

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
registerBlockType( 'kenzap/cta-38', {
    title: __( 'Outlined Steps', 'kenzap-steps' ),
    icon: 'networking',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 38', 'kenzap-steps' ),
        __( 'animated line steps', 'kenzap-steps' ),
        __( 'features, numbers', 'kenzap-steps' ),
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
            default: 24,
        },

        descriptionSize: {
            type: 'number',
            default: 15,
        },

        numberSize: {
            type: 'number',
            default: 140,
        },

        stepNumberColor: {
            type: 'string',
        },

        stepStrokeNumberColor: {
            type: 'string',
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
            type: 'array',
            default: [],
        },

        alignment: {
            type: 'string',
            default: 'none',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        randomValue: {
            type: 'string',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-38/preview.jpeg' }` } /> );

        if ( !props.attributes.stepNumberColor ){ props.setAttributes( {stepNumberColor: '#ffffff',} ); }

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                stepStrokeNumberColor: '#23282d',
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
                    className={ `kenzap-steps-5 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="step-list">
                            <div className="kenzap-row">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className="kenzap-col-3"
                                    >
                                        <div className="step-box">
                                            <div className="step-count">
                                                <span style={ {
                                                        fontSize: `${ attributes.numberSize }px`,
                                                        lineHeight: `${ attributes.numberSize }px`,
                                                        color: attributes.stepNumberColor,
                                                } }>
                                                    { `0${ index + 1 }` }
                                                </span>
                                            </div>
                                            <div className="step-content">
                                                { item.title && <RichText.Content
                                                    tagName="h3"
                                                    value={ item.title }
                                                    style={ getTypography( attributes, 0 ) }
                                                /> }

                                                { item.description && <RichText.Content
                                                    tagName="p"
                                                    value={ item.description }
                                                    style={ getTypography( attributes, 1 ) }
                                                /> }
                                            </div>
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
