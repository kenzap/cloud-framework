import './style.scss';
import './editor.scss';
import './script.js';

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
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Cups of coffee', 'kenzap-steps' ),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Working hours', 'kenzap-steps' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Active work hours', 'kenzap-steps' ),
        key: new Date().getTime() + 3,
    }, {
        title: __( 'Perfect design', 'kenzap-steps' ),
        key: new Date().getTime() + 4,
    }, {
        title: __( 'Our services', 'kenzap-steps' ),
        key: new Date().getTime() + 5,
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
        'margin-bottom': 0,
        'color': '#23282d',
    }
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

    if(attributes.numberColor){ vars['--numberColor'] = attributes.numberColor; }
    if(attributes.numberHoverColor){ vars['--numberHoverColor'] = attributes.numberHoverColor; }
    if(attributes.arrowColor){ vars['--arrowColor'] = attributes.arrowColor; }
    if(attributes.roundCircleHoverColor){ vars['--roundCircleHoverColor'] = attributes.roundCircleHoverColor; }

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
registerBlockType( 'kenzap/cta-35', {
    title: __( 'Numbered Steps', 'kenzap-steps' ),
    icon: 'networking',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 35', 'kenzap-steps' ),
        __( 'Steps', 'kenzap-steps' ),
        __( 'Step', 'kenzap-steps' ),
    ],
    supports: {
        align: [ 'full', 'wide' ],
    },
    anchor: true,
    html: true,
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        titleSize: {
            type: 'number',
            default: 100,
        },

        numberSize: {
            type: 'number',
            default: 74,
        },

        arrowColor: {
            type: 'string',
            //default: '#007cba',
        },

        numberColor: {
            type: 'string',
            //default: '#000',
        },

        numberHoverColor: {
            type: 'string',
            //default: '#fff',
        },

        roundCircleHoverColor: {
            type: 'string',
            //default: '#007cba',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-35/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                arrowColor: '#007cba',
                numberColor: '#23282d',
                numberHoverColor: '#fff',
                roundCircleHoverColor: '#007cba',
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
                    className={ `kenzap-steps-2 block-${ attributes.blockUniqId }` }
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
                                        className="kenzap-col-5th"
                                    >
                                        <div className="step-box">
                                            <div className="step-count" style={ { width: `${ attributes.titleSize }%` } }>
                                                <span style={ { fontSize: `${ attributes.numberSize }px` } }>{ index + 1 }</span>
                                            </div>
                                            <div className="step-content">
                                                <RichText.Content
                                                    tagName="h3"
                                                    value={ item.title }
                                                    style={ getTypography( attributes, 0 ) }
                                                />
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
